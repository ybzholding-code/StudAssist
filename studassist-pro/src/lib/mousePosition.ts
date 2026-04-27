/**
 * Shared singleton mouse-position motion values.
 *
 * A single `mousemove` listener is attached on first import, and every
 * component that needs mouse-linked motion consumes the same smoothed
 * `mouseX` / `mouseY` values. Prevents attaching N listeners when many
 * `ImageFloaters` (or other mouse-parallax) elements are mounted.
 *
 * Both values are normalized to the range [-1, 1] and passed through a
 * global spring for silky motion.
 */
import { motionValue, type MotionValue } from "motion/react";

export const mouseX = motionValue(0);
export const mouseY = motionValue(0) as MotionValue<number>;

if (typeof window !== "undefined") {
  const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  if (!mq?.matches) {
    window.addEventListener(
      "mousemove",
      (e) => {
        mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
        mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
      },
      { passive: true },
    );
  }
}
