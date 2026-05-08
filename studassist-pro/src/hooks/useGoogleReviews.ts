import { useState, useEffect } from "react";

/**
 * Fetches live Google Places review data.
 * 
 * Requirements:
 * - Set VITE_GOOGLE_PLACES_API_KEY in your .env file
 * - Set VITE_GOOGLE_PLACE_ID in your .env file
 * 
 * To find your Place ID:
 * https://developers.google.com/maps/documentation/places/web-service/place-id
 * 
 * Falls back to provided defaults if API key is missing or request fails.
 */

interface GoogleReviewData {
  rating: string;
  reviewCount: number;
}

const FALLBACK: GoogleReviewData = { rating: "4.9", reviewCount: 97 };

export function useGoogleReviews(): GoogleReviewData {
  const [data, setData] = useState<GoogleReviewData>(FALLBACK);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) return;

    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.rating && json.userRatingCount) {
          setData({
            rating: json.rating.toFixed(1),
            reviewCount: json.userRatingCount,
          });
        }
      })
      .catch(() => {
        // Silently fall back to defaults
      });
  }, []);

  return data;
}
