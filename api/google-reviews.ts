import type { VercelRequest, VercelResponse } from "@vercel/node";

function translateRelativeTime(en: string): string {
  return en
    .replace(/(\d+) years? ago/, (_, n) => `il y a ${n} an${+n > 1 ? "s" : ""}`)
    .replace(/(\d+) months? ago/, (_, n) => `il y a ${n} mois`)
    .replace(/(\d+) weeks? ago/, (_, n) => `il y a ${n} semaine${+n > 1 ? "s" : ""}`)
    .replace(/(\d+) days? ago/, (_, n) => `il y a ${n} jour${+n > 1 ? "s" : ""}`)
    .replace(/(\d+) hours? ago/, (_, n) => `il y a ${n} heure${+n > 1 ? "s" : ""}`)
    .replace(/a year ago/, "il y a 1 an")
    .replace(/a month ago/, "il y a 1 mois")
    .replace(/a week ago/, "il y a 1 semaine")
    .replace(/a day ago/, "il y a 1 jour")
    .replace(/an hour ago/, "il y a 1 heure")
    .replace(/just now/, "à l'instant");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.VITE_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(503).json({ error: "Google Places not configured" });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews,googleMapsUri",
        "X-Goog-LanguageCode": "fr",
      },
    });

    const json = await response.json();

    if (json.error) {
      return res
        .status(502)
        .json({ error: json.error.message || "Google Places API error" });
    }

    // Translate relative time descriptions to French
    if (Array.isArray(json.reviews)) {
      json.reviews = json.reviews.map((r: any) => ({
        ...r,
        relativePublishTimeDescription: translateRelativeTime(
          r.relativePublishTimeDescription || ""
        ),
      }));
    }

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(json);
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: err.message || "Internal server error" });
  }
}
