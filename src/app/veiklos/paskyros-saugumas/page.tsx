import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AccountSecurityQuiz from "@/components/activities/AccountSecurityQuiz";
import Footer from "@/components/Footer";
import styles from "../internetines-apgavystes/activity.module.css";

export const metadata: Metadata = {
  title: "Ar tavo paskyra tikrai apsaugota? | Pasikartokim.lt",
  description:
    "Nemokama interaktyvi veikla 11–15 metų vaikams apie stiprius slaptažodžius, prisijungimo kodus ir saugų paskyrų naudojimą.",
};

export default function PaskyrosSaugumasPage() {
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
              Paskyrų saugumo veikla
            </p>

            <h1>Ar tavo paskyra tikrai apsaugota?</h1>

            <p className={styles.description}>
              Išnagrinėk 8 paskyrų saugumo situacijas ir
              sužinok, kaip kurti saugesnius slaptažodžius,
              apsaugoti prisijungimo kodus bei saugiai naudotis
              savo paskyromis.
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
                kurti ilgus ir sunkiau atspėjamus slaptažodžius;
              </li>

              <li>
                kiekvienai svarbiai paskyrai naudoti skirtingą
                slaptažodį;
              </li>

              <li>
                apsaugoti prisijungimo ir paskyros atkūrimo kodus;
              </li>

              <li>
                saugiai prisijungti svetimame arba bendrame
                įrenginyje;
              </li>

              <li>
                tinkamai reaguoti į pranešimą apie nutekintą
                slaptažodį.
              </li>
            </ul>

            <AccountSecurityQuiz />
          </div>

          <aside className={styles.safetyCard}>
            <span className={styles.safetyIcon} aria-hidden="true">
              🔐
            </span>

            <h2>Svarbus perspėjimas</h2>

            <p>
              Šioje veikloje niekada neįvesk savo tikro
              slaptažodžio, prisijungimo kodo ar kitų asmeninių
              duomenų.
            </p>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}