import Image from "next/image";

export default function DownloadSection() {
  return (
    <section id="download" className="section-chevron-top bg-white">
      <div className="section-container py-16 text-center md:py-20">
        <Image
          src="/assets/hero-qrcode.png"
          alt="QR code to download VetEZ Claim from the App Store"
          width={220}
          height={220}
          className="mx-auto h-auto w-[220px]"
        />
        <h2 className="mx-auto mt-8 max-w-lg text-lg font-medium text-brand sm:text-xl">
          Scan QR Code if you&apos;re visiting this website on a desktop
        </h2>
      </div>
    </section>
  );
}
