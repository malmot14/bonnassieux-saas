import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface AppointmentFormProps {
  leadId: number;
  leadName?: string;
  onClose?: () => void;
}

export default function AppointmentForm({ leadId, leadName, onClose }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    scheduledDate: "",
    scheduledTime: "10:00",
    duration: "30",
    notes: "",
    location: "",
    status: "planifié",
  });

  const createAppointment = trpc.appointments.create.useMutation({
    onSuccess: () => {
      toast.success("Rendez-vous créé avec succès");
      setFormData({
        scheduledDate: "",
        scheduledTime: "10:00",
        duration: "30",
        notes: "",
        location: "",
        status: "planifié",
      });
      onClose?.();
    },
    onError: (error: any) => {
      toast.error("Erreur lors de la création du RDV: " + error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.scheduledDate) {
      toast.error("Veuillez sélectionner une date");
      return;
    }

    const dateTime = new Date(`${formData.scheduledDate}T${formData.scheduledTime}`);
    
    createAppointment.mutate({
      leadId,
      scheduledDate: dateTime,
      duration: parseInt(formData.duration),
      notes: formData.notes || null,
      location: formData.location || null,
      status: formData.status as "planifié" | "confirmé" | "complété" | "annulé",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg border">
      <h3 className="font-semibold text-lg">Prendre un Rendez-Vous</h3>
      {leadName && <p className="text-sm text-gray-600">Prospect: {leadName}</p>}
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <Input
            type="date"
            value={formData.scheduledDate}
            onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Heure</label>
          <Input
            type="time"
            value={formData.scheduledTime}
            onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Durée (minutes)</label>
          <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 min</SelectItem>
              <SelectItem value="30">30 min</SelectItem>
              <SelectItem value="45">45 min</SelectItem>
              <SelectItem value="60">1 heure</SelectItem>
              <SelectItem value="90">1h30</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Statut</label>
          <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="planifié">Planifié</SelectItem>
              <SelectItem value="confirmé">Confirmé</SelectItem>
              <SelectItem value="complété">Complété</SelectItem>
              <SelectItem value="annulé">Annulé</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Lieu</label>
        <Input
          type="text"
          placeholder="Adresse ou lieu du RDV"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Notes</label>
        <Textarea
          placeholder="Notes sur le rendez-vous..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onClose}>
          Annuler
        </Button>
        <Button type="submit" disabled={createAppointment.isPending}>
          {createAppointment.isPending ? "Création..." : "Créer le RDV"}
        </Button>
      </div>
    </form>
  );
}
