import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./informatika.module.css";

const chapters = [
  {
    number: "01",
    title: "Skaitmeninė aplinka ir failai",
    lessons: [
      "Pažink savo įrenginį",
      "Aparatinė ir programinė įranga",
      "Failai ir skaitmeninės priemonės",
      "Failai, aplankai ir struktūra",
      "Failų tipai ir formatai",
      "Kur saugomi mūsų duomenys?",
      "Ką daryti, kai kažkas neveikia?",
    ],
    outcomes: [
      "Geba savarankiškai tvarkyti savo skaitmeninę darbo aplinką.",
      "Supranta pagrindines įrenginio dalis.",
      "Geba diagnozuoti paprastas problemas.",
      "Renkasi priemonę pagal užduotį.",
    ],
    challenge: "Sutvarkyk chaotišką mokinio kompiuterį",
  },
  {
    number: "02",
    title: "Informacija ir skaitmeninis turinys",
    lessons: [
      "Kaip rasti tai, ko iš tikrųjų ieškai?",
      "Paieškos žodžiai ir paieškos strategija",
      "Ar galima tikėti pirmu rezultatu?",
      "Kaip palyginti kelis šaltinius?",
      "Faktas, nuomonė ir klaidinanti informacija",
      "Kas sukūrė šį turinį?",
      "Autorių teisės ir Creative Commons",
      "Tekstas, vaizdas, garsas ir vaizdo įrašas",
      "Sukurk aiškų skaitmeninį darbą",
    ],
    outcomes: [
      "Geba tiksliau suformuluoti paiešką.",
      "Atrenka tinkamesnį informacijos šaltinį.",
      "Pagrindžia, kodėl pasirinktu šaltiniu galima pasitikėti.",
      "Teisėtai naudoja kitų sukurtą turinį.",
      "Sukuria prasmingą skaitmeninį produktą.",
    ],
    challenge: "Parenk mini tyrimą naudodamas kelis šaltinius",
  },
  {
    number: "03",
    title: "Duomenys ir kaip kompiuteris mato pasaulį",
    lessons: [
      "Informacija ir duomenys – ar tai tas pats?",
      "Bitai, baitai ir duomenų kiekis",
      "0 ir 1 kompiuteryje",
      "Dvejetainė sistema",
      "Kaip kompiuteryje saugomas tekstas?",
      "Kaip saugomas vaizdas ir garsas?",
      "Duomenų rinkimas",
      "Lentelės ir duomenų tvarkymas",
      "Kaip iš duomenų padaryti išvadą?",
    ],
    outcomes: [
      "Pradeda suprasti ne tik kaip naudotis kompiuteriu, bet ir kaip jis pateikia informaciją.",
      "Geba rinkti duomenis.",
      "Geba juos organizuoti.",
      "Geba interpretuoti duomenis ir daryti pagrįstas išvadas.",
    ],
    extra: "Nuo skaičiavimo sistemų iki dvejetainio kompiuterio",
  },
  {
    number: "04",
    title: "Algoritminis mąstymas",
    lessons: [
      "Kas apskritai yra problema?",
      "Sudėtingą problemą skaidome į dalis",
      "Veiksmų seka",
      "Kas yra algoritmas?",
      "Tikslumas ir nedviprasmiškumas",
      "Pasirinkimas: „jeigu...“",
      "Pasikartojantys veiksmai",
      "Šablonų ir pasikartojimų pastebėjimas",
      "Klaidos algoritme",
      "Ar tą pačią problemą galima išspręsti kitaip?",
    ],
    outcomes: [
      "Geba sukurti sprendimo planą.",
      "Skaido problemą į mažesnes dalis.",
      "Tikrina savo sprendimą.",
      "Aptinka klaidas.",
      "Lygina kelis sprendimo būdus.",
    ],
  },
  {
    number: "05",
    title: "Programuoju ir kuriu",
    lessons: [
      "Algoritmas ir programa",
      "Kaip programa vykdo komandas?",
      "Kuriame pirmą programą",
      "Seka",
      "Įvestis ir išvestis",
      "Kintamasis",
      "Sąlyga",
      "Kartojimas",
      "Derinimas – kodėl programa neveikia?",
      "Programos tobulinimas",
      "Mano savarankiškas projektas",
    ],
    process: [
      "Idėja",
      "Planas",
      "Programavimas",
      "Testavimas",
      "Klaidų taisymas",
      "Tobulinimas",
    ],
  },
  {
    number: "06",
    title: "Internetas, tinklai ir bendradarbiavimas",
    lessons: [
      "Kaip du įrenginiai apsikeičia informacija?",
      "Kas yra kompiuterių tinklas?",
      "Internetas ir žiniatinklis – ne tas pats",
      "Naršyklė ir svetainė",
      "Kaip informacija nukeliauja kitam žmogui?",
      "El. paštas ir priedai",
      "Debesija",
      "Bendras dokumentas",
      "Kokią komunikacijos priemonę pasirinkti?",
      "Skaitmeninio bendravimo etiketas",
    ],
    note:
      "Svarbu susikurti teisingą supratimą, kad internetas nėra „magija“, o tarpusavyje susijusių įrenginių ir sistemų tinklas.",
  },
  {
    number: "07",
    title: "Saugus ir atsakingas skaitmeninis gyvenimas",
    lessons: [
      "Kas yra mano asmeniniai duomenys?",
      "Vieša ir privati informacija",
      "Stipri paskyros apsauga",
      "Slaptažodžiai ir kelių veiksnių apsauga",
      "Įtartina žinutė – ką daryti?",
      "Phishing ir internetinės apgavystės",
      "Saugus bendravimas su žmonėmis internete",
      "Skaitmeninis pėdsakas",
      "Programų ir svetainių leidimai",
      "Skaitmeninė savijauta",
      "Technologijos ir aplinka",
    ],
  },
];

