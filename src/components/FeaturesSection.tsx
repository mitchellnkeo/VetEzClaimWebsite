"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  APP_STORE_URL,
  FEATURES_LEFT,
  FEATURES_RIGHT,
} from "@/lib/site";
import PolyfoldEdge from "./PolyfoldEdge";
import ScrollReveal from "./ScrollReveal";

type FeatureItem =
  | (typeof FEATURES_LEFT)[number]
  | (typeof FEATURES_RIGHT)[number];

function FeatureBlock({
  feature,
  delay,
}: {
  feature: FeatureItem;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="py-6">
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

function PhoneMockup() {
  return (
    <ScrollReveal delay={0.1}>
      <div className="relative mx-auto w-[220px] sm:w-[260px] lg:w-[300px]">
        <Image
          src="/assets/app-showcase/object_iphone_1.png"
          alt=""
          width={300}
          height={600}
          className="relative z-10 h-auto w-full"
          aria-hidden
        />
        <Image
          src="/assets/app-showcase/phonescreen.jpg"
          alt="VetEZ Claim app login screen"
          width={174}
          height={308}
          className="absolute left-1/2 top-[11.5%] z-0 w-[58%] -translate-x-1/2 rounded-[1.25rem]"
        />
      </div>
    </ScrollReveal>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative bg-brand pb-32 pt-24 text-white"
    >
      <PolyfoldEdge edge="top" containerRef={sectionRef} />
      <PolyfoldEdge edge="bottom" containerRef={sectionRef} />

      <div className="section-container">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <div className="order-2 space-y-2 lg:order-1">
            {FEATURES_LEFT.map((feature, index) => (
              <FeatureBlock
                key={feature.number}
                feature={feature}
                delay={index * 0.08}
              />
            ))}
          </div>

          <div className="order-1 py-6 lg:order-2">
            <PhoneMockup />
          </div>

          <div className="order-3 space-y-2">
            {FEATURES_RIGHT.map((feature, index) => (
              <FeatureBlock
                key={feature.number}
                feature={feature}
                delay={index * 0.08}
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
