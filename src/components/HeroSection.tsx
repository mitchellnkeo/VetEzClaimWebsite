"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { APP_STORE_URL } from "@/lib/site";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.55,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0 bg-brand"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
        aria-hidden
      />

      <div className="section-container relative z-10 flex min-h-screen flex-col justify-center pb-20 pt-28">
        <motion.div className="mb-8 w-[200px] shrink-0" {...fadeUp(0.1)}>
          <Image
            src="/assets/hero-qrcode.png"
            alt="QR code to download VetEZ Claim"
            width={200}
            height={200}
            className="h-auto w-full"
            priority
          />
        </motion.div>

        <div className="max-w-2xl">
          <motion.h1
            className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            {...fadeUp(0.15)}
          >
            The app that serves YOU
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg font-medium text-white/90 sm:text-xl"
            {...fadeUp(0.25)}
          >
            Significantly cut the time it takes to request and process your
            well-deserved Veteran Benefits
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-6"
            {...fadeUp(0.35)}
          >
            <a
              href={APP_STORE_URL}
              className="btn-download-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
              <span aria-hidden className="ml-2 opacity-70">
                →
              </span>
            </a>
            <a href="#contact" className="btn-link-light">
              Get Help
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
