import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lead } from "@/types";
import { trpc } from "@/lib/trpc";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";

interface LeadCardProps {
  lead: Lead;
  onUpdate: () => void;
}

const statusColors = {
  "À visiter": "bg-blue-100 text-blue-800",
  "En cours": "bg-amber-100 text-amber-800",
  "Signé": "bg-green-100 text-green-800",
  "Perdu": "bg-red-100 text-red-800",
};

export default function LeadCard({ lead, onUpdate }: LeadCardProps) {
  const [, setLocation] = useLocation();
  const updateMutation = trpc.leads.update.useMutation();

  const handleStatusChange = async (newStatus: string) => {
    try {
      await updateMutation.mutateAsync({
        id: lead.id,
        status: newStatus as any,
      });
      toast.success("Statut mis à jour");
      onUpdate();
    } catch (error) {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardHeader className="pb-3 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-900">{lead.name}</CardTitle>
            <p className="text-xs text-slate-500 mt-1 capitalize">{lead.sector}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[lead.status as keyof typeof statusColors]}`}>
            {lead.status}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        {/* Contact Info */}
        <div className="space-y-2">
          {lead.address && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin size={16} className="text-slate-400" />
              <span>{lead.address}</span>
            </div>
          )}
          {lead.phone && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone size={16} className="text-slate-400" />
              <a href={`tel:${lead.phone}`} className="hover:text-blue-600">{lead.phone}</a>
            </div>
          )}
          {lead.email && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Mail size={16} className="text-slate-400" />
              <a href={`mailto:${lead.email}`} className="hover:text-blue-600">{lead.email}</a>
            </div>
          )}
          {lead.website && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Globe size={16} className="text-slate-400" />
              <a href={lead.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 truncate">
                {lead.website}
              </a>
            </div>
          )}
        </div>

        {/* Problem Description */}
        {lead.problemDescription && (
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="text-xs font-semibold text-slate-700 mb-1">Problématique</p>
            <p className="text-sm text-slate-600 line-clamp-2">{lead.problemDescription}</p>
          </div>
        )}

        {/* Status Update */}
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-2">Changer le statut</label>
          <Select value={lead.status} onValueChange={handleStatusChange}>
            <SelectTrigger className="h-9">
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

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => setLocation(`/leads/${lead.id}`)}
          >
            Détails
          </Button>
          <Button variant="outline" size="sm" className="flex-1" onClick={() => setLocation(`/leads/${lead.id}?section=interactions`)}>
            Interactions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
