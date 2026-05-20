import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const SECTORS = ["artisans", "restaurants", "sport/bien-être", "BTP"] as const;
type Sector = typeof SECTORS[number];

const SECTOR_COLORS: Record<Sector, string> = {
  artisans: "bg-amber-50 border-amber-200 text-amber-800",
  restaurants: "bg-rose-50 border-rose-200 text-rose-800",
  "sport/bien-être": "bg-emerald-50 border-emerald-200 text-emerald-800",
  BTP: "bg-sky-50 border-sky-200 text-sky-800",
};

type Script = {
  id: number;
  sector: Sector;
  title: string;
  content: string;
  isDefault: boolean | null;
};

type FormState = {
  sector: Sector;
  title: string;
  content: string;
};

const EMPTY_FORM: FormState = { sector: "artisans", title: "", content: "" };

export default function Scripts() {
  const { data: scripts = [], isLoading, refetch } = trpc.salesScripts.list.useQuery();

  const createMutation = trpc.salesScripts.create.useMutation({
    onSuccess: () => { refetch(); toast.success("Script créé"); setModalOpen(false); },
    onError: () => toast.error("Erreur lors de la création"),
  });

  const updateMutation = trpc.salesScripts.update.useMutation({
    onSuccess: () => { refetch(); toast.success("Script mis à jour"); setModalOpen(false); },
    onError: () => toast.error("Erreur lors de la mise à jour"),
  });

  const deleteMutation = trpc.salesScripts.delete.useMutation({
    onSuccess: () => { refetch(); toast.success("Script supprimé"); setDeleteId(null); },
    onError: () => toast.error("Erreur lors de la suppression"),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Script | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  const openEdit = (script: Script) => {
    setEditing(script);
    setForm({ sector: script.sector, title: script.title, content: script.content });
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.content.trim()) {
      toast.error("Titre et contenu requis");
      return;
    }
    if (editing) {
      updateMutation.mutate({ id: editing.id, ...form });
    } else {
      createMutation.mutate(form);
    }
  };

  const scriptsBySector = SECTORS.map((sector) => ({
    sector,
    scripts: scripts.filter((s: Script) => s.sector === sector),
  }));

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <div className="p-8 min-h-[100dvh] bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
              Scripts de vente
            </h1>
            <p className="text-slate-500 text-sm">
              {scripts.length} script{scripts.length !== 1 ? "s" : ""} enregistré{scripts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Button onClick={openCreate} className="gap-2">
            <Plus size={16} />
            Nouveau script
          </Button>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center py-24 text-slate-400 text-sm gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Chargement…
          </div>
        )}

        {/* Empty global state */}
        {!isLoading && scripts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <BookOpen size={40} className="mb-4 opacity-30" />
            <p className="text-sm">Aucun script pour l'instant.</p>
            <Button variant="outline" className="mt-4 gap-2" onClick={openCreate}>
              <Plus size={14} />
              Créer le premier script
            </Button>
          </div>
        )}

        {/* Scripts grouped by sector */}
        {!isLoading && scripts.length > 0 && (
          <div className="space-y-8">
            {scriptsBySector.map(({ sector, scripts: sectorScripts }) => (
              sectorScripts.length > 0 && (
                <section key={sector}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 capitalize ${SECTOR_COLORS[sector]}`}>
                    <span>{sector}</span>
                    <span className="opacity-60">·</span>
                    <span>{sectorScripts.length}</span>
                  </div>

                  <div className="space-y-2">
                    {sectorScripts.map((script: Script) => {
                      const isExpanded = expandedId === script.id;
                      return (
                        <div
                          key={script.id}
                          className="border border-slate-200 rounded-xl bg-white overflow-hidden"
                        >
                          {/* Script header */}
                          <div className="flex items-center gap-3 px-4 py-3">
                            <button
                              className="flex-1 text-left flex items-center gap-2 min-w-0"
                              onClick={() => setExpandedId(isExpanded ? null : script.id)}
                            >
                              <span className="font-medium text-slate-800 text-sm truncate">
                                {script.title}
                              </span>
                              {script.isDefault && (
                                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full shrink-0">
                                  défaut
                                </span>
                              )}
                            </button>

                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                onClick={() => setExpandedId(isExpanded ? null : script.id)}
                                className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                              >
                                {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                              </button>
                              <button
                                onClick={() => openEdit(script)}
                                className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors"
                              >
                                <Pencil size={14} />
                              </button>
                              <button
                                onClick={() => setDeleteId(script.id)}
                                className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>

                          {/* Script content */}
                          {isExpanded && (
                            <div className="px-4 pb-4 border-t border-slate-100">
                              <pre className="mt-3 text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                                {script.content}
                              </pre>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )
            ))}
          </div>
        )}
      </div>

      {/* Create / Edit modal */}
      <Dialog open={modalOpen} onOpenChange={(open) => { if (!open) setModalOpen(false); }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Modifier le script" : "Nouveau script"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Secteur</label>
              <Select
                value={form.sector}
                onValueChange={(v) => setForm((f) => ({ ...f, sector: v as Sector }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SECTORS.map((s) => (
                    <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Titre</label>
              <Input
                placeholder="Ex: Accroche téléphonique artisan"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Contenu du script</label>
              <Textarea
                placeholder="Bonjour, je suis…"
                value={form.content}
                onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                rows={8}
                className="resize-none font-mono text-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)} disabled={isPending}>
              Annuler
            </Button>
            <Button onClick={handleSubmit} disabled={isPending}>
              {isPending ? (
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enregistrement…
                </span>
              ) : editing ? "Enregistrer" : "Créer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog open={deleteId !== null} onOpenChange={(open) => { if (!open) setDeleteId(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer ce script ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => deleteId !== null && deleteMutation.mutate({ id: deleteId })}
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
