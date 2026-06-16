"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade-in" | "zoom-in";
} & Pick<HTMLMotionProps<"div">, "id">;

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  id,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const initial =
    variant === "zoom-in"
      ? { opacity: 0, scale: 0.85 }
      : variant === "fade-in"
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };
  const visible =
    variant === "zoom-in"
      ? { opacity: 1, scale: 1 }
      : variant === "fade-in"
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

  return (
    <motion.div
      id={id}
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
