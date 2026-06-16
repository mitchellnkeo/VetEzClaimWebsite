import { HOW_IT_WORKS } from "@/lib/site";

export default function HowItWorksSection() {
  return (
    <section id="steps" className="section-container py-16 md:py-20">
      <h2 className="section-title text-center">How It Works</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {HOW_IT_WORKS.map((item) => (
          <article
            key={item.step}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
              {item.step}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
