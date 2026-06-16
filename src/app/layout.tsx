import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import { ZEFFY_EMBED_SCRIPT_URL } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "VetEZ Claim | VA Forms for Veterans",
  description:
    "VetEZ Claim helps veterans complete, sign, and submit VA claim and appeal forms. Free after you create an account and complete your profile.",
  openGraph: {
    title: "VetEZ Claim",
    description:
      "The app that serves veterans — complete VA forms and submit directly to the VA.",
    url: "https://vetezclaim.com",
    siteName: "VetEZ Claim",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans">
        <Script src={ZEFFY_EMBED_SCRIPT_URL} strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
