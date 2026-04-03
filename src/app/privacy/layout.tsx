import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Unchained AI",
  description: "Privacy policy for Unchained AI voice agent services.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
