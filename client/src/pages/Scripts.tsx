import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = ["artisans", "restaurants", "sport/bien-être", "BTP"];

export default function Scripts() {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Bibliothèque de Scripts</h1>
            <p className="text-slate-600">Accédez rapidement à vos scripts de vente par secteur</p>
          </div>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus size={20} />
            Nouveau Script
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector) => (
            <Card key={sector} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center gap-2 capitalize">
                  <BookOpen size={20} className="text-blue-600" />
                  {sector}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm font-medium text-slate-700 mb-1">Script par défaut</p>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      Cliquez pour voir le script complet et le personnaliser...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
