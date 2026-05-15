import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Trash2, Save, Calendar, Phone, Mail, MapPin, MessageSquare, Plus } from "lucide-react";
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
  const { data: lead, isLoading } = trpc.leads.get.useQuery(leadId);
  const updateMutation = trpc.leads.update.useMutation();
  const deleteMutation = trpc.leads.delete.useMutation();
  const interactionsRef = useRef<HTMLDivElement>(null);

  const { data: interactions = [], refetch: refetchInteractions } = trpc.interactions.list.useQuery({ leadId });
  const createInteractionMutation = trpc.interactions.create.useMutation();

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
        await deleteMutation.mutateAsync(leadId);
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
                onClose={() => setShowAppointmentForm(false)}
              />
            </CardContent>
          </Card>
        )}

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
