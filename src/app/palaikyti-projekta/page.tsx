import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./palaikyti-projekta.module.css";

export const metadata: Metadata = {
  title: "Palaikyti projektą | Pasikartokim.lt",
  description:
    "Sužinokite, kaip galima palaikyti nemokamą vaikų mokymosi projektą Pasikartokim.lt.",
};

const supportWays = [
  {
    icon: "📣",
    title: "Pasidalyti projektu",
    description:
      "Papasakokite apie „Pasikartokim.lt“ kitiems tėvams, mokytojams ir vaikams.",
  },
  {
    icon: "📝",
    title: "Pranešti apie klaidą",
    description:
      "Pastebėta turinio ar techninė klaida padeda svetainę padaryti tikslesnę ir patogesnę.",
  },
  {
    icon: "💡",
    title: "Pasiūlyti veiklos temą",
    description:
      "Idėjos padeda suprasti, kokių nemokamų veiklų vaikams šiuo metu labiausiai trūksta.",
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

            <h1>Padėkite kurti daugiau nemokamų mokymosi veiklų</h1>

            <p className={styles.intro}>
              „Pasikartokim.lt“ kuriamas tam, kad vaikai galėtų
              nemokamai mokytis, kartoti žinias ir stiprinti
              praktinius gebėjimus.
            </p>

            <div className={styles.promise}>
              <span aria-hidden="true">💛</span>

              <p>
                Svetainės veiklos yra ir liks nemokamos.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.supportSection}
          aria-labelledby="support-ways-title"
        >
          <div className={styles.container}>
            <p className={styles.eyebrow}>Prisidėti galima įvairiai</p>

            <h2 id="support-ways-title">
              Kaip dabar galite palaikyti projektą?
            </h2>

            <div className={styles.grid}>
              {supportWays.map((way) => (
                <article className={styles.card} key={way.title}>
                  <span className={styles.icon} aria-hidden="true">
                    {way.icon}
                  </span>

                  <h3>{way.title}</h3>

                  <p>{way.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.paymentSection}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon} aria-hidden="true">
              🔒
            </div>

            <div>
              <p className={styles.eyebrow}>
                Finansinis projekto palaikymas
              </p>

              <h2>Mokėjimų funkcija dar ruošiama</h2>

              <p>
                Saugus mokėjimo būdas bus prijungtas vėliau.
                Lankytojas galės pats pasirinkti atsiskaitymą per
                banką, mokėjimo kortelę ar kitą siūlomą būdą.
              </p>

              <p className={styles.paymentNote}>
                Šiuo metu šiame puslapyje neprašoma pateikti banko
                kortelės, prisijungimo ar kitų mokėjimo duomenų.
              </p>
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