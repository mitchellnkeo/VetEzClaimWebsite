import {
  APP_STORE_URL,
  LEGAL_ENTITY,
  SUPPORT_EMAIL,
  WEB_APP_URL,
} from "@/lib/site";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="section-container flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {LEGAL_ENTITY}. All Rights Reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`${WEB_APP_URL}/terms-conditions`}
            className="hover:text-white"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href={`${WEB_APP_URL}/privacy-policy`}
            className="hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href={`${WEB_APP_URL}/accessibility`}
            className="hover:text-white"
          >
            Accessibility
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white">
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
