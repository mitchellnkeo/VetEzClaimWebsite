import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function DownloadSection() {
  return (
    <section id="download" className="bg-white pt-20 pb-8 md:pb-12">
      <div className="section-container py-16 text-center md:py-20">
        <ScrollReveal>
          <Image
            src="/assets/hero-qrcode.png"
            alt="QR code to download VetEZ Claim from the App Store"
            width={220}
            height={220}
            className="mx-auto h-auto w-[220px]"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-lg text-lg font-medium text-brand sm:text-xl">
            Scan QR Code if you&apos;re visiting this website on a desktop
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
