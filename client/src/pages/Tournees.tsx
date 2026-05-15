import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Phone, Mail, Navigation, X, Plus, Minus, Globe,
  Flame, CheckCircle, Clock, TrendingDown, MessageSquare,
  Calendar, ChevronDown, ChevronUp, Shuffle, Save,
} from "lucide-react";
import { MapView } from "@/components/Map";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

// ─── Types ────────────────────────────────────────────────────────────────────

type Lead = {
  id: number;
  name: string;
  sector: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  status: string;
  priority: string;
  latitude: string | null;
  longitude: string | null;
};

// ─── Constantes ───────────────────────────────────────────────────────────────

const STATUS_COLOR: Record<string, string> = {
  "À visiter": "#3b82f6",
  "En cours":  "#f97316",
  "Signé":     "#22c55e",
  "Perdu":     "#ef4444",
};
const STATUS_BADGE: Record<string, string> = {
  "À visiter": "bg-blue-100 text-blue-800",
  "En cours":  "bg-orange-100 text-orange-800",
  "Signé":     "bg-green-100 text-green-800",
  "Perdu":     "bg-red-100 text-red-800",
};
const PRIORITY_RANK: Record<string, number> = { haute: 0, moyenne: 1, basse: 2 };
const PRIORITY_BADGE: Record<string, string> = {
  haute:   "bg-red-100 text-red-700",
  moyenne: "bg-yellow-100 text-yellow-700",
  basse:   "bg-gray-100 text-gray-600",
};
const INTERACTION_TYPES = ["appel", "visite", "email", "message", "autre"] as const;
const INTERACTION_OUTCOMES = ["positif", "neutre", "négatif"] as const;

function markerColor(status: string) {
  return STATUS_COLOR[status] ?? "#6b7280";
}

// ─── Algorithme d'optimisation d'itinéraire (plus proche voisin) ─────────────

