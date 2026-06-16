import ScrollReveal from "./ScrollReveal";
import {
  DONATE_DISCLAIMER,
  DONATE_SUPPORT,
  ZEFFY_DONATION_FORM_URL,
} from "@/lib/site";

export default function DonateSection() {
  return (
    <section id="donate" className="bg-brand-muted py-16 md:py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Donate</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {DONATE_SUPPORT}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-6 shadow-card sm:p-10">
            <div className="rounded-lg bg-brand px-5 py-6 text-white">
              <h3 className="text-lg font-semibold">
                All features are included at no cost
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                After you sign in and complete your profile, you can use every
                VA form and tool in VetEZ Claim without paying.
              </p>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-brand">
                Support our mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Give once or set up monthly giving on our secure Zeffy page.
              </p>

              <a
                href={ZEFFY_DONATION_FORM_URL}
                className="btn-download mt-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-sm font-medium text-brand">
                Prefer to give on another device?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Scan this code to open our Zeffy donation page.
              </p>
              <img
                src="/assets/zeffy-donate-qr.png"
                alt="QR code linking to the VetEZ Claim Zeffy donation page"
                width={180}
                height={180}
                className="mx-auto mt-4 h-44 w-44"
              />
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-slate-600">
              {DONATE_DISCLAIMER}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
