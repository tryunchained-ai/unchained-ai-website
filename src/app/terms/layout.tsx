import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Unchained AI",
  description: "Terms of service for Unchained AI voice agent services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
