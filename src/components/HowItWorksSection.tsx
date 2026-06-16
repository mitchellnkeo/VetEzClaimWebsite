import { HOW_IT_WORKS } from "@/lib/site";

function DownloadIcon() {
  return (
    <svg
      className="h-10 w-10 text-brand"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-10 w-10 text-brand"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function BullhornIcon() {
  return (
    <svg
      className="h-10 w-10 text-brand"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18 11c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-8 0c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8z" />
      <path d="M3 13h2v5c0 1.1.9 2 2 2h2v-7H5c-.55 0-1-.45-1-1v-1zm14 0h-4v7h2c1.1 0 2-.9 2-2v-5z" />
    </svg>
  );
}

const STEP_ICONS = [DownloadIcon, CheckIcon, BullhornIcon];

export default function HowItWorksSection() {
  return (
    <section id="steps" className="section-chevron-bottom bg-white">
      <div className="section-container pb-4 pt-16 md:pt-20">
        <h2 className="section-title text-center">How It Works</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = STEP_ICONS[index];

            return (
              <article key={item.step} className="text-center">
                <div className="step-icon-circle">
                  <span className="step-badge">{item.step}</span>
                  <Icon />
                </div>
                <h3 className="mt-6 text-lg font-medium text-brand">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
