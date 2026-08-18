import Image from "next/image";
import Link from "next/link";
import styles from "./informatika.module.css";

export default function InformatikaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>5 klasė</p>

              <h1>Informatika</h1>

              <p className={styles.intro}>
                Mokykis nuosekliai: pasitikrink žinias, pereik temas, atlik
                praktines užduotis ir stebėk savo pažangą.
              </p>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/images/5-klase/informatika/hero-illustration.png"
                alt="Informatikos mokymosi iliustracija"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.learningPath}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>Tavo mokymosi kelias</p>

          <h2>Mokykis žingsnis po žingsnio</h2>

          <p className={styles.sectionIntro}>
            Pradėk nuo žinių pasitikrinimo, tada mokykis temas, atlik praktines
            užduotis ir stebėk savo pažangą.
          </p>

          <div className={styles.steps}>
            <article className={styles.step}>
              <span className={styles.stepNumber}>1</span>

              <div>
                <h3>Ką jau moku?</h3>

                <p>
                  Pasitikrink turimas žinias ir sužinok, kurias temas verta
                  pakartoti pirmiausia.
                </p>

                <Link
                  href="/5-klase/informatika/ka-jau-moku"
                  className={styles.diagnosticLink}
                >
                  Pradėti diagnostiką
                </Link>
              </div>
            </article>

            <article className={styles.step}>
              <span className={styles.stepNumber}>2</span>

              <div>
                <h3>Temos</h3>

                <p>
                  Mokykis informatikos nuosekliai – nuo pagrindinių skaitmeninių
                  įgūdžių iki algoritmų ir duomenų.
                </p>
              </div>
            </article>

            <article className={styles.step}>
              <span className={styles.stepNumber}>3</span>

              <div>
                <h3>Praktika</h3>

                <p>
                  Įtvirtink žinias atlikdama interaktyvias užduotis ir
                  praktinius iššūkius.
                </p>
              </div>
            </article>

            <article className={styles.step}>
              <span className={styles.stepNumber}>4</span>

              <div>
                <h3>Pažanga</h3>

                <p>
                  Matyk, ką jau išmokai, ir lengvai rask temas, prie kurių dar
                  verta sugrįžti.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.topics}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>Temos</p>

          <h2>Ko mokysimės?</h2>

          <p className={styles.sectionIntro}>
            Informatikos temos suskirstytos į aiškias dalis, kad galėtum mokytis
            nuosekliai ir lengvai rasti tai, ką nori pakartoti.
          </p>

          <div className={styles.topicGrid}>
            <Link
              href="/5-klase/informatika/failai-ir-skaitmenines-priemones"
              className={styles.topicCardLink}
            >
              <article className={styles.topicCard}>
                <span className={styles.topicNumber}>01</span>
                <Image
                  src="/images/5-klase/informatika/icons/failai.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.topicImage}
                />
                <h3>Failai ir skaitmeninės priemonės</h3>
                <p>
                  Failai, aplankai, programos, skaitmeniniai įrankiai ir
                  kasdienis darbas kompiuteriu.
                </p>
              </article>
            </Link>

            <article className={styles.topicCard}>
              <span className={styles.topicNumber}>02</span>
              <Image
                src="/images/5-klase/informatika/icons/algoritmai.jpg"
                alt=""
                width={80}
                height={80}
                className={styles.topicImage}
              />
              <h3>Algoritminis mąstymas</h3>
              <p>
                Veiksmų sekos, komandos, kartojimas, loginis mąstymas ir
                pirmieji algoritmų principai.
              </p>
            </article>

            <article className={styles.topicCard}>
              <span className={styles.topicNumber}>03</span>
              <Image
                src="/images/5-klase/informatika/icons/duomenys.jpg"
                alt=""
                width={80}
                height={80}
                className={styles.topicImage}
              />
              <h3>Duomenų supratimas</h3>
              <p>
                Informacijos skaitymas, duomenų palyginimas, lentelės, schemos
                ir paprastos išvados.
              </p>
            </article>

            <article className={styles.topicCard}>
              <span className={styles.topicNumber}>04</span>
              <Image
                src="/images/5-klase/informatika/icons/saugumas.jpg"
                alt=""
                width={80}
                height={80}
                className={styles.topicImage}
              />
              <h3>Saugumas ir bendravimas internete</h3>
              <p>
                Saugūs slaptažodžiai, asmeniniai duomenys, bendravimas internete
                ir saugus naudojimasis technologijomis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.practice}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>Praktika</p>

          <h2>Išbandyk, ką išmokai</h2>

          <p className={styles.sectionIntro}>
            Atlik trumpas interaktyvias užduotis, spręsk praktines situacijas ir
            įtvirtink kiekvienos temos žinias.
          </p>

          <div className={styles.practiceGrid}>
            <article className={styles.practiceCard}>
              <Image
                src="/images/5-klase/informatika/practice/veiksmu-seka.png"
                alt=""
                width={72}
                height={72}
                className={styles.practiceImage}
              />
              <span className={styles.practiceType}>Interaktyvi užduotis</span>
              <h3>Veiksmų seka</h3>
              <p>
                Sudėliok veiksmus tinkama tvarka ir patikrink, ar supranti
                algoritmo vykdymo seką.
              </p>
            </article>

            <article className={styles.practiceCard}>
              <Image
                src="/images/5-klase/informatika/practice/robotuko-kelias.png"
                alt=""
                width={72}
                height={72}
                className={styles.practiceImage}
              />
              <span className={styles.practiceType}>Interaktyvi užduotis</span>
              <h3>Robotuko kelias</h3>
              <p>
                Parink tinkamas komandas, kad robotukas pasiektų nurodytą
                langelį tinklelyje.
              </p>
            </article>

            <article className={styles.practiceCard}>
              <Image
                src="/images/5-klase/informatika/practice/saugus-internetas.png"
                alt=""
                width={72}
                height={72}
                className={styles.practiceImage}
              />
              <span className={styles.practiceType}>Situacija</span>
              <h3>Saugus internetas</h3>
              <p>
                Įvertink kasdienes situacijas ir pasirink saugiausią elgesį
                internete.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.progress}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>Pažanga</p>

          <h2>Stebėk, ką jau išmokai</h2>

          <p className={styles.sectionIntro}>
            Čia galėsi matyti savo mokymosi pažangą, atliktas temas ir tas
            vietas, kurias dar verta pakartoti.
          </p>

          <div className={styles.progressCard}>
            <div className={styles.progressContent}>
              <p className={styles.progressLabel}>5 klasės informatika</p>

              <h3>Tavo pažanga</h3>

              <p>
                Pažangos sekimas bus aktyvus prisijungus prie paskyros ir
                pradėjus atlikti mokymosi veiklas.
              </p>

              <div className={styles.progressBar}>
                <div className={styles.progressFill} />
              </div>
            </div>

            <span className={styles.progressValue}>0%</span>
          </div>
        </div>
      </section>
    </main>
  );
}
