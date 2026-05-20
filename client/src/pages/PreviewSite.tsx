import { useParams, useSearch } from "wouter";
import { trpc } from "@/lib/trpc";
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, ArrowRight, Wrench, Utensils, Dumbbell, HardHat, Loader2 } from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating?: number | null }) {
  if (!rating) return null;
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={16} className={i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
      <span className="text-sm font-medium ml-1">{rating} / 5</span>
    </div>
  );
}

// ─── Template Artisans ────────────────────────────────────────────────────────

function TemplateArtisan({ p, prompt }: { p: any; prompt: string }) {
  const city = p.address?.split(",").slice(-2, -1)[0]?.trim() || p.city || "votre ville";
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          <Wrench size={12} /> Artisan certifié
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{p.name}</h1>
        <p className="text-xl text-slate-300 mb-2">Artisan de confiance à {city}</p>
        {prompt && <p className="text-amber-300 text-lg mt-3 max-w-xl mx-auto italic">"{prompt}"</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          {p.phone && (
            <a href={`tel:${p.phone}`} className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 justify-center transition-colors">
              <Phone size={18} /> {p.phone}
            </a>
          )}
          <a href="#contact" className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 justify-center transition-colors">
            Devis gratuit <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Arguments */}
      <div className="bg-amber-500 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-black font-semibold text-sm">
          {["Devis gratuit sous 24h", "Intervention rapide", "Garantie 2 ans", "Artisan local"].map(a => (
            <div key={a} className="flex items-center gap-1.5"><CheckCircle size={16} /> {a}</div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">Nos prestations</h2>
          <p className="text-slate-500 text-center mb-10">Intervention dans toute la région de {city}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dépannage urgent", desc: "Intervention rapide pour toute urgence. Disponible 6j/7.", icon: "⚡" },
              { title: "Installation neuve", desc: "Pose et installation de qualité professionnelle avec garantie.", icon: "🔧" },
              { title: "Rénovation", desc: "Rénovation complète selon vos besoins et votre budget.", icon: "🏠" },
            ].map(s => (
              <div key={s.title} className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* À propos */}
      <div className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Pourquoi nous choisir ?</h2>
            <div className="space-y-4">
              {[
                "Artisan local établi à " + city,
                "Devis détaillé et transparent, sans surprise",
                "Matériaux de qualité professionnelle",
                "Travaux soignés et dans les délais",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            {p.rating && <div className="mt-6"><Stars rating={typeof p.rating === 'string' ? parseFloat(p.rating) : p.rating} /></div>}
          </div>
          <div className="bg-slate-800 text-white rounded-2xl p-8">
            <h3 className="font-bold text-lg mb-4">Zone d'intervention</h3>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin size={16} className="mt-0.5 shrink-0 text-amber-400" />
              <p>{p.address || city + " et ses environs"}</p>
            </div>
            {p.phone && (
              <a href={`tel:${p.phone}`} className="flex items-center gap-2 text-amber-400 mt-4 font-semibold">
                <Phone size={16} /> {p.phone}
              </a>
            )}
            {p.email && (
              <a href={`mailto:${p.email}`} className="flex items-center gap-2 text-slate-300 mt-2 text-sm">
                <Mail size={14} /> {p.email}
              </a>
            )}
          </div>
        </div>
      </div>

      <ContactFooter p={p} color="amber" />
    </div>
  );
}

// ─── Template Restaurant ──────────────────────────────────────────────────────

function TemplateRestaurant({ p, prompt }: { p: any; prompt: string }) {
  const city = p.address?.split(",").slice(-2, -1)[0]?.trim() || p.city || "votre ville";
  return (
    <div className="font-sans">
      <div className="bg-gradient-to-br from-red-900 to-orange-900 text-white px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          <Utensils size={12} /> Restaurant
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{p.name}</h1>
        <p className="text-xl text-orange-200 mb-2">Cuisine authentique à {city}</p>
        {prompt && <p className="text-orange-300 text-lg mt-3 max-w-xl mx-auto italic">"{prompt}"</p>}
        {p.rating && (
          <div className="flex justify-center mt-4">
            <Stars rating={typeof p.rating === 'string' ? parseFloat(p.rating) : p.rating} />
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          {p.phone && (
            <a href={`tel:${p.phone}`} className="bg-orange-400 hover:bg-orange-300 text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 justify-center">
              <Phone size={18} /> Réserver une table
            </a>
          )}
        </div>
      </div>

      <div className="bg-orange-400 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-black font-semibold text-sm">
          {["Produits frais", "Fait maison", "Cadre chaleureux", "Réservation conseillée"].map(a => (
            <div key={a} className="flex items-center gap-1.5"><CheckCircle size={16} /> {a}</div>
          ))}
        </div>
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Notre carte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Entrées", items: ["Soupe du jour", "Salade de saison", "Charcuterie maison"], icon: "🥗" },
              { title: "Plats", items: ["Spécialité du chef", "Viande du boucher", "Poisson frais"], icon: "🍽️" },
              { title: "Desserts", items: ["Tarte du jour", "Fromages affinés", "Café gourmand"], icon: "🍮" },
            ].map(cat => (
              <div key={cat.title} className="border border-slate-200 rounded-2xl p-6">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{cat.title}</h3>
                <ul className="space-y-1">
                  {cat.items.map(i => <li key={i} className="text-slate-500 text-sm flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full" />{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Horaires d'ouverture</h2>
            <div className="space-y-3">
              {[
                { j: "Lundi – Vendredi", h: "12h00 – 14h30 · 19h00 – 22h30" },
                { j: "Samedi", h: "12h00 – 15h00 · 19h00 – 23h00" },
                { j: "Dimanche", h: "Fermé" },
              ].map(({ j, h }) => (
                <div key={j} className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-700">{j}</span>
                  <span className="text-slate-500 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-900 text-white rounded-2xl p-8">
            <h3 className="font-bold text-lg mb-2">Nous trouver</h3>
            <div className="flex items-start gap-2 text-red-200 mb-4">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <p>{p.address || city}</p>
            </div>
            {p.phone && (
              <a href={`tel:${p.phone}`} className="flex items-center gap-2 text-orange-400 font-semibold">
                <Phone size={16} /> {p.phone}
              </a>
            )}
          </div>
        </div>
      </div>

      <ContactFooter p={p} color="orange" />
    </div>
  );
}

// ─── Template Sport / Bien-être ───────────────────────────────────────────────

function TemplateSport({ p, prompt }: { p: any; prompt: string }) {
  const city = p.address?.split(",").slice(-2, -1)[0]?.trim() || p.city || "votre ville";
  return (
    <div className="font-sans">
      <div className="bg-gradient-to-br from-violet-700 to-indigo-900 text-white px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          <Dumbbell size={12} /> Sport & Bien-être
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{p.name}</h1>
        <p className="text-xl text-violet-200 mb-2">Coaching professionnel à {city}</p>
        {prompt && <p className="text-violet-300 text-lg mt-3 max-w-xl mx-auto italic">"{prompt}"</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          {p.phone && (
            <a href={`tel:${p.phone}`} className="bg-violet-400 hover:bg-violet-300 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 justify-center">
              <Phone size={18} /> Séance découverte
            </a>
          )}
          <a href="#programmes" className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 justify-center">
            Nos programmes <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="bg-violet-500 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-white font-semibold text-sm">
          {["Suivi personnalisé", "Séance découverte offerte", "Coach certifié", "Résultats garantis"].map(a => (
            <div key={a} className="flex items-center gap-1.5"><CheckCircle size={16} /> {a}</div>
          ))}
        </div>
      </div>

      <div id="programmes" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Nos programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Coaching individuel", desc: "Programme sur mesure adapté à vos objectifs et votre niveau.", icon: "🎯", price: "Sur devis" },
              { title: "Cours collectifs", desc: "Sessions en groupe pour progresser dans une ambiance motivante.", icon: "👥", price: "À partir de 30€" },
              { title: "Suivi nutrition", desc: "Conseils nutritionnels pour optimiser vos performances.", icon: "🥗", price: "En option" },
            ].map(s => (
              <div key={s.title} className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{s.desc}</p>
                <span className="text-violet-600 font-semibold text-sm">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Votre coach</h2>
          <div className="w-24 h-24 bg-violet-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Dumbbell size={36} className="text-violet-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
          <p className="text-slate-500 mt-2 max-w-lg mx-auto">Coach certifié basé à {city}, passionné par le sport et le développement personnel. Accompagne ses clients vers leurs objectifs avec méthode et bienveillance.</p>
          {p.rating && <div className="flex justify-center mt-4"><Stars rating={typeof p.rating === 'string' ? parseFloat(p.rating) : p.rating} /></div>}
        </div>
      </div>

      <ContactFooter p={p} color="violet" />
    </div>
  );
}

// ─── Template BTP ─────────────────────────────────────────────────────────────

function TemplateBTP({ p, prompt }: { p: any; prompt: string }) {
  const city = p.address?.split(",").slice(-2, -1)[0]?.trim() || p.city || "votre ville";
  return (
    <div className="font-sans">
      <div className="bg-gradient-to-br from-yellow-700 to-orange-800 text-white px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          <HardHat size={12} /> BTP & Construction
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{p.name}</h1>
        <p className="text-xl text-yellow-200 mb-2">Votre expert en construction à {city}</p>
        {prompt && <p className="text-yellow-300 text-lg mt-3 max-w-xl mx-auto italic">"{prompt}"</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          {p.phone && (
            <a href={`tel:${p.phone}`} className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 justify-center">
              <Phone size={18} /> Demander un devis
            </a>
          )}
        </div>
      </div>

      <div className="bg-yellow-500 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-black font-semibold text-sm">
          {["Devis gratuit", "Assurance décennale", "Équipe expérimentée", "Respect des délais"].map(a => (
            <div key={a} className="flex items-center gap-1.5"><CheckCircle size={16} /> {a}</div>
          ))}
        </div>
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Nos domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Construction neuve", desc: "Réalisation de votre projet de A à Z, de la conception à la livraison.", icon: "🏗️" },
              { title: "Rénovation & Extension", desc: "Transformation et agrandissement de vos espaces selon vos envies.", icon: "🔨" },
              { title: "Gros œuvre", desc: "Fondations, maçonnerie, charpente — tous les travaux structurels.", icon: "🧱" },
              { title: "Second œuvre", desc: "Électricité, plomberie, isolation, peinture et finitions.", icon: "⚙️" },
            ].map(s => (
              <div key={s.title} className="border border-slate-200 rounded-2xl p-6 flex gap-4">
                <div className="text-3xl shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { val: "10+", label: "Années d'expérience" },
            { val: "200+", label: "Chantiers réalisés" },
            { val: "100%", label: "Clients satisfaits" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-5xl font-black text-yellow-400 mb-2">{val}</div>
              <div className="text-slate-300">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <ContactFooter p={p} color="yellow" />
    </div>
  );
}

// ─── Footer contact commun ────────────────────────────────────────────────────

const colorMap: Record<string, string> = {
  amber:  "bg-amber-500",
  orange: "bg-orange-500",
  violet: "bg-violet-600",
  yellow: "bg-yellow-500",
};

function ContactFooter({ p, color }: { p: any; color: string }) {
  const bg = colorMap[color] || "bg-slate-800";
  return (
    <div id="contact" className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-2">Nous contacter</h2>
        <p className="text-slate-400 mb-8">Répondons à toutes vos questions</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {p.phone && (
            <a href={`tel:${p.phone}`} className={`${bg} text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 justify-center hover:opacity-90 transition-opacity`}>
              <Phone size={18} /> {p.phone}
            </a>
          )}
          {p.email && (
            <a href={`mailto:${p.email}`} className="border-2 border-white/20 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 justify-center transition-colors">
              <Mail size={18} /> {p.email}
            </a>
          )}
        </div>
        {p.address && (
          <p className="text-slate-500 text-sm mt-6 flex items-center justify-center gap-1">
            <MapPin size={14} /> {p.address}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Bannière "mode aperçu" ───────────────────────────────────────────────────

function PreviewBanner({ name }: { name: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950 text-white text-xs py-2 px-4 flex items-center justify-between">
      <span className="font-semibold text-slate-300">
        👁 Aperçu site — <span className="text-white">{name}</span>
      </span>
      <span className="text-slate-500 italic">Généré par Bonnassieux Digital</span>
    </div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function PreviewSite() {
  const { id } = useParams<{ id: string }>();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const prompt = decodeURIComponent(params.get("prompt") || "");

  const { data: prospect, isLoading, error } = trpc.prospectsPotentiels.get.useQuery(
    { id: parseInt(id!) },
    { enabled: !!id }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh]">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (error || !prospect) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh] text-slate-500">
        Prospect introuvable.
      </div>
    );
  }

  const sector = prospect.sector || "autre";

  return (
    <div className="pt-8">
      <PreviewBanner name={prospect.name} />
      {sector === "restaurants" && <TemplateRestaurant p={prospect} prompt={prompt} />}
      {sector === "sport/bien-être" && <TemplateSport p={prospect} prompt={prompt} />}
      {sector === "BTP" && <TemplateBTP p={prospect} prompt={prompt} />}
      {(sector === "artisans" || sector === "autre") && <TemplateArtisan p={prospect} prompt={prompt} />}
    </div>
  );
}
