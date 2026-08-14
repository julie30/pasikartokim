import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import DiagnosticQuiz from "@/components/activities/DiagnosticQuiz";
import { diagnosticData } from "@/data/diagnosticData";
import styles from "./diagnostic.module.css";

export const metadata: Metadata = {
  title: "Ką jau moku? | 5 klasės informatika | Pasikartokim.lt",
  description:
    "Trumpa nemokama 5 klasės informatikos diagnostinė veikla, padedanti pasitikrinti failų tvarkymo, algoritminio mąstymo, duomenų supratimo ir saugaus elgesio internete gebėjimus.",
};

export default function KaJauMokuPage() {
  const { activity } = diagnosticData;

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
          ← Grįžti į veiklas
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              {activity.grade} klasės informatika
            </p>

            <h1>{activity.title}</h1>

            <p className={styles.subtitle}>{activity.subtitle}</p>

            <p className={styles.description}>{activity.intro}</p>

            <div
              className={styles.details}
              aria-label="Informacija apie veiklą"
            >
              <span>{activity.expectedQuestionCount} užduočių</span>

              <span>
                {activity.estimatedMinutes.min}–
                {activity.estimatedMinutes.max} minučių
              </span>

              <span>Nevertinama pažymiu</span>
            </div>

            <h2>Pasitikrinsi:</h2>

            <ul className={styles.learningList}>
              {activity.checkedSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            <DiagnosticQuiz />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}