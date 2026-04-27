import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface NumberCounterProps {
  value: number;
  direction?: "up" | "down";
  decimals?: number;
  suffix?: string;
  className?: string;
}

export default function NumberCounter({
  value,
  direction = "up",
  decimals = 0,
  suffix = "",
  className = ""
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(Number(latest.toFixed(decimals))) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={ref} className={className} />;
}
