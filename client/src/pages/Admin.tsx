import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export default function Admin() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const bulkInsertMutation = trpc.prospectsPotentiels.bulkInsert.useMutation();

  // Vérifier que l'utilisateur est admin
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

      // Charger le fichier JSON des prospects
      const response = await fetch("/prospects.json");
      let prospects = await response.json();

      // Transformer les données pour correspondre au schéma
      const sectorMap: Record<string, string> = {
        "Restauration": "restaurants",
        "Artisans": "artisans",
        "Sport": "sport/bien-être",
        "Sport/Bien-Être": "sport/bien-être",
        "BTP": "BTP",
        "Autre": "autre",
      };

      prospects = prospects.map((p: any) => ({
        name: p.name,
        address: p.address,
        phone: p.phone,
        email: p.email,
        sector: sectorMap[p.sector] || "autre",
        latitude: p.latitude,
        longitude: p.longitude,
        score: p.score || 50,
        city: p.city || "Caen",
        website: p.website,
        hasWebsite: !!p.website,
        hasActiveWebsite: !!p.website,
        hasSocialMedia: false,
        webVisibilityScore: p.score || 50,
        notes: p.notes,
        status: "nouveau",
      }));

      console.log(`📊 ${prospects.length} prospects à insérer`);

      // Insérer par batch de 50
      const batchSize = 50;
      for (let i = 0; i < prospects.length; i += batchSize) {
        const batch = prospects.slice(i, i + batchSize);

        // Appeler la procédure tRPC pour insérer le batch
        await bulkInsertMutation.mutateAsync(batch);

        const currentProgress = Math.min(100, Math.round((i + batchSize) / prospects.length * 100));
        setProgress(currentProgress);
        console.log(`✅ Batch ${Math.floor(i / batchSize) + 1} inséré (${Math.min(i + batchSize, prospects.length)}/${prospects.length})`);
      }

      setProgress(100);
      toast.success(`✅ ${prospects.length} prospects insérés avec succès !`);
    } catch (error) {
      console.error("Erreur lors de l'insertion:", error);
      toast.error("❌ Erreur lors de l'insertion des prospects");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
        <p className="text-gray-600 mt-1">Gérez les données du système</p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Insertion en Masse des Prospects</h2>
        <p className="text-gray-600 mb-4">
          Insérez les 712 prospects de Caen et sa banlieue en base de données.
        </p>

        {isLoading && (
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-blue-600 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{progress}% complété</p>
          </div>
        )}

        <Button
          onClick={handleInsertProspects}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isLoading ? "Insertion en cours..." : "Insérer les 712 Prospects"}
        </Button>
      </Card>

    </div>
  );
}
