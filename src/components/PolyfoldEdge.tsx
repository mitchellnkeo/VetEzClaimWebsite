"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { type RefObject } from "react";

const POLYFOLD_HEIGHT = 150;

type PolyfoldEdgeProps = {
  edge: "top" | "bottom";
  containerRef: RefObject<HTMLElement | null>;
  fill?: string;
};

function PolyfoldShape({
  edge,
  fill,
  height,
  opacity,
}: {
  edge: "top" | "bottom";
  fill: string;
  height: number | MotionValue<number>;
  opacity: number | MotionValue<number>;
}) {
  const clipPath =
    edge === "top"
      ? "polygon(0 0, 50% 100%, 100% 0)"
      : "polygon(0 100%, 50% 0, 100% 100%)";

  return (
    <motion.div
      className="pointer-events-none absolute left-0 right-0 z-10 overflow-hidden"
      style={{
        [edge]: 0,
        height,
        opacity,
      }}
      aria-hidden
    >
      <div
        className="w-full"
        style={{
          height: POLYFOLD_HEIGHT,
          background: fill,
          clipPath,
        }}
      />
    </motion.div>
  );
}

/**
 * Scroll-linked polyfold chevron (matches vetezclaim.com Revolution Polyfold).
 */
export default function PolyfoldEdge({
  edge,
  containerRef,
  fill = "#ffffff",
}: PolyfoldEdgeProps) {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset:
      edge === "top"
        ? ["start end", "start 0.3"]
        : ["end 0.7", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [0, POLYFOLD_HEIGHT]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1]);

  if (prefersReducedMotion) {
    return (
      <PolyfoldShape
        edge={edge}
        fill={fill}
        height={POLYFOLD_HEIGHT}
        opacity={1}
      />
    );
  }

  return (
    <PolyfoldShape
      edge={edge}
      fill={fill}
      height={height}
      opacity={opacity}
    />
  );
}
