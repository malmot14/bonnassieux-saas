import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Image, BookOpen, Copy, Search } from "lucide-react";
import { toast } from "sonner";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const phoneScripts = {
  artisans: {
    title: "Script pour Artisans",
    content: `"Bonjour [Prénom], c'est [Votre Nom] de Bonnassieux Agency. Je vous appelle parce que j'ai remarqué que votre présence en ligne pourrait être nettement améliorée. Vous avez 30 secondes ?

Votre travail est excellent, mais peu de gens le savent. On peut transformer ça en clients concrets en 2-3 semaines. Vous avez 10 minutes jeudi ou vendredi pour en parler ?"`,
  },
  restaurants: {
    title: "Script pour Restaurants",
    content: `"Bonjour [Prénom], c'est [Votre Nom] de Bonnassieux Agency. Je vous appelle parce que j'ai remarqué que votre présence en ligne pourrait être nettement améliorée. Vous avez 30 secondes ?

Votre restaurant a une excellente réputation, mais vous perdez des clients qui ne vous trouvent pas en ligne. On peut changer ça rapidement. Ça vous intéresse ?"`,
  },
  btp: {
    title: "Script pour BTP",
    content: `"Bonjour [Prénom], c'est [Votre Nom] de Bonnassieux Agency. Je vous appelle parce que j'ai remarqué que votre présence en ligne pourrait être nettement améliorée. Vous avez 30 secondes ?

Vous perdez des chantiers parce que vous n'êtes pas visible en ligne. On peut changer ça rapidement. Ça vous intéresse ?"`,
  },
  coaching: {
    title: "Script pour Coaching Mental",
    content: `"Bonjour [Prénom], c'est [Votre Nom] de Bonnassieux Agency. Je vous appelle parce que j'ai remarqué une opportunité pour vous. Vous avez 30 secondes ?

Les athlètes et structures sportives cherchent des coachs mentaux. On peut vous mettre en face de ces prospects qualifiés. Vous avez 15 min pour discuter ?"`,
  },
};

const presentationImages = [
  {
    title: "Le Problème",
    description: "Montre la situation actuelle (site obsolète, pas de visibilité)",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604329874/B3pH6shsDLwQYFDivWqoEG/bonnassieux_crm_slide_1_problem-3ovwJgUTcsM6DnTWtaDpWd.webp",
  },
  {
    title: "La Solution",
    description: "Affiche le CRM Bonnassieux avec les résultats réels",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604329874/B3pH6shsDLwQYFDivWqoEG/bonnassieux_crm_slide_2_solution-NhAhX6wKUczcbxGo5waFsu.webp",
  },
  {
    title: "Vos Bénéfices",
    description: "4 bénéfices clés avec chiffres concrets",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604329874/B3pH6shsDLwQYFDivWqoEG/bonnassieux_crm_slide_3_benefits-iHPH4vMQhHbH3UhNQ2Axxf.webp",
  },
  {
    title: "Comment ça marche",
    description: "Les 3 étapes (Diagnostic → Stratégie → Résultats)",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604329874/B3pH6shsDLwQYFDivWqoEG/bonnassieux_crm_slide_4_process-mkHueZLyy2YP3sAnf39xGT.webp",
  },
  {
    title: "Appel à l'Action",
    description: "Slide de fermeture avec CTA fort",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604329874/B3pH6shsDLwQYFDivWqoEG/bonnassieux_crm_slide_5_cta-GYXChMsQS7n5yoZ675RxWP.webp",
  },
];

