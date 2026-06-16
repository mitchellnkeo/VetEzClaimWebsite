import { NextResponse } from "next/server";
import { SUPPORT_EMAIL } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  body?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const body = payload.body?.trim();

  if (!name || !email || !body) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;

  if (formspreeId) {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message: body,
        _subject: `VetEZ Claim contact form — ${name}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  // Fallback for local/dev until Formspree or another provider is configured.
  console.info("[contact-form]", { name, email, body, to: SUPPORT_EMAIL });

  return NextResponse.json({
    ok: true,
    message:
      "Message logged in development. Configure FORMSPREE_FORM_ID in production.",
  });
}
