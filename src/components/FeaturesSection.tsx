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
  onHighlight,
}: {
  feature: FeatureItem;
  onHighlight: (number: string) => void;
}) {
  return (
    <div
      className="demo-feature-row"
      onMouseEnter={() => onHighlight(feature.number)}
    >
      <p className="feature-number">{feature.number}</p>
      <div className="feature-line" />
      <p className="mt-3 text-sm leading-relaxed text-white/95">
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
              activeScreen === key ? "VetEZ Claim app screenshot" : ""
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

function DemoGrid({
  activeScreen,
  setActiveScreen,
  resetScreen,
}: {
  activeScreen: ScreenKey;
  setActiveScreen: (key: ScreenKey) => void;
  resetScreen: () => void;
}) {
  return (
    <div className="hidden lg:block" onMouseLeave={resetScreen}>
      <div className="demo-showcase">
        <div className="demo-showcase-side demo-showcase-side-left">
          <div className="demo-showcase-side-inner">
            {FEATURES_LEFT.map((feature, index) => (
              <ScrollReveal
                key={feature.number}
                delay={index * 0.08}
                className="scroll-reveal-slot"
              >
                <FeatureBlock
                  feature={feature}
                  onHighlight={setActiveScreen}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="demo-showcase-phone">
          <ScrollReveal delay={0.1}>
            <PhoneMockup activeScreen={activeScreen} />
          </ScrollReveal>
        </div>

        <div className="demo-showcase-side demo-showcase-side-right">
          <div className="demo-showcase-side-inner">
            {FEATURES_RIGHT.map((feature, index) => (
              <ScrollReveal
                key={feature.number}
                delay={index * 0.08}
                className="scroll-reveal-slot"
              >
                <FeatureBlock
                  feature={feature}
                  onHighlight={setActiveScreen}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoStack({
  activeScreen,
  setActiveScreen,
  resetScreen,
}: {
  activeScreen: ScreenKey;
  setActiveScreen: (key: ScreenKey) => void;
  resetScreen: () => void;
}) {
  return (
    <div className="lg:hidden" onMouseLeave={resetScreen}>
      <div className="flex flex-col items-center gap-8">
        <ScrollReveal delay={0.1}>
          <PhoneMockup activeScreen={activeScreen} />
        </ScrollReveal>

        <div className="w-full max-w-md">
          {[...FEATURES_LEFT, ...FEATURES_RIGHT].map((feature, index) => (
            <ScrollReveal key={feature.number} delay={index * 0.06}>
              <FeatureBlock
                feature={feature}
                onHighlight={setActiveScreen}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("center");

  const resetScreen = () => setActiveScreen("center");

  const handleHighlight = (number: string) => {
    setActiveScreen(number as ScreenKey);
  };

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative bg-brand pb-32 pt-28 lg:pt-32"
    >
      <PolyfoldEdge
        edge="top"
        containerRef={sectionRef}
        collapseWhenInView
      />
      <PolyfoldEdge edge="bottom" containerRef={sectionRef} />

      <div className="section-container relative z-10">
        <DemoGrid
          activeScreen={activeScreen}
          setActiveScreen={handleHighlight}
          resetScreen={resetScreen}
        />
        <DemoStack
          activeScreen={activeScreen}
          setActiveScreen={handleHighlight}
          resetScreen={resetScreen}
        />

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
