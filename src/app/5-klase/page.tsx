import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./5-klase.module.css";

const subjects = [
  {
    title: "Informatika",
    icon: "/images/5-klase/dalykai/informatika.png",
    completed: 0,
    total: 4,
    href: "/5-klase/informatika",
    available: true,
  },
  {
    title: "Matematika",
    icon: "/images/5-klase/dalykai/matematika.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Lietuvių kalba ir literatūra",
    icon: "/images/5-klase/dalykai/lietuviu-kalba.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Gamtos mokslai",
    icon: "/images/5-klase/dalykai/gamtos-mokslai.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Istorija",
    icon: "/images/5-klase/dalykai/istorija.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Geografija",
    icon: "/images/5-klase/dalykai/geografija.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Anglų kalba",
    icon: "/images/5-klase/dalykai/anglu-kalba.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Tikyba",
    icon: "/images/5-klase/dalykai/tikyba.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Etika",
    icon: "/images/5-klase/dalykai/etika.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Dailė",
    icon: "/images/5-klase/dalykai/daile.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Muzika",
    icon: "/images/5-klase/dalykai/muzika.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Technologijos",
    icon: "/images/5-klase/dalykai/technologijos.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Fizinis ugdymas",
    icon: "/images/5-klase/dalykai/fizinis-ugdymas.png",
    completed: 0,
    total: 0,
    available: false,
  },
  {
    title: "Gyvenimo įgūdžiai",
    icon: "/images/5-klase/dalykai/gyvenimo-igudziai.png",
    completed: 0,
    total: 0,
    available: false,
  },
];

export default function GradeFivePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
              ← Atgal į pradžią
            </Link>

            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <p className={styles.eyebrow}>Mokymasis pagal klasę</p>

                <h1>5 klasė</h1>

                <p className={styles.intro}>
                  Pasirink dalyką ir pradėk mokytis.
                </p>
              </div>

              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.illustrationPlaceholder}>
                  Paveikslėlio vieta
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.subjects}>
          <div className={styles.container}>
            <div className={styles.subjectsHeading}>
              <p className={styles.sectionLabel}>Dalykai</p>
              <h2>Pasirink, ką nori mokytis</h2>
            </div>

            <div className={styles.subjectGrid}>
              {subjects.map((subject) => {
                const progress =
                  subject.total > 0
                    ? Math.round((subject.completed / subject.total) * 100)
                    : 0;

                const cardContent = (
                  <>
                    <div className={styles.subjectIcon}>
                      <Image src={subject.icon} alt="" width={72} height={72} />
                    </div>

                    <h3>{subject.title}</h3>

                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className={styles.progressInfo}>
                      {subject.available ? (
                        <span>
                          {subject.completed} iš {subject.total} temų
                        </span>
                      ) : (
                        <span>Ruošiama</span>
                      )}

                      <strong>{progress}%</strong>
                    </div>
                  </>
                );

                if (subject.available && subject.href) {
                  return (
                    <Link
                      href={subject.href}
                      key={subject.title}
                      className={`${styles.subjectCard} ${styles.subjectCardActive}`}
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <article key={subject.title} className={styles.subjectCard}>
                    {cardContent}
                  </article>
                );
              })}
            </div>

            <aside className={styles.helpCard}>
              <div className={styles.helpIcon}>💡</div>

              <div>
                <h2>Nežinai, nuo ko pradėti?</h2>

                <p>
                  Pasirink dalyką, kuris tau dabar aktualiausias arba
                  įdomiausias. Visada galėsi grįžti ir pasirinkti kitą.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
