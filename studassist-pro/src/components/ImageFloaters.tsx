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
import { motion, useSpring, useTransform, type MotionValue, AnimatePresence } from "motion/react";
import { mouseX, mouseY } from "@/src/lib/mousePosition";

// Import our subject-specific academic shapes
import { 
  PiShape, AtomShape, SigmaShape, CompassShape,
  GlobeShape, BookShape, InfinityShape, IntegralShape, 
  DNAShape, MatrixShape
} from "@/src/components/shapes/AcademicShapes";

/* ---------- Colors ---------- */
const TEAL = "#1BB79D";
const PINK = "#EE4B62";
const YELLOW = "#F3B421";
const PURPLE = "#8E56FF";

/* ---------- Abstract Shape Primitives ---------- */
const TripleZigZag = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 40" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto opacity-90">
    <polyline points="2,10 18,2 34,10 50,2 66,10 82,2 98,10" />
    <polyline points="2,20 18,12 34,20 50,12 66,20 82,12 98,20" />
    <polyline points="2,30 18,22 34,30 50,22 66,30 82,22 98,30" />
  </svg>
);

const DenseDotGrid = ({ color }: { color: string }) => (
  <div className="w-full h-full" style={{ backgroundImage: `radial-gradient(circle, ${color} 2px, transparent 2.5px)`, backgroundSize: '12px 12px' }} />
);

const SolidCircle = ({ color }: { color: string }) => (
  <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
);

const BrokenRing = ({ color }: { color: string }) => (
  <div className="w-full h-full rounded-full border-[6px]" style={{ borderColor: color, clipPath: 'polygon(0 0, 80% 0, 80% 60%, 100% 60%, 100% 100%, 0 100%)' }} />
);

const HollowRing = ({ color }: { color: string }) => (
  <div className="w-full h-full rounded-full border-[8px]" style={{ borderColor: color }} />
);


/* ---------- Slide Configurations ---------- */
// This completely personalizes the hero shape cluster for each slider!
const SLIDE_CONFIGS = [
  // Slide 0: Accompagnement Scolaire
  {
    s1: { Comp: PiShape, color: TEAL },
    a1: { Comp: TripleZigZag, color: TEAL },
    a2: { Comp: DenseDotGrid, color: PINK },
    a3: { Comp: SolidCircle, color: YELLOW },
    s2: { Comp: SigmaShape, color: YELLOW },
    s3: { Comp: AtomShape, color: PINK },
    a4: { Comp: BrokenRing, color: PINK },
    a5: { Comp: DenseDotGrid, color: TEAL },
    a6: { Comp: HollowRing, color: PURPLE },
    s4: { Comp: CompassShape, color: TEAL },
  },
  // Slide 1: Orientation Post-Bac
  {
    s1: { Comp: CompassShape, color: PINK },
    a1: { Comp: HollowRing, color: YELLOW },
    a2: { Comp: DenseDotGrid, color: TEAL },
    a3: { Comp: SolidCircle, color: PINK },
    s2: { Comp: GlobeShape, color: TEAL },
    s3: { Comp: InfinityShape, color: PURPLE },
    a4: { Comp: BrokenRing, color: YELLOW },
    a5: { Comp: DenseDotGrid, color: PINK },
    a6: { Comp: SolidCircle, color: TEAL },
    s4: { Comp: BookShape, color: YELLOW },
  },
  // Slide 2: Prépas-Concours
  {
    s1: { Comp: IntegralShape, color: YELLOW },
    a1: { Comp: TripleZigZag, color: PINK },
    a2: { Comp: DenseDotGrid, color: PURPLE },
    a3: { Comp: HollowRing, color: TEAL },
    s2: { Comp: MatrixShape, color: PINK },
    s3: { Comp: DNAShape, color: TEAL },
    a4: { Comp: BrokenRing, color: PURPLE },
    a5: { Comp: DenseDotGrid, color: YELLOW },
    a6: { Comp: SolidCircle, color: PINK }, 
    s4: { Comp: AtomShape, color: TEAL },
  },
  // Slide 3: Administratif & Logement
  {
    s1: { Comp: GlobeShape, color: PURPLE },
    a1: { Comp: HollowRing, color: TEAL },
    a2: { Comp: DenseDotGrid, color: YELLOW },
    a3: { Comp: SolidCircle, color: PINK },
    s2: { Comp: BookShape, color: TEAL },
    s3: { Comp: CompassShape, color: YELLOW },
    a4: { Comp: BrokenRing, color: TEAL },
    a5: { Comp: DenseDotGrid, color: PINK },
    a6: { Comp: HollowRing, color: YELLOW },
    s4: { Comp: InfinityShape, color: PINK },
  }
];


/* ---------- Mouse-parallax helper ---------- */
function useParallax(mx: MotionValue<number>, my: MotionValue<number>, intensity: number) {
  const x = useTransform(mx, [-1, 1], [-intensity, intensity]);
  const y = useTransform(my, [-1, 1], [-intensity, intensity]);
  return { x, y };
}

interface Props {
  scale?: number;
  slideIndex?: number;
}

