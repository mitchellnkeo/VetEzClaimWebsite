"use client";

import { useEffect, useRef } from "react";
import { ZEFFY_EMBED_FORM_URL } from "@/lib/site";

type ZeffyDonateButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ZeffyDonateButton({
  children,
  className = "btn-accent",
}: ZeffyDonateButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.setAttribute("zeffy-form-link", ZEFFY_EMBED_FORM_URL);
    }
  }, []);

  return (
    <button ref={buttonRef} type="button" className={className}>
      {children}
    </button>
  );
}
