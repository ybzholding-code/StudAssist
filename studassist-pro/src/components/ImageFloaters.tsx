/**
 * ImageFloaters — animated decorative shapes that float *around* (outside)
 * any image container. Matches the old studassist.ma vibe with the brand
 * palette the client insists on:
 *
 *   Pink/red  #ee4b62
 *   Teal      #1CB69B
 *   Yellow    #F3B421
 *
 * The shapes are positioned with NEGATIVE offsets so they overhang the
 * image frame and remain visible even when the image is an opaque photo.
 * All shapes have mouse parallax (shared listener from `lib/mousePosition`),
 * and the dashed ring also continuously rotates — so there is always motion
 * even when the cursor is idle.
 *
 * Usage: drop as a sibling inside a `relative` container (the image's
 * parent). The container should NOT have `overflow-hidden`.
 *
 *   <div className="relative">
 *     <ImageFloaters />
 *     <div className="relative z-20 rounded-2xl overflow-hidden">
 *       <img ... />
 *     </div>
 *   </div>
 */
import {
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { mouseX, mouseY } from "@/src/lib/mousePosition";

/* ---------- Brand palette (exact hex requested by client) ---------- */
const PINK = "#ee4b62";
const TEAL = "#1CB69B";
const YELLOW = "#F3B421";

/* ---------- Distinct Shape primitives (to avoid duplicating DecorativeBackdrop) ---------- */

const ZigZag = ({ className = "", color = TEAL }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 80 40" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="0,20 20,4 40,36 60,4 80,20" />
  </svg>
);

const Triangle = ({ className = "", color = YELLOW }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="4" strokeLinejoin="round">
    <polygon points="20,5 35,35 5,35" />
  </svg>
);

const PlusGrid = ({ className = "", color = PINK }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
    {/* 4 pluses in a 2x2 grid */}
    <path d="M 12 6 L 12 18 M 6 12 L 18 12" />
    <path d="M 28 6 L 28 18 M 22 12 L 34 12" />
    <path d="M 12 22 L 12 34 M 6 28 L 18 28" />
    <path d="M 28 22 L 28 34 M 22 28 L 34 28" />
  </svg>
);

/* ---------- Mouse-parallax helper ---------- */

function useParallax(
  mx: MotionValue<number>,
  my: MotionValue<number>,
  intensity: number,
) {
  const x = useTransform(mx, [-1, 1], [-intensity, intensity]);
  const y = useTransform(my, [-1, 1], [-intensity, intensity]);
  return { x, y };
}

interface Props {
  /** Scale factor (0.7 = smaller, 1.2 = bigger). Default 1. */
  scale?: number;
}

export default function ImageFloaters({ scale = 1 }: Props) {
  // Shared global mouse position — no per-instance listener.
  const sx = useSpring(mouseX, { stiffness: 45, damping: 20, mass: 0.4 });
  const sy = useSpring(mouseY, { stiffness: 45, damping: 20, mass: 0.4 });

  const p1 = useParallax(sx, sy, 18);
  const p2 = useParallax(sx, sy, 12);
  const p3 = useParallax(sx, sy, 26);
  const p4 = useParallax(sx, sy, 14);
  const p5 = useParallax(sx, sy, 22);
  const p6 = useParallax(sx, sy, 16);

  const s = (n: number) => `${n * scale}rem`;

  return (
    <div
      aria-hidden
      // High z-index so shapes appear *in front* of the framed image,
      // overhanging the edges. pointer-events-none lets clicks pass through
      // to anything underneath.
      className="absolute inset-0 pointer-events-none z-30 overflow-visible"
    >
      {/* ===== Teal ZigZag — replacing Teal wavy lines ===== */}
      <motion.div
        style={{ ...p1, width: s(4) }}
        className="absolute -top-6 -left-4 lg:-top-8 lg:-left-6"
      >
        <ZigZag color={TEAL} className="w-full h-auto opacity-80" />
      </motion.div>

      {/* ===== Yellow Triangle — replacing solid dot ===== */}
      <motion.div
        style={{ ...p2, width: s(2), height: s(2) }}
        className="absolute top-[28%] -left-6 lg:-left-8"
        animate={{ rotate: 15 }}
      >
        <Triangle color={YELLOW} className="w-full h-full opacity-90" />
      </motion.div>

      {/* ===== Dashed Teal Ring — replacing Pink Broken Ring ===== */}
      <motion.div
        style={{ ...p3, width: s(6), height: s(6) }}
        className="absolute -top-8 -right-8 lg:-top-10 lg:-right-12"
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ border: `3px dashed ${TEAL}`, opacity: 0.6 }}
        />
      </motion.div>

      {/* ===== Pink PlusGrid — replacing Dashed Teal Ring ===== */}
      <motion.div
        style={{ ...p6, width: s(3.5), height: s(3.5) }}
        className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12"
      >
        <PlusGrid color={PINK} className="w-full h-full opacity-70" />
      </motion.div>

      {/* ===== Yellow solid square — replacing Teal dot grid ===== */}
      <motion.div
        style={{ ...p4, width: s(1.5), height: s(1.5), background: YELLOW }}
        className="absolute top-[45%] -right-8 lg:-right-10 rounded-sm shadow-sm"
        animate={{ rotate: 45 }}
      />

      {/* ===== Pink hollow ring — replacing Yellow hollow ring ===== */}
      <motion.div
        style={{
          ...p5,
          width: s(2.5),
          height: s(2.5),
          borderColor: PINK,
        }}
        className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 rounded-full border-[4px] opacity-75"
      />
    </div>
  );
}
