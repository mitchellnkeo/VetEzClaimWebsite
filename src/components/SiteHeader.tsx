import Image from "next/image";
import Link from "next/link";
import {
  CTA_USE_WEB_APP,
  NAV_LINKS,
  PRODUCT_NAME,
  WEB_APP_LOGIN_URL,
} from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand">
      <div className="section-container flex items-center justify-between gap-4 py-4">
        <Link href="#home" className="flex shrink-0 items-center">
          <Image
            src="/assets/logo-white.png"
            alt={PRODUCT_NAME}
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
          href={WEB_APP_LOGIN_URL}
          className="btn-header-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          {CTA_USE_WEB_APP}
        </a>
      </div>
    </header>
  );
}
