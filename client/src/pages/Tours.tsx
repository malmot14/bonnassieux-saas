import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, Filter, X, Edit, Check, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { MapView } from "@/components/Map";

interface LeadWithCoordinates {
  id: number;
  name: string;
  sector: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  status: string;
  priority: string;
  problemDescription: string | null;
  salesPitch: string | null;
  latitude: number | null;
  longitude: number | null;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

const statusColors: Record<string, { bg: string; text: string; color: string }> = {
  "À visiter": { bg: "bg-yellow-50", text: "text-yellow-900", color: "#FBBF24" },
  "En cours": { bg: "bg-blue-50", text: "text-blue-900", color: "#3B82F6" },
  "Signé": { bg: "bg-green-50", text: "text-green-900", color: "#10B981" },
  "Perdu": { bg: "bg-red-50", text: "text-red-900", color: "#EF4444" },
};

const priorityLabels: Record<string, string> = {
  haute: "🔴 Haute",
  moyenne: "🟡 Moyenne",
  basse: "🟢 Basse",
};

export default function Tours() {
  const { data: leads, isLoading } = trpc.leads.list.useQuery();
  const updateLeadMutation = trpc.leads.update.useMutation();
  
  const [selectedLead, setSelectedLead] = useState<LeadWithCoordinates | null>(null);
  const [editingLead, setEditingLead] = useState<LeadWithCoordinates | null>(null);
  const [filterSector, setFilterSector] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  // Filtrer les leads
  const filteredLeads = (leads || []).filter((lead) => {
    const matchSector = filterSector === "all" || lead.sector === filterSector;
    const matchStatus = filterStatus === "all" || lead.status === filterStatus;
    const matchSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.address?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    return matchSector && matchStatus && matchSearch;
  });

  // Ajouter des coordonnées par défaut si manquantes (Caen center)
  const leadsWithCoords = filteredLeads.map((lead) => ({
    ...lead,
    latitude: lead.latitude ? Number(lead.latitude) : 49.1833,
    longitude: lead.longitude ? Number(lead.longitude) : -0.3667,
  }));

  // Nettoyer les marqueurs
  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  // Mettre à jour les marqueurs sur la carte
  const updateMarkers = (map: google.maps.Map) => {
    clearMarkers();
    leadsWithCoords.forEach((lead) => {
      const marker = new google.maps.Marker({
        position: { lat: lead.latitude, lng: lead.longitude },
        map: map,
        title: lead.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: statusColors[lead.status]?.color || "#3B82F6",
          fillOpacity: 0.8,
          strokeColor: "#fff",
          strokeWeight: 2,
        },
      });

      marker.addListener("click", () => {
        setSelectedLead(lead);
      });

      markersRef.current.push(marker);
    });
  };

  // Initialiser la carte
  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // Centrer sur Caen
    map.setCenter({ lat: 49.1833, lng: -0.3667 });
    map.setZoom(13);

