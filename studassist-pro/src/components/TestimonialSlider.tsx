import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from '@/src/components/ui/icons';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  { 
    name: "Reda El Bouri", 
    text: "Une expérience transformationnelle. Grâce à STUDASSIST, j'ai pu clarifier mon projet d'études et intégrer l'école de mes rêves. L'accompagnement est personnalisé et extrêmement rigoureux.", 
    rating: 5,
    image: "https://picsum.photos/seed/reda/100/100",
    role: "Étudiant — École de Management"
  },
  { 
    name: "Othmane Zerktouni", 
    text: "L'équipe de STUDASSIST m'a aidé à surmonter mes difficultés en mathématiques et m'a préparé efficacement pour le concours. Aujourd'hui en prépa, je leur en suis très reconnaissant.", 
    rating: 5,
    image: "https://picsum.photos/seed/othmane/100/100",
    role: "Étudiant — CPGE"
  },
  { 
    name: "Yasmine Mansouri", 
    text: "L'orientation a toujours été un stress pour moi. Avec STUDASSIST, j'ai découvert des options auxquelles je n'avais pas pensé. Leur méthode est vraiment scientifique et humaine.", 
    rating: 5,
    image: "https://picsum.photos/seed/yasmine/100/100",
    role: "Lycéenne — Bac Français"
  },
  { 
    name: "Amine Alami", 
    text: "Excellent cabinet de conseil. La préparation aux certifications de langues a été un franc succès. Je recommande vivement pour le sérieux et le professionnalisme de toute l'équipe.", 
    rating: 5,
    image: "https://picsum.photos/seed/amine/100/100",
    role: "Étudiant — International Business"
  },
  { 
    name: "Sofia Bennani", 
    text: "Un accompagnement sur mesure. STUDASSIST ne se contente pas de donner des cours, ils transmettent une véritable méthodologie de travail qui me sert chaque jour à l'université.", 
    rating: 5,
    image: "https://picsum.photos/seed/sofia/100/100",
    role: "Étudiante — Université"
  },
  { 
    name: "Anas El idrissi", 
    text: "J'ai suivi le stage intensif de préparation au Bac. Les professeurs sont exceptionnels et les supports de cours sont de très grande qualité. Merci à toute l'équipe !", 
    rating: 5,
    image: "https://picsum.photos/seed/anas/100/100",
    role: "Bachelier 2023"
  }
];

export const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  const totalPages = Math.ceil(testimonials.length / itemsToShow);

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

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, [totalPages]);

  const variants = {
    enter: {
      opacity: 0,
      x: 20,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -20,
      opacity: 0
    }
  };

  const visibleTestimonials = testimonials.slice(index * itemsToShow, (index + 1) * itemsToShow);

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
              x: { duration: 0.5 }
            }}
            className="grid md:grid-cols-2 gap-8 w-full"
          >
            {visibleTestimonials.map((item) => (
              <div key={item.name} className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-500 text-xs italic mb-6 leading-relaxed px-4">"{item.text}"</p>
                <div className="flex text-sa-gold mb-2">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <h4 className="font-bold text-brand-darkblue text-sm uppercase tracking-tight">{item.name}</h4>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Discrete pagination indicator (no buttons) */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-brand-teal' : 'w-2 bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};
