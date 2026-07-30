import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScamQuiz from "@/components/activities/ScamQuiz";
import styles from "./activity.module.css";

export const metadata: Metadata = {
  title: "Ar atpažintum internetinę apgavystę? | Pasikartokim.lt",
  description:
    "Nemokama interaktyvi veikla 11–15 metų vaikams apie internetinių apgavysčių, netikrų nuorodų ir įtartinų žinučių atpažinimą.",
};

export default function InternetinesApgavystesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link
          className={styles.logo}
          href="/"
          aria-label="Grįžti į Pasikartokim.lt pradžią"
        >
          <Image
            src="/images/logo.svg"
            alt="Pasikartokim.lt"
            width={250}
            height={60}
            priority
          />
        </Link>

        <Link className={styles.backLink} href="/veiklos">
          ← Grįžti į veiklų biblioteką
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Skaitmeninio saugumo veikla
            </p>

            <h1>Ar atpažintum internetinę apgavystę?</h1>

            <p className={styles.description}>
              Išnagrinėk 8 realistiškas interneto situacijas,
              pasirink, kaip elgtumeisi, ir sužinok, į kokius
              apgavystės požymius verta atkreipti dėmesį.
            </p>

            <div
              className={styles.details}
              aria-label="Informacija apie veiklą"
            >
              <span>11–15 metų</span>
              <span>8 situacijos</span>
              <span>8–10 minučių</span>
              <span>Nemokama</span>
            </div>

            <h2>Atlikęs veiklą išmoksi:</h2>

            <ul className={styles.learningList}>
              <li>pastebėti sukčių kuriamą skubą ir spaudimą;</li>

              <li>
                patikrinti siuntėją, nuorodą ir svetainės adresą;
              </li>

              <li>
                apsaugoti savo slaptažodžius ir banko duomenis;
              </li>

              <li>
                kritiškai vertinti internete ir DI pateiktą
                informaciją.
              </li>
            </ul>

            <ScamQuiz />
          </div>

          <aside className={styles.safetyCard}>
            <span className={styles.safetyIcon} aria-hidden="true">
              🔎
            </span>

            <h2>Svarbiausia taisyklė</h2>

            <p>
              Kai žinutė skubina, gąsdina arba žada neįtikėtiną
              prizą, sustok ir pirmiausia viską patikrink.
            </p>
          </aside>
        </section>
      </main>
    </div>
  );
}