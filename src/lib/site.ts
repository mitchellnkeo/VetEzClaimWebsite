export const PRODUCT_NAME = "VetEZ Claim";

export const NONPROFIT_TAGLINE =
  "VetEZ Claim, from VetClaims Alliance, a nonprofit corporation";

export const HERO_HEADLINE = "The FREE app built to serve you";

export const HERO_SUBHEADLINE =
  "Significantly cut the time it takes to complete and file for your well-deserved Veteran Benefits";

export const HERO_NONPROFIT_LINE =
  "VetEZ Claim is a product of VetClaims Alliance, a non-profit organization focused on Veteran technology solutions";

export const LEGAL_ENTITY = "VetClaims Alliance, a nonprofit corporation";

export const SUPPORT_EMAIL = "support@vetezclaim.com";

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/app/vetez-claim/id6670165767";

export const WEB_APP_URL =
  process.env.NEXT_PUBLIC_WEB_APP_URL || "https://app.vetezclaim.com";

export const WEB_APP_LOGIN_URL = `${WEB_APP_URL}/login`;

export const CTA_DOWNLOAD_APP = "Download App";
/** Pairs with “Download App” — signals no App Store install required */
export const CTA_USE_WEB_APP = "Use in Browser";
export const CTA_GET_HELP = "Get Help";

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
  { href: "#donate", label: "Donate" },
  { href: "#contact", label: "Contact" },
] as const;

export const DONATE_SUPPORT =
  "Your support allows us to add new features and assist more veterans.";

export const DONATE_DISCLAIMER =
  "Donations are voluntary and support our nonprofit mission to assist veterans. All app features are free after you create an account and complete your profile. You will complete your gift on Zeffy's secure donation page (one-time or monthly).";

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Download App & Register",
    description:
      "Currently available in the Apple Store and free to download on any iOS device",
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
      "Direct e-fax upload capabilities allow you to submit completed forms directly to the VA",
  },
] as const;

export const FEATURES_LEFT = [
  {
    number: "01",
    title: "Complete all necessary steps in one place",
    href: APP_STORE_URL,
  },
  {
    number: "02",
    title: "Fill out forms at your own pace",
    href: APP_STORE_URL,
  },
  {
    number: "03",
    title: "Every form is broken down into its fields",
    href: APP_STORE_URL,
  },
] as const;

export const FEATURES_RIGHT = [
  {
    number: "04",
    title: "Directly upload via e-fax completed forms to VA.",
    href: APP_STORE_URL,
  },
  {
    number: "05",
    title: "View completed and submitted VA forms",
    href: APP_STORE_URL,
  },
  {
    number: "06",
    title:
      "All features are free after you create an account and complete your profile",
    href: WEB_APP_URL,
  },
] as const;

export const PHONE_SCREENSHOT_DEFAULT =
  "/assets/iPhonePictures/CenterPhoto.png";

/** Full-device simulator captures (1206×2622). Shown at large scale — no separate bezel layer. */
export const PHONE_SCREENSHOT_ASPECT = 1206 / 2622;

/** Maps feature number → app screenshot (shown in demo phone on hover). */
export const FEATURE_PHONE_SCREENSHOTS: Record<string, string> = {
  "01": "/assets/iPhonePictures/01.png",
  "02": "/assets/iPhonePictures/02.png",
  "03": "/assets/iPhonePictures/03.png",
  "04": "/assets/iPhonePictures/04.png",
  "05": "/assets/iPhonePictures/05.png",
  "06": "/assets/iPhonePictures/06.png",
};
