import {
  APP_STORE_URL,
  NONPROFIT_TAGLINE,
  WEB_APP_URL,
} from "@/lib/site";
import ZeffyDonateButton from "./ZeffyDonateButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-slate-900 text-white"
    >
      <div className="section-container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-3 text-sm font-medium text-blue-100">
            {NONPROFIT_TAGLINE}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            The app that serves YOU
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-50">
            Significantly cut the time it takes to request and process your
            well-deserved veteran benefits.
          </p>
          <p className="mt-3 max-w-xl text-sm text-blue-100">
            All app features are free after you create an account and complete
            your profile. Optional donations support our nonprofit mission.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={APP_STORE_URL} className="btn-accent" target="_blank" rel="noopener noreferrer">
              Download Now
            </a>
            <a href={WEB_APP_URL} className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Open Web App
            </a>
            <ZeffyDonateButton className="btn-secondary border-white/30 bg-transparent text-white hover:bg-white/10">
              Donate
            </ZeffyDonateButton>
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
          <h2 className="text-xl font-bold">Get started in minutes</h2>
          <ul className="mt-4 space-y-3 text-sm text-blue-50">
            <li>• Download the iOS app or use the web app</li>
            <li>• Create your account and complete your profile</li>
            <li>• Complete, sign, and submit VA forms from one place</li>
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Get Help
          </a>
        </div>
      </div>
    </section>
  );
}
