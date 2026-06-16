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
          <div className="rounded-xl bg-white p-6 shadow-card sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-medium text-brand sm:text-3xl">
                  Donate
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {DONATE_SUPPORT}
                </p>

                <div className="mt-8 rounded-lg bg-brand px-5 py-5 text-white sm:px-6 sm:py-6">
                  <h3 className="text-lg font-semibold">
                    All features are included at no cost
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    After you sign in and complete your profile, you can use
                    every VA form and tool in VetEZ Claim without paying.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-brand sm:text-xl">
                  Support our mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Give once or set up monthly giving on our secure Zeffy page.
                </p>

                <a
                  href={ZEFFY_DONATION_FORM_URL}
                  className="btn-download mt-6 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:gap-8">
              <img
                src="/assets/zeffy-donate-qr.png"
                alt="QR code linking to the VetEZ Claim Zeffy donation page"
                width={180}
                height={180}
                className="h-36 w-36 shrink-0 sm:h-40 sm:w-40"
              />
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-brand">
                  Prefer to give on another device?
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Scan this code to open our Zeffy donation page.
                </p>
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-slate-600 sm:text-sm">
              {DONATE_DISCLAIMER}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
