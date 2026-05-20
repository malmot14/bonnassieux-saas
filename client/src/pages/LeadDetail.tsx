import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Trash2, Save, Calendar, MessageSquare, Plus, MapPin, Clock, CheckCircle2, XCircle, AlertCircle, BarChart2, Globe } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { useLocation, useSearch } from "wouter";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface LeadDetailPageProps {
  params: { id: string };
}

export default function LeadDetail({ params }: LeadDetailPageProps) {
  const [, setLocation] = useLocation();
  const search = useSearch();
  const leadId = parseInt(params.id);
  const { data: lead, isLoading } = trpc.leads.get.useQuery({ id: leadId });
  const updateMutation = trpc.leads.update.useMutation();
  const deleteMutation = trpc.leads.delete.useMutation();
  const interactionsRef = useRef<HTMLDivElement>(null);

  const { data: interactions = [], refetch: refetchInteractions } = trpc.interactions.list.useQuery({ leadId });
  const createInteractionMutation = trpc.interactions.create.useMutation();
  const deleteInteractionMutation = trpc.interactions.delete.useMutation({
    onSuccess: () => { refetchInteractions(); toast.success("Interaction supprimée"); },
    onError: () => toast.error("Erreur lors de la suppression"),
  });

  const { data: appointments = [], refetch: refetchAppointments } = trpc.appointments.list.useQuery({ leadId });
  const updateAppointmentMutation = trpc.appointments.update.useMutation({
    onSuccess: () => { refetchAppointments(); toast.success("RDV mis à jour"); },
    onError: () => toast.error("Erreur lors de la mise à jour"),
  });
  const deleteAppointmentMutation = trpc.appointments.delete.useMutation({
    onSuccess: () => { refetchAppointments(); toast.success("RDV supprimé"); },
    onError: () => toast.error("Erreur lors de la suppression"),
  });

  const { data: diagnosticsList = [], refetch: refetchDiagnostics } = trpc.diagnostics.list.useQuery({ leadId });
  const createDiagnosticMutation = trpc.diagnostics.create.useMutation({
    onSuccess: () => { refetchDiagnostics(); toast.success("Diagnostic enregistré"); setDiagForm(EMPTY_DIAG); },
    onError: () => toast.error("Erreur lors de l'enregistrement"),
  });

  const EMPTY_DIAG = { website: "", seoScore: 50, mobileScore: 50, socialMediaScore: 50, speedScore: 50, diagnosis: "", recommendations: "" };
  const [diagForm, setDiagForm] = useState(EMPTY_DIAG);
  const [showDiagForm, setShowDiagForm] = useState(false);

  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [newInteraction, setNewInteraction] = useState({
    type: "appel" as "appel" | "visite" | "email" | "message" | "autre",
    notes: "",
    outcome: "neutre" as "positif" | "neutre" | "négatif",
    nextAction: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    sector: "artisans",
    address: "",
    phone: "",
    email: "",
    website: "",
    problemDescription: "",
    salesPitch: "",
    status: "À visiter",
    priority: "moyenne",
  });

  useEffect(() => {
    if (search.includes("section=interactions") && interactionsRef.current) {
      setTimeout(() => interactionsRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, [search, isLoading]);

  useEffect(() => {
    if (lead) {
      setFormData({
        name: lead.name || "",
        sector: lead.sector || "artisans",
        address: lead.address || "",
        phone: lead.phone || "",
        email: lead.email || "",
        website: lead.website || "",
        problemDescription: lead.problemDescription || "",
        salesPitch: lead.salesPitch || "",
        status: lead.status || "À visiter",
        priority: lead.priority || "moyenne",
      });
    }
  }, [lead]);

  const handleSave = async () => {
    try {
      await updateMutation.mutateAsync({
        id: leadId,
        ...formData,
      });
      toast.success("Lead mis à jour avec succès");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const handleAddInteraction = async () => {
    if (!newInteraction.notes.trim()) {
      toast.error("Ajoutez une note à l'interaction");
      return;
    }
    try {
      await createInteractionMutation.mutateAsync({ ...newInteraction, leadId });
      await refetchInteractions();
      setNewInteraction({ type: "appel", notes: "", outcome: "neutre", nextAction: "" });
      toast.success("Interaction enregistrée");
    } catch {
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce prospect ?")) {
      try {
        await deleteMutation.mutateAsync({ id: leadId });
        toast.success("Lead supprimé");
        setLocation("/leads");
      } catch (error) {
        toast.error("Erreur lors de la suppression");
      }
    }
  };

  if (isLoading) {
    return <div className="p-8">Chargement...</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setLocation("/leads")}
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{formData.name}</h1>
              <p className="text-slate-600 capitalize">{formData.sector}</p>
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
            className="flex items-center gap-2"
          >
            <Trash2 size={18} />
            Supprimer
          </Button>
        </div>

        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle>Informations Générales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nom de l'entreprise
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Secteur
                </label>
                <Select
                  value={formData.sector}
                  onValueChange={(value) => setFormData({ ...formData, sector: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="artisans">Artisans</SelectItem>
                    <SelectItem value="restaurants">Restaurants</SelectItem>
                    <SelectItem value="sport/bien-être">Sport/Bien-être</SelectItem>
                    <SelectItem value="BTP">BTP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Adresse
                </label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Téléphone
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Site Web
                </label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Statut
                </label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="À visiter">À visiter</SelectItem>
                    <SelectItem value="En cours">En cours</SelectItem>
                    <SelectItem value="Signé">Signé</SelectItem>
                    <SelectItem value="Perdu">Perdu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Priorité
                </label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haute">Haute</SelectItem>
                    <SelectItem value="moyenne">Moyenne</SelectItem>
                    <SelectItem value="basse">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Problématique Identifiée
              </label>
              <Textarea
                value={formData.problemDescription}
                onChange={(e) =>
                  setFormData({ ...formData, problemDescription: e.target.value })
                }
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Pitch de Vente
              </label>
              <Textarea
                value={formData.salesPitch}
                onChange={(e) => setFormData({ ...formData, salesPitch: e.target.value })}
                rows={4}
              />
            </div>

            <div className="flex gap-4 justify-end pt-4">
              <Button
                variant="outline"
                onClick={() => setLocation("/leads")}
              >
                Annuler
              </Button>
              <Button
                onClick={() => setShowAppointmentForm(!showAppointmentForm)}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              >
                <Calendar size={18} />
                {showAppointmentForm ? "Fermer" : "Prendre RDV"}
              </Button>
              <Button
                onClick={handleSave}
                disabled={updateMutation.isPending}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                <Save size={18} />
                {updateMutation.isPending ? "Enregistrement..." : "Enregistrer"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {showAppointmentForm && (
          <Card className="border-0 shadow-md mb-6">
            <CardContent className="pt-6">
              <AppointmentForm
                leadId={leadId}
                leadName={formData.name}
                onClose={() => { setShowAppointmentForm(false); refetchAppointments(); }}
              />
            </CardContent>
          </Card>
        )}

        {/* Rendez-vous */}
        {appointments.length > 0 && (
          <Card className="border-0 shadow-md mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar size={18} />
                Rendez-vous
                <span className="ml-auto text-xs font-normal text-slate-400">{appointments.length} RDV</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[...appointments]
                .sort((a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime())
                .map((appt) => {
                  const statusConfig: Record<string, { icon: React.ReactNode; cls: string }> = {
                    planifié:  { icon: <Clock size={12} />,         cls: "bg-blue-100 text-blue-700" },
                    confirmé:  { icon: <AlertCircle size={12} />,   cls: "bg-amber-100 text-amber-700" },
                    complété:  { icon: <CheckCircle2 size={12} />,  cls: "bg-green-100 text-green-700" },
                    annulé:    { icon: <XCircle size={12} />,       cls: "bg-red-100 text-red-600" },
                  };
                  const cfg = statusConfig[appt.status] ?? statusConfig["planifié"];
                  const dateStr = new Date(appt.scheduledDate).toLocaleDateString("fr-FR", {
                    weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                  });
                  return (
                    <div key={appt.id} className="flex items-start gap-3 p-3 border border-slate-100 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-slate-800">{dateStr}</span>
                          {appt.duration && (
                            <span className="text-xs text-slate-400">{appt.duration} min</span>
                          )}
                        </div>
                        {appt.location && (
                          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                            <MapPin size={11} />
                            {appt.location}
                          </div>
                        )}
                        {appt.notes && <p className="text-xs text-slate-500">{appt.notes}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Select
                          value={appt.status}
                          onValueChange={(v) => updateAppointmentMutation.mutate({ id: appt.id, status: v as any })}
                        >
                          <SelectTrigger className="h-7 text-xs w-28 border-0 p-0">
                            <Badge className={`gap-1 text-xs font-medium ${cfg.cls}`}>
                              {cfg.icon}
                              {appt.status}
                            </Badge>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="planifié">Planifié</SelectItem>
                            <SelectItem value="confirmé">Confirmé</SelectItem>
                            <SelectItem value="complété">Complété</SelectItem>
                            <SelectItem value="annulé">Annulé</SelectItem>
                          </SelectContent>
                        </Select>
                        <button
                          onClick={() => window.confirm("Supprimer ce RDV ?") && deleteAppointmentMutation.mutate({ id: appt.id })}
                          className="text-slate-300 hover:text-red-400 transition-colors"
                        >
                          <XCircle size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </CardContent>
          </Card>
        )}

        {/* Diagnostic Web */}
        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart2 size={18} />
              Diagnostic Web
              <button
                onClick={() => setShowDiagForm(v => !v)}
                className="ml-auto flex items-center gap-1 text-xs font-normal text-slate-500 hover:text-slate-800 transition-colors"
              >
                <Plus size={14} />
                Nouveau diagnostic
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {showDiagForm && (
              <div className="border border-slate-200 rounded-xl p-4 space-y-4 bg-slate-50">
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">URL du site analysé</label>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-slate-400 shrink-0" />
                    <Input
                      placeholder="https://..."
                      value={diagForm.website}
                      onChange={e => setDiagForm(f => ({ ...f, website: e.target.value }))}
                      className="h-8 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {([
                    { key: "seoScore",         label: "SEO" },
                    { key: "mobileScore",      label: "Mobile" },
                    { key: "socialMediaScore", label: "Réseaux sociaux" },
                    { key: "speedScore",       label: "Vitesse" },
                  ] as const).map(({ key, label }) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <label className="text-xs font-medium text-slate-600">{label}</label>
                        <span className={`text-xs font-bold tabular-nums ${
                          diagForm[key] >= 70 ? "text-green-600" : diagForm[key] >= 40 ? "text-amber-600" : "text-red-600"
                        }`}>{diagForm[key]}/100</span>
                      </div>
                      <input
                        type="range" min={0} max={100}
                        value={diagForm[key]}
                        onChange={e => setDiagForm(f => ({ ...f, [key]: Number(e.target.value) }))}
                        className="w-full h-1.5 accent-slate-700"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">Diagnostic</label>
                  <Textarea
                    placeholder="Points forts, points faibles identifiés…"
                    value={diagForm.diagnosis}
                    onChange={e => setDiagForm(f => ({ ...f, diagnosis: e.target.value }))}
                    rows={2}
                    className="text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">Recommandations</label>
                  <Textarea
                    placeholder="Ce qu'on va améliorer…"
                    value={diagForm.recommendations}
                    onChange={e => setDiagForm(f => ({ ...f, recommendations: e.target.value }))}
                    rows={2}
                    className="text-sm"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="sm" onClick={() => setShowDiagForm(false)}>Annuler</Button>
                  <Button
                    size="sm"
                    disabled={createDiagnosticMutation.isPending}
                    onClick={() => createDiagnosticMutation.mutate({ leadId, ...diagForm })}
                  >
                    {createDiagnosticMutation.isPending ? "Enregistrement…" : "Enregistrer"}
                  </Button>
                </div>
              </div>
            )}

            {diagnosticsList.length === 0 && !showDiagForm ? (
              <p className="text-sm text-slate-400 text-center py-4">Aucun diagnostic effectué</p>
            ) : (
              <div className="space-y-3">
                {diagnosticsList.map((d) => {
                  const scores = [
                    { label: "SEO",    val: d.seoScore },
                    { label: "Mobile", val: d.mobileScore },
                    { label: "Social", val: d.socialMediaScore },
                    { label: "Speed",  val: d.speedScore },
                  ];
                  const avg = Math.round(scores.filter(s => s.val != null).reduce((a, s) => a + (s.val ?? 0), 0) / scores.filter(s => s.val != null).length);
                  return (
                    <div key={d.id} className="border border-slate-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        {d.website && (
                          <a href={d.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline truncate flex items-center gap-1">
                            <Globe size={11} />{d.website}
                          </a>
                        )}
                        <div className="flex items-center gap-2 ml-auto shrink-0">
                          <span className={`text-sm font-bold tabular-nums ${avg >= 70 ? "text-green-600" : avg >= 40 ? "text-amber-600" : "text-red-600"}`}>
                            {avg}/100
                          </span>
                          <span className="text-xs text-slate-400">
                            {new Date(d.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        {scores.map(s => (
                          <div key={s.label} className="text-center">
                            <div className={`text-lg font-bold tabular-nums ${
                              (s.val ?? 0) >= 70 ? "text-green-600" : (s.val ?? 0) >= 40 ? "text-amber-600" : "text-red-600"
                            }`}>{s.val ?? "—"}</div>
                            <div className="text-[10px] text-slate-400">{s.label}</div>
                          </div>
                        ))}
                      </div>
                      {d.diagnosis && <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Diagnostic :</span> {d.diagnosis}</p>}
                      {d.recommendations && <p className="text-xs text-slate-500"><span className="font-medium">Reco :</span> {d.recommendations}</p>}
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Interactions */}
        <Card className="border-0 shadow-md" ref={interactionsRef}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare size={20} />
              Interactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Formulaire nouvelle interaction */}
            <div className="bg-slate-50 rounded-lg p-4 space-y-3">
              <p className="text-sm font-semibold text-slate-700">Nouvelle interaction</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Type</label>
                  <Select value={newInteraction.type} onValueChange={(v) => setNewInteraction({ ...newInteraction, type: v as any })}>
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appel">📞 Appel</SelectItem>
                      <SelectItem value="visite">🚗 Visite</SelectItem>
                      <SelectItem value="email">✉️ Email</SelectItem>
                      <SelectItem value="message">💬 Message</SelectItem>
                      <SelectItem value="autre">📝 Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Résultat</label>
                  <Select value={newInteraction.outcome} onValueChange={(v) => setNewInteraction({ ...newInteraction, outcome: v as any })}>
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="positif">✅ Positif</SelectItem>
                      <SelectItem value="neutre">➖ Neutre</SelectItem>
                      <SelectItem value="négatif">❌ Négatif</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Notes</label>
                <Textarea
                  placeholder="Décrivez l'échange..."
                  value={newInteraction.notes}
                  onChange={(e) => setNewInteraction({ ...newInteraction, notes: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Prochaine action</label>
                <Input
                  placeholder="Ex: Rappeler dans 2 jours..."
                  value={newInteraction.nextAction}
                  onChange={(e) => setNewInteraction({ ...newInteraction, nextAction: e.target.value })}
                />
              </div>
              <Button
                onClick={handleAddInteraction}
                disabled={createInteractionMutation.isPending}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                <Plus size={16} />
                {createInteractionMutation.isPending ? "Enregistrement..." : "Ajouter l'interaction"}
              </Button>
            </div>

            {/* Historique */}
            {interactions.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-4">Aucune interaction enregistrée</p>
            ) : (
              <div className="space-y-3">
                {[...interactions].reverse().map((interaction) => {
                  const typeIcons: Record<string, string> = { appel: "📞", visite: "🚗", email: "✉️", message: "💬", autre: "📝" };
                  const outcomeColors: Record<string, string> = { positif: "bg-green-100 text-green-700", neutre: "bg-slate-100 text-slate-600", "négatif": "bg-red-100 text-red-700" };
                  return (
                    <div key={interaction.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">
                          {typeIcons[interaction.type] || "📝"} {interaction.type.charAt(0).toUpperCase() + interaction.type.slice(1)}
                        </span>
                        <div className="flex items-center gap-2">
                          {interaction.outcome && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${outcomeColors[interaction.outcome] || ""}`}>
                              {interaction.outcome}
                            </span>
                          )}
                          <span className="text-xs text-slate-400">
                            {new Date(interaction.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                          </span>
                          <button
                            onClick={() => window.confirm("Supprimer cette interaction ?") && deleteInteractionMutation.mutate({ id: interaction.id })}
                            className="text-slate-300 hover:text-red-400 transition-colors ml-1"
                          >
                            <XCircle size={14} />
                          </button>
                        </div>
                      </div>
                      {interaction.notes && <p className="text-sm text-slate-600">{interaction.notes}</p>}
                      {interaction.nextAction && (
                        <p className="text-xs text-blue-600 mt-2 font-medium">→ {interaction.nextAction}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
