import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./veiklos.module.css";

export const metadata: Metadata = {
  title: "Interaktyvios veiklos | Pasikartokim.lt",
  description:
    "Nemokamos interaktyvios mokymosi veiklos vaikams ir paaugliams.",
};

const activities = [
  {
    title: "Ar atpažintum internetinę apgavystę?",
    description:
      "Išnagrinėk 8 interneto situacijas, pasirink saugiausią veiksmą ir iš karto gauk paaiškinimą.",
    icon: "🔎",
    age: "11–15 metų",
    duration: "8–10 min.",
    situations: "8 situacijos",
    href: "/veiklos/internetines-apgavystes",
    category: "Skaitmeninis saugumas",
  },
  {
    title: "Ar tavo paskyra tikrai apsaugota?",
    description:
      "Patikrink, ar moki kurti saugesnius slaptažodžius, apsaugoti prisijungimo kodus ir tinkamai reaguoti į paskyros saugumo perspėjimus.",
    icon: "🔐",
    age: "11–15 metų",
    duration: "8–10 min.",
    situations: "8 situacijos",
    href: "/veiklos/paskyros-saugumas",
    category: "Paskyrų saugumas",
  },
  {
    title: "Ar moki saugoti savo privatumą internete?",
    description:
      "Sužinok, kaip apsaugoti asmeninius duomenis, pasirinkti saugesnius privatumo nustatymus, vertinti programėlių leidimus ir atsakingai skelbti turinį.",
    icon: "🛡️",
    age: "11–15 metų",
    duration: "8–10 min.",
    situations: "8 situacijos",
    href: "/veiklos/interneto-privatumas",
    category: "Interneto privatumas",
  },
];

export default function VeiklosPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>Interaktyvios užduotys</p>

          <h1>Mokykis atlikdamas veiklas</h1>

          <p>
            Pasirink veiklą, atsakyk į klausimus ir iš karto
            sužinok, ką jau moki bei ką dar verta prisiminti.
          </p>
        </section>

        <section
          className={styles.activities}
          aria-labelledby="activities-title"
        >
          <h2 id="activities-title">Galimos veiklos</h2>

          <div className={styles.grid}>
            {activities.map((activity) => (
              <article className={styles.card} key={activity.href}>
                <div className={styles.cardTop}>
                  <span className={styles.icon} aria-hidden="true">
                    {activity.icon}
                  </span>

                  <span className={styles.category}>
                    {activity.category}
                  </span>
                </div>

                <h3>{activity.title}</h3>

                <p className={styles.description}>
                  {activity.description}
                </p>

                <div
                  className={styles.details}
                  aria-label="Informacija apie veiklą"
                >
                  <span>{activity.age}</span>
                  <span>{activity.situations}</span>
                  <span>{activity.duration}</span>
                </div>

                <Link className={styles.button} href={activity.href}>
                  Pradėti veiklą
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.future}>
          <div>
            <p className={styles.eyebrow}>Biblioteka augs</p>

            <h2>Naujos veiklos bus pridedamos palaipsniui</h2>

            <p>
              Čia atsiras kritinio mąstymo, finansinio raštingumo,
              kalbos, gamtos ir kitų sričių veiklos.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}