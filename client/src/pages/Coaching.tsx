import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Plus, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Coaching() {
  const { data: leads, isLoading } = trpc.leads.list.useQuery();
  const coachingLeads = leads?.filter(l => l.leadType === "Coaching Mental") || [];
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  const regions = Array.from(new Set(coachingLeads.map(l => l.region).filter(Boolean)));
  const filteredLeads = selectedRegion
    ? coachingLeads.filter(l => l.region === selectedRegion)
    : coachingLeads;

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Coaching Mental</h1>
            <p className="text-slate-600">Gestion nationale des prospects en coaching mental</p>
          </div>
          <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
            <Plus size={20} />
            Nouveau Prospect
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Users size={18} className="text-purple-600" />
                Prospects Actifs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{coachingLeads.length}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <MapPin size={18} className="text-purple-600" />
                Régions Couvertes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{regions.length}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Users size={18} className="text-purple-600" />
                Signés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {coachingLeads.filter(l => l.status === "Signé").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        {regions.length > 0 && (
          <div className="mb-6 flex gap-2 flex-wrap">
            <span className="text-sm font-medium text-slate-600 py-2">Région:</span>
            <Button
              variant={!selectedRegion ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedRegion(null)}
            >
              Toutes
            </Button>
            {regions.map(region => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
              >
                {region}
              </Button>
            ))}
          </div>
        )}

        {/* Leads List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.length > 0 ? (
            filteredLeads.map(lead => (
              <Card key={lead.id} className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-slate-900">{lead.name}</CardTitle>
                  <p className="text-xs text-slate-500 mt-1">{lead.region || "Non spécifiée"}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Statut:</span>
                    <span className="text-sm font-semibold text-slate-900">{lead.status}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Voir les détails
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600 text-lg">Aucun prospect trouvé</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
