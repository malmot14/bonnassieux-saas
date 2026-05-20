import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

// ─── Détection du type de site web ───────────────────────────────────────────

const AMATEUR_PATTERNS = [
  "wix.com", "wixsite.com",
  "wordpress.com",            // wordpress.com hébergé = amateur (≠ wordpress.org auto-hébergé)
  "jimdo.com", "jimdofree.com",
  "weebly.com",
  "e-monsite.com",
  "webnode.fr", "webnode.com",
  "site123.com",
  "ovh.com", "ovhcloud.com",
  "free.fr",
  "chez.com",
  "ifrance.com",
  "perso.wanadoo.fr",
  "pagesperso-orange.fr",
  "blogger.com", "blogspot.com",
  "tumblr.com",
  "squarespace.com",          // Squarespace = pro visuellement mais souvent amateur dans usage
];

const AGGREGATOR_PATTERNS = [
  "pages-jaunes.fr",
  "pagesjaunes.fr",
  "tripadvisor.fr", "tripadvisor.com",
  "lafourchette.com",
  "thefork.fr",
  "yelp.fr", "yelp.com",
  "facebook.com",
  "instagram.com",
  "google.com/maps",
  "maps.google",
  "michelin.fr",
  "booking.com",
  "airbnb.fr",
  "leboncoin.fr",
  "annuaire.com",
  "hoodspot.fr",
  "societe.com",
  "infogreffe.fr",
];

function detectWebsiteType(url: string | null | undefined): "none" | "amateur" | "aggregator" | "pro" {
  if (!url || url.trim() === "") return "none";

  const normalized = url.toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "");

  for (const pattern of AGGREGATOR_PATTERNS) {
    if (normalized.includes(pattern)) return "aggregator";
  }

  for (const pattern of AMATEUR_PATTERNS) {
    if (normalized.includes(pattern)) return "amateur";
  }

  // Sous-domaine suspicious (ex: monplombier.wixsite.com est déjà capturé,
  // mais on vérifie aussi les .free.fr, .pagesperso, etc.)
  if (normalized.match(/\.free\.fr|\.perso\.|\.chez\.com/)) return "amateur";

  return "pro";
}

// ─── Calcul du score de potentiel commercial ─────────────────────────────────
//
// Logique : plus le prospect a besoin de nos services, plus le score est élevé.
// Un score élevé = opportunité de vente forte.
//
// Barème :
//   Présence web (max 35 pts)
//     none       → +35  (pas de site = besoin urgent)
//     amateur    → +25  (site de merde = refonte facile à vendre)
//     aggregator → +20  (dépend d'un tiers = argument autonomie)
//     pro        → +5   (site pro = moins de levier, mais SEO/perf possible)
//
//   Réputation Google (max 25 pts)
//     pas de note  → +20  (réputation inconnue, à construire)
//     < 3.5        → +25  (urgence gestion d'image)
//     3.5 – 4.0   → +15
//     4.0 – 4.5   → +5
//     ≥ 4.5        → +0   (client satisfait, moins de levier)
//
//   Réseaux sociaux (max 15 pts)
//     absent       → +15
//     présent      → +0
//
//   Contactabilité (max 15 pts)
//     téléphone    → +10  (on peut les appeler directement)
//     email        → +5
//
//   Score max théorique : 35 + 25 + 15 + 10 + 5 = 90

function calculateScore(p: {
  website?: string | null;
  rating?: number | string | null;
  hasSocialMedia?: boolean;
  phone?: string | null;
  email?: string | null;
}): number {
  let score = 0;

  // Présence web
  const webType = detectWebsiteType(p.website);
  if (webType === "none")        score += 35;
  else if (webType === "amateur")    score += 25;
  else if (webType === "aggregator") score += 20;
  else                               score += 5;  // pro

  // Réputation Google
  const rating = p.rating != null ? parseFloat(String(p.rating)) : null;
  if (rating === null)      score += 20;
  else if (rating < 3.5)    score += 25;
  else if (rating < 4.0)    score += 15;
  else if (rating < 4.5)    score += 5;
  // ≥ 4.5 → +0

  // Réseaux sociaux
  if (!p.hasSocialMedia) score += 15;

  // Contactabilité
  if (p.phone) score += 10;
  if (p.email) score += 5;

  return Math.min(score, 100);
}

// ─── Composant ───────────────────────────────────────────────────────────────

