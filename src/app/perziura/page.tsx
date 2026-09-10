import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privati peržiūra | Pasikartokim.lt",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewPage() {
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
          maxWidth: "520px",
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
            width: "min(300px, 90%)",
            height: "auto",
            marginBottom: "32px",
          }}
        />

        <h1
          style={{
            marginBottom: "12px",
            color: "var(--text)",
          }}
        >
          Privati peržiūra
        </h1>

        <p
          style={{
            marginBottom: "28px",
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          Įveskite privatų peržiūros raktą.
        </p>

        <form
          action="/api/preview"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <label
            htmlFor="key"
            style={{
              textAlign: "left",
              fontWeight: 600,
              color: "var(--text)",
            }}
          >
            Peržiūros raktas
          </label>

          <input
            id="key"
            name="key"
            type="password"
            required
            autoComplete="current-password"
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: "1rem",
              border: "1px solid var(--border)",
              borderRadius: "12px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "14px 20px",
              border: 0,
              borderRadius: "12px",
              background: "var(--primary)",
              color: "#ffffff",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Atidaryti svetainę
          </button>
        </form>
      </section>
    </main>
  );
}