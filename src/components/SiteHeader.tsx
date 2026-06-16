import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PRODUCT_NAME } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
      <div className="section-container flex items-center justify-between gap-4 py-4">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt={PRODUCT_NAME}
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#download" className="btn-primary shrink-0 text-xs sm:text-sm">
          Download
        </a>
      </div>
    </header>
  );
}
