import Image from "next/image";
import { APP_STORE_URL } from "@/lib/site";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-brand text-white">
      <div className="section-container relative flex min-h-screen flex-col justify-center pb-20 pt-28">
        <div className="mb-8 w-[200px] shrink-0">
          <Image
            src="/assets/hero-qrcode.png"
            alt="QR code to download VetEZ Claim"
            width={200}
            height={200}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            The app that serves YOU
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium text-white/90 sm:text-xl">
            Significantly cut the time it takes to request and process your
            well-deserved Veteran Benefits
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
