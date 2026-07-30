import Link from "next/link";
import styles from "./FeaturedActivity.module.css";

export default function FeaturedActivity() {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-activity-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Nauja nemokama veikla</p>

          <h2 id="featured-activity-title">
            Mokykis saugiai elgtis internete
          </h2>

          <p>
            Išnagrinėk tikroviškas interneto situacijas, pasirink,
            kaip elgtumeisi, ir sužinok, kaip atpažinti apgavystes.
          </p>
        </div>

        <article className={styles.card}>
          <div className={styles.visual} aria-hidden="true">
            <span className={styles.icon}>🔎</span>
            <span className={styles.visualText}>
              Sustok.
              <br />
              Patikrink.
              <br />
              Apsisaugok.
            </span>
          </div>

          <div className={styles.content}>
            <div className={styles.badges}>
              <span>11–15 metų</span>
              <span>8 situacijos</span>
              <span>8–10 min.</span>
            </div>

            <h3>Ar atpažintum internetinę apgavystę?</h3>

            <p className={styles.description}>
              Interaktyvi veikla apie netikrus prizus, įtartinas
              nuorodas, paskyrų vagystes, melagingus pinigų prašymus
              ir nepatikimą informaciją.
            </p>

            <ul className={styles.skills}>
              <li>Atpažinsi skubinimą ir spaudimą</li>
              <li>Išmoksi patikrinti siuntėją ir nuorodą</li>
              <li>Sužinosi, kaip apsaugoti savo duomenis</li>
            </ul>

            <Link
              className={styles.button}
              href="/veiklos/internetines-apgavystes"
            >
              Pradėti veiklą
              <span aria-hidden="true">→</span>
            </Link>

            <p className={styles.note}>
              Nemokama · Registracija nereikalinga
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}