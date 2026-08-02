import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasikartokim.lt – mokymosi svetainė 1-12 klasėms",
  description:
    "Pasikartokim.lt – lietuviška mokymosi platforma vaikams, tėvams ir mokytojams. Užduotys, teorija, PDF lapai ir žaidybiniai lygiai 1–12 klasėms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}