import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Star } from "@/src/components/ui/icons";
import { TestimonialSlider } from "./TestimonialSlider";
import { useGoogleReviews } from "@/src/hooks/useGoogleReviews";

interface TestimonialsSectionProps {
  /** Eyebrow label above the title */
  eyebrow?: string;
  /** Title — plain string or JSX for accent words */
  title?: ReactNode;
  /** Google-style aggregated rating */
  rating?: string;
  /** Total number of reviews */
  reviewCount?: number;
  /** Short editorial quote shown under the rating card */
  quote?: string;
  /** Label for the CTA button */
  ctaLabel?: string;
  /** Destination of the CTA button */
  ctaHref?: string;
  /** Background variant */
  variant?: "light" | "white";
}

export default function TestimonialsSection({
  eyebrow = "Témoignages",
  title,
  rating: ratingProp = "4.9",
  reviewCount: reviewCountProp = 97,
  quote = "Une expertise rare au service de l'avenir de nos enfants. L'accompagnement personnalisé a fait toute la différence.",
  ctaLabel = "Voir nos avis Google",
  ctaHref = "https://share.google/9Kwb0dxJ2BLliGBq7",
  variant = "light",
}: TestimonialsSectionProps) {
  // Live sync with Google Places API (falls back to props if no API key)
  const googleData = useGoogleReviews();
  const rating = googleData.isLive ? googleData.rating : ratingProp;
  const reviewCount = googleData.isLive
    ? googleData.reviewCount
    : reviewCountProp;
  const isLive = googleData.isLive;
  const googleMapsUrl = googleData.googleMapsUrl || ctaHref;

  return (
    <section
      className={
        "py-14 lg:py-16 relative overflow-hidden " +
        (variant === "light" ? "bg-[#f8fbfc]" : "bg-white")
      }
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[100px] -z-10" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-5"
            >
              <span className="w-6 h-px bg-brand-teal" />
              {eyebrow}
            </motion.span>
            <h2 className="font-display text-[30px] lg:text-[42px] font-extrabold text-brand-darkblue mb-6 leading-tight tracking-tight uppercase">
              {title ?? (
                <>
                  Ils nous ont <br />
                  <span className="text-brand-teal">fait confiance</span>
                </>
              )}
            </h2>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 mb-8 max-w-sm mx-auto lg:mx-0 hover:shadow-lg hover:border-brand-teal/30 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-4"
                  />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Avis Clients
                  </span>
                  {isLive ? (
                    <span
                      className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                      title="Synchronisé en temps réel"
                    />
                  ) : null}
                </div>
                <div className="flex text-sa-gold">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <Star size={14} fill="currentColor" />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-black text-brand-darkblue tracking-tighter">
                  {rating}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Sur {reviewCount} avis
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm italic leading-relaxed mb-10 opacity-70 max-w-sm mx-auto lg:mx-0">
              "{quote}"
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-brand-darkblue text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-teal transition-all shadow-xl active:scale-95"
            >
              <span>{ctaLabel}</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-teal/5 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-500 -z-10" />
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