    // Ajouter les marqueurs initiaux
    updateMarkers(map);
  };

  // Synchroniser les marqueurs quand les filtres changent
  useEffect(() => {
    if (mapRef.current) {
      updateMarkers(mapRef.current);
    }
  }, [filterSector, filterStatus, searchTerm, leadsWithCoords]);

  const handleUpdateStatus = async (newStatus: string) => {
    if (!selectedLead) return;

    try {
      await updateLeadMutation.mutateAsync({
        id: selectedLead.id,
        status: newStatus,
      });
      setSelectedLead({ ...selectedLead, status: newStatus });
      setEditingLead(null);
      toast.success(`Statut mis à jour : ${newStatus}`);
    } catch (error) {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const handleSaveEdit = async () => {
    if (!editingLead) return;

    try {
      await updateLeadMutation.mutateAsync({
        id: editingLead.id,
        name: editingLead.name,
        phone: editingLead.phone,
        email: editingLead.email,
        problemDescription: editingLead.problemDescription,
        salesPitch: editingLead.salesPitch,
        priority: editingLead.priority,
      });
      setSelectedLead(editingLead);
      setEditingLead(null);
      toast.success("Fiche mise à jour avec succès");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const sectors = Array.from(new Set((leads || []).map((l) => l.sector)));
  const statuses = ["À visiter", "En cours", "Signé", "Perdu"];

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Planification des Tournées</h1>
          <p className="text-slate-600">Visualisez et gérez vos prospects directement sur la carte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CARTE */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin size={24} className="text-blue-600" />
                  Carte Interactive - Caen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MapView onMapReady={handleMapReady} className="h-[600px]" />
              </CardContent>
            </Card>
          </div>

          {/* PANNEAU LATÉRAL */}
          <div className="space-y-4">
            {/* FILTRES */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Filter size={18} />
                  Filtres
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Recherche</label>
                  <Input
                    placeholder="Nom ou adresse..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Secteur</label>
                  <select
                    value={filterSector}
                    onChange={(e) => setFilterSector(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                  >
                    <option value="all">Tous les secteurs</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Statut</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                  >
                    <option value="all">Tous les statuts</option>
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-xs text-slate-500 pt-2">
                  {filteredLeads.length} prospect{filteredLeads.length > 1 ? "s" : ""} trouvé{filteredLeads.length > 1 ? "s" : ""}
                </div>
              </CardContent>
            </Card>

            {/* FICHE LEAD SÉLECTIONNÉE */}
            {selectedLead && (
              <Card className={`border-0 shadow-md ${statusColors[selectedLead.status]?.bg}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">{selectedLead.name}</CardTitle>
                      <p className="text-xs text-slate-600 mt-1">{selectedLead.address}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedLead(null);
                        setEditingLead(null);
                      }}
                    >
                      <X size={18} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* TUNNEL DE VENTE */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-2 block">Statut</label>
                    <div className="grid grid-cols-2 gap-2">
                      {statuses.map((status) => (
                        <Button
                          key={status}
                          variant={selectedLead.status === status ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleUpdateStatus(status)}
                          className="text-xs"
                        >
                          {status}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* PRIORITÉ */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Priorité</label>
                    <p className="text-sm font-medium mt-1">{priorityLabels[selectedLead.priority] || selectedLead.priority}</p>
                  </div>

                  {/* CONTACT */}
                  <div className="border-t pt-3 space-y-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Téléphone</label>
                      <p className="text-sm text-slate-600">{selectedLead.phone || "N/A"}</p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Email</label>
                      <p className="text-sm text-slate-600">{selectedLead.email || "N/A"}</p>
                    </div>
                  </div>

                  {/* PROBLÉMATIQUE */}
                  <div className="border-t pt-3">
                    <label className="text-xs font-semibold text-slate-700">Problématique</label>
                    <p className="text-sm text-slate-600 mt-1">{selectedLead.problemDescription || "N/A"}</p>
                  </div>

                  {/* PITCH DE VENTE */}
                  <div className="border-t pt-3">
                    <label className="text-xs font-semibold text-slate-700">Pitch de Vente</label>
                    <p className="text-sm text-slate-600 mt-1">{selectedLead.salesPitch || "N/A"}</p>
                  </div>

                  {/* BOUTON ÉDITION */}
                  <Button
                    onClick={() => setEditingLead(selectedLead)}
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center gap-2"
                  >
                    <Edit size={16} />
                    Modifier la fiche
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* MODE ÉDITION */}
            {editingLead && (
              <Card className="border-0 shadow-md border-l-4 border-blue-600">
                <CardHeader>
                  <CardTitle className="text-base">Modifier la fiche</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Nom</label>
                    <Input
                      value={editingLead.name}
                      onChange={(e) => setEditingLead({ ...editingLead, name: e.target.value })}
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Téléphone</label>
                    <Input
                      value={editingLead.phone || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, phone: e.target.value })}
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Email</label>
                    <Input
                      value={editingLead.email || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, email: e.target.value })}
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Problématique</label>
                    <textarea
                      value={editingLead.problemDescription || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, problemDescription: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Pitch de Vente</label>
                    <textarea
                      value={editingLead.salesPitch || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, salesPitch: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      rows={2}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleSaveEdit}
                      variant="default"
                      size="sm"
                      className="flex-1 flex items-center gap-2"
                    >
                      <Check size={16} />
                      Enregistrer
                    </Button>
                    <Button
                      onClick={() => setEditingLead(null)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {!selectedLead && (
              <Card className="border-0 shadow-md bg-blue-50 border-l-4 border-blue-600">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900 flex items-center gap-2">
                    <AlertCircle size={18} />
                    Conseil
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-800">
                  Cliquez sur un marqueur sur la carte pour voir la fiche du prospect et gérer son statut.
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
