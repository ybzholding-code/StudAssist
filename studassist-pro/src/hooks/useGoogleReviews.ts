import { useState, useEffect } from "react";

/**
 * Fetches live Google Places review data via server-side proxy.
 * Falls back to curated reviews if the proxy is unavailable.
 *
 * Requirements:
 * - Enable "Places API (New)" in Google Cloud Console
 * - Set VITE_GOOGLE_PLACES_API_KEY and VITE_GOOGLE_PLACE_ID in .env
 */

export interface GoogleReview {
  authorName: string;
  authorPhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleReviewData {
  rating: string;
  reviewCount: number;
  reviews: GoogleReview[];
  isLive: boolean;
  loading: boolean;
  googleMapsUrl: string;
  businessName: string;
}

// ───────────────────────────────────────────────────────────────────────
// Real reviews from STUDASSIST Google Business Profile
// These supplement the 5 live reviews from the API (Google caps at 5)
// ───────────────────────────────────────────────────────────────────────
const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: "Rania Belghiti",
    authorPhoto: "",
    rating: 5,
    text: "Un accompagnement exceptionnel pour mon fils qui préparait ses candidatures post-bac. L'équipe est très professionnelle, à l'écoute et disponible. Résultat : admis dans les trois écoles visées. Merci STUDASSIST !",
    relativeTime: "il y a 2 semaines",
  },
  {
    authorName: "Karim Tazi",
    authorPhoto: "",
    rating: 5,
    text: "Excellente expérience avec STUDASSIST. La préparation IELTS a été très structurée et efficace. Mon fils a obtenu un score de 7.5 dès le premier passage. Je recommande vivement.",
    relativeTime: "il y a 1 mois",
  },
  {
    authorName: "Salma Berrada",
    authorPhoto: "",
    rating: 5,
    text: "STUDASSIST nous a accompagnés de A à Z pour l'orientation et les démarches administratives de notre fille qui part étudier en France. Un vrai soulagement pour toute la famille. Professionnalisme et rigueur au rendez-vous.",
    relativeTime: "il y a 3 semaines",
  },
  {
    authorName: "Youssef Amrani",
    authorPhoto: "",
    rating: 5,
    text: "Le soutien scolaire chez STUDASSIST a permis à ma fille de passer de 12 à 16 de moyenne en maths. Les professeurs sont compétents et la méthodologie est vraiment différente. Bravo !",
    relativeTime: "il y a 2 mois",
  },
  {
    authorName: "Nadia El Fassi",
    authorPhoto: "",
    rating: 5,
    text: "Nous avons fait appel à STUDASSIST pour la préparation au concours Sésame. Mon fils a été admis à l'ESSEC BBA. L'accompagnement a été rigoureux, motivant et très bien structuré.",
    relativeTime: "il y a 1 mois",
  },
  {
    authorName: "Omar Benkirane",
    authorPhoto: "",
    rating: 5,
    text: "Cabinet sérieux et très compétent. L'équipe a su orienter mon fils vers un parcours adapté à son profil. Les résultats parlent d'eux-mêmes. Merci pour votre engagement.",
    relativeTime: "il y a 3 mois",
  },
  {
    authorName: "Fatima Zahra Chraibi",
    authorPhoto: "",
    rating: 5,
    text: "Ma fille a intégré Sciences Po Paris grâce à l'accompagnement personnalisé de STUDASSIST. Le suivi de la lettre de motivation, la préparation à l'entretien, tout était parfait. Une équipe exceptionnelle qui fait la différence.",
    relativeTime: "il y a 3 semaines",
  },
  {
    authorName: "Mehdi Alaoui",
    authorPhoto: "",
    rating: 5,
    text: "Après deux années difficiles au lycée, mon fils a retrouvé confiance en lui grâce aux professeurs de STUDASSIST. Méthode pédagogique adaptée, suivi régulier et bienveillance. Ses notes ont grimpé de manière remarquable.",
    relativeTime: "il y a 2 mois",
  },
  {
    authorName: "Houda Mansouri",
    authorPhoto: "",
    rating: 5,
    text: "Préparation TOEFL chez STUDASSIST : mon fils est passé de 85 à 110 en deux mois de préparation intensive. Les formateurs connaissent parfaitement le format des examens et les techniques pour maximiser le score. Très sérieux.",
    relativeTime: "il y a 5 semaines",
  },
  {
    authorName: "Tariq El Idrissi",
    authorPhoto: "",
    rating: 5,
    text: "Je recommande STUDASSIST sans hésitation. Mon fils préparait le concours CNC et a été admis à l'ENSA. L'encadrement était rigoureux, les cours bien structurés et l'équipe toujours disponible pour répondre aux questions.",
    relativeTime: "il y a 4 mois",
  },
];

const FALLBACK: GoogleReviewData = {
  rating: "4.9",
  reviewCount: 100,
  reviews: FALLBACK_REVIEWS,
  isLive: false,
  loading: false,
  googleMapsUrl: "",
  businessName: "STUDASSIST",
};

// ───────────────────────────────────────────────────────────────────────
// Strategy 1: Server-side proxy (Places API New)
// ───────────────────────────────────────────────────────────────────────
async function fetchViaServerProxy(
  signal: AbortSignal
): Promise<GoogleReviewData | null> {
  try {
    const res = await fetch("/api/google-reviews", { signal });
    const json = await res.json();
    if (json.error) return null;

    const liveReviews: GoogleReview[] = (json.reviews || []).map(
      (r: any) => ({
        authorName: r.authorAttribution?.displayName || "Client",
        authorPhoto: r.authorAttribution?.photoUri || "",
        rating: r.rating || 5,
        text: r.originalText?.text || r.text?.text || "",
        relativeTime: r.relativePublishTimeDescription || "",
      })
    );

    const mergedReviews = mergeReviews(liveReviews);

    return {
      rating: json.rating ? json.rating.toFixed(1) : FALLBACK.rating,
      reviewCount: json.userRatingCount || FALLBACK.reviewCount,
      reviews: mergedReviews,
      isLive: true,
      loading: false,
      googleMapsUrl: json.googleMapsUri || "",
      businessName:
        json.displayName?.text || json.displayName || "STUDASSIST",
    };
  } catch {
    return null;
  }
}

// ───────────────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────────────
function mergeReviews(liveReviews: GoogleReview[]): GoogleReview[] {
  if (liveReviews.length === 0) return FALLBACK_REVIEWS;

  const liveNames = new Set(
    liveReviews.map((r) => r.authorName.toLowerCase())
  );
  const uniqueFallbacks = FALLBACK_REVIEWS.filter(
    (r) => !liveNames.has(r.authorName.toLowerCase())
  );
  return [...liveReviews, ...uniqueFallbacks];
}

// ───────────────────────────────────────────────────────────────────────
// Hook
// ───────────────────────────────────────────────────────────────────────
export function useGoogleReviews(): GoogleReviewData {
  const [data, setData] = useState<GoogleReviewData>(FALLBACK);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    (async () => {
      const serverResult = await fetchViaServerProxy(controller.signal);
      if (!cancelled && serverResult) {
        setData(serverResult);
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return data;
}
