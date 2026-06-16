import { FEATURES } from "@/lib/site";

export default function FeaturesSection() {
  return (
    <section id="demo" className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Why Veterans Use VetEZ Claim</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.number}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-brand">
                {feature.number}
              </p>
              <h3 className="mt-2 flex-1 text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <a
                href={feature.href}
                className="mt-4 text-sm font-semibold text-brand hover:underline"
                target={"external" in feature && feature.external ? "_blank" : undefined}
                rel={"external" in feature && feature.external ? "noopener noreferrer" : undefined}
              >
                {feature.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
