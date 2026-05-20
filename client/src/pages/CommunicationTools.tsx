import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Phone, Mail, MessageSquare, BookOpen, Copy, Plus, Pencil, Trash2, ChevronDown, ChevronUp, Search } from "lucide-react";

const SECTORS = ["artisans", "restaurants", "sport/bien-être", "BTP"] as const;

// ─── Phone Scripts (DB-backed via salesScripts) ───────────────────────────────

function PhoneScriptsTab() {
  const { data: scripts = [], isLoading, refetch } = trpc.salesScripts.list.useQuery();
  const createMut = trpc.salesScripts.create.useMutation({ onSuccess: () => { refetch(); toast.success("Script créé"); setModalOpen(false); }, onError: () => toast.error("Erreur") });
  const updateMut = trpc.salesScripts.update.useMutation({ onSuccess: () => { refetch(); toast.success("Script mis à jour"); setModalOpen(false); }, onError: () => toast.error("Erreur") });
  const deleteMut = trpc.salesScripts.delete.useMutation({ onSuccess: () => { refetch(); toast.success("Supprimé"); setDeleteId(null); }, onError: () => toast.error("Erreur") });

  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ sector: "artisans" as any, title: "", content: "" });
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return (scripts as any[]).filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q) ||
      s.sector.toLowerCase().includes(q)
    );
  }, [scripts, search]);

  const copy = (script: any) => {
    navigator.clipboard.writeText(script.content);
    setCopiedId(script.id);
    toast.success("Script copié !");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openCreate = () => { setEditing(null); setForm({ sector: "artisans", title: "", content: "" }); setModalOpen(true); };
  const openEdit = (s: any) => { setEditing(s); setForm({ sector: s.sector, title: s.title, content: s.content }); setModalOpen(true); };
  const submit = () => {
    if (!form.title.trim() || !form.content.trim()) { toast.error("Titre et contenu requis"); return; }
    if (editing) updateMut.mutate({ id: editing.id, ...form });
    else createMut.mutate(form);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input placeholder="Rechercher…" value={search} onChange={e => setSearch(e.target.value)} className="pl-8 h-9" />
        </div>
        <Button size="sm" onClick={openCreate} className="gap-1.5 h-9">
          <Plus size={14} /> Nouveau
        </Button>
      </div>

      {isLoading && <p className="text-sm text-slate-400 py-8 text-center">Chargement…</p>}
      {!isLoading && filtered.length === 0 && (
        <p className="text-sm text-slate-400 py-8 text-center">Aucun script.</p>
      )}

      <div className="space-y-2">
        {filtered.map((script: any) => (
          <div key={script.id} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3">
              <button className="flex-1 text-left flex items-center gap-2 min-w-0" onClick={() => setExpandedId(expandedId === script.id ? null : script.id)}>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 shrink-0 capitalize">{script.sector}</span>
                <span className="font-medium text-slate-800 text-sm truncate">{script.title}</span>
              </button>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => copy(script)} className={`p-1.5 text-xs transition-colors ${copiedId === script.id ? "text-green-600" : "text-slate-400 hover:text-slate-700"}`}>
                  <Copy size={13} />
                </button>
                <button onClick={() => setExpandedId(expandedId === script.id ? null : script.id)} className="p-1.5 text-slate-400 hover:text-slate-600">
                  {expandedId === script.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                <button onClick={() => openEdit(script)} className="p-1.5 text-slate-400 hover:text-slate-700"><Pencil size={13} /></button>
                <button onClick={() => setDeleteId(script.id)} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={13} /></button>
              </div>
            </div>
            {expandedId === script.id && (
              <div className="px-4 pb-4 border-t border-slate-100">
                <pre className="mt-3 text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">{script.content}</pre>
                <Button size="sm" variant={copiedId === script.id ? "default" : "outline"} className="mt-3 gap-1.5" onClick={() => copy(script)}>
                  <Copy size={13} />{copiedId === script.id ? "Copié !" : "Copier"}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Guide conseil */}
      <div className="mt-6 p-4 rounded-xl border-l-4 border-slate-700 bg-slate-50 text-sm text-slate-700">
        <p className="font-semibold mb-1">Timing idéal</p>
        <p className="text-xs text-slate-500">30-40 sec pour l'accroche. Parlez lentement, utilisez le prénom. Proposez 2 créneaux précis pour le RDV.</p>
      </div>

      {/* Modal create/edit */}
      <Dialog open={modalOpen} onOpenChange={open => { if (!open) setModalOpen(false); }}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{editing ? "Modifier le script" : "Nouveau script"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Secteur</label>
              <Select value={form.sector} onValueChange={v => setForm(f => ({ ...f, sector: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{SECTORS.map(s => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Titre</label>
              <Input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Contenu</label>
              <Textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={7} className="font-mono text-sm resize-none" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Annuler</Button>
            <Button onClick={submit} disabled={createMut.isPending || updateMut.isPending}>{editing ? "Enregistrer" : "Créer"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteId !== null} onOpenChange={open => { if (!open) setDeleteId(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Supprimer ce script ?</AlertDialogTitle><AlertDialogDescription>Action irréversible.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={() => deleteId !== null && deleteMut.mutate({ id: deleteId })}>Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ─── Message Templates (email / WhatsApp) ─────────────────────────────────────

function TemplatesTab({ type }: { type: "email" | "whatsapp" }) {
  const { data: allTemplates = [], isLoading, refetch } = trpc.messageTemplates.list.useQuery();
  const createMut = trpc.messageTemplates.create.useMutation({ onSuccess: () => { refetch(); toast.success("Template créé"); setModalOpen(false); }, onError: () => toast.error("Erreur") });
  const updateMut = trpc.messageTemplates.update.useMutation({ onSuccess: () => { refetch(); toast.success("Mis à jour"); setModalOpen(false); }, onError: () => toast.error("Erreur") });
  const deleteMut = trpc.messageTemplates.delete.useMutation({ onSuccess: () => { refetch(); toast.success("Supprimé"); setDeleteId(null); }, onError: () => toast.error("Erreur") });

  const templates = useMemo(() => (allTemplates as any[]).filter(t => t.type === type), [allTemplates, type]);

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ sector: "artisans", subject: "", content: "" });
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const copy = (t: any) => {
    const text = type === "email" && t.subject ? `Objet : ${t.subject}\n\n${t.content}` : t.content;
    navigator.clipboard.writeText(text);
    setCopiedId(t.id);
    toast.success("Copié !");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openCreate = () => { setEditing(null); setForm({ sector: "artisans", subject: "", content: "" }); setModalOpen(true); };
  const openEdit = (t: any) => { setEditing(t); setForm({ sector: t.sector, subject: t.subject ?? "", content: t.content }); setModalOpen(true); };
  const submit = () => {
    if (!form.content.trim()) { toast.error("Contenu requis"); return; }
    const payload = { type, sector: form.sector, content: form.content, ...(type === "email" ? { subject: form.subject } : {}) };
    if (editing) updateMut.mutate({ id: editing.id, ...payload });
    else createMut.mutate(payload);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button size="sm" onClick={openCreate} className="gap-1.5 h-9">
          <Plus size={14} /> Nouveau template
        </Button>
      </div>

      {isLoading && <p className="text-sm text-slate-400 py-8 text-center">Chargement…</p>}
      {!isLoading && templates.length === 0 && (
        <p className="text-sm text-slate-400 py-8 text-center">Aucun template {type}.</p>
      )}

      <div className="space-y-2">
        {templates.map((t: any) => (
          <div key={t.id} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3">
              <button className="flex-1 text-left flex items-center gap-2 min-w-0" onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 shrink-0 capitalize">{t.sector}</span>
                <span className="font-medium text-slate-800 text-sm truncate">{t.subject || t.content.slice(0, 60) + "…"}</span>
              </button>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => copy(t)} className={`p-1.5 transition-colors ${copiedId === t.id ? "text-green-600" : "text-slate-400 hover:text-slate-700"}`}><Copy size={13} /></button>
                <button onClick={() => setExpandedId(expandedId === t.id ? null : t.id)} className="p-1.5 text-slate-400 hover:text-slate-600">
                  {expandedId === t.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                <button onClick={() => openEdit(t)} className="p-1.5 text-slate-400 hover:text-slate-700"><Pencil size={13} /></button>
                <button onClick={() => setDeleteId(t.id)} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={13} /></button>
              </div>
            </div>
            {expandedId === t.id && (
              <div className="px-4 pb-4 border-t border-slate-100">
                {t.subject && (
                  <p className="mt-3 text-xs font-medium text-slate-500">
                    Objet : <span className="text-slate-800">{t.subject}</span>
                  </p>
                )}
                <pre className="mt-2 text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">{t.content}</pre>
                <Button size="sm" variant={copiedId === t.id ? "default" : "outline"} className="mt-3 gap-1.5" onClick={() => copy(t)}>
                  <Copy size={13} />{copiedId === t.id ? "Copié !" : "Copier"}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onOpenChange={open => { if (!open) setModalOpen(false); }}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{editing ? "Modifier le template" : `Nouveau template ${type}`}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Secteur</label>
              <Select value={form.sector} onValueChange={v => setForm(f => ({ ...f, sector: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{SECTORS.map(s => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            {type === "email" && (
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1.5 block">Objet de l'email</label>
                <Input placeholder="Objet…" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
              </div>
            )}
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1.5 block">Contenu</label>
              <Textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={8} className="font-mono text-sm resize-none" placeholder="Bonjour [Prénom],…" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Annuler</Button>
            <Button onClick={submit} disabled={createMut.isPending || updateMut.isPending}>{editing ? "Enregistrer" : "Créer"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteId !== null} onOpenChange={open => { if (!open) setDeleteId(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Supprimer ce template ?</AlertDialogTitle><AlertDialogDescription>Action irréversible.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={() => deleteId !== null && deleteMut.mutate({ id: deleteId })}>Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ─── Page principale ───────────────────────────────────────────────────────────

export default function CommunicationTools() {
  return (
    <div className="p-8 min-h-[100dvh] bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">Outils de Communication</h1>
          <p className="text-slate-500 text-sm">Scripts téléphoniques, templates email et WhatsApp — tout en un.</p>
        </div>

        <Tabs defaultValue="scripts">
          <TabsList className="mb-6">
            <TabsTrigger value="scripts" className="gap-2">
              <Phone size={14} /> Scripts téléphoniques
            </TabsTrigger>
            <TabsTrigger value="email" className="gap-2">
              <Mail size={14} /> Templates email
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="gap-2">
              <MessageSquare size={14} /> Templates WhatsApp
            </TabsTrigger>
            <TabsTrigger value="guide" className="gap-2">
              <BookOpen size={14} /> Guide RDV
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scripts"><PhoneScriptsTab /></TabsContent>
          <TabsContent value="email"><TemplatesTab type="email" /></TabsContent>
          <TabsContent value="whatsapp"><TemplatesTab type="whatsapp" /></TabsContent>

          <TabsContent value="guide">
            <div className="space-y-6 text-sm text-slate-700">
              <section className="border border-slate-200 rounded-xl p-6 bg-white">
                <h2 className="font-semibold text-slate-900 mb-4">Structure de la présentation (15-20 min)</h2>
                <ol className="space-y-2.5">
                  {[
                    ["Slide 1 — Le Problème", "2-3 min", "Identifiez la situation du prospect"],
                    ["Slide 2 — La Solution",  "3-4 min", "Montrez le CRM et les résultats"],
                    ["Slide 3 — Vos Bénéfices","3-4 min", "Chiffres concrets : visibilité, leads, conversions"],
                    ["Slide 4 — Comment ça marche","3-4 min","Diagnostic → Stratégie → Résultats"],
                    ["Slide 5 — Appel à l'Action","2-3 min","Proposez le diagnostic gratuit"],
                  ].map(([title, duration, desc]) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="text-xs font-medium text-slate-400 mt-0.5 shrink-0 w-14">{duration}</span>
                      <div>
                        <p className="font-medium text-slate-800">{title}</p>
                        <p className="text-xs text-slate-500">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="grid grid-cols-2 gap-4">
                <section className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h2 className="font-semibold text-slate-900 mb-3">À faire</h2>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {["Montrer les visuels sur téléphone ou tablette","Maintenir le contact visuel","Parler lentement et clairement","S'asseoir à côté du prospect","Respecter le timing (15-20 min)","Prendre des notes pendant l'échange"].map(t => (
                      <li key={t} className="flex items-start gap-1.5"><span className="text-green-500 shrink-0">✓</span>{t}</li>
                    ))}
                  </ul>
                </section>
                <section className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h2 className="font-semibold text-slate-900 mb-3">À éviter</h2>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {["Lire les slides mot à mot","Parler trop vite","Utiliser du jargon technique","Rester debout","Dépasser 20 minutes","Faire pression pour une décision immédiate"].map(t => (
                      <li key={t} className="flex items-start gap-1.5"><span className="text-red-400 shrink-0">✗</span>{t}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="border border-slate-200 rounded-xl p-6 bg-white">
                <h2 className="font-semibold text-slate-900 mb-4">Gestion des objections</h2>
                <div className="space-y-4">
                  {[
                    ["\"C'est trop cher\"", "Je comprends. Mais 500€/mois pour 150k€ de CA supplémentaire, c'est un ROI de 300x."],
                    ["\"Je n'ai pas le temps\"", "Justement — notre outil vous en fait gagner. 10 min par jour max depuis votre téléphone."],
                    ["\"Je vais réfléchir\"", "Pendant que vous réfléchissez, vos concurrents agissent. Pourquoi pas un diagnostic gratuit jeudi ?"],
                  ].map(([obj, rep]) => (
                    <div key={obj} className="border-l-2 border-slate-200 pl-4">
                      <p className="font-medium text-slate-800 text-xs mb-1">{obj}</p>
                      <p className="text-xs text-slate-500">{rep}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border border-slate-200 rounded-xl p-5 bg-white">
                <h2 className="font-semibold text-slate-900 mb-3">Taux de succès cible</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    ["30-40%", "Taux de réponse"],
                    ["50-60%", "Taux de RDV pris"],
                    ["50%+",   "Conversion RDV → client"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <div className="text-xl font-bold text-slate-900 tabular-nums">{val}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
