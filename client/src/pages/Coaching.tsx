import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MapPin, Loader2, Plus, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

const STATUS_BADGE: Record<string, string> = {
  "À visiter": "bg-blue-100 text-blue-700",
  "En cours":  "bg-amber-100 text-amber-700",
  "Signé":     "bg-green-100 text-green-700",
  "Perdu":     "bg-red-100 text-red-700",
};

const EMPTY_FORM = {
  name: "", address: "", phone: "", email: "", region: "",
  status: "À visiter" as const, priority: "moyenne" as const,
};

export default function Coaching() {
  const [, setLocation] = useLocation();
  const utils = trpc.useUtils();
  const { data: leads, isLoading } = trpc.leads.list.useQuery();
  const coachingLeads = leads?.filter(l => l.leadType === "Coaching Mental") || [];

  const createMutation = trpc.leads.create.useMutation({
    onSuccess: () => {
      utils.leads.list.invalidate();
      toast.success("Prospect créé");
      setModalOpen(false);
      setForm(EMPTY_FORM);
    },
    onError: () => toast.error("Erreur lors de la création"),
  });

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh]">
        <Loader2 className="animate-spin" size={28} />
      </div>
    );
  }

  const regions = Array.from(new Set(coachingLeads.map(l => l.region).filter(Boolean))) as string[];
  const filteredLeads = selectedRegion
    ? coachingLeads.filter(l => l.region === selectedRegion)
    : coachingLeads;

  const handleCreate = () => {
    if (!form.name.trim()) { toast.error("Nom requis"); return; }
    createMutation.mutate({ ...form, sector: "sport/bien-être", leadType: "Coaching Mental" });
  };

  return (
    <div className="p-8 min-h-[100dvh] bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">Coaching Mental</h1>
            <p className="text-slate-500 text-sm">Gestion nationale des prospects en coaching mental</p>
          </div>
          <Button onClick={() => setModalOpen(true)} className="gap-2">
            <Plus size={16} /> Nouveau Prospect
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {[
            { icon: Users,  label: "Prospects actifs", value: coachingLeads.length },
            { icon: MapPin, label: "Régions couvertes",  value: regions.length },
            { icon: Users,  label: "Signés",             value: coachingLeads.filter(l => l.status === "Signé").length },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="border border-slate-200 rounded-xl bg-white px-6 py-5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-2">
                <Icon size={14} />
                {label}
              </div>
              <div className="text-3xl font-bold text-slate-900 tabular-nums">{value}</div>
            </div>
          ))}
        </div>

        {/* Filtres région */}
        {regions.length > 0 && (
          <div className="mb-6 flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                !selectedRegion ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              Toutes
            </button>
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  selectedRegion === region ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredLeads.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <Users size={40} className="mb-4 opacity-30" />
            <p className="text-sm">Aucun prospect en coaching mental.</p>
            <Button variant="outline" className="mt-4 gap-2" onClick={() => setModalOpen(true)}>
              <Plus size={14} /> Créer le premier
            </Button>
          </div>
        )}

        {/* Liste */}
        <div className="space-y-2">
          {filteredLeads.map(lead => (
            <div
              key={lead.id}
              className="flex items-center gap-4 px-5 py-4 border border-slate-200 rounded-xl bg-white hover:border-slate-300 transition-colors cursor-pointer group"
              onClick={() => setLocation(`/leads/${lead.id}`)}
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 truncate">{lead.name}</p>
                {lead.region && <p className="text-xs text-slate-400 mt-0.5">{lead.region}</p>}
              </div>
              {lead.phone && <p className="text-xs text-slate-500 hidden sm:block">{lead.phone}</p>}
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${STATUS_BADGE[lead.status] ?? "bg-slate-100 text-slate-600"}`}>
                {lead.status}
              </span>
              <ArrowUpRight size={15} className="text-slate-300 group-hover:text-slate-500 transition-colors shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal nouveau prospect */}
      <Dialog open={modalOpen} onOpenChange={open => { if (!open) setModalOpen(false); }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Nouveau prospect — Coaching Mental</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Nom *</label>
              <Input placeholder="Nom de l'entreprise ou du coach" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1.5 block">Téléphone</label>
                <Input placeholder="06…" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1.5 block">Email</label>
                <Input type="email" placeholder="contact@…" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Région</label>
              <Input placeholder="Ex: Île-de-France, Normandie…" value={form.region} onChange={e => setForm(f => ({ ...f, region: e.target.value }))} />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Adresse</label>
              <Input placeholder="Adresse complète" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1.5 block">Statut</label>
                <Select value={form.status} onValueChange={v => setForm(f => ({ ...f, status: v as any }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="À visiter">À visiter</SelectItem>
                    <SelectItem value="En cours">En cours</SelectItem>
                    <SelectItem value="Signé">Signé</SelectItem>
                    <SelectItem value="Perdu">Perdu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1.5 block">Priorité</label>
                <Select value={form.priority} onValueChange={v => setForm(f => ({ ...f, priority: v as any }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haute">Haute</SelectItem>
                    <SelectItem value="moyenne">Moyenne</SelectItem>
                    <SelectItem value="basse">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Annuler</Button>
            <Button onClick={handleCreate} disabled={createMutation.isPending}>
              {createMutation.isPending ? "Création…" : "Créer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