export default function ImageFloaters({ scale = 1, slideIndex = 0 }: Props) {
  const sx = useSpring(mouseX, { stiffness: 45, damping: 20, mass: 0.4 });
  const sy = useSpring(mouseY, { stiffness: 45, damping: 20, mass: 0.4 });

  // Layer 1: Abstract shapes
  const a1 = useParallax(sx, sy, 8);
  const a2 = useParallax(sx, sy, 12);
  const a3 = useParallax(sx, sy, 16);
  const a4 = useParallax(sx, sy, 10);
  const a5 = useParallax(sx, sy, 14);
  const a6 = useParallax(sx, sy, 18);

  // Layer 2: Subject shapes
  const p1 = useParallax(sx, sy, 24);
  const p2 = useParallax(sx, sy, 28);
  const p3 = useParallax(sx, sy, 32);
  const p4 = useParallax(sx, sy, 26);

  const s = (n: number) => `${n * scale}rem`;

  const conf = SLIDE_CONFIGS[slideIndex % SLIDE_CONFIGS.length];

  return (
    <div
      aria-hidden
      // NO z-index here! This allows the children's z-10 and z-30 to interleave with the z-20 student image.
      className="absolute inset-0 pointer-events-none overflow-visible"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* =========================================================
              LEFT SIDE (Staggered vertically to avoid squishing)
              ========================================================= */}

          {/* 1. Highest Left: s1 (Subject) -> Foreground */}
          <motion.div
            style={{ ...p1, width: s(2.5), height: s(2.5) }}
            className="absolute top-[8%] left-[2%] lg:top-[10%] lg:left-[5%] z-30 scale-[0.6] lg:scale-100 origin-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <conf.s1.Comp color={conf.s1.color} className="w-full h-full opacity-70" />
          </motion.div>

          {/* 2. Upper-Mid Left: a1 (Abstract) -> Foreground */}
          <motion.div
            style={{ ...a1, width: s(6), height: s(6) }}
            className="absolute top-[22%] -left-[6%] lg:top-[25%] lg:-left-[10%] z-30 flex items-center justify-center scale-[0.6] lg:scale-100 origin-center"
          >
            <conf.a1.Comp color={conf.a1.color} />
          </motion.div>

          {/* 3. Lower-Mid Left: a2 (Abstract) -> Background (Behind body) */}
          <motion.div
            style={{ ...a2, width: s(8), height: s(8) }}
            className="absolute top-[48%] -left-[10%] lg:top-[50%] lg:-left-[15%] z-10 opacity-40 hidden lg:block"
          >
            <conf.a2.Comp color={conf.a2.color} />
          </motion.div>

          {/* 4. Bottom Left: a3 (Abstract) -> Background */}
          <motion.div
            style={{ ...a3, width: s(3.5), height: s(3.5) }}
            className="absolute top-[70%] -left-[12%] lg:top-[72%] lg:-left-[18%] z-10 hidden lg:block"
          >
            <conf.a3.Comp color={conf.a3.color} />
          </motion.div>

          {/* 5. Lowest Left: s2 (Subject) -> Foreground */}
          <motion.div
            style={{ ...p3, width: s(3.5), height: s(3.5) }}
            className="absolute bottom-[2%] left-[2%] lg:bottom-[5%] lg:left-[0%] z-30 scale-[0.6] lg:scale-100 origin-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <conf.s2.Comp color={conf.s2.color} className="w-full h-full opacity-80" />
          </motion.div>


          {/* =========================================================
              RIGHT SIDE (Staggered vertically to avoid squishing)
              ========================================================= */}

          {/* 6. Highest Right: s3 (Subject) -> Foreground */}
          <motion.div
            style={{ ...p2, width: s(4), height: s(4) }}
            className="absolute top-[0%] -right-[8%] lg:top-[2%] lg:-right-[12%] z-30 scale-[0.6] lg:scale-100 origin-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            <conf.s3.Comp color={conf.s3.color} className="w-full h-full opacity-60" />
          </motion.div>

          {/* 7. Upper-Mid Right: a4 (Abstract) -> Background (Behind head) */}
          <motion.div
            style={{ ...a4, width: s(10), height: s(10) }}
            className="absolute top-[18%] -right-[6%] lg:top-[20%] lg:-right-[8%] z-10 hidden lg:flex"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <conf.a4.Comp color={conf.a4.color} />
          </motion.div>

          {/* 8. Lower-Mid Right: a5 (Abstract) -> Foreground (Over arm) */}
          <motion.div
            style={{ ...a5, width: s(6), height: s(6) }}
            className="absolute top-[55%] -right-[10%] lg:top-[58%] lg:-right-[14%] z-30 opacity-40 lg:opacity-60 scale-[0.6] lg:scale-100 origin-center"
          >
            <conf.a5.Comp color={conf.a5.color} />
          </motion.div>

          {/* 9. Bottom Right: a6 (Abstract) -> Foreground */}
          <motion.div
            style={{ ...a6, width: s(4.5), height: s(4.5) }}
            className="absolute bottom-[18%] -right-[6%] lg:bottom-[20%] lg:-right-[10%] z-30 hidden lg:block"
          >
            <conf.a6.Comp color={conf.a6.color} />
          </motion.div>

          {/* 10. Lowest Right: s4 (Subject) -> Background */}
          <motion.div
            style={{ ...p4, width: s(3), height: s(3) }}
            className="absolute bottom-[0%] right-[4%] lg:bottom-[2%] lg:right-[6%] z-10 hidden lg:block"
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <conf.s4.Comp color={conf.s4.color} className="w-full h-full opacity-80" />
          </motion.div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
