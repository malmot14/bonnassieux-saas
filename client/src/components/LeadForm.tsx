import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

interface LeadFormProps {
  onSuccess: () => void;
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const createMutation = trpc.leads.create.useMutation();
  const [formData, setFormData] = useState({
    name: "",
    sector: "artisans",
    address: "",
    phone: "",
    email: "",
    website: "",
    problemDescription: "",
    salesPitch: "",
    leadType: "CM",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMutation.mutateAsync(formData as any);
      toast.success("Lead créé avec succès");
      onSuccess();
    } catch (error) {
      toast.error("Erreur lors de la création du lead");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Nom de l'entreprise *
          </label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Menuiserie Robine"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Secteur *
          </label>
          <Select value={formData.sector} onValueChange={(value) => setFormData({ ...formData, sector: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="artisans">Artisans</SelectItem>
              <SelectItem value="restaurants">Restaurants</SelectItem>
              <SelectItem value="sport/bien-être">Sport/Bien-être</SelectItem>
              <SelectItem value="BTP">BTP</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
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
            placeholder="14000 Caen"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Téléphone
          </label>
          <Input
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="06 XX XX XX XX"
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
            placeholder="contact@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Site Web
          </label>
          <Input
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Type de Lead *
          </label>
          <Select value={formData.leadType} onValueChange={(value) => setFormData({ ...formData, leadType: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CM">Community Management</SelectItem>
              <SelectItem value="Coaching Mental">Coaching Mental</SelectItem>
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
          onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
          placeholder="Décrivez le problème digital identifié..."
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Pitch de Vente
        </label>
        <Textarea
          value={formData.salesPitch}
          onChange={(e) => setFormData({ ...formData, salesPitch: e.target.value })}
          placeholder="Votre argument de vente personnalisé..."
          rows={3}
        />
      </div>

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline">
          Annuler
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={createMutation.isPending}
        >
          {createMutation.isPending ? "Création..." : "Créer le Lead"}
        </Button>
      </div>
    </form>
  );
}
