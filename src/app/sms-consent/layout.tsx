import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Consent Policy — Unchained AI",
  description: "SMS consent policy and verbal consent script for Unchained AI voice agents.",
};

export default function SMSConsentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
