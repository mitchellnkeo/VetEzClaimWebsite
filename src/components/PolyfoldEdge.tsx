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
  /** Top chevron peaks while scrolling in, then hides once section is in view. */
  collapseWhenInView?: boolean;
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
  collapseWhenInView = false,
}: PolyfoldEdgeProps) {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset:
      collapseWhenInView && edge === "top"
        ? ["start end", "start 0.18"]
        : edge === "top"
          ? ["start end", "start 0.3"]
          : ["end 0.7", "end start"],
  });

  const enterHeight = useTransform(scrollYProgress, [0, 1], [0, POLYFOLD_HEIGHT]);
  const enterOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0, 1, 1]
  );

  const collapseHeight = useTransform(
    scrollYProgress,
    [0, 0.38, 1],
    [0, POLYFOLD_HEIGHT, 0]
  );
  const collapseOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.55, 1],
    [0, 1, 1, 0]
  );

  const height =
    collapseWhenInView && edge === "top" ? collapseHeight : enterHeight;
  const opacity =
    collapseWhenInView && edge === "top" ? collapseOpacity : enterOpacity;

  if (prefersReducedMotion) {
    return null;
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
