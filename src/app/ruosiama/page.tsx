import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pasikartokim.lt – ruošiama",
  description:
    "Pasikartokim.lt mokymosi platforma šiuo metu ruošiama.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "var(--primary-light)",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          padding: "48px 32px",
          textAlign: "center",
          background: "#ffffff",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          boxShadow: "var(--shadow)",
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Pasikartokim.lt"
          width={340}
          height={91}
          priority
          style={{
            width: "min(340px, 90%)",
            height: "auto",
            marginBottom: "32px",
          }}
        />

        <p
          style={{
            marginBottom: "12px",
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--primary)",
          }}
        >
          Mokymosi platforma 1–12 klasėms
        </p>

        <h1
          style={{
            marginBottom: "20px",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            lineHeight: 1.1,
            color: "var(--text)",
          }}
        >
          Pasikartokim.lt ruošiama
        </h1>

        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "var(--muted)",
          }}
        >
          Ruošiame mokymosi medžiagą, interaktyvias užduotis ir veiklas.
          Sugrįžkite netrukus.
        </p>
      </section>
    </main>
  );
}