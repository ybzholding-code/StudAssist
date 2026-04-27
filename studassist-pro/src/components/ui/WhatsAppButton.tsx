import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Reveal button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    // Auto-show tooltip once after 5 seconds
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);
    // Hide it again after 8 seconds
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-[999] flex items-center">
          <motion.a
            href="https://wa.me/212694919191"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { 
                type: "spring", 
                stiffness: 260, 
                damping: 20 
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)] group z-20"
          >
            {/* Animated Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-full border-2 border-[#25D366] -z-10"
            />

            {/* Authentic WhatsApp SVG Icon */}
            <svg 
              className="w-10 h-10 relative z-10" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.117 1.513 5.86L0 24l6.335-1.662c1.72.863 3.669 1.348 5.665 1.348 6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.188c-1.856 0-3.668-.494-5.242-1.428l-.376-.224-3.899 1.023 1.041-3.8-.246-.391A9.82 9.82 0 0 1 2.188 12c0-5.41 4.402-9.812 9.812-9.812 5.41 0 9.812 4.402 9.812 9.812 0 5.41-4.402 9.812-9.812 9.812z" />
            </svg>

            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
          </motion.a>

          {/* Tooltip / Label */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="absolute right-[calc(100%+12px)] flex flex-col items-end pointer-events-none"
              >
                <div className="bg-white/90 backdrop-blur-md border border-gray-100 py-3 px-5 rounded-2xl shadow-2xl flex flex-col items-end min-w-[200px]">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-brand-teal uppercase tracking-widest leading-none">Conseiller en ligne</span>
                  </div>
                  <span className="text-brand-darkblue font-black text-sm block leading-tight">Besoin d'aide ?</span>
                  <span className="text-gray-500 text-[11px] font-medium block">On vous répond en direct !</span>
                </div>
                {/* Arrow tail */}
                <div className="mr-4 w-3 h-3 bg-white/90 transform rotate-45 border-r border-b border-gray-100 -mt-1.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
