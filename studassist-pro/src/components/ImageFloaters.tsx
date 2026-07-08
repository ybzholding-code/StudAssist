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
  // Slide 0: General Welcome (Pi, Sigma, Atom, Compass)
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
  // Slide 1: Orientation Post-Bac (Compass, Globe, Infinity, Book)
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
  // Slide 2: Prépas-Bac (Integral, Sigma, Atom, Book)
  {
    s1: { Comp: IntegralShape, color: TEAL },
    a1: { Comp: TripleZigZag, color: YELLOW },
    a2: { Comp: DenseDotGrid, color: PINK },
    a3: { Comp: SolidCircle, color: TEAL },
    s2: { Comp: SigmaShape, color: PINK },
    s3: { Comp: AtomShape, color: PURPLE },
    a4: { Comp: BrokenRing, color: PINK },
    a5: { Comp: DenseDotGrid, color: TEAL },
    a6: { Comp: HollowRing, color: YELLOW },
    s4: { Comp: BookShape, color: TEAL },
  },
  // Slide 3: Prépas-Concours (Matrix, DNA, Atom, Integral)
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
  // Slide 4: Certifications & Tests de Langues (Globe, Book, Infinity, Compass)
  {
    s1: { Comp: GlobeShape, color: TEAL },
    a1: { Comp: HollowRing, color: PINK },
    a2: { Comp: DenseDotGrid, color: YELLOW },
    a3: { Comp: SolidCircle, color: PURPLE },
    s2: { Comp: BookShape, color: YELLOW },
    s3: { Comp: InfinityShape, color: PINK },
    a4: { Comp: BrokenRing, color: TEAL },
    a5: { Comp: DenseDotGrid, color: PINK },
    a6: { Comp: HollowRing, color: YELLOW },
    s4: { Comp: CompassShape, color: TEAL },
  },
  // Slide 5: Accompagnement Scolaire (Pi, Sigma, Atom, Book)
  {
    s1: { Comp: PiShape, color: PINK },
    a1: { Comp: TripleZigZag, color: TEAL },
    a2: { Comp: DenseDotGrid, color: YELLOW },
    a3: { Comp: SolidCircle, color: PINK },
    s2: { Comp: SigmaShape, color: TEAL },
    s3: { Comp: AtomShape, color: PURPLE },
    a4: { Comp: BrokenRing, color: YELLOW },
    a5: { Comp: DenseDotGrid, color: PINK },
    a6: { Comp: HollowRing, color: TEAL },
    s4: { Comp: BookShape, color: YELLOW },
  },
  // Slide 6: Administratif & Logement Étudiant (Globe, Book, Compass, Infinity)
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
              All floaters cluster around/behind the figure for 3D depth
              The figure is centered in this column (left:50%)
              Left-of-figure = roughly left-[15%..40%]
              Right-of-figure = roughly right-[5%..25%]
              Behind = z-10, In front of arm = z-30
              ========================================================= */}

          {/* 1. Top-left of figure: s1 — behind shoulder */}
          <motion.div
            style={{ ...p1, width: s(2.5), height: s(2.5) }}
            className="absolute top-[8%] left-[18%] z-10 origin-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <conf.s1.Comp color={conf.s1.color} className="w-full h-full opacity-70" />
          </motion.div>

          {/* 2. Upper-left of figure: a1 — behind head/shoulder */}
          <motion.div
            style={{ ...a1, width: s(5), height: s(5) }}
            className="absolute top-[18%] left-[12%] z-10 flex items-center justify-center opacity-70"
          >
            <conf.a1.Comp color={conf.a1.color} />
          </motion.div>

          {/* 3. Mid-left of figure: a2 — behind torso */}
          <motion.div
            style={{ ...a2, width: s(7), height: s(7) }}
            className="absolute top-[42%] left-[8%] z-10 opacity-35 hidden lg:block"
          >
            <conf.a2.Comp color={conf.a2.color} />
          </motion.div>

          {/* 4. Lower-left of figure: a3 — behind hip */}
          <motion.div
            style={{ ...a3, width: s(3), height: s(3) }}
            className="absolute top-[65%] left-[18%] z-10 hidden lg:block opacity-60"
          >
            <conf.a3.Comp color={conf.a3.color} />
          </motion.div>

          {/* 5. Bottom-left: s2 — in front of figure leg area */}
          <motion.div
            style={{ ...p3, width: s(3), height: s(3) }}
            className="absolute bottom-[6%] left-[22%] z-30 origin-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <conf.s2.Comp color={conf.s2.color} className="w-full h-full opacity-80" />
          </motion.div>

          {/* 6. Top-right of figure: s3 — behind upper-right */}
          <motion.div
            style={{ ...p2, width: s(3.5), height: s(3.5) }}
            className="absolute top-[5%] right-[12%] z-10 origin-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            <conf.s3.Comp color={conf.s3.color} className="w-full h-full opacity-60" />
          </motion.div>

          {/* 7. Upper-right of figure: a4 — large ring behind head */}
          <motion.div
            style={{ ...a4, width: s(9), height: s(9) }}
            className="absolute top-[12%] right-[5%] z-10 hidden lg:flex"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <conf.a4.Comp color={conf.a4.color} />
          </motion.div>

          {/* 8. Mid-right of figure: a5 — behind arm */}
          <motion.div
            style={{ ...a5, width: s(5), height: s(5) }}
            className="absolute top-[50%] right-[8%] z-10 opacity-50"
          >
            <conf.a5.Comp color={conf.a5.color} />
          </motion.div>

          {/* 9. Lower-right of figure: a6 — behind torso lower */}
          <motion.div
            style={{ ...a6, width: s(4), height: s(4) }}
            className="absolute bottom-[22%] right-[10%] z-10 hidden lg:block opacity-60"
          >
            <conf.a6.Comp color={conf.a6.color} />
          </motion.div>

          {/* 10. Bottom-right: s4 — behind feet */}
          <motion.div
            style={{ ...p4, width: s(2.5), height: s(2.5) }}
            className="absolute bottom-[4%] right-[18%] z-10 hidden lg:block"
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
