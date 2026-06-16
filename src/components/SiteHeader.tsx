import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, NAV_LINKS, PRODUCT_NAME } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand">
      <div className="section-container flex items-center justify-between gap-4 py-4">
        <Link href="#home" className="flex items-center">
          <Image
            src="/assets/logo-white.png"
            alt={PRODUCT_NAME}
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={APP_STORE_URL}
          className="btn-download shrink-0 px-5 py-2 text-xs sm:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </header>
  );
}