export default function InformatikaPage() {
  return (
    <>

      <Header />
      
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link href="/5-klase" className={styles.backLink}>
              ← Atgal į 5 klasę
            </Link>

            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <p className={styles.eyebrow}>5 klasė · Informatika</p>

                <h1>5 klasės informatika</h1>

                <p className={styles.intro}>
                  Skaitmeninis pasaulis tavo rankose! Suprask, tyrinėk, kurk ir
                  naudok technologijas atsakingai.
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

        {/* PROGRESAS */}
        <section className={styles.progressOverview}>
          <div className={styles.container}>
            <div className={styles.overviewCard}>
              <div className={styles.overviewHeader}>
                <div>
                  <p className={styles.overviewLabel}>Tavo progresas</p>
                  <p className={styles.overviewMeta}>0 iš 7 skyrių</p>
                </div>

                <strong className={styles.overviewValue}>0%</strong>
              </div>

              <div
                className={styles.overviewBar}
                aria-label="5 klasės informatikos progresas: 0 procentų"
              >
                <div className={styles.overviewFill} />
              </div>
            </div>
          </div>
        </section>

        {/* MOKYMOSI KELIAS */}
        <section className={styles.learningPath}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionLabel}>Mokymosi kelias</p>

                <h2>Mokykis nuosekliai</h2>

                <p className={styles.sectionIntro}>
                  Pirmiausia pasitikrink, ką jau moki. Gali pradėti nuo pirmo skyriaus arba pasirinkti temą, kurią nori išmokti ar pakartoti – nuo darbo su įrenginiu ir informacijos
                  paieškos iki programavimo, interneto ir skaitmeninio saugumo.
                </p>
              </div>
            </div>

            {/* DIAGNOSTIKA */}
            <article className={styles.diagnosticCard}>
              <div className={styles.diagnosticNumber}>✓</div>

              <div className={styles.diagnosticContent}>
                <span className={styles.cardEyebrow}>Prieš pradedant</span>

                <h3>Ką jau moku?</h3>

                <p>
                  Trumpa diagnostika padės įsivertinti turimas žinias ir
                  pastebėti temas, kurias verta pakartoti pirmiausia.
                </p>
              </div>

              <Link
                href="/5-klase/informatika/ka-jau-moku"
                className={styles.cardAction}
                aria-label="Pradėti diagnostiką Ką jau moku?"
              >
                Pradėti
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            {/* SKYRIAI */}
            <div className={styles.chapterList}>
              {chapters.map((chapter) => (
                <details
                  key={chapter.number}
                  className={styles.chapterCard}
                >
                  <summary className={styles.chapterSummary}>
                    <span className={styles.chapterNumber}>
                      {chapter.number}
                    </span>

                    <div className={styles.chapterSummaryText}>
                      <span className={styles.chapterLabel}>Skyrius</span>

                      <h3>{chapter.title}</h3>
                    </div>

                    <span className={styles.chapterCount}>
                      {chapter.lessons.length} temų
                    </span>

                    <span
                      className={styles.chapterArrow}
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </summary>

                  <div className={styles.chapterContent}>
                    <div className={styles.lessonBlock}>
                      <h4>Temos</h4>

                      <ol className={styles.lessonList}>
                        {chapter.lessons.map((lesson) => (
                          <li key={lesson} className={styles.lessonItem}>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {chapter.outcomes && (
                      <div className={styles.outcomesBlock}>
                        <p className={styles.contentLabel}>
                          Pabaigęs skyrių mokinys
                        </p>

                        <ul className={styles.outcomeList}>
                          {chapter.outcomes.map((outcome) => (
                            <li key={outcome}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {chapter.challenge && (
                      <div className={styles.challengeBlock}>
                        <span className={styles.challengeIcon}>★</span>

                        <div>
                          <p className={styles.contentLabel}>
                            Skyriaus iššūkis
                          </p>

                          <p className={styles.challengeText}>
                            „{chapter.challenge}“
                          </p>
                        </div>
                      </div>
                    )}

                    {chapter.extra && (
                      <div className={styles.extraBlock}>
                        <span className={styles.extraIcon}>📜</span>

                        <div>
                          <p className={styles.contentLabel}>
                            Papildomas atradimas
                          </p>

                          <p>{chapter.extra}</p>
                        </div>
                      </div>
                    )}

                    {chapter.process && (
                      <div className={styles.processBlock}>
                        <p className={styles.contentLabel}>
                          Ne „pakartok kodą iš pavyzdžio“
                        </p>

                        <p className={styles.processIntro}>
                          Savarankiškas projektas kuriamas kaip tikras kūrimo
                          procesas:
                        </p>

                        <div className={styles.processSteps}>
                          {chapter.process.map((step, index) => (
                            <div
                              key={step}
                              className={styles.processStep}
                            >
                              <span>{step}</span>

                              {index < chapter.process!.length - 1 && (
                                <span
                                  className={styles.processArrow}
                                  aria-hidden="true"
                                >
                                  ↓
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {chapter.note && (
                      <div className={styles.noteBlock}>
                        <p className={styles.contentLabel}>Svarbu suprasti</p>
                        <p>{chapter.note}</p>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRUOTAS IŠŠŪKIS */}
        <section className={styles.finalChallenge}>
          <div className={styles.container}>
            <div className={styles.finalChallengeCard}>
              <div className={styles.finalChallengeText}>
                <p className={styles.sectionLabel}>
                  5 klasės integruotas iššūkis
                </p>

                <h2>Pritaikyk kelių skyrių žinias vienoje situacijoje</h2>

                <p>
                  Mokinys gauna vieną ar
                  kelias realias situacijas, kuriose reikia atsirinkti
                  informaciją, priimti sprendimus, pagrįsti pasirinkimus ir
                  panaudoti kelių informatikos skyrių žinias kartu.
                </p>
              </div>

              <div className={styles.finalChallengeSteps}>
                <span>Suprantu situaciją</span>
                <span aria-hidden="true">→</span>
                <span>Pasirenku žinias</span>
                <span aria-hidden="true">→</span>
                <span>Sprendžiu</span>
                <span aria-hidden="true">→</span>
                <span>Pagrindžiu</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    
      <Footer />
    </>
  );
}