import type { Metadata } from "next";
import Link from "next/link";
import SequenceOrderTask from "./SequenceOrderTask";
import styles from "./algoritminis-mastymas.module.css";

export const metadata: Metadata = {
  title: "Algoritminis mąstymas | 5 klasės informatika",
  description:
    "5 klasės informatikos tema apie veiksmų sekas, komandų vykdymą, kartojimą ir klaidų paiešką algoritmuose.",
};

export default function AlgoritminisMastymasPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="puslapio-virsus">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <Link href="/5-klase/informatika" className={styles.backLink}>
              ← Grįžti į 5 klasės informatiką
            </Link>

            <p className={styles.eyebrow}>5 klasė · Informatika · 2 TEMA</p>

            <h1 className={styles.heroTitle}>Algoritminis mąstymas</h1>

            <p className={styles.heroDescription}>
              Mokykis sudėtingą užduotį suskaidyti į aiškius žingsnius, vykdyti
              komandas tinkama tvarka, pastebėti pasikartojimus ir surasti
              klaidas.
            </p>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.algorithmPreview}>
              <span className={styles.previewStart}>Pradžia</span>
              <span className={styles.previewArrow}>↓</span>
              <span className={styles.previewStep}>Atlik veiksmą</span>
              <span className={styles.previewArrow}>↓</span>
              <span className={styles.previewFinish}>Rezultatas</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.learningSection}>
        <p className={styles.sectionLabel}>Tema</p>
        <h2 className={styles.sectionTitle}>Ko išmoksi?</h2>

        <div className={styles.learningGrid}>
          <Link href="#veiksmu-seka" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Veiksmų seka</h3>
              <p className={styles.cardDescription}>
                Sužinosi, kodėl veiksmų tvarka yra svarbi ir kaip iš atskirų
                žingsnių sudaroma aiški veiksmų seka.
              </p>
            </article>
          </Link>

          <Link href="#komandos" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Komandos ir jų vykdymas</h3>
              <p className={styles.cardDescription}>
                Mokysiesi tiksliai suprasti komandą ir nustatyti, kas nutiks,
                kai komandos bus vykdomos viena po kitos.
              </p>
            </article>
          </Link>

          <Link href="#kartojimas" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Kartojimas</h3>
              <p className={styles.cardDescription}>
                Pastebėsi pasikartojančius veiksmus ir išmoksi juos aprašyti
                trumpiau bei aiškiau.
              </p>
            </article>
          </Link>

          <Link href="#klaidu-paieška" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>04</span>
              <h3 className={styles.cardTitle}>Klaidų paieška</h3>
              <p className={styles.cardDescription}>
                Mokysiesi tikrinti veiksmų sekas, pastebėti netinkamus žingsnius
                ir paaiškinti, kaip juos ištaisyti.
              </p>
            </article>
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.sequenceSection}`}
        id="veiksmu-seka"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>01</span>
            <h2>Veiksmų seka</h2>
          </div>

          <div className={styles.definitionCard}>
            <h3>Kas yra veiksmų seka?</h3>
            <p>
              Veiksmų seka – tai keli veiksmai, atliekami nustatyta tvarka.
              Kiekvienas veiksmas yra vienas žingsnis siekiant galutinio
              rezultato.
            </p>
          </div>

          <div className={styles.sequenceExample}>
            <div className={styles.sequenceExampleText}>
              <p className={styles.smallLabel}>Pavyzdys</p>
              <h3>Norime atidaryti dokumentą kompiuteryje</h3>
              <p>
                Kad pasiektume tikslą, veiksmus turime atlikti tinkama tvarka.
              </p>
            </div>

            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <span>1</span>
                <p>Įjunk kompiuterį.</p>
              </div>

              <div className={styles.stepItem}>
                <span>2</span>
                <p>Prisijunk prie savo paskyros.</p>
              </div>

              <div className={styles.stepItem}>
                <span>3</span>
                <p>Atidaryk aplanką, kuriame saugomas dokumentas.</p>
              </div>

              <div className={styles.stepItem}>
                <span>4</span>
                <p>Pasirink dokumentą ir jį atidaryk.</p>
              </div>
            </div>
          </div>

          <div className={styles.orderBlock}>
            <p className={styles.smallLabel}>Pagalvok</p>
            <h3>Ar galime veiksmus sukeisti vietomis?</h3>

            <div className={styles.orderCompare}>
              <div className={styles.orderGood}>
                <span className={styles.orderBadge}>Tinkama tvarka</span>

                <ol>
                  <li>Atidaryk naršyklę.</li>
                  <li>Įrašyk svetainės adresą.</li>
                  <li>Paspausk Enter.</li>
                </ol>

                <p>Naršyklė žino, kokį puslapį turi atverti.</p>
              </div>

              <div className={styles.orderBad}>
                <span className={styles.orderBadge}>Netinkama tvarka</span>

                <ol>
                  <li>Paspausk Enter.</li>
                  <li>Atidaryk naršyklę.</li>
                  <li>Įrašyk svetainės adresą.</li>
                </ol>

                <p>
                  Pirmasis veiksmas atliekamas dar neįrašius adreso, todėl ši
                  seka neveda į norimą rezultatą.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.keyIdea}>
            <strong>Svarbi mintis</strong>
            <p>
              Neužtenka žinoti, kokius veiksmus reikia atlikti. Reikia žinoti ir
              <strong> kokia tvarka</strong> juos atlikti.
            </p>
          </div>

          <SequenceOrderTask />

          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.commandsSection}`}
        id="komandos"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>02</span>
            <h2>Komandos ir jų vykdymas</h2>
          </div>

          <div className={styles.definitionCard}>
            <h3>Kas yra komanda?</h3>
            <p>
              Komanda – tai aiškus nurodymas atlikti konkretų veiksmą. Komandą
              gali vykdyti žmogus, robotas arba kompiuterio programa.
            </p>
          </div>

          <div className={styles.commandExample}>
            <p className={styles.smallLabel}>Pavyzdys</p>
            <h3>Ar ši komanda pakankamai aiški?</h3>

            <div className={styles.commandCompare}>
              <div>
                <span className={styles.commandLabel}>Neaiški komanda</span>
                <strong>„Pajudėk.“</strong>
                <p>
                  Nežinome, kuria kryptimi judėti, kiek judėti ir kada sustoti.
                </p>
              </div>

              <div>
                <span className={styles.commandLabel}>Aiški komanda</span>
                <strong>„Ženk 3 žingsnius į priekį.“</strong>
                <p>Aišku, ką reikia atlikti, kuria kryptimi ir kiek kartų.</p>
              </div>
            </div>
          </div>

          <div className={styles.commandSequenceBlock}>
            <p className={styles.smallLabel}>Sek komandą</p>
            <h3>Ką gausime įvykdę visas komandas?</h3>

            <p className={styles.commandIntro}>
              Įsivaizduok, kad veikėjas pradeda langelyje A ir vykdo komandas iš
              eilės.
            </p>

            <div className={styles.commandSteps}>
              <div>
                <span>1</span>
                <p>Judėk 2 langelius į dešinę.</p>
              </div>

              <div>
                <span>2</span>
                <p>Judėk 1 langelį žemyn.</p>
              </div>

              <div>
                <span>3</span>
                <p>Judėk 1 langelį į kairę.</p>
              </div>
            </div>

            <div className={styles.commandResult}>
              <strong>Svarbu</strong>
              <p>
                Kad nustatytum galutinę vietą, komandų negalima vertinti
                atskirai. Reikia sekti, kur veikėjas atsiduria po kiekvieno
                žingsnio.
              </p>
            </div>
          </div>

          <div className={styles.precisionBlock}>
            <p className={styles.smallLabel}>Pagalvok</p>
            <h3>Kodėl kompiuteriui reikia tikslių komandų?</h3>

            <p>
              Žmogus dažnai gali suprasti ne visai tikslų nurodymą iš
              situacijos. Kompiuteris vykdo tai, kas jam nurodyta. Jei komanda
              netiksli arba parašyta neteisingai, rezultatas gali būti ne toks,
              kokio tikėjomės.
            </p>
          </div>

          <div className={styles.commandTask}>
            <p className={styles.smallLabel}>Išbandyk</p>
            <h3>Kuri komanda yra tiksliausia?</h3>

            <p>
              Robotui reikia nueiti nuo durų iki stalo. Kuri komanda būtų
              tinkamiausia?
            </p>

            <div className={styles.commandTaskOptions}>
              <button type="button">Eik prie stalo.</button>

              <button type="button">Eik pirmyn.</button>

              <button type="button">
                Ženk 4 žingsnius tiesiai, pasuk į dešinę ir ženk 2 žingsnius.
              </button>
            </div>

            <p className={styles.taskHint}>
              Kol kas ši užduotis dar nėra interaktyvi. Kitame žingsnyje
              pridėsime atsakymo tikrinimą.
            </p>
          </div>

          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.repetitionSection}`}
        id="kartojimas"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>03</span>
            <h2>Kartojimas</h2>
          </div>

          <div className={styles.definitionCard}>
            <h3>Kada veiksmus verta kartoti?</h3>
            <p>
              Jei tas pats veiksmas atliekamas daug kartų, nebūtina jo kiekvieną
              kartą aprašyti iš naujo. Galime nurodyti, kiek kartų veiksmą
              reikia pakartoti.
            </p>
          </div>

          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.debuggingSection}`}
        id="klaidu-paieška"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>04</span>
            <h2>Klaidų paieška</h2>
          </div>

          <div className={styles.definitionCard}>
            <h3>Ką daryti, jei rezultatas neteisingas?</h3>
            <p>
              Kai veiksmų seka neduoda laukiamo rezultato, reikia ją patikrinti
              žingsnis po žingsnio, surasti klaidą ir nuspręsti, kaip ją
              ištaisyti.
            </p>
          </div>

          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section className={styles.summarySection}>
        <div className={styles.summaryInner}>
          <p className={styles.sectionLabel}>Prisimink</p>
          <h2 className={styles.sectionTitle}>Ką svarbiausia prisiminti?</h2>

          <div className={styles.summaryGrid}>
            <div>
              <span>01</span>
              <p>Veiksmų tvarka gali lemti, ar gausime norimą rezultatą.</p>
            </div>

            <div>
              <span>02</span>
              <p>
                Komandos turi būti aiškios, tikslios ir suprantamos jų
                vykdytojui.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Pasikartojančius veiksmus galima aprašyti naudojant kartojimą.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Klaidas lengviau rasti tikrinant algoritmą žingsnis po žingsnio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.checkSection}>
        <div className={styles.checkInner}>
          <p className={styles.sectionLabel}>Pasitikrink</p>
          <h2 className={styles.sectionTitle}>
            Ar moki pritaikyti tai, ką išmokai?
          </h2>

          <p className={styles.checkIntro}>
            Čia pridėsime užduotis, kuriose reikės ne tik prisiminti sąvokas,
            bet ir sudėlioti veiksmus, numatyti rezultatą bei surasti klaidas.
          </p>
        </div>
      </section>
    </main>
  );
}
