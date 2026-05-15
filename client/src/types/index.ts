export interface Lead {
  id: number;
  userId: number;
  name: string;
  sector: "artisans" | "restaurants" | "sport/bien-être" | "BTP" | "autre";
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  status: "À visiter" | "En cours" | "Signé" | "Perdu";
  priority: "haute" | "moyenne" | "basse";
  problemDescription?: string | null;
  salesPitch?: string | null;
  leadType: "CM" | "Coaching Mental";
  region?: string | null;
  latitude?: string | number | null;
  longitude?: string | number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Interaction {
  id: number;
  leadId: number;
  userId: number;
  type: "appel" | "visite" | "email" | "message" | "autre";
  notes?: string;
  outcome?: "positif" | "neutre" | "négatif";
  nextAction?: string;
  nextActionDate?: Date;
  createdAt: Date;
}

export interface SalesScript {
  id: number;
  sector: "artisans" | "restaurants" | "sport/bien-être" | "BTP";
  title: string;
  content: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Diagnostic {
  id: number;
  leadId: number;
  website: string;
  seoScore?: number;
  mobileScore?: number;
  socialMediaScore?: number;
  speedScore?: number;
  diagnosis?: string;
  recommendations?: string;
  generatedPitch?: string;
  createdAt: Date;
}
