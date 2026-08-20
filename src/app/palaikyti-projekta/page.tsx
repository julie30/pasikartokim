import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportIdeaForm from "@/components/SupportIdeaForm";
import styles from "./palaikyti-projekta.module.css";

export const metadata: Metadata = {
  title: "Palaikyti projektą | Pasikartokim.lt",
  description:
    "Sužinokite, kaip galite prisidėti prie Pasikartokim.lt mokymosi platformos kūrimo.",
};

const supportWays = [
  {
    icon: "/images/icons/pasidalinti.png",
    title: "Pasidalyti projektu",
    description:
      "Papasakokite apie „Pasikartokim.lt“ kitiems tėvams, mokytojams ir mokiniams.",
  },
  {
    icon: "/images/icons/pranesti-klaida.png",
    title: "Pranešti apie klaidą",
    description:
      "Pastebėjote turinio ar techninę klaidą? Parašykite mums ir padėkite svetainę padaryti tikslesnę bei patogesnę.",
    email: "labas@pasikartokim.lt",
  },
];

export default function PalaikytiProjektaPage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Palaikyti projektą</p>

            <h1>Padėkite Pasikartokim.lt augti</h1>

            <p className={styles.intro}>
              Prie projekto galite prisidėti ne tik finansiškai. Pasidalinkite
              svetaine, praneškite apie pastebėtas klaidas arba pasiūlykite
              temas ir veiklas, kurių norėtumėte rasti Pasikartokim.lt.
            </p>
          </div>
        </section>

        <section
          className={styles.supportSection}
          aria-labelledby="support-ways-title"
        >
          <div className={styles.container}>
            <p className={styles.eyebrow}>Prisidėti galima įvairiai</p>

            <h2 id="support-ways-title">Kaip galite padėti projektui?</h2>

            <div className={styles.grid}>
              {supportWays.map((way) => (
                <article className={styles.card} key={way.title}>
                  <span className={styles.icon} aria-hidden="true">
                    <Image src={way.icon} alt="" width={68} height={68} />
                  </span>

                  <h3>{way.title}</h3>

                  <p>{way.description}</p>

                  {way.email && (
                    <a
                      className={styles.emailLink}
                      href={`mailto:${way.email}`}
                    >
                      {way.email}
                    </a>
                  )}
                </article>
              ))}

              <SupportIdeaForm />
            </div>
          </div>
        </section>

        <section className={styles.actionsSection}>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/veiklos">
              Peržiūrėti veiklas
            </Link>

            <Link className={styles.secondaryButton} href="/">
              Grįžti į pradžią
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
