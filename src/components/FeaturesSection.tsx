"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  APP_STORE_URL,
  FEATURE_PHONE_SCREENSHOTS,
  FEATURES_LEFT,
  FEATURES_RIGHT,
  PHONE_SCREENSHOT_DEFAULT,
} from "@/lib/site";
import PolyfoldEdge from "./PolyfoldEdge";
import ScrollReveal from "./ScrollReveal";

type ScreenKey = "center" | keyof typeof FEATURE_PHONE_SCREENSHOTS;

type FeatureItem =
  | (typeof FEATURES_LEFT)[number]
  | (typeof FEATURES_RIGHT)[number];

function FeatureBlock({
  feature,
  delay,
  onHighlight,
}: {
  feature: FeatureItem;
  delay: number;
  onHighlight: (number: string) => void;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="demo-feature-row"
        onMouseEnter={() => onHighlight(feature.number)}
      >
        <p className="feature-number">{feature.number}</p>
        <div className="feature-line" />
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/95">
          {feature.title}
        </p>
        <a
          href={feature.href}
          className="feature-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Now
          <span aria-hidden>▶</span>
        </a>
      </div>
    </ScrollReveal>
  );
}

function PhoneMockup({ activeScreen }: { activeScreen: ScreenKey }) {
  const screens = useMemo(
    () => ({
      center: PHONE_SCREENSHOT_DEFAULT,
      ...FEATURE_PHONE_SCREENSHOTS,
    }),
    []
  );

  return (
    <div className="demo-phone-frame">
      {(Object.entries(screens) as [ScreenKey, string][]).map(([key, src]) => (
        <motion.div
          key={key}
          className="absolute inset-0"
          animate={{ opacity: activeScreen === key ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          aria-hidden={activeScreen !== key}
        >
          <Image
            src={src}
            alt={
              activeScreen === key
                ? "VetEZ Claim app screenshot"
                : ""
            }
            fill
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
            className="object-contain object-center"
            priority={key === "center"}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("center");

  const resetScreen = () => setActiveScreen("center");

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative bg-brand pb-32 pt-36 lg:pt-40"
    >
      <PolyfoldEdge edge="top" containerRef={sectionRef} />
      <PolyfoldEdge edge="bottom" containerRef={sectionRef} />

      <div className="section-container relative z-10">
        <div
          className="grid items-center gap-x-8 gap-y-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10"
          onMouseLeave={resetScreen}
        >
          <div className="order-2 flex flex-col justify-center lg:order-1">
            {FEATURES_LEFT.map((feature, index) => (
              <FeatureBlock
                key={feature.number}
                feature={feature}
                delay={index * 0.08}
                onHighlight={setActiveScreen}
              />
            ))}
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <ScrollReveal delay={0.1} className="w-full">
              <PhoneMockup activeScreen={activeScreen} />
            </ScrollReveal>
          </div>

          <div className="order-3 flex flex-col justify-center">
            {FEATURES_RIGHT.map((feature, index) => (
              <FeatureBlock
                key={feature.number}
                feature={feature}
                delay={index * 0.08}
                onHighlight={setActiveScreen}
              />
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-8 text-center lg:hidden">
            <a
              href={APP_STORE_URL}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
