import { motion, useSpring, useTransform, type MotionValue } from "motion/react";
import { mouseX, mouseY } from "@/src/lib/mousePosition";

/* ---------- Mouse-parallax helper ---------- */
function useParallax(mx: MotionValue<number>, my: MotionValue<number>, intensity: number) {
  const x = useTransform(mx, [-1, 1], [-intensity, intensity]);
  const y = useTransform(my, [-1, 1], [-intensity, intensity]);
  return { x, y };
}

interface Props {
  scale?: number;
}

let floaterIdCounter = 0;

export default function MediaFrameFloaters({ scale = 1 }: Props) {
  const instanceId = (floaterIdCounter++).toString(36);
  const sx = useSpring(mouseX, { stiffness: 45, damping: 20, mass: 0.4 });
  const sy = useSpring(mouseY, { stiffness: 45, damping: 20, mass: 0.4 });

  // Layer 1: Background shapes (-z-10)
  const a1 = useParallax(sx, sy, 6 * scale);
  const a2 = useParallax(sx, sy, 10 * scale);
  const a3 = useParallax(sx, sy, 14 * scale);
  const a4 = useParallax(sx, sy, 8 * scale);

  // Layer 2: Foreground overlapping shapes (z-30)
  const p1 = useParallax(sx, sy, 18 * scale);
  const p2 = useParallax(sx, sy, 22 * scale);
  const p3 = useParallax(sx, sy, 16 * scale);

  return (
    <>
      {/* PERFECTLY DESIGNED BACKGROUND FRAME (-z-10) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Top Left Pink Dot Grid */}
        <motion.div
          style={a1}
          className="absolute -top-12 -left-10 w-32 h-32 opacity-40"
          // We apply the scale to the background elements using transform scale to avoid breaking background-size
          animate={{ scale }}
        >
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #EE4B62 2px, transparent 2.5px)', backgroundSize: '16px 16px' }} />
        </motion.div>

        {/* Bottom Right — Circular STUDASSIST text (teal) — refined */}
        <motion.div
          style={a2}
          className="absolute -bottom-8 -right-8 w-24 h-24"
          animate={{ scale }}
        >
          <svg className="w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 120 120">
            <defs>
              <path id={`cp-teal-${instanceId}`} d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
            </defs>
            <text fill="#1BB79D" opacity="0.55" fontSize="12" fontWeight="800" letterSpacing="6" fontFamily="system-ui, sans-serif">
              <textPath href={`#cp-teal-${instanceId}`}>STUDASSIST •</textPath>
            </text>
          </svg>
        </motion.div>

        {/* Top Right — Golden circular arc — refined */}
        <motion.div
          style={a3}
          className="absolute -top-6 -right-6 w-20 h-20 opacity-60"
          animate={{ scale }}
        >
          <svg className="w-full h-full animate-[spin_18s_linear_infinite_reverse]" viewBox="0 0 120 120">
            <defs>
              <path id={`cp-gold-${instanceId}`} d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
            </defs>
            <text fill="#F3B421" opacity="0.7" fontSize="11" fontWeight="800" letterSpacing="5" fontFamily="system-ui, sans-serif">
              <textPath href={`#cp-gold-${instanceId}`}>EXCELLENCE •</textPath>
            </text>
          </svg>
        </motion.div>

        {/* Floating Atom bottom left */}
        <motion.div
          style={a4}
          className="absolute bottom-24 -left-14 w-14 h-14 text-[#8E56FF] opacity-60"
          animate={{ scale }}
        >
          <svg className="w-full h-full animate-[spin_30s_linear_infinite]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(30 20 20)" />
            <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(90 20 20)" />
            <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(150 20 20)" />
            <circle cx="20" cy="20" r="2.5" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* FOREGROUND 3D OVERLAY ELEMENTS (z-30) */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* Small Pi overlapping top-left edge */}
        <motion.div
          style={p1}
          className="absolute -top-4 left-6 w-8 h-8 text-[#1BB79D] opacity-90"
          animate={{ scale }}
        >
          <svg className="w-full h-full animate-[bounce_4s_infinite]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6,12 Q20,6 34,12 M14,12 L14,32 M26,12 L26,26 Q26,34 34,32" />
          </svg>
        </motion.div>

        {/* Tiny Pink Circle overlapping mid-right edge */}
        <motion.div
          style={p2}
          className="absolute top-[40%] -right-3 w-6 h-6 rounded-full bg-[#EE4B62] opacity-90 shadow-lg"
          animate={{ scale }}
        />

        {/* Small Sigma overlapping bottom-left edge */}
        <motion.div
          style={p3}
          className="absolute bottom-10 -left-6 w-10 h-10 text-[#F3B421] opacity-90"
          animate={{ scale }}
        >
          <svg className="w-full h-full animate-[pulse_3s_infinite]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="30,8 12,8 22,20 12,32 30,32" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
