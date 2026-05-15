import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Star, MapPin, Globe, Phone, Mail, Plus, Users, TrendingUp, MessageCircle, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Calendar, Clock, FileText } from "lucide-react";
import { MapView } from "@/components/Map";
import { useEffect, useState, useRef } from "react";
import { getScoreColor, getMarkerColor, getScoreDescription } from "@/lib/scoring";

interface Prospect {
  id?: number;
  name: string;
  sector: string;
  address: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  score: number;
  category?: string;
  website?: string;
  websiteType?: "none" | "amateur" | "aggregator" | "pro";
  rating?: number | null;
  hasSocialMedia?: boolean;
}

export default function ProspectsPotentiels() {
  // Charger les prospects depuis la base de données
  const { data: dbProspects = [], isLoading } = trpc.prospects.list.useQuery();
  const convertToLeadMutation = trpc.prospectsPotentiels.convertToLead.useMutation();
  
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [hotOnly, setHotOnly] = useState(false);
  const [siteWebPriority, setSiteWebPriority] = useState(false);
  const [convertedProspectIds, setConvertedProspectIds] = useState<Set<number>>(new Set());
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const mapRef = useRef<google.maps.Map | null>(null);
  const prospectDetailRef = useRef<HTMLDivElement>(null);
  // Refs pour gérer proprement les marqueurs et info-windows
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const [mapReady, setMapReady] = useState(false);
  const [miniCardProspect, setMiniCardProspect] = useState<Prospect | null>(null);

  // Mettre à jour les prospects quand les données de la BD arrivent
  useEffect(() => {
    if (dbProspects && dbProspects.length > 0) {
      const mappedProspects = dbProspects.map((p: any) => ({
        id: p.id,
        name: p.name,
        sector: p.sector,
        address: p.address || "",
        phone: p.phone || "",
        email: p.email || "",
        latitude: typeof p.latitude === 'string' ? parseFloat(p.latitude) : p.latitude,
        longitude: typeof p.longitude === 'string' ? parseFloat(p.longitude) : p.longitude,
        score: typeof p.score === 'string' ? parseInt(p.score) : (p.score || p.webVisibilityScore || 0),
        category: p.category,
        website: p.website,
        websiteType: p.websiteType || "none",
        rating: p.rating != null ? parseFloat(String(p.rating)) : null,
        hasSocialMedia: p.hasSocialMedia || false,
      }));
      setProspects(mappedProspects);
    }
  }, [dbProspects]);

  // Filtrer et trier les prospects
  const filteredProspects = prospects
    .filter((prospect) => {
      const matchesSearch =
        prospect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prospect.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prospect.sector.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = sectorFilter === "all" || prospect.sector === sectorFilter;
      const matchesHot = !hotOnly || prospect.score >= 60;
      const matchesSiteWeb = !siteWebPriority || (
        (prospect.sector === "artisans" || prospect.sector === "sport/bien-être") &&
        (prospect.websiteType === "none" || prospect.websiteType === "amateur")
      );
      return matchesSearch && matchesSector && matchesHot && matchesSiteWeb;
    })
    .sort((a, b) => b.score - a.score);

  // Obtenir les secteurs uniques
  const sectors = Array.from(new Set(prospects.map((p) => p.sector)));

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => { marker.map = null; });
    markersRef.current = [];
  };

  // Recréer les marqueurs quand les filtres changent OU quand la carte est prête
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;

    clearMarkers();

    filteredProspects.filter(p => p.latitude != null && p.longitude != null && !isNaN(p.latitude) && !isNaN(p.longitude)).forEach((prospect, index) => {
      const pinDiv = document.createElement("div");
      pinDiv.style.cssText = `
        width:38px;height:38px;border-radius:50%;
        background-color:${getMarkerColor(prospect.score)};
        display:flex;align-items:center;justify-content:center;
        color:white;font-weight:bold;font-size:13px;
        border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.35);
        cursor:pointer;transition:transform 0.15s;`;
      pinDiv.textContent = String(index + 1);
      pinDiv.onmouseenter = () => { pinDiv.style.transform = "scale(1.2)"; };
      pinDiv.onmouseleave = () => { pinDiv.style.transform = "scale(1)"; };

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: { lat: prospect.latitude, lng: prospect.longitude },
        title: prospect.name,
        content: pinDiv,
      });

      marker.addListener("click", () => {
        setMiniCardProspect(prospect);
        mapRef.current!.panTo({ lat: prospect.latitude, lng: prospect.longitude });
      });

      markersRef.current.push(marker);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProspects, mapReady]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des prospects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prospects Potentiels</h1>
          <p className="text-gray-600 mt-1">Découvrez les entreprises réelles de Caen avec le plus fort potentiel commercial</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{height: '700px'}}>
        {/* Carte */}
        <div className="lg:col-span-2 h-full">
          <Card className="p-0 h-full relative overflow-hidden">
            <MapView
              className="w-full h-full"
              initialCenter={{ lat: 49.1829, lng: -0.3623 }}
              initialZoom={12}
              onMapReady={(map) => {
                mapRef.current = map;
                setMapReady(true);
              }}
            />

            {/* Mini fiche flottante */}
            {miniCardProspect && (
              <div className="absolute bottom-6 left-4 z-20 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-2 duration-200">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 mr-2">
                      <h3 className="font-bold text-gray-900 text-sm leading-tight">{miniCardProspect.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5 capitalize">{miniCardProspect.sector}</p>
                    </div>
                    <button
                      onClick={() => setMiniCardProspect(null)}
                      className="text-gray-400 hover:text-gray-600 text-lg leading-none flex-shrink-0 font-light"
                    >✕</button>
                  </div>

                  <Badge className={`${getScoreColor(miniCardProspect.score)} text-xs mb-2`}>
                    {miniCardProspect.score}/100
                  </Badge>

                  {miniCardProspect.address && (
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2 flex items-start gap-1">
                      <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5 text-gray-400" />
                      {miniCardProspect.address}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 h-8 text-xs"
                      onClick={() => {
                        if (miniCardProspect.phone) window.location.href = `tel:${miniCardProspect.phone}`;
                        else toast.error("Pas de téléphone disponible");
                      }}
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Appeler
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 h-8 text-xs"
                      onClick={() => {
                        if (miniCardProspect.email) window.location.href = `mailto:${miniCardProspect.email}`;
                        else toast.error("Pas d'email disponible");
                      }}
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => {
                        setSelectedProspect(miniCardProspect);
                        setMiniCardProspect(null);
                        setTimeout(() => {
                          prospectDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 100);
                      }}
                    >
                      <ChevronRight className="w-3 h-3 mr-1" />
                      Fiche
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Panneau de droite */}
        <div className="flex flex-col gap-4 h-full overflow-hidden">
          {/* Recherche et filtres */}
          <Card className="p-4 space-y-4 flex-shrink-0">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher par nom, secteur ou adresse...</label>
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secteur</label>
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">Tous les secteurs</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setHotOnly(!hotOnly)}
              className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold border transition-colors ${
                hotOnly
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              {hotOnly ? "Chauds uniquement (≥60)" : "Tous les prospects"}
            </button>

            <button
              onClick={() => setSiteWebPriority(!siteWebPriority)}
              className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold border transition-colors ${
                siteWebPriority
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <Globe className="w-4 h-4" />
              {siteWebPriority ? "Priorité site web ✓" : "Priorité site web"}
            </button>

            <div className="text-sm text-gray-600">
              {filteredProspects.length} prospect{filteredProspects.length !== 1 ? "s" : ""} trouvé{filteredProspects.length !== 1 ? "s" : ""}
            </div>
          </Card>

          {/* Liste des prospects */}
          <div className="space-y-3 flex-1 overflow-y-auto min-h-0">
            {filteredProspects.map((prospect, index) => (
              <Card
                key={prospect.id || index}
                className={`p-3 cursor-pointer transition-all ${
                  miniCardProspect?.name === prospect.name
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setMiniCardProspect(prospect);
                  if (mapRef.current && prospect.latitude != null && prospect.longitude != null && !isNaN(prospect.latitude) && !isNaN(prospect.longitude)) {
                    mapRef.current.panTo({ lat: prospect.latitude, lng: prospect.longitude });
                    mapRef.current.setZoom(17);
                  }
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{index + 1}</span>
                      <h3 className="font-semibold text-gray-900">{prospect.name}</h3>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{prospect.sector}</p>
                    <Badge className={`mt-2 ${getScoreColor(prospect.score)}`}>
                      {prospect.score}/100
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Détails du prospect sélectionné */}
      {selectedProspect && (
        <Card ref={prospectDetailRef} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Colonne 1: Informations de base */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProspect.name}</h2>
                <Badge className={`${getScoreColor(selectedProspect.score)} text-xs font-semibold`}>
                  {getScoreDescription(selectedProspect.score)}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600 font-semibold uppercase">Adresse</p>
                    <p className="text-sm text-gray-900 font-medium break-words">{selectedProspect.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600 font-semibold uppercase">Téléphone</p>
                    <a href={`tel:${selectedProspect.phone}`} className="text-sm text-blue-600 hover:underline font-semibold">
                      {selectedProspect.phone || "Non disponible"}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Mail className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600 font-semibold uppercase">Email</p>
                    <a href={`mailto:${selectedProspect.email}?subject=Prise%20de%20contact%20-%20${encodeURIComponent(selectedProspect.name)}&body=Bonjour%20${encodeURIComponent(selectedProspect.name)},%0A%0AJ'aimerais%20discuter%20de%20nos%20services%20avec%20vous.%0A%0ACordialement`} className="text-sm text-blue-600 hover:underline font-semibold break-all">
                      {selectedProspect.email || "Non disponible"}
                    </a>
                  </div>
                </div>

                {selectedProspect.website && (
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <Globe className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 font-semibold uppercase">Site web</p>
                      <a href={selectedProspect.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline font-semibold break-all">
                        {selectedProspect.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Colonne 2: Secteur et Score */}
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase">Secteur d'activité</h3>
                <Badge className="bg-blue-100 text-blue-800 text-xs font-semibold">{selectedProspect.sector}</Badge>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase">Score de Potentiel</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: `${selectedProspect.score}%`,
                          backgroundColor: getMarkerColor(selectedProspect.score),
                        }}
                      ></div>
                    </div>
                    <span className="font-bold text-lg text-gray-900 w-12 text-right">{selectedProspect.score}%</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{getScoreDescription(selectedProspect.score)}</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase">Angle d'attaque</h3>
                <div className="space-y-2.5 text-xs">

                  {/* Présence web — message adapté au secteur */}
                  {selectedProspect.websiteType === "none" && (() => {
                    const s = selectedProspect.sector;
                    const isArtisan = s === "artisans";
                    const isCoach = s === "sport/bien-être";
                    const isResto = s === "restaurants";
                    return (
                      <div className="flex items-start gap-2">
                        <AlertCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isArtisan ? "text-red-500" : isCoach ? "text-red-400" : "text-gray-400"}`} />
                        <div>
                          <span className="font-semibold text-gray-700">Site web : </span>
                          <span className="text-gray-600">
                            {isArtisan && "Aucun site — clients cherchent sur Google, vous êtes invisible"}
                            {isCoach && "Aucun site — proposer réservation en ligne + vitrine"}
                            {isResto && "Pas de site dédié — axer sur menu en ligne + prise de réservation"}
                            {!isArtisan && !isCoach && !isResto && "Aucun site — proposer création vitrine"}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                  {selectedProspect.websiteType === "amateur" && (() => {
                    const isArtisan = selectedProspect.sector === "artisans";
                    return (
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gray-700">Site web : </span>
                          <span className="text-gray-600">
                            {isArtisan
                              ? "Site amateur (Wix/WordPress) — perd en crédibilité face aux concurrents"
                              : "Site amateur — proposer refonte professionnelle"}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                  {selectedProspect.websiteType === "aggregator" && (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Site web : </span><span className="text-gray-600">Annuaire uniquement — proposer site indépendant pour ne plus dépendre d'un tiers</span></div>
                    </div>
                  )}
                  {selectedProspect.websiteType === "pro" && (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Site web : </span><span className="text-gray-600">Site pro existant — axer sur SEO ou refonte si ancien</span></div>
                    </div>
                  )}

                  {/* Réputation Google */}
                  {selectedProspect.rating != null && selectedProspect.rating >= 4.5 && (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réputation : </span><span className="text-gray-600">Excellente ({selectedProspect.rating}★) — valoriser et amplifier</span></div>
                    </div>
                  )}
                  {selectedProspect.rating != null && selectedProspect.rating >= 4.0 && selectedProspect.rating < 4.5 && (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réputation : </span><span className="text-gray-600">Bonne ({selectedProspect.rating}★) — optimiser la gestion d'avis</span></div>
                    </div>
                  )}
                  {selectedProspect.rating != null && selectedProspect.rating >= 3.5 && selectedProspect.rating < 4.0 && (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réputation : </span><span className="text-gray-600">Moyenne ({selectedProspect.rating}★) — accompagnement gestion d'image</span></div>
                    </div>
                  )}
                  {selectedProspect.rating != null && selectedProspect.rating < 3.5 && (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réputation : </span><span className="text-gray-600">Fragile ({selectedProspect.rating}★) — urgence gestion d'image</span></div>
                    </div>
                  )}
                  {selectedProspect.rating == null && (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réputation : </span><span className="text-gray-600">Pas d'avis Google — proposer stratégie e-réputation</span></div>
                    </div>
                  )}

                  {/* Réseaux sociaux */}
                  {selectedProspect.hasSocialMedia ? (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réseaux : </span><span className="text-gray-600">Présent — analyser qualité et cohérence du contenu</span></div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Réseaux : </span><span className="text-gray-600">Non vérifié — à contrôler avant le rendez-vous</span></div>
                    </div>
                  )}

                  {/* Contactabilité */}
                  {selectedProspect.phone && selectedProspect.email ? (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Contact : </span><span className="text-gray-600">Tél + email — approche multi-canal possible</span></div>
                    </div>
                  ) : selectedProspect.phone ? (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Contact : </span><span className="text-gray-600">Téléphone uniquement — appel direct recommandé</span></div>
                    </div>
                  ) : selectedProspect.email ? (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Contact : </span><span className="text-gray-600">Email uniquement — pas de contact téléphonique</span></div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div><span className="font-semibold text-gray-700">Contact : </span><span className="text-gray-600">Aucun contact — visite terrain indispensable</span></div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Colonne 3: Actions */}
            <div className="space-y-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 font-semibold"
                disabled={convertToLeadMutation.isPending || (selectedProspect.id ? convertedProspectIds.has(selectedProspect.id) : false)}
                onClick={async () => {
                  if (!selectedProspect.id) {
                    toast.error("Impossible d'ajouter ce prospect");
                    return;
                  }

                  try {
                    await convertToLeadMutation.mutateAsync({ prospectId: selectedProspect.id });
                    setConvertedProspectIds((prev) => new Set(prev).add(selectedProspect.id!));
                    toast.success(`${selectedProspect.name} ajouté à vos leads`);
                  } catch (error) {
                    toast.error("Erreur lors de l'ajout du prospect");
                  }
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                {convertToLeadMutation.isPending
                  ? "Ajout en cours..."
                  : selectedProspect.id && convertedProspectIds.has(selectedProspect.id)
                  ? "Ajouté ✓"
                  : "Ajouter à mes Leads"}
              </Button>

              <div className="grid grid-cols-3 gap-2">
                <Dialog open={showEmailForm} onOpenChange={setShowEmailForm}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full font-semibold text-xs"
                      onClick={() => {
                        setEmailSubject(`Prise de contact - ${selectedProspect.name}`);
                        setEmailBody(`Bonjour ${selectedProspect.name},\n\nJ'aimerais discuter de nos services avec vous.\n\nCordialement`);
                      }}
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Email à {selectedProspect.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-semibold">À :</label>
                        <p className="text-sm text-gray-600 mt-1">{selectedProspect.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold">Sujet :</label>
                        <Input
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          className="mt-1"
                          placeholder="Sujet de l'email"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold">Message :</label>
                        <Textarea
                          value={emailBody}
                          onChange={(e) => setEmailBody(e.target.value)}
                          className="mt-1 h-40"
                          placeholder="Votre message"
                        />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={() => setShowEmailForm(false)}>Annuler</Button>
                        <Button
                          onClick={() => {
                            const mailtoLink = `mailto:${selectedProspect.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                            window.location.href = mailtoLink;
                            toast.success(`Email envoyé à ${selectedProspect.name}`);
                            setShowEmailForm(false);
                          }}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Envoyer
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  className="w-full font-semibold text-xs"
                  onClick={() => {
                    if (selectedProspect.phone) {
                      window.location.href = `tel:${selectedProspect.phone}`;
                      toast.success(`Appel initié vers ${selectedProspect.name}`);
                    } else {
                      toast.error("Pas de téléphone disponible");
                    }
                  }}
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Appeler
                </Button>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs"
                  onClick={() => setShowAppointmentForm(!showAppointmentForm)}
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  RDV
                </Button>
              </div>

              {showAppointmentForm && (
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 space-y-3">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Prendre un rendez-vous
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Date</label>
                      <Input
                        type="date"
                        className="w-full text-xs"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Heure</label>
                      <Input
                        type="time"
                        className="w-full text-xs"
                        defaultValue="10:00"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Durée</label>
                    <select className="w-full px-2 py-1 text-xs border border-gray-300 rounded">
                      <option>15 min</option>
                      <option selected>30 min</option>
                      <option>45 min</option>
                      <option>1 heure</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Lieu</label>
                    <Input
                      type="text"
                      placeholder="Sur site, téléphone..."
                      className="w-full text-xs"
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold">
                    <Calendar className="w-3 h-3 mr-1" />
                    Confirmer le RDV
                  </Button>
                </div>
              )}

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm uppercase flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Notes
                </h3>
                <Textarea
                  placeholder="Ajouter une note sur ce prospect..."
                  className="w-full text-xs h-16 resize-none"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <Button
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
                  onClick={() => {
                    if (newNote.trim()) {
                      toast.success("Note ajoutée");
                      setNewNote("");
                    }
                  }}
                >
                  Ajouter la note
                </Button>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase">Navigation</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      const currentIndex = filteredProspects.findIndex(p => p.name === selectedProspect.name);
                      if (currentIndex > 0) {
                        const prevProspect = filteredProspects[currentIndex - 1];
                        setSelectedProspect(prevProspect);
                        if (mapRef.current) {
                          mapRef.current.setCenter({
                            lat: prevProspect.latitude,
                            lng: prevProspect.longitude,
                          });
                          mapRef.current.setZoom(16);
                        }
                      }
                    }}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Précédent
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      const currentIndex = filteredProspects.findIndex(p => p.name === selectedProspect.name);
                      if (currentIndex < filteredProspects.length - 1) {
                        const nextProspect = filteredProspects[currentIndex + 1];
                        setSelectedProspect(nextProspect);
                        if (mapRef.current) {
                          mapRef.current.setCenter({
                            lat: nextProspect.latitude,
                            lng: nextProspect.longitude,
                          });
                          mapRef.current.setZoom(16);
                        }
                      }
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Suivant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