function optimizeRoute(leads: Lead[]): Lead[] {
  if (leads.length <= 2) return leads;
  const remaining = [...leads];
  const result: Lead[] = [remaining.splice(0, 1)[0]];
  while (remaining.length > 0) {
    const last = result[result.length - 1];
    const lastLat = parseFloat(last.latitude!);
    const lastLng = parseFloat(last.longitude!);
    let nearestIdx = 0;
    let minDist = Infinity;
    remaining.forEach((l, i) => {
      const d = Math.hypot(
        parseFloat(l.latitude!) - lastLat,
        parseFloat(l.longitude!) - lastLng,
      );
      if (d < minDist) { minDist = d; nearestIdx = i; }
    });
    result.push(remaining.splice(nearestIdx, 1)[0]);
  }
  return result;
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function Tournees() {
  // ── Données
  const utils = trpc.useUtils();
  const { data: allLeads = [], isLoading } = trpc.leads.list.useQuery();
  const updateLead = trpc.leads.update.useMutation({
    onSuccess: () => { utils.leads.list.invalidate(); toast.success("Statut mis à jour"); },
    onError: () => toast.error("Erreur lors de la mise à jour"),
  });
  const createInteraction = trpc.interactions.create.useMutation({
    onSuccess: () => { toast.success("Note enregistrée"); setShowNoteForm(false); setNoteText(""); },
    onError: () => toast.error("Erreur lors de l'enregistrement"),
  });
  const createAppointment = trpc.appointments.create.useMutation({
    onSuccess: () => { toast.success("RDV planifié !"); setShowRdvForm(false); setRdvDate(""); setRdvTime(""); setRdvNotes(""); },
    onError: () => toast.error("Erreur lors de la création du RDV"),
  });

  const leadsWithCoords = useMemo(
    () => (allLeads as Lead[]).filter(l => l.latitude && l.longitude),
    [allLeads],
  );

  // Leads chauds = priorité haute + statut actif
  const hotLeads = useMemo(
    () => (allLeads as Lead[]).filter(l => l.priority === "haute" && (l.status === "À visiter" || l.status === "En cours")),
    [allLeads],
  );

  // ── Filtres
  const [searchTerm, setSearchTerm]     = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [showHotOnly, setShowHotOnly]   = useState(false);

  // ── Sélection & tournée
  const [activeLeadId, setActiveLeadId] = useState<number | null>(null);
  const [tourOrder, setTourOrder]       = useState<Lead[]>([]);
  const [popupLeadId, setPopupLeadId] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);

  // ── Formulaires inline
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [noteType, setNoteType]         = useState<typeof INTERACTION_TYPES[number]>("appel");
  const [noteOutcome, setNoteOutcome]   = useState<typeof INTERACTION_OUTCOMES[number]>("positif");
  const [noteText, setNoteText]         = useState("");
  const [showRdvForm, setShowRdvForm]   = useState(false);
  const [rdvDate, setRdvDate]           = useState("");
  const [rdvTime, setRdvTime]           = useState("");
  const [rdvNotes, setRdvNotes]         = useState("");
  const [pendingStatus, setPendingStatus] = useState<string>("");

  // ── Carte
  const mapRef     = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const [mapReady, setMapReady] = useState(false);

  // ── Données calculées
  const stats = useMemo(() => ({
    aVisiter: (allLeads as Lead[]).filter(l => l.status === "À visiter").length,
    enCours:  (allLeads as Lead[]).filter(l => l.status === "En cours").length,
    signe:    (allLeads as Lead[]).filter(l => l.status === "Signé").length,
    total:    (allLeads as Lead[]).length,
  }), [allLeads]);

  const tourIds = useMemo(() => new Set(tourOrder.map(l => l.id)), [tourOrder]);

  const activeLead = useMemo(
    () => (allLeads as Lead[]).find(l => l.id === activeLeadId) ?? null,
    [allLeads, activeLeadId],
  );

  const filteredLeads = useMemo(() => {
    const src = showHotOnly ? hotLeads : leadsWithCoords;
    return src
      .filter(l => {
        const s = searchTerm.toLowerCase();
        const matchSearch =
          l.name.toLowerCase().includes(s) ||
          (l.address ?? "").toLowerCase().includes(s) ||
          l.sector.toLowerCase().includes(s);
        const matchStatus   = statusFilter   === "all" || l.status   === statusFilter;
        const matchPriority = priorityFilter === "all" || l.priority === priorityFilter;
        return matchSearch && matchStatus && matchPriority;
      })
      .sort((a, b) => {
        const pa = PRIORITY_RANK[a.priority] ?? 1;
        const pb = PRIORITY_RANK[b.priority] ?? 1;
        return pa !== pb ? pa - pb : a.name.localeCompare(b.name);
      });
  }, [leadsWithCoords, hotLeads, showHotOnly, searchTerm, statusFilter, priorityFilter]);

  // Sync pendingStatus quand le lead actif change
  useEffect(() => {
    if (activeLead) setPendingStatus(activeLead.status);
  }, [activeLead?.id]);

  // ── Fonctions utilitaires

  function focusLead(lead: Lead) {
    setActiveLeadId(lead.id);
    setShowNoteForm(false);
    setShowRdvForm(false);
    if (mapRef.current && lead.latitude && lead.longitude) {
      mapRef.current.panTo({ lat: parseFloat(lead.latitude), lng: parseFloat(lead.longitude) });
      mapRef.current.setZoom(16);
    }
  }

  function toggleTour(lead: Lead) {
    setTourOrder(prev =>
      prev.some(l => l.id === lead.id)
        ? prev.filter(l => l.id !== lead.id)
        : [...prev, lead],
    );
  }

  function handleOptimize() {
    setTourOrder(prev => optimizeRoute(prev));
    toast.success("Itinéraire optimisé !");
  }

  function handleStatusSave() {
    if (!activeLead || pendingStatus === activeLead.status) return;
    updateLead.mutate({ id: activeLead.id, status: pendingStatus });
  }

  function handleSaveNote() {
    if (!activeLead || !noteText.trim()) return;
    createInteraction.mutate({
      leadId: activeLead.id,
      type: noteType,
      outcome: noteOutcome,
      notes: noteText.trim(),
    });
  }

  function handleSaveRdv() {
    if (!activeLead || !rdvDate) return;
    const dateTime = rdvTime ? `${rdvDate}T${rdvTime}` : rdvDate;
    createAppointment.mutate({
      leadId: activeLead.id,
      scheduledDate: new Date(dateTime),
      notes: rdvNotes || undefined,
      status: "planifié",
    });
  }

  function openGoogleMapsRoute() {
    if (tourOrder.length === 0) return;
    const waypoints = tourOrder.map(l => `${l.latitude},${l.longitude}`).join("/");
    window.open(`https://www.google.com/maps/dir/${waypoints}`, "_blank");
  }

  // ── Marqueurs carte
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    markersRef.current.forEach(m => { m.map = null; });
    markersRef.current = [];

    filteredLeads.forEach((lead, index) => {
      const lat = parseFloat(lead.latitude!);
      const lng = parseFloat(lead.longitude!);
      if (isNaN(lat) || isNaN(lng)) return;

      const inTour   = tourIds.has(lead.id);
      const isActive = lead.id === activeLeadId;
      const color    = markerColor(lead.status);
      const isHot    = lead.priority === "haute";

      const pin = document.createElement("div");
      pin.style.cssText = `
        width:${isActive ? 44 : 34}px; height:${isActive ? 44 : 34}px;
        border-radius:50%;
        background:${color};
        display:flex; align-items:center; justify-content:center;
        color:white; font-weight:bold; font-size:12px;
        border:${inTour ? "3px solid white" : isHot ? "2px solid #fbbf24" : "2px solid rgba(255,255,255,0.8)"};
        box-shadow:${isActive
          ? `0 0 0 3px ${color}55, 0 4px 14px rgba(0,0,0,0.3)`
          : isHot ? "0 0 0 2px #fbbf2488, 0 2px 8px rgba(0,0,0,0.25)"
          : "0 2px 6px rgba(0,0,0,0.2)"};
        cursor:pointer; transition:transform 0.15s ease; user-select:none;
      `;
      pin.textContent = inTour ? "✓" : isHot ? "🔥" : String(index + 1);
      pin.onmouseenter = () => { pin.style.transform = "scale(1.18)"; };
      pin.onmouseleave = () => { pin.style.transform = "scale(1)"; };

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: { lat, lng },
        title: lead.name,
        content: pin,
      });

      markersRef.current.push(marker);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredLeads, mapReady, activeLeadId, tourIds]);

  // ─── Rendu ────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-80px)]">

      {/* ── En-tête + KPIs ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Tournées & Prospection</h1>
          <p className="text-sm text-gray-500">Cliquez un marqueur pour agir, construisez votre itinéraire en un clic.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <KpiChip icon={<Clock size={14}/>}         label="À visiter" value={stats.aVisiter} color="blue"   />
          <KpiChip icon={<TrendingDown size={14}/>}  label="En cours"  value={stats.enCours}  color="orange" />
          <KpiChip icon={<CheckCircle size={14}/>}   label="Signés"    value={stats.signe}    color="green"  />
          <KpiChip icon={<Flame size={14}/>}         label="Chauds"    value={hotLeads.length} color="red"   />
        </div>
      </div>

      {/* ── Grille carte + sidebar ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 min-h-0">

        {/* Carte */}
        <div className="lg:col-span-2 min-h-0">
          <Card className="overflow-hidden h-full p-0">
            <MapView
              className="w-full h-full"
              initialCenter={{ lat: 49.1829, lng: -0.3623 }}
              initialZoom={13}
              onMapReady={map => { mapRef.current = map; setMapReady(true); }}
            />
          </Card>

          {/* Mini Card Popup */}
          {popupLeadId && popupPosition && (() => {
            const lead = filteredLeads.find(l => l.id === popupLeadId);
            return lead ? (
              <div
                className="fixed bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                style={{
                  left: `${popupPosition.x}px`,
                  top: `${popupPosition.y}px`,
                  transform: "translateX(-50%)",
                  width: "250px",
                  maxWidth: "90vw",
                }}
              >
                <div className="p-3">
                  <button
                    onClick={() => setPopupLeadId(null)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                  <h3 className="font-bold text-sm mb-1">{lead.name}</h3>
                  <p className="text-xs text-gray-600 mb-1">{lead.sector}</p>
                  <p className="text-xs mb-2"><strong>Status:</strong> {lead.status}</p>
                  {lead.address && <p className="text-xs text-gray-600 mb-2">{lead.address}</p>}
                  <button
                    onClick={() => {
                      focusLead(lead);
                      setPopupLeadId(null);
                    }}
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold py-1.5 rounded transition-colors"
                  >
                    Voir détails →
                  </button>
                </div>
              </div>
            ) : null;
          })()}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-3 min-h-0 overflow-y-auto">

          {/* Filtres */}
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Rechercher un lead…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="flex-1 border rounded-md px-2 py-1.5 text-sm bg-white"
              >
                <option value="all">Tous statuts</option>
                <option value="À visiter">À visiter</option>
                <option value="En cours">En cours</option>
                <option value="Signé">Signé</option>
                <option value="Perdu">Perdu</option>
              </select>
              <select
                value={priorityFilter}
                onChange={e => setPriorityFilter(e.target.value)}
                className="flex-1 border rounded-md px-2 py-1.5 text-sm bg-white"
              >
                <option value="all">Toute priorité</option>
                <option value="haute">🔥 Haute</option>
                <option value="moyenne">Moyenne</option>
                <option value="basse">Basse</option>
              </select>
            </div>
            <button
              onClick={() => setShowHotOnly(v => !v)}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                showHotOnly
                  ? "bg-red-50 border-red-300 text-red-700"
                  : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              🔥 Leads chauds uniquement ({hotLeads.length})
            </button>
          </div>

          {/* ── Panneau de détail du lead actif ── */}
          {activeLead && (
            <Card className="p-4 border-2 border-blue-300 bg-blue-50/30 shrink-0 space-y-3">

              {/* Titre */}
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0 mr-2">
                  <h3 className="font-bold text-base truncate">{activeLead.name}</h3>
                  <p className="text-xs text-gray-500">{activeLead.sector}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Badge className={`text-xs ${PRIORITY_BADGE[activeLead.priority] ?? ""}`}>
                    {activeLead.priority}
                  </Badge>
                  <button onClick={() => setActiveLeadId(null)} className="text-gray-400 hover:text-gray-700">
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Coordonnées */}
              <div className="space-y-1.5 text-sm">
                {activeLead.address && (
                  <div className="flex items-start gap-1.5 text-gray-600">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-gray-400" />
                    <span>{activeLead.address}</span>
                  </div>
                )}
                {activeLead.phone && (
                  <div className="flex items-center gap-1.5">
                    <Phone size={13} className="shrink-0 text-gray-400" />
                    <a href={`tel:${activeLead.phone}`} className="text-blue-600 hover:underline">{activeLead.phone}</a>
                  </div>
                )}
                {activeLead.email && (
                  <div className="flex items-center gap-1.5">
                    <Mail size={13} className="shrink-0 text-gray-400" />
                    <a href={`mailto:${activeLead.email}`} className="text-blue-600 hover:underline truncate">{activeLead.email}</a>
                  </div>
                )}
                {activeLead.website && (
                  <div className="flex items-center gap-1.5">
                    <Globe size={13} className="shrink-0 text-gray-400" />
                    <a href={activeLead.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate text-xs">{activeLead.website}</a>
                  </div>
                )}
              </div>

              {/* Actions rapides */}
              <div className="flex gap-2">
                {activeLead.phone && (
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-8" onClick={() => window.open(`tel:${activeLead.phone}`)}>
                    <Phone size={12} className="mr-1" /> Appeler
                  </Button>
                )}
                {activeLead.email && (
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-8" onClick={() => window.open(`mailto:${activeLead.email}`)}>
                    <Mail size={12} className="mr-1" /> Email
                  </Button>
                )}
              </div>

              {/* Changement de statut */}
              <div className="flex gap-2 items-center">
                <select
                  value={pendingStatus}
                  onChange={e => setPendingStatus(e.target.value)}
                  className="flex-1 border rounded-md px-2 py-1.5 text-sm bg-white"
                >
                  <option value="À visiter">À visiter</option>
                  <option value="En cours">En cours</option>
                  <option value="Signé">Signé</option>
                  <option value="Perdu">Perdu</option>
                </select>
                <Button
                  size="sm"
                  className="h-8 px-3 text-xs"
                  disabled={pendingStatus === activeLead.status || updateLead.isPending}
                  onClick={handleStatusSave}
                >
                  <Save size={12} className="mr-1" />
                  {updateLead.isPending ? "…" : "Sauver"}
                </Button>
              </div>

              {/* Ajouter à la tournée */}
              {tourIds.has(activeLead.id) ? (
                <Button size="sm" variant="destructive" className="w-full text-xs h-8" onClick={() => toggleTour(activeLead)}>
                  <Minus size={13} className="mr-1" /> Retirer de la tournée
                </Button>
              ) : (
                <Button size="sm" className="w-full text-xs h-8 bg-blue-600 hover:bg-blue-700" onClick={() => toggleTour(activeLead)}>
                  <Plus size={13} className="mr-1" /> Ajouter à la tournée
                </Button>
              )}

              {/* ── Note rapide ── */}
              <div className="border-t pt-2">
                <button
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 w-full"
                  onClick={() => { setShowNoteForm(v => !v); setShowRdvForm(false); }}
                >
                  <MessageSquare size={13} />
                  Ajouter une note / interaction
                  {showNoteForm ? <ChevronUp size={12} className="ml-auto" /> : <ChevronDown size={12} className="ml-auto" />}
                </button>
                {showNoteForm && (
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-2">
                      <select
                        value={noteType}
                        onChange={e => setNoteType(e.target.value as typeof noteType)}
                        className="flex-1 border rounded-md px-2 py-1.5 text-xs bg-white"
                      >
                        {INTERACTION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <select
                        value={noteOutcome}
                        onChange={e => setNoteOutcome(e.target.value as typeof noteOutcome)}
                        className="flex-1 border rounded-md px-2 py-1.5 text-xs bg-white"
                      >
                        {INTERACTION_OUTCOMES.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <textarea
                      className="w-full border rounded-md px-2 py-1.5 text-xs resize-none"
                      rows={3}
                      placeholder="Notes sur l'interaction…"
                      value={noteText}
                      onChange={e => setNoteText(e.target.value)}
                    />
                    <Button
                      size="sm"
                      className="w-full text-xs h-7"
                      disabled={!noteText.trim() || createInteraction.isPending}
                      onClick={handleSaveNote}
                    >
                      {createInteraction.isPending ? "Enregistrement…" : "Enregistrer la note"}
                    </Button>
                  </div>
                )}
              </div>

              {/* ── Planifier un RDV ── */}
              <div className="border-t pt-2">
                <button
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 w-full"
                  onClick={() => { setShowRdvForm(v => !v); setShowNoteForm(false); }}
                >
                  <Calendar size={13} />
                  Planifier un RDV
                  {showRdvForm ? <ChevronUp size={12} className="ml-auto" /> : <ChevronDown size={12} className="ml-auto" />}
                </button>
                {showRdvForm && (
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="date"
                        className="flex-1 border rounded-md px-2 py-1.5 text-xs bg-white"
                        value={rdvDate}
                        onChange={e => setRdvDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                      <input
                        type="time"
                        className="flex-1 border rounded-md px-2 py-1.5 text-xs bg-white"
                        value={rdvTime}
                        onChange={e => setRdvTime(e.target.value)}
                      />
                    </div>
                    <textarea
                      className="w-full border rounded-md px-2 py-1.5 text-xs resize-none"
                      rows={2}
                      placeholder="Objet du RDV…"
                      value={rdvNotes}
                      onChange={e => setRdvNotes(e.target.value)}
                    />
                    <Button
                      size="sm"
                      className="w-full text-xs h-7 bg-green-600 hover:bg-green-700"
                      disabled={!rdvDate || createAppointment.isPending}
                      onClick={handleSaveRdv}
                    >
                      {createAppointment.isPending ? "Enregistrement…" : "Confirmer le RDV"}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* ── Tournée en cours ── */}
          {tourOrder.length > 0 && (
            <Card className="p-3 shrink-0 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">
                  Tournée — {tourOrder.length} arrêt{tourOrder.length > 1 ? "s" : ""}
                </span>
                <button onClick={() => setTourOrder([])} className="text-xs text-gray-400 hover:text-red-500 transition-colors">
                  Vider
                </button>
              </div>
              <ol className="space-y-1 mb-3">
                {tourOrder.map((l, i) => (
                  <li
                    key={l.id}
                    className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => focusLead(l)}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: markerColor(l.status) }}
                    >
                      {i + 1}
                    </span>
                    <span className="truncate flex-1 text-xs">{l.name}</span>
                    <button
                      onClick={e => { e.stopPropagation(); toggleTour(l); }}
                      className="text-gray-300 hover:text-red-400 transition-colors shrink-0"
                    >
                      <X size={13} />
                    </button>
                  </li>
                ))}
              </ol>
              <div className="flex gap-2">
                {tourOrder.length >= 3 && (
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-8" onClick={handleOptimize}>
                    <Shuffle size={13} className="mr-1" /> Optimiser
                  </Button>
                )}
                <Button size="sm" className="flex-1 text-xs h-8" onClick={openGoogleMapsRoute}>
                  <Navigation size={13} className="mr-1" /> Lancer
                </Button>
              </div>
            </Card>
          )}

          {/* ── Liste des leads ── */}
          <div className="space-y-1.5 overflow-y-auto flex-1 pb-2">
            {isLoading && <p className="text-sm text-gray-400 text-center py-6">Chargement…</p>}
            {!isLoading && leadsWithCoords.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-6">
                Aucun lead avec coordonnées GPS.<br />
                <span className="text-xs">Ajoutez des coordonnées depuis la page Leads.</span>
              </p>
            )}
            {!isLoading && filteredLeads.length === 0 && leadsWithCoords.length > 0 && (
              <p className="text-sm text-gray-400 text-center py-4">Aucun résultat pour ces filtres.</p>
            )}
            {filteredLeads.map((lead, index) => (
              <Card
                key={lead.id}
                className={`p-2.5 cursor-pointer transition-all hover:shadow-sm ${
                  activeLeadId === lead.id
                    ? "ring-2 ring-blue-400 bg-blue-50"
                    : tourIds.has(lead.id)
                    ? "bg-green-50 border-green-200"
                    : lead.priority === "haute"
                    ? "border-red-200"
                    : ""
                }`}
                onClick={() => {
                  // Show popup instead of opening detail panel directly
                  const markerEl = markersRef.current.find(m => m.position?.lat === parseFloat(lead.latitude!) && m.position?.lng === parseFloat(lead.longitude!));
                  if (markerEl) {
                    const rect = (markerEl as any).element?.getBoundingClientRect();
                    if (rect) {
                      setPopupPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height });
                      setPopupLeadId(lead.id);
                    }
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-content:center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: markerColor(lead.status) }}
                  >
                    {tourIds.has(lead.id) ? "✓" : lead.priority === "haute" ? "🔥" : index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{lead.name}</p>
                    <p className="text-xs text-gray-400 truncate">{lead.sector}</p>
                  </div>
                  <Badge className={`text-xs shrink-0 ${STATUS_BADGE[lead.status] ?? "bg-gray-100 text-gray-700"}`}>
                    {lead.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Composant KPI chip ────────────────────────────────────────────────────────

function KpiChip({
  icon, label, value, color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: "blue" | "orange" | "green" | "red";
}) {
  const colors = {
    blue:   "bg-blue-50   text-blue-700   border-blue-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    green:  "bg-green-50  text-green-700  border-green-200",
    red:    "bg-red-50    text-red-700    border-red-200",
  };
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium ${colors[color]}`}>
      {icon}
      <span className="font-bold">{value}</span>
      <span className="text-xs opacity-80">{label}</span>
    </div>
  );
}
