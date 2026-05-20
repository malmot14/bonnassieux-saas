import { trpc } from "@/lib/trpc";
import { ArrowUpRight, MapPin, TrendingUp, Users, Flame, PhoneCall, Car, Mail, MessageCircle, FileText } from "lucide-react";
import { useLocation } from "wouter";

const VIOLET = "#8B5CF6";
const VIOLET_DARK = "#7C3AED";
const GOLD = "#F59E0B";
const DARK = "#1F2937";
const GRAY = "#6B7280";
const BG = "linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 30%, #FCE7F3 70%, #FDF2F8 100%)";
const BORDER = "rgba(139, 92, 246, 0.15)";

export default function Dashboard() {
  const { data: leads, isLoading } = trpc.leads.list.useQuery();
  const { data: recentInteractions = [] } = trpc.interactions.recent.useQuery({ limit: 8 });
  const [, setLocation] = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: BG }}>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: VIOLET,
                animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  const total = leads?.length || 0;
  const toVisit = leads?.filter((l) => l.status === "À visiter").length || 0;
  const inProgress = leads?.filter((l) => l.status === "En cours").length || 0;
  const signed = leads?.filter((l) => l.status === "Signé").length || 0;
  const lost = leads?.filter((l) => l.status === "Perdu").length || 0;
  const conversionRate = total ? Math.round((signed / total) * 100) : 0;

  const sectors = [
    { name: "Artisans", key: "artisans" },
    { name: "Restaurants", key: "restaurants" },
    { name: "Sport / Bien-être", key: "sport/bien-être" },
    { name: "BTP", key: "BTP" },
  ]
    .map((s) => ({
      ...s,
      count: leads?.filter((l) => l.sector === s.key).length || 0,
    }))
    .sort((a, b) => b.count - a.count);

  const maxSector = Math.max(...sectors.map((s) => s.count), 1);

  const pipeline = [
    { label: "À visiter", count: toVisit, color: VIOLET },
    { label: "En cours", count: inProgress, color: GOLD },
    { label: "Signés", count: signed, color: "#16a34a" },
    { label: "Perdus", count: lost, color: "#D1D5DB" },
  ];

  const hotLeads = (leads || [])
    .filter(l => l.priority === "haute" && (l.status === "À visiter" || l.status === "En cours"))
    .slice(0, 5);

  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div
      className="min-h-screen p-8"
      style={{ background: BG, fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: VIOLET }}
            >
              Bonnassieux Agency
            </p>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: DARK }}>
              Tableau de bord
            </h1>
          </div>
          <div className="text-right">
            <p className="text-xs capitalize" style={{ color: GRAY }}>{today}</p>
            <button
              onClick={() => setLocation("/leads")}
              className="mt-2 flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: VIOLET }}
            >
              Voir tous les leads <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Main asymmetric grid */}
        <div className="grid gap-0" style={{ gridTemplateColumns: "1fr 300px" }}>

          {/* Left column */}
          <div className="pr-12" style={{ borderRight: `1px solid ${BORDER}` }}>

            {/* Hero stat */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GRAY }}>
                Leads actifs
              </p>
              <div className="flex items-end gap-4">
                <span
                  className="font-bold leading-none"
                  style={{
                    fontSize: "clamp(64px, 10vw, 96px)",
                    color: DARK,
                    letterSpacing: "-4px",
                  }}
                >
                  {total}
                </span>
                <div
                  className="mb-3 flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(139,92,246,0.12)", color: VIOLET_DARK }}
                >
                  <TrendingUp size={13} />
                  {conversionRate}% conversion
                </div>
              </div>
            </div>

            {/* Pipeline stats — borders only, no cards */}
            <div
              className="grid grid-cols-4 mb-10"
              style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
            >
              {pipeline.map((item, i) => (
                <div
                  key={item.label}
                  className="py-6"
                  style={{
                    paddingLeft: i === 0 ? 0 : "24px",
                    paddingRight: i === pipeline.length - 1 ? 0 : "24px",
                    borderRight: i < pipeline.length - 1 ? `1px solid ${BORDER}` : "none",
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-1 tabular-nums"
                    style={{ color: item.color, letterSpacing: "-1px" }}
                  >
                    {item.count}
                  </div>
                  <div className="text-xs font-medium" style={{ color: GRAY }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline bar */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GRAY }}>
                Pipeline
              </p>
              {total > 0 ? (
                <div
                  className="flex h-3 rounded-full overflow-hidden gap-px"
                  style={{ background: "rgba(139,92,246,0.1)" }}
                >
                  {pipeline
                    .filter((p) => p.count > 0)
                    .map((item) => (
                      <div
                        key={item.label}
                        className="transition-all duration-700 ease-out"
                        style={{
                          width: `${(item.count / total) * 100}%`,
                          background: item.color,
                          minWidth: "4px",
                        }}
                        title={`${item.label}: ${item.count}`}
                      />
                    ))}
                </div>
              ) : (
                <div className="h-3 rounded-full" style={{ background: "rgba(139,92,246,0.1)" }} />
              )}
              <div className="flex gap-4 mt-3">
                {pipeline
                  .filter((p) => p.count > 0)
                  .map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                      <span className="text-xs font-medium" style={{ color: GRAY }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="flex items-center justify-between p-5 rounded-2xl cursor-pointer group transition-all hover:scale-[1.01]"
              style={{
                background: `linear-gradient(135deg, ${VIOLET}, ${VIOLET_DARK})`,
                color: "#fff",
                boxShadow: `0 8px 25px rgba(139, 92, 246, 0.35)`,
              }}
              onClick={() => setLocation("/prospects-potentiels")}
            >
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Nouvelle opportunité
                </p>
                <p className="font-semibold">Explorer les prospects potentiels</p>
              </div>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: GOLD }}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="pl-10 flex flex-col gap-8">

            {/* Secteurs */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: GRAY }}>
                Par secteur
              </p>
              <div className="space-y-4">
                {sectors.map((sector) => (
                  <div key={sector.key}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium" style={{ color: DARK }}>{sector.name}</span>
                      <span className="text-sm tabular-nums font-bold" style={{ color: VIOLET_DARK }}>{sector.count}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(139,92,246,0.1)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${(sector.count / maxSector) * 100}%`, background: `linear-gradient(90deg, ${VIOLET}, ${VIOLET_DARK})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leads chauds */}
            {hotLeads.length > 0 && (
              <>
                <div style={{ borderTop: `1px solid ${BORDER}` }} />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-1.5" style={{ color: GRAY }}>
                    <Flame size={12} style={{ color: "#ef4444" }} />
                    Leads chauds
                  </p>
                  <div className="space-y-1">
                    {hotLeads.map(lead => (
                      <button
                        key={lead.id}
                        onClick={() => setLocation(`/leads/${lead.id}`)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group text-left"
                        style={{ color: DARK }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.06)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate" style={{ color: DARK }}>{lead.name}</p>
                          <p className="text-xs capitalize" style={{ color: GRAY }}>{lead.sector} · {lead.status}</p>
                        </div>
                        <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" style={{ color: "#ef4444" }} />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Activité récente */}
            {recentInteractions.length > 0 && (
              <>
                <div style={{ borderTop: `1px solid ${BORDER}` }} />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GRAY }}>
                    Activité récente
                  </p>
                  <div className="space-y-2.5">
                    {recentInteractions.slice(0, 6).map((inter: any) => {
                      const typeIcon: Record<string, React.ReactNode> = {
                        appel:   <PhoneCall size={11} />,
                        visite:  <Car size={11} />,
                        email:   <Mail size={11} />,
                        message: <MessageCircle size={11} />,
                        autre:   <FileText size={11} />,
                      };
                      const outcomeColor: Record<string, string> = {
                        positif: "#16a34a",
                        neutre:  GRAY,
                        "négatif": "#ef4444",
                      };
                      return (
                        <div key={inter.id} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(139,92,246,0.1)", color: VIOLET }}>
                            {typeIcon[inter.type] ?? <FileText size={11} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate" style={{ color: DARK }}>
                              {inter.leadName}
                            </p>
                            {inter.notes && (
                              <p className="text-xs truncate" style={{ color: GRAY }}>{inter.notes}</p>
                            )}
                          </div>
                          {inter.outcome && (
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: outcomeColor[inter.outcome] ?? GRAY }} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Quick links */}
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GRAY }}>Accès rapide</p>
              <div className="space-y-1">
                {[
                  { label: "Mes leads", path: "/leads", icon: Users },
                  { label: "Tournées", path: "/tournees", icon: MapPin },
                ].map(({ label, path, icon: Icon }) => (
                  <button
                    key={path}
                    onClick={() => setLocation(path)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group"
                    style={{ color: DARK }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.08)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={15} style={{ color: VIOLET }} />
                      {label}
                    </div>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: VIOLET }} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
