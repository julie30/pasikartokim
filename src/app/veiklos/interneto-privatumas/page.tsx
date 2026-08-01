import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrivacyQuiz from "@/components/activities/PrivacyQuiz";
import styles from "../internetines-apgavystes/activity.module.css";

export const metadata: Metadata = {
  title: "Ar moki saugoti savo privatumą internete? | Pasikartokim.lt",
  description:
    "Nemokama interaktyvi veikla 11–15 metų vaikams apie asmeninių duomenų apsaugą, privatumo nustatymus, programėlių leidimus ir skaitmeninį pėdsaką.",
};

export default function InternetoPrivatumasPage() {
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
              Interneto privatumo veikla
            </p>

            <h1>Ar moki saugoti savo privatumą internete?</h1>

            <p className={styles.description}>
              Išnagrinėk 8 kasdienes interneto situacijas ir
              sužinok, kaip apsaugoti asmeninius duomenis,
              atsakingai skelbti turinį, vertinti programėlių
              leidimus ir saugoti savo skaitmeninį pėdsaką.
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
              <li>
                pasirinkti saugesnius socialinių tinklų privatumo
                nustatymus;
              </li>

              <li>
                neatkleisti mokyklos, adreso, dienotvarkės ir
                tikslios buvimo vietos;
              </li>

              <li>
                atsakingai skelbti savo ir kitų žmonių nuotraukas;
              </li>

              <li>
                įvertinti, ar programėlei tikrai reikia prašomų
                leidimų;
              </li>

              <li>
                suprasti, kaip internete formuojasi skaitmeninis
                pėdsakas.
              </li>
            </ul>

            <PrivacyQuiz />
          </div>

          <aside className={styles.safetyCard}>
            <span className={styles.safetyIcon} aria-hidden="true">
              🛡️
            </span>

            <h2>Svarbiausia privatumo taisyklė</h2>

            <p>
              Prieš pateikdamas informaciją ar paskelbdamas
              nuotrauką pagalvok, kas ją galės matyti, išsaugoti ir
              persiųsti.
            </p>
          </aside>
        </section>
      </main>
    </div>
  );
}