import Image from "next/image";
import { APP_STORE_URL } from "@/lib/site";

export default function DownloadSection() {
  return (
    <section id="download" className="section-container py-16 md:py-20">
      <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="section-title">Download VetEZ Claim</h2>
          <p className="mt-4 text-slate-600">
            Get the iOS app from the Apple App Store, or open the web app in
            your browser after you create an account.
          </p>
          <a
            href={APP_STORE_URL}
            className="btn-primary mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store
          </a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Scan this QR code if you&apos;re visiting on a desktop
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Opens the VetEZ Claim App Store listing on your phone.
          </p>
          <Image
            src="/assets/app-download-qr.png"
            alt="QR code to download VetEZ Claim from the App Store"
            width={180}
            height={180}
            className="mx-auto mt-4"
          />
        </div>
      </div>
    </section>
  );
}
