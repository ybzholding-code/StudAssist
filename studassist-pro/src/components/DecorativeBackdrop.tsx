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
import { useMemo } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { mouseX, mouseY } from "@/src/lib/mousePosition";
import {
  PiShape, SquareRootShape, AtomShape, SigmaShape, MatrixShape,
  CompassShape, BookShape, BeakerShape, InfinityShape, IntegralShape,
  DNAShape, GlobeShape, LightbulbShape,
  CircleShape, TriangleShape, HexagonShape, ZigZagShape, PlusGridShape
} from "@/src/components/shapes/AcademicShapes";

const NUM_SHAPES = 60; // Perfectly balanced, not too many, not too few
const TOTAL_VH = 800; // Spread across the whole site

// Elegant brand colors
const COLORS = ["#1CB69B", "#ee4b62", "#F3B421"];

const COMPONENTS = [
  PiShape, SquareRootShape, AtomShape, SigmaShape, MatrixShape, 
  CompassShape, BookShape, BeakerShape, InfinityShape, IntegralShape, 
  DNAShape, GlobeShape, LightbulbShape,
  CircleShape, TriangleShape, HexagonShape, ZigZagShape, PlusGridShape
];

// Seeded random for stable hydration
function mulberry32(a: number) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}

function FloatingShape({ shape, smoothX, smoothY }: { shape: any, smoothX: any, smoothY: any }) {
  const x = useTransform(smoothX, [-1, 1], [-shape.parallax, shape.parallax]);
  const y = useTransform(smoothY, [-1, 1], [-shape.parallax, shape.parallax]);
  
  return (
    <motion.div
      style={{
        x, y,
        top: `${shape.top}vh`,
        left: `${shape.left}%`,
        width: `${shape.sizeRem}rem`,
        height: `${shape.sizeRem}rem`,
        opacity: shape.opacity,
        color: shape.color
      }}
      className="absolute origin-center"
      initial={{ rotate: shape.rotate }}
      animate={
        shape.animateRotate ? { rotate: shape.rotate + shape.animateRotate } : { rotate: shape.rotate }
      }
      transition={
        shape.animateRotate 
          ? { duration: shape.animationDuration, repeat: Infinity, ease: "linear" } 
          : undefined
      }
    >
      <shape.Comp className="w-full h-full" />
    </motion.div>
  );
}

export default function DecorativeBackdrop() {
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20, mass: 0.5 });

  const shapes = useMemo(() => {
    const rand = mulberry32(42); // Fixed seed
    return Array.from({ length: NUM_SHAPES }).map((_, i) => {
      const Comp = COMPONENTS[Math.floor(rand() * COMPONENTS.length)];
      const color = COLORS[Math.floor(rand() * COLORS.length)];
      
      const top = (i / NUM_SHAPES) * TOTAL_VH + (rand() * 10 - 5); 
      const left = 5 + rand() * 90; 
      
      // Control size: mostly small to medium, no giant heavy shapes!
      const sizeRem = 2 + rand() * 6; // 2rem to 8rem max
      
      // Opacity: subtle and elegant
      const opacity = 0.1 + rand() * 0.15; // 0.1 to 0.25
      
      const rotate = rand() * 360;
      const parallax = 10 + rand() * 30; 
      
      const animateRotate = rand() > 0.8 ? (rand() > 0.5 ? 360 : -360) : 0;
      const animationDuration = 40 + rand() * 60; 
      
      return { id: i, Comp, color, top, left, sizeRem, opacity, rotate, parallax, animateRotate, animationDuration };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {shapes.map((shape) => (
        <FloatingShape key={shape.id} shape={shape} smoothX={smoothX} smoothY={smoothY} />
      ))}
    </div>
  );
}
