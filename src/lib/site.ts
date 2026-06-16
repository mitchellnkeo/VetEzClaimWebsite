export const PRODUCT_NAME = "VetEZ Claim";

export const NONPROFIT_TAGLINE =
  "VetEZ Claim, from VetClaims Alliance, a nonprofit corporation";

export const LEGAL_ENTITY = "VetClaims Alliance, a nonprofit corporation";

export const SUPPORT_EMAIL = "support@vetezclaim.com";

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/app/vetez-claim/id6670165767";

export const WEB_APP_URL =
  process.env.NEXT_PUBLIC_WEB_APP_URL || "https://app.vetezclaim.com";

export const ZEFFY_DONATION_FORM_URL =
  process.env.NEXT_PUBLIC_ZEFFY_DONATION_FORM_URL ||
  "https://www.zeffy.com/en-US/donation-form/suppourt-assisting-veterans";

export const ZEFFY_EMBED_FORM_URL =
  process.env.NEXT_PUBLIC_ZEFFY_EMBED_FORM_URL ||
  "https://www.zeffy.com/embed/donation-form/suppourt-assisting-veterans?modal=true";

export const ZEFFY_EMBED_SCRIPT_URL =
  "https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#steps", label: "Steps" },
  { href: "#demo", label: "Demo" },
  { href: "#contact", label: "Contact" },
  { href: "#download", label: "Download" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Download App & Register",
    description:
      "Available on the Apple App Store and free to download on iOS devices.",
  },
  {
    step: "2",
    title: "Complete Forms in the App",
    description:
      "View, complete, and sign common VA claim and appeal forms.",
  },
  {
    step: "3",
    title: "Submit Forms through the App",
    description:
      "Upload completed forms directly to the VA from your phone.",
  },
] as const;

export const FEATURES = [
  {
    number: "01",
    title: "Complete all necessary steps in one place",
    cta: "Open Web App",
    href: WEB_APP_URL,
  },
  {
    number: "02",
    title: "Fill out forms at your own pace",
    cta: "Download Now",
    href: APP_STORE_URL,
  },
  {
    number: "03",
    title: "Every form is broken down into its fields",
    cta: "Download Now",
    href: APP_STORE_URL,
  },
  {
    number: "04",
    title: "Directly upload completed forms to VA",
    cta: "Download Now",
    href: APP_STORE_URL,
  },
  {
    number: "05",
    title: "View completed and submitted VA forms",
    cta: "Download Now",
    href: APP_STORE_URL,
  },
  {
    number: "06",
    title: "All features are free after you create an account and complete your profile",
    cta: "Support Our Mission",
    href: ZEFFY_DONATION_FORM_URL,
    external: true,
  },
] as const;
