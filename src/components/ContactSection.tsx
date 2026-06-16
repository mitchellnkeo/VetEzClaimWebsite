"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  LEGAL_ENTITY,
  SUPPORT_EMAIL,
  WEB_APP_URL,
} from "@/lib/site";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      body: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus("success");
      setMessage("Thank you — your message has been sent.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : `Please email us directly at ${SUPPORT_EMAIL}.`
      );
    }
  };

  const year = new Date().getFullYear();

  return (
    <section id="contact" className="bg-brand pb-10 pt-12 md:pt-16">
      <div className="section-container">
        <ScrollReveal>
          <div className="rounded-xl bg-white p-6 shadow-card sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-medium text-brand sm:text-3xl">
                Contact Us
              </h2>
              <p className="mt-6">
                <span className="block text-sm font-semibold text-brand">
                  Email:
                </span>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-brand">
                  Your Name *
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none ring-accent focus:ring-2"
                  />
                </label>
                <label className="block text-sm font-medium text-brand">
                  Your Email *
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none ring-accent focus:ring-2"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-brand">
                Your Message *
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none ring-accent focus:ring-2"
                />
              </label>

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="btn-download"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send a Message"}
                </button>
              </div>

              {message ? (
                <p
                  className={`mt-3 text-sm ${
                    status === "success" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
          </div>
        </ScrollReveal>

        <p className="mt-8 text-center text-sm text-white/90">
          © {year} {LEGAL_ENTITY}. All Rights Reserved —{" "}
          <Link
            href={`${WEB_APP_URL}/terms-conditions`}
            className="text-white hover:underline"
          >
            Terms &amp; Conditions
          </Link>{" "}
          |{" "}
          <Link
            href={`${WEB_APP_URL}/privacy-policy`}
            className="text-white hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            href={`${WEB_APP_URL}/accessibility`}
            className="text-white hover:underline"
          >
            Accessibility
          </Link>
        </p>
      </div>
    </section>
  );
}
