/**
 * Global decorative backdrop — matches the old studassist.ma vibe.
 *
 * Fixed, full-viewport layer rendered behind all page content. Scatters the
 * same brand shapes used on the hero (teal wavy lines, yellow dots, red
 * broken ring, teal dot grid, purple ring, teal dot cluster) across the
 * viewport and makes each follow the mouse with its own parallax depth.
 *
 * Pointer-events are disabled so it never intercepts clicks.
 */
import {
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { mouseX, mouseY } from "@/src/lib/mousePosition";

/* --------- Reusable shape primitives --------- */

const TealWaves = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    stroke="#1CB69B"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M2 8 Q 20 0, 40 8 T 78 8" />
    <path d="M2 20 Q 20 12, 40 20 T 78 20" />
    <path d="M2 32 Q 20 24, 40 32 T 78 32" />
  </svg>
);

const DotGrid = ({
  className = "",
  color = "#1CB69B",
}: {
  className?: string;
  color?: string;
}) => (
  <div
    className={className}
    style={{
      backgroundImage: `radial-gradient(circle, ${color} 1.8px, transparent 1.8px)`,
      backgroundSize: "10px 10px",
    }}
  />
);

const BrokenRing = ({
  className = "",
  color = "#ee4b62",
}: {
  className?: string;
  color?: string;
}) => (
  <div
    className={className}
    style={{
      borderColor: color,
      clipPath: "polygon(0 0, 85% 0, 85% 55%, 100% 55%, 100% 100%, 0 100%)",
    }}
  />
);

/* --------- Parallax helper --------- */

/** Build a pair of transforms that shift a shape by ±intensity px with the mouse. */
function useParallax(
  mx: MotionValue<number>,
  my: MotionValue<number>,
  intensity: number,
) {
  const x = useTransform(mx, [-1, 1], [-intensity, intensity]);
  const y = useTransform(my, [-1, 1], [-intensity, intensity]);
  return { x, y };
}

/* --------- Main backdrop --------- */

export default function DecorativeBackdrop() {
  // Shared global mouse position (single listener site-wide).
  const smoothX = useSpring(mouseX, { stiffness: 35, damping: 18, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 35, damping: 18, mass: 0.4 });

  // Each shape gets its own parallax depth (deeper = more movement).
  const s1 = useParallax(smoothX, smoothY, 28);
  const s2 = useParallax(smoothX, smoothY, 16);
  const s3 = useParallax(smoothX, smoothY, 40);
  const s4 = useParallax(smoothX, smoothY, 22);
  const s5 = useParallax(smoothX, smoothY, 34);
  const s6 = useParallax(smoothX, smoothY, 18);
  const s7 = useParallax(smoothX, smoothY, 24);
  const s8 = useParallax(smoothX, smoothY, 14);
  const s9 = useParallax(smoothX, smoothY, 30);
  const s10 = useParallax(smoothX, smoothY, 20);

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Top-left teal waves */}
      <motion.div style={s1} className="absolute top-[8%] left-[3%] opacity-40">
        <TealWaves className="w-20 h-auto" />
      </motion.div>

      {/* Mid-left yellow dot */}
      <motion.div
        style={s2}
        className="absolute top-[34%] left-[6%] w-4 h-4 rounded-full bg-[#F3B421]/70"
      />

      {/* Top-right red broken ring */}
      <motion.div style={s3} className="absolute top-[14%] right-[5%] opacity-40">
        <BrokenRing className="w-28 h-28 rounded-full border-[5px]" />
      </motion.div>

      {/* Mid-right teal dot grid */}
      <motion.div style={s4} className="absolute top-[38%] right-[2%] opacity-50">
        <DotGrid className="w-24 h-24" />
      </motion.div>

      {/* Bottom-right yellow hollow ring */}
      <motion.div
        style={s5}
        className="absolute bottom-[20%] right-[8%] w-14 h-14 rounded-full border-[5px] border-[#F3B421]/60"
      />

      {/* Bottom-left teal dot grid (smaller) */}
      <motion.div style={s6} className="absolute bottom-[12%] left-[4%] opacity-40">
        <DotGrid className="w-20 h-20" />
      </motion.div>

      {/* Mid-right yellow dot */}
      <motion.div
        style={s7}
        className="absolute top-[58%] right-[20%] w-3 h-3 rounded-full bg-[#F3B421]/80"
      />

      {/* Top-center teal waves (smaller) */}
      <motion.div style={s8} className="absolute top-[50%] left-[42%] opacity-25">
        <TealWaves className="w-14 h-auto" />
      </motion.div>

      {/* Bottom-left pink dot ring */}
      <motion.div
        style={s9}
        className="absolute bottom-[28%] left-[14%] w-5 h-5 rounded-full border-[3px] border-[#ee4b62]/50"
      />

      {/* Mid-left red broken ring (smaller, mirrored) */}
      <motion.div
        style={s10}
        className="absolute top-[62%] left-[2%] opacity-30 rotate-180"
      >
        <BrokenRing className="w-20 h-20 rounded-full border-[4px]" />
      </motion.div>
    </div>
  );
}
