import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from '@/src/components/ui/icons';
import { useGoogleReviews, type GoogleReview } from '@/src/hooks/useGoogleReviews';

const SLIDE_DURATION = 15000;

export const TestimonialSlider = () => {
  const { reviews } = useGoogleReviews();
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const totalPages = Math.ceil(reviews.length / itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide + progress bar
  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, SLIDE_DURATION);

    const raf = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      progressRef.current = requestAnimationFrame(raf);
    };
    progressRef.current = requestAnimationFrame(raf);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(progressRef.current);
    };
  }, [totalPages, index]);

  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: { zIndex: 0, x: -20, opacity: 0 },
  };

  const visibleReviews = reviews.slice(index * itemsToShow, (index + 1) * itemsToShow);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative w-full">
      <div className="min-h-[380px] lg:min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
            }}
            className="grid md:grid-cols-2 gap-8 w-full"
          >
            {visibleReviews.map((item: GoogleReview, idx: number) => (
              <div
                key={`${item.authorName}-${idx}`}
                className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 flex flex-col items-center text-center h-full"
              >
                {/* Author avatar */}
                <div className="w-14 h-14 rounded-full mb-4 overflow-hidden shadow-sm flex items-center justify-center bg-brand-teal/10 text-brand-teal font-black text-lg">
                  {item.authorPhoto ? (
                    <img
                      src={item.authorPhoto}
                      alt={item.authorName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span>{getInitials(item.authorName)}</span>
                  )}
                </div>

                {/* Review text */}
                <p className="text-gray-500 text-xs italic mb-6 leading-relaxed px-4 line-clamp-5">
                  "{item.text}"
                </p>

                {/* Rating stars */}
                <div className="flex text-sa-gold mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}><Star size={12} fill="currentColor" /></span>
                  ))}
                </div>

                {/* Author name & time */}
                <h4 className="font-bold text-brand-darkblue text-sm uppercase tracking-tight">
                  {item.authorName}
                </h4>
                {item.relativeTime && (
                  <span className="text-[10px] text-gray-400 mt-1">{item.relativeTime}</span>
                )}

                {/* Google badge */}
                <div className="flex items-center gap-1.5 mt-3">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="h-4 w-4"
                  />
                  <span className="text-[9px] font-medium text-gray-400">Avis Google</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="w-full h-0.5 bg-gray-100 rounded-full mt-10 overflow-hidden">
        <div
          className="h-full bg-brand-teal rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-brand-teal" : "w-2 bg-gray-200 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
