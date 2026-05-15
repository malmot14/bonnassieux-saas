import { describe, it, expect } from "vitest";
import {
  calculateProspectScore,
  getScoreColor,
  getMarkerColor,
  getScoreDescription,
  getProspectScoringDetails,
  ScoringCriteria,
} from "./scoring";

describe("Scoring System", () => {
  describe("calculateProspectScore", () => {
    it("should return 25 for a prospect with no website (opportunity!)", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: false,
        hasEmail: false,
      };
      expect(calculateProspectScore(criteria)).toBe(28); // 25 (no site) + 3 (default sector)
    });

    it("should give 15 points for having a website", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: true,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: false,
        hasEmail: false,
      };
      expect(calculateProspectScore(criteria)).toBe(18); // 15 (site) + 3 (default sector)
    });

    it("should give 30 points for having an active website", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: true,
        hasActiveWebsite: true,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: false,
        hasEmail: false,
      };
      expect(calculateProspectScore(criteria)).toBe(33); // 30 (active site) + 3 (default sector)
    });

    it("should give 48 points for having social media (25 no site + 20 social)", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: true,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: false,
        hasEmail: false,
      };
      expect(calculateProspectScore(criteria)).toBe(48); // 25 (no site) + 20 (social) + 3 (default sector)
    });

    it("should give 30 points for having a phone (25 no site + 5 phone)", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: true,
        hasEmail: false,
      };
      expect(calculateProspectScore(criteria)).toBe(33); // 25 (no site) + 5 (phone) + 3 (default sector)
    });

    it("should give 30 points for having an email (25 no site + 5 email)", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: false,
        hasEmail: true,
      };
      expect(calculateProspectScore(criteria)).toBe(33); // 25 (no site) + 5 (email) + 3 (default sector)
    });

    it("should give 35 points for restaurants sector (25 no site + 10 sector)", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "restaurants",
        hasPhone: false,
        hasEmail: false,
      };
      expect(calculateProspectScore(criteria)).toBe(35); // 25 (no site) + 10 (restaurants)
    });

    it("should calculate web visibility score correctly", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 50,
        sector: "autre",
        hasPhone: false,
        hasEmail: false,
      };
      // 25 (no site) + 50% of 30 (visibility) + 3 (default sector) = 25 + 15 + 3 = 43
      expect(calculateProspectScore(criteria)).toBe(43);
    });

    it("should combine all criteria correctly", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: true,
        hasActiveWebsite: true,
        hasSocialMedia: true,
        webVisibilityScore: 100,
        sector: "restaurants",
        hasPhone: true,
        hasEmail: true,
      };
      // 30 (active website) + 20 (social media) + 30 (web visibility) + 10 (contact) + 10 (sector) = 100
      expect(calculateProspectScore(criteria)).toBe(100);
    });

    it("should cap score at 100", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: true,
        hasActiveWebsite: true,
        hasSocialMedia: true,
        webVisibilityScore: 200, // Over 100
        sector: "restaurants",
        hasPhone: true,
        hasEmail: true,
      };
      expect(calculateProspectScore(criteria)).toBe(100);
    });
  });

  describe("getScoreColor", () => {
    it("should return green for score >= 80", () => {
      expect(getScoreColor(80)).toBe("bg-green-100 text-green-800");
      expect(getScoreColor(90)).toBe("bg-green-100 text-green-800");
    });

    it("should return blue for score >= 60 and < 80", () => {
      expect(getScoreColor(60)).toBe("bg-blue-100 text-blue-800");
      expect(getScoreColor(70)).toBe("bg-blue-100 text-blue-800");
    });

    it("should return orange for score >= 40 and < 60", () => {
      expect(getScoreColor(40)).toBe("bg-orange-100 text-orange-800");
      expect(getScoreColor(50)).toBe("bg-orange-100 text-orange-800");
    });

    it("should return red for score < 40", () => {
      expect(getScoreColor(0)).toBe("bg-red-100 text-red-800");
      expect(getScoreColor(39)).toBe("bg-red-100 text-red-800");
    });
  });

  describe("getMarkerColor", () => {
    it("should return green for score >= 80", () => {
      expect(getMarkerColor(80)).toBe("#22c55e");
      expect(getMarkerColor(90)).toBe("#22c55e");
    });

    it("should return blue for score >= 60 and < 80", () => {
      expect(getMarkerColor(60)).toBe("#3b82f6");
      expect(getMarkerColor(70)).toBe("#3b82f6");
    });

    it("should return orange for score >= 40 and < 60", () => {
      expect(getMarkerColor(40)).toBe("#f97316");
      expect(getMarkerColor(50)).toBe("#f97316");
    });

    it("should return red for score < 40", () => {
      expect(getMarkerColor(0)).toBe("#ef4444");
      expect(getMarkerColor(39)).toBe("#ef4444");
    });
  });

  describe("getScoreDescription", () => {
    it("should return 'Excellent potentiel' for score >= 80", () => {
      expect(getScoreDescription(80)).toBe("Excellent potentiel");
      expect(getScoreDescription(100)).toBe("Excellent potentiel");
    });

    it("should return 'Bon potentiel' for score >= 60 and < 80", () => {
      expect(getScoreDescription(60)).toBe("Bon potentiel");
      expect(getScoreDescription(70)).toBe("Bon potentiel");
    });

    it("should return 'Potentiel moyen' for score >= 40 and < 60", () => {
      expect(getScoreDescription(40)).toBe("Potentiel moyen");
      expect(getScoreDescription(50)).toBe("Potentiel moyen");
    });

    it("should return 'Faible potentiel' for score < 40", () => {
      expect(getScoreDescription(0)).toBe("Faible potentiel");
      expect(getScoreDescription(39)).toBe("Faible potentiel");
    });
  });

  describe("getProspectScoringDetails", () => {
    it("should return detailed breakdown of scoring", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: true,
        hasActiveWebsite: true,
        hasSocialMedia: true,
        webVisibilityScore: 50,
        sector: "restaurants",
        hasPhone: true,
        hasEmail: true,
      };

      const details = getProspectScoringDetails(criteria);

      expect(details.website).toBe(30);
      expect(details.socialMedia).toBe(20);
      expect(details.webVisibility).toBe(15); // 50% of 30
      expect(details.contact).toBe(10); // 5 + 5
      expect(details.sector).toBe(10);
      expect(details.total).toBe(85);
    });

    it("should handle zero criteria (no site = 25 points opportunity)", () => {
      const criteria: ScoringCriteria = {
        hasWebsite: false,
        hasActiveWebsite: false,
        hasSocialMedia: false,
        webVisibilityScore: 0,
        sector: "autre",
        hasPhone: false,
        hasEmail: false,
      };

      const details = getProspectScoringDetails(criteria);

      expect(details.website).toBe(25); // 25 pts for no website = opportunity!
      expect(details.socialMedia).toBe(0);
      expect(details.webVisibility).toBe(0);
      expect(details.contact).toBe(0);
      expect(details.sector).toBe(3); // 3 pts par défaut pour secteur "autre"
      expect(details.total).toBe(28); // 25 (no site) + 3 (default sector)
    });
  });
});