export default function CommunicationTools() {
  const [copiedScript, setCopiedScript] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredScripts = useMemo(() => {
    return Object.entries(phoneScripts).filter(([key, script]) =>
      key.toLowerCase().includes(searchTerm) ||
      script.title.toLowerCase().includes(searchTerm) ||
      script.content.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  const copyToClipboard = (text: string, scriptName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(scriptName);
    toast.success("Script copié dans le presse-papiers !");
    setTimeout(() => setCopiedScript(null), 2000);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Outils de Communication</h1>
          <p className="text-slate-600">
            Tous les scripts et visuels pour réussir vos appels et RDV commerciaux
          </p>
        </div>

        <Tabs defaultValue="scripts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scripts" className="flex items-center gap-2">
              <Phone size={18} />
              Scripts Téléphoniques
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <Image size={18} />
              Visuels RDV
            </TabsTrigger>
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <BookOpen size={18} />
              Guide Complet
            </TabsTrigger>
          </TabsList>

          {/* SCRIPTS TÉLÉPHONIQUES */}
          <TabsContent value="scripts" className="space-y-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 max-w-md">
                <Search size={18} className="text-slate-400" />
                <Input
                  placeholder="Rechercher un script (ex: artisans, restaurants)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                  className="flex-1"
                />
              </div>
            </div>

            {filteredScripts.length === 0 ? (
              <div className="col-span-full text-center py-8 text-slate-500">
                <p>Aucun script ne correspond à votre recherche.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredScripts.map(([key, script]) => (
                  <Card key={key} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{script.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                          {script.content}
                        </p>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(script.content, key)}
                        variant={copiedScript === key ? "default" : "outline"}
                        className="w-full flex items-center gap-2"
                      >
                        <Copy size={18} />
                        {copiedScript === key ? "Copié !" : "Copier le script"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Card className="border-0 shadow-md bg-blue-50 border-l-4 border-blue-600">
              <CardHeader>
                <CardTitle className="text-base text-blue-900">💡 Conseil</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-800">
                <p>
                  <strong>Timing idéal :</strong> 30-40 secondes pour l'accroche. Parlez lentement et clairement.
                  Utilisez le prénom du prospect. Proposez 2 créneaux précis pour le RDV.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* VISUELS RDV */}
          <TabsContent value="images" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {presentationImages.map((image, index) => (
                <Card key={index} className="border-0 shadow-md overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 pb-3">
                    <CardTitle className="text-lg">{image.title}</CardTitle>
                    <p className="text-sm text-slate-600 mt-1">{image.description}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-md bg-green-50 border-l-4 border-green-600">
              <CardHeader>
                <CardTitle className="text-base text-green-900">💡 Conseil</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-green-800">
                <p>
                  <strong>Astuce :</strong> Montrez les images sur votre téléphone ou tablette en RDV. C'est plus
                  intime et professionnel. Respectez le timing : 15-20 minutes max pour la présentation complète.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GUIDE COMPLET */}
          <TabsContent value="guide" className="space-y-4">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Guide Complet de Présentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">📞 Structure de la Présentation</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>✅ <strong>Slide 1 - Le Problème</strong> (2-3 min) : Identifiez la situation du prospect</li>
                      <li>✅ <strong>Slide 2 - La Solution</strong> (3-4 min) : Montrez le CRM et les résultats</li>
                      <li>✅ <strong>Slide 3 - Vos Bénéfices</strong> (3-4 min) : Chiffres concrets (visibilité, leads, conversions, revenus)</li>
                      <li>✅ <strong>Slide 4 - Comment ça marche</strong> (3-4 min) : Les 3 étapes (Diagnostic → Stratégie → Résultats)</li>
                      <li>✅ <strong>Slide 5 - Appel à l'Action</strong> (2-3 min) : Proposez le diagnostic gratuit</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-slate-900 mb-2">✅ À FAIRE</h3>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>📱 Montrer les images sur votre téléphone ou tablette</li>
                      <li>👁️ Maintenir le contact visuel</li>
                      <li>💬 Parler lentement et clairement</li>
                      <li>🤝 Vous asseoir à côté du prospect, pas face à face</li>
                      <li>⏰ Respecter le timing (15-20 min max)</li>
                      <li>📝 Prendre des notes pendant qu'il parle</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-slate-900 mb-2">❌ À ÉVITER</h3>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>🚫 Lire les slides mot à mot</li>
                      <li>🚫 Parler trop vite</li>
                      <li>🚫 Utiliser du jargon technique</li>
                      <li>🚫 Rester debout (moins convivial)</li>
                      <li>🚫 Dépasser 20 minutes</li>
                      <li>🚫 Faire pression pour une décision immédiate</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-slate-900 mb-2">🎯 Gestion des Objections</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-slate-800">"C'est trop cher"</p>
                        <p className="text-slate-600">
                          "Je comprends. Mais regardez : vous investissez 500€/mois et vous gagnez 150k€ de CA supplémentaire. C'est un ROI de 300x."
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">"Je n'ai pas le temps"</p>
                        <p className="text-slate-600">
                          "Justement. Notre outil vous en fait gagner. Vous gérez tout depuis votre téléphone. 10 min par jour max."
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">"Je vais réfléchir"</p>
                        <p className="text-slate-600">
                          "Bien sûr. Mais pendant que vous réfléchissez, vos concurrents agissent. Pourquoi pas un diagnostic gratuit jeudi ?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-purple-50 border-l-4 border-purple-600">
              <CardHeader>
                <CardTitle className="text-base text-purple-900">📊 Taux de Succès Cible</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-purple-800">
                <ul className="space-y-1">
                  <li>📞 <strong>Taux de réponse :</strong> 30-40%</li>
                  <li>📅 <strong>Taux de RDV pris :</strong> 50-60% des appels réussis</li>
                  <li>✅ <strong>Taux de conversion RDV :</strong> 50%+ en clients</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
