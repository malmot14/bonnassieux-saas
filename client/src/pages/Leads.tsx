import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Loader2 } from "lucide-react";
import { useState } from "react";
import LeadForm from "@/components/LeadForm";
import LeadCard from "@/components/LeadCard";

export default function Leads() {
  const { data: leads, isLoading, refetch } = trpc.leads.list.useQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filteredLeads = leads?.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = !selectedSector || lead.sector === selectedSector;
    const matchesStatus = !selectedStatus || lead.status === selectedStatus;
    return matchesSearch && matchesSector && matchesStatus;
  }) || [];

  const sectors = ["artisans", "restaurants", "sport/bien-être", "BTP"];
  const statuses = ["À visiter", "En cours", "Signé", "Perdu"];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Gestion des Leads</h1>
            <p className="text-slate-600">Gérez vos prospects et suivez votre prospection</p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Plus size={20} />
            Nouveau Lead
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <Card className="mb-8 p-6 border-0 shadow-md">
            <LeadForm
              onSuccess={() => {
                setShowForm(false);
                refetch();
              }}
            />
          </Card>
        )}

        {/* Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <Input
                placeholder="Rechercher un prospect..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <div className="flex gap-2">
              <span className="text-sm font-medium text-slate-600 py-2">Secteur:</span>
              <Button
                variant={!selectedSector ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSector(null)}
              >
                Tous
              </Button>
              {sectors.map(sector => (
                <Button
                  key={sector}
                  variant={selectedSector === sector ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSector(sector)}
                  className="capitalize"
                >
                  {sector}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <div className="flex gap-2">
              <span className="text-sm font-medium text-slate-600 py-2">Statut:</span>
              <Button
                variant={!selectedStatus ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(null)}
              >
                Tous
              </Button>
              {statuses.map(status => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.length > 0 ? (
            filteredLeads.map(lead => (
              <LeadCard key={lead.id} lead={lead} onUpdate={refetch} />
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