export default function Admin() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState<{ total: number; violet: number; bleu: number; orange: number; rouge: number } | null>(null);
  const bulkInsertMutation = trpc.prospectsPotentiels.bulkInsert.useMutation();

  if (user?.role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Accès Refusé</h1>
          <p className="text-gray-600 mt-2">Vous n'avez pas les permissions d'accès à cette page.</p>
        </div>
      </div>
    );
  }

  const handleInsertProspects = async () => {
    try {
      setIsLoading(true);
      setProgress(0);
      setStats(null);

      const response = await fetch("/prospects.json");
      const raw = await response.json();

      const sectorMap: Record<string, string> = {
        "Restauration": "restaurants",
        "Artisans": "artisans",
        "Sport": "sport/bien-être",
        "Sport/Bien-Être": "sport/bien-être",
        "BTP": "BTP",
        "Autre": "autre",
      };

      const prospects = raw.map((p: any) => {
        const websiteType = detectWebsiteType(p.website);
        const score = calculateScore({
          website: p.website,
          rating: p.rating,
          hasSocialMedia: p.hasSocialMedia ?? false,
          phone: p.phone,
          email: p.email,
        });

        return {
          name: p.name,
          address: p.address,
          phone: p.phone ?? null,
          email: p.email ?? null,
          sector: sectorMap[p.sector] || "autre",
          latitude: p.latitude,
          longitude: p.longitude,
          city: p.city || "Caen",
          website: p.website ?? null,
          websiteType,
          hasWebsite: websiteType !== "none",
          hasActiveWebsite: websiteType === "pro" || websiteType === "amateur",
          hasSocialMedia: p.hasSocialMedia ?? false,
          rating: p.rating ?? null,
          reviewCount: p.reviewCount ?? 0,
          score,
          webVisibilityScore: score,
          notes: p.notes ?? null,
          status: "nouveau",
        };
      });

      // Stats de prévisualisation
      const scores = prospects.map((p: any) => p.score);
      setStats({
        total: prospects.length,
        violet: scores.filter((s: number) => s >= 55).length,
        bleu:   scores.filter((s: number) => s >= 38 && s < 55).length,
        orange: scores.filter((s: number) => s >= 22 && s < 38).length,
        rouge:  scores.filter((s: number) => s < 22).length,
      });

      // Insertion par batch de 50
      const batchSize = 50;
      for (let i = 0; i < prospects.length; i += batchSize) {
        await bulkInsertMutation.mutateAsync(prospects.slice(i, i + batchSize));
        setProgress(Math.min(100, Math.round((i + batchSize) / prospects.length * 100)));
      }

      toast.success(`✅ ${prospects.length} prospects insérés avec scores calculés !`);
    } catch (error) {
      console.error(error);
      toast.error("❌ Erreur lors de l'insertion");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
        <p className="text-gray-600 mt-1">Gérez les données du système</p>
      </div>

      <Card className="p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Insertion en masse des prospects</h2>
          <p className="text-sm text-gray-500">
            Importe les 712 prospects de Caen avec scoring automatique basé sur la présence web,
            la réputation Google et la disponibilité des contacts.
          </p>
        </div>

        {/* Légende du scoring */}
        <div className="bg-slate-50 rounded-lg p-4 text-xs space-y-1.5 border border-slate-200">
          <p className="font-semibold text-slate-700 mb-2">Barème de scoring</p>
          {[
            { label: "Pas de site web", pts: "+35", color: "text-purple-700" },
            { label: "Site amateur (Wix, Jimdo, free.fr…)", pts: "+25", color: "text-purple-600" },
            { label: "Agrégateur seulement (PagesJaunes, TripAdvisor…)", pts: "+20", color: "text-blue-600" },
            { label: "Note Google < 3.5 ★", pts: "+25", color: "text-red-600" },
            { label: "Note Google absente", pts: "+20", color: "text-orange-600" },
            { label: "Note Google 3.5–4.0 ★", pts: "+15", color: "text-orange-500" },
            { label: "Pas de réseaux sociaux", pts: "+15", color: "text-slate-600" },
            { label: "Téléphone disponible", pts: "+10", color: "text-green-600" },
            { label: "Email disponible", pts: "+5", color: "text-green-500" },
          ].map(({ label, pts, color }) => (
            <div key={label} className="flex justify-between">
              <span className="text-slate-600">{label}</span>
              <span className={`font-bold ${color}`}>{pts}</span>
            </div>
          ))}
        </div>

        {/* Barre de progression */}
        {isLoading && (
          <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="h-2.5 rounded-full bg-purple-600 transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">{progress}% inséré…</p>
          </div>
        )}

        {/* Stats après insertion */}
        {stats && (
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { label: "Violet ≥55", value: stats.violet, bg: "bg-purple-100 text-purple-700" },
              { label: "Bleu 38-54", value: stats.bleu,   bg: "bg-blue-100 text-blue-700" },
              { label: "Orange 22-37", value: stats.orange, bg: "bg-orange-100 text-orange-700" },
              { label: "Rouge <22", value: stats.rouge,   bg: "bg-red-100 text-red-700" },
            ].map(({ label, value, bg }) => (
              <div key={label} className={`rounded-lg p-2 ${bg}`}>
                <div className="font-bold text-lg">{value}</div>
                <div>{label}</div>
              </div>
            ))}
          </div>
        )}

        <Button
          onClick={handleInsertProspects}
          disabled={isLoading}
          className="bg-purple-700 hover:bg-purple-800 text-white w-full"
        >
          {isLoading ? `Insertion en cours… ${progress}%` : "Insérer les 712 prospects (avec scoring)"}
        </Button>
      </Card>
    </div>
  );
}
