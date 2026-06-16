"use client";

import { FormEvent, useState } from "react";
import { SUPPORT_EMAIL } from "@/lib/site";

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

  return (
    <section id="contact" className="bg-slate-100 py-16 md:py-20">
      <div className="section-container grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="section-title">Contact Us</h2>
          <p className="mt-4 text-slate-600">
            Questions about VA forms, your account, or supporting our nonprofit
            mission? We&apos;re here to help.
          </p>
          <p className="mt-6">
            <span className="block text-sm font-semibold text-slate-700">
              Email
            </span>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-brand hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900">Contact Form</h3>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Your Name *
              <input
                required
                name="name"
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-brand focus:ring-2"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Your Email *
              <input
                required
                name="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-brand focus:ring-2"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Your Message *
              <textarea
                required
                name="message"
                rows={5}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-brand focus:ring-2"
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn-primary mt-5 w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send a Message"}
          </button>
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
    </section>
  );
}
