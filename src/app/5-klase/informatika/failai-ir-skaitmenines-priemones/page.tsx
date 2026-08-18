import FileTypeFlipCard from "./FileTypeFlipCard";
import DigitalToolCard from "./DigitalToolCard";
import Image from "next/image";
import type { Metadata } from "next";
import CheckQuestion from "@/components/activities/CheckQuestion";
import styles from "./tema.module.css";
import Link from "next/link";
import ToolChoiceCard from "./ToolChoiceCard";

export const metadata: Metadata = {
  title: "Failai ir skaitmeninės priemonės | 5 klasės informatika",
  description:
    "5 klasės informatikos tema apie failus, aplankus, failų tipus, failų tvarkymą ir skaitmeninių priemonių pasirinkimą.",
};

export default function FailaiIrSkaitmeninesPriemonesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="puslapio-virsus">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <Link href="/5-klase/informatika" className={styles.backLink}>
              ← Grįžti į 5 klasės informatiką
            </Link>

            <p className={styles.eyebrow}>5 klasė · Informatika</p>

            <h1 className={styles.heroTitle}>
              Failai ir skaitmeninės priemonės
            </h1>

            <p className={styles.heroDescription}>
              Sužinok, kaip kompiuteryje tvarkomi failai ir aplankai, kaip
              pasirinkti tinkamas skaitmenines priemones ir saugiai dirbti su
              savo informacija.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/hero-laptop.png"
              alt="Nešiojamasis kompiuteris su failų, paveikslėlių, muzikos ir kitų skaitmeninių priemonių langais"
              width={700}
              height={560}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.learningSection}>
        <p className={styles.sectionLabel}>Tema</p>
        <h2 className={styles.sectionTitle}>Ko išmoksi?</h2>

        <div className={styles.learningGrid}>
          <Link href="#failai-ir-aplankai" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Failai ir aplankai</h3>
              <p className={styles.cardDescription}>
                Sužinosi, kuo skiriasi failas nuo aplanko ir kaip jie padeda
                tvarkingai saugoti informaciją.
              </p>
            </article>
          </Link>

          <Link href="#failu-tipai" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Failų tipai</h3>
              <p className={styles.cardDescription}>
                Išmoksi atpažinti teksto, paveikslėlių, garso, vaizdo ir kitų
                failų tipus.
              </p>
            </article>
          </Link>

          <Link href="#failu-tvarkymas" className={styles.learningCardLink}>
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Failų tvarkymas</h3>
              <p className={styles.cardDescription}>
                Mokysiesi kurti, pervadinti, kopijuoti, perkelti ir šalinti
                failus bei aplankus.
              </p>
            </article>
          </Link>

          <Link
            href="#skaitmenines-priemones"
            className={styles.learningCardLink}
          >
            <article className={styles.learningCard}>
              <span className={styles.cardNumber}>04</span>
              <h3 className={styles.cardTitle}>Skaitmeninės priemonės</h3>
              <p className={styles.cardDescription}>
                Sužinosi, kokią programą ar skaitmeninį įrankį pasirinkti
                skirtingoms užduotims atlikti.
              </p>
            </article>
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.filesFoldersSection}`}
        id="failai-ir-aplankai"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>01</span>
            <h2>Failai ir aplankai</h2>
          </div>

          <div className={styles.fileDefinition}>
            <h2>Kas yra failas?</h2>

            <p>
              Failas – tai kompiuteryje išsaugota informacija. Faile gali būti
              tekstas, nuotrauka, piešinys, muzika, vaizdo įrašas ar kita
              informacija.
            </p>
          </div>
          <div className={styles.fileExample}>
            <span className={styles.fileName}>mano-nuotrauka</span>
            <span className={styles.fileExtension}>.jpg</span>
          </div>
          <div className={styles.fileExplanation}>
            <p>
              <strong>mano-nuotrauka</strong> – failo pavadinimas.
            </p>

            <p>
              <strong>.jpg</strong> – failo plėtinys. Jis padeda kompiuteriui
              suprasti, kokio tipo tai failas.
            </p>
          </div>
          <div className={styles.folderBlock}>
            <h3>Kas yra aplankas?</h3>

            <p>
              Aplankas – tai vieta, kurioje galima laikyti failus ir kitus
              aplankus. Aplankai padeda informaciją kompiuteryje suskirstyti ir
              lengviau ją rasti.
            </p>
          </div>
          <div className={styles.compareBlock}>
            <div>
              <span className={styles.compareLabel}>Failas</span>
              <p>
                Saugo konkrečią informaciją, pavyzdžiui, tekstą, nuotrauką ar
                muziką.
              </p>
            </div>

            <div>
              <span className={styles.compareLabel}>Aplankas</span>
              <p>
                Padeda sugrupuoti ir tvarkingai laikyti failus bei kitus
                aplankus.
              </p>
            </div>
          </div>
          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.fileTypesSection}`}
        id="failu-tipai"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>02</span>
            <h2>Failų tipai</h2>
          </div>
          <div className={styles.fileTypeDefinition}>
            <h3>Kas yra failo tipas?</h3>

            <p>
              Failo tipas parodo, kokia informacija saugoma faile ir kokia
              programa gali jį atidaryti. Failo tipą dažnai galima atpažinti
              pagal jo plėtinį.
            </p>
          </div>

          <div className={styles.fileTypesGrid}>
            <FileTypeFlipCard
              extension=".docx"
              title="Teksto dokumentas"
              description="Dokumentas, kuriame galima rašyti ir formatuoti tekstą, įterpti paveikslėlius, lenteles ir kitą informaciją. Tokį failą dažnai sukursi naudodamas „Microsoft Word“ ar panašią programą."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/docx.png"
              imageAlt="DOCX failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".txt"
              title="Paprasto teksto failas"
              description="Faile saugomas tik paprastas tekstas, dažniausiai be spalvų, paveikslėlių ir sudėtingo formatavimo. Tokius failus gali atidaryti daugelis teksto redagavimo programų."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/txt.png"
              imageAlt="TXT failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".pdf"
              title="PDF dokumentas"
              description="Skirtas dokumentui išsaugoti taip, kad jo išvaizda beveik nesikeistų atidarius kitame kompiuteryje ar telefone. PDF formatu dažnai pateikiamos knygos, užduotys ir įvairūs dokumentai."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/pdf.png"
              imageAlt="PDF failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".jpg / .png"
              title="Paveikslėlio failai"
              description="Naudojami nuotraukoms, piešiniams ir kitokiems vaizdams saugoti. JPG dažnai naudojamas nuotraukoms, o PNG gali išsaugoti ir permatomą paveikslėlio foną."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/jpg.png"
              imageAlt="JPG paveikslėlio failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".mp3"
              title="Garso failas"
              description="Skirtas garsui saugoti. Tai gali būti muzika, žmogaus balsas, gamtos garsai ar kitas garso įrašas."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/mp3.png"
              imageAlt="MP3 garso failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".mp4"
              title="Vaizdo įrašo failas"
              description="Naudojamas vaizdo įrašams saugoti. Tokiame faile paprastai yra ir judantis vaizdas, ir garsas."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/mp4.png"
              imageAlt="MP4 vaizdo įrašo failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".pptx"
              title="Pateikties failas"
              description="Naudojamas skaidrių pateiktims kurti. Skaidrėse gali būti tekstas, paveikslėliai, diagramos, vaizdo įrašai ir kiti elementai."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/pptx.png"
              imageAlt="PPTX pateikties failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".xlsx"
              title="Skaičiuoklės failas"
              description="Naudojamas duomenims lentelėse saugoti, skaičiavimams atlikti ir diagramoms kurti. Tokius failus dažnai atidaro skaičiuoklių programos."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/xlsx.png"
              imageAlt="XLSX skaičiuoklės failo pavyzdys"
            />

            <FileTypeFlipCard
              extension=".zip"
              title="Suspaustas failų archyvas"
              description="ZIP faile galima kartu laikyti kelis failus ar aplankus. Jie supakuojami į vieną archyvą, todėl juos patogiau perduoti ar saugoti."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/file-types/zip.png"
              imageAlt="ZIP failų archyvo pavyzdys"
            />
          </div>
          <div className={styles.fileTypeNote}>
            <h3>Svarbu žinoti</h3>

            <p>
              Tas pats informacijos tipas gali turėti kelis skirtingus failų
              plėtinius. Pavyzdžiui, paveikslėlis gali būti{" "}
              <strong>.jpg</strong>,<strong> .png</strong> arba{" "}
              <strong>.gif</strong>, o garso įrašas –<strong> .mp3</strong> arba{" "}
              <strong>.wav</strong>.
            </p>

            <p>
              Failo plėtinio nereikėtų keisti vien pervadinant failą. Pakeitus,
              pavyzdžiui, <strong>.jpg</strong> į <strong>.mp3</strong>,
              paveikslėlis netaps garso failu.
            </p>
          </div>

          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.fileManagementSection}`}
        id="failu-tvarkymas"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>03</span>
            <h2>Failų tvarkymas</h2>
          </div>
          <div className={styles.fileManagementDefinition}>
            <h3>Kas yra failų tvarkymas?</h3>

            <p>
              Failų tvarkymas – tai veiksmai, kuriais failus ir aplankus
              kuriame, pavadiname, kopijuojame, perkeliame, šaliname ir
              suskirstome taip, kad reikalingą informaciją būtų lengva rasti.
            </p>
          </div>
          <div className={styles.managementGrid}>
            <div className={styles.managementCard}>
              <h3>Kurti</h3>
              <p>
                Sukuriamas naujas failas arba aplankas, kuriame bus saugoma
                informacija.
              </p>
            </div>

            <div className={styles.managementCard}>
              <h3>Pervadinti</h3>
              <p>
                Failui ar aplankui suteikiamas aiškesnis pavadinimas, kad vėliau
                būtų lengviau suprasti, kas jame yra.
              </p>
            </div>

            <div className={styles.managementCard}>
              <h3>Kopijuoti</h3>
              <p>
                Sukuriama failo arba aplanko kopija, o originalas lieka savo
                vietoje.
              </p>
            </div>

            <div className={styles.managementCard}>
              <h3>Perkelti</h3>
              <p>
                Failas ar aplankas iš vienos vietos perkeliamas į kitą vietą.
              </p>
            </div>

            <div className={styles.managementCard}>
              <h3>Šalinti</h3>
              <p>
                Nebereikalingas failas ar aplankas pašalinamas. Dažnai jis
                pirmiausia patenka į šiukšlinę.
              </p>
            </div>

            <div className={styles.managementCard}>
              <h3>Rūšiuoti</h3>
              <p>
                Failai suskirstomi į aplankus pagal temą, dalyką, datą ar kitą
                aiškią tvarką.
              </p>
            </div>
          </div>
          <div className={styles.copyMoveBlock}>
            <h3>Kopijuoti ar perkelti?</h3>

            <div className={styles.copyMoveGrid}>
              <div>
                <strong>Kopijuoti</strong>
                <p>
                  Sukuriama dar viena failo kopija. Originalus failas lieka savo
                  vietoje, o kopija atsiranda kitoje vietoje.
                </p>
              </div>

              <div>
                <strong>Perkelti</strong>
                <p>
                  Failas pakeičia savo vietą. Senoje vietoje jo nebelieka, o
                  naujoje vietoje lieka tas pats failas.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.namingBlock}>
            <h3>Kaip gerai pavadinti failą?</h3>

            <p>
              Geras failo pavadinimas turi padėti iš karto suprasti, kas tame
              faile yra. Venk neaiškių pavadinimų, tokių kaip{" "}
              <strong>dokumentas1</strong>,<strong> naujas</strong> ar{" "}
              <strong>aaa</strong>.
            </p>

            <div className={styles.namingExamples}>
              <div>
                <span className={styles.badExample}>Neaišku</span>
                <p>dokumentas1.docx</p>
              </div>

              <div>
                <span className={styles.goodExample}>Aišku</span>
                <p>lietuviu-kalbos-referatas.docx</p>
              </div>

              <div>
                <span className={styles.badExample}>Neaišku</span>
                <p>IMG1234.jpg</p>
              </div>

              <div>
                <span className={styles.goodExample}>Aišku</span>
                <p>klases-ekskursija-2026.jpg</p>
              </div>
            </div>
          </div>
          <div className={styles.folderStructureBlock}>
            <h3>Kaip galima suskirstyti failus?</h3>

            <p>
              Failus patogu laikyti aplankuose pagal temą ar dalyką. Pavyzdžiui:
            </p>

            <div className={styles.folderTree}>
              <div className={styles.folderTreeItem}>
                <Image
                  src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/folder-tree/folder.png"
                  alt=""
                  width={28}
                  height={28}
                  className={styles.folderTreeIcon}
                />
                <span>Mokykla</span>
              </div>

              <div className={styles.folderTreeChild}>
                <div className={styles.folderTreeItem}>
                  <Image
                    src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/folder-tree/folder.png"
                    alt=""
                    width={28}
                    height={28}
                    className={styles.folderTreeIcon}
                  />
                  <span>Informatika</span>
                </div>

                <div className={styles.folderTreeChild}>
                  <div className={styles.folderTreeFile}>
                    <Image
                      src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/folder-tree/document.png"
                      alt=""
                      width={24}
                      height={24}
                      className={styles.folderTreeFileIcon}
                    />
                    <span>failu-tipai.docx</span>
                  </div>

                  <div className={styles.folderTreeFile}>
                    <Image
                      src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/folder-tree/image.png"
                      alt=""
                      width={24}
                      height={24}
                      className={styles.folderTreeFileIcon}
                    />
                    <span>robotukas.png</span>
                  </div>
                </div>
              </div>

              <div className={styles.folderTreeChild}>
                <div className={styles.folderTreeItem}>
                  <Image
                    src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/folder-tree/folder.png"
                    alt=""
                    width={28}
                    height={28}
                    className={styles.folderTreeIcon}
                  />
                  <span>Lietuvių kalba</span>
                </div>

                <div className={styles.folderTreeChild}>
                  <div className={styles.folderTreeFile}>
                    <Image
                      src="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/folder-tree/document.png"
                      alt=""
                      width={24}
                      height={24}
                      className={styles.folderTreeFileIcon}
                    />
                    <span>rasinys.docx</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="#puslapio-virsus" className={styles.backToTop}>
            ↑ Grįžti į viršų
          </Link>
        </div>
      </section>

      <section
        className={`${styles.lessonSection} ${styles.digitalToolsSection}`}
        id="skaitmenines-priemones"
      >
        <div className={styles.lessonInner}>
          <div className={styles.lessonHeading}>
            <span className={styles.lessonNumber}>04</span>
            <h2>Skaitmeninės priemonės</h2>
          </div>
          <div className={styles.digitalToolsDefinition}>
            <h3>Kas yra skaitmeninė priemonė?</h3>

            <p>
              Skaitmeninė priemonė – tai programa, programėlė, interneto
              paslauga ar įrenginys, padedantis atlikti tam tikrą užduotį.
              Skirtingoms užduotims naudojamos skirtingos priemonės, todėl
              svarbu mokėti pasirinkti tinkamiausią.
            </p>
          </div>
          <div className={styles.digitalToolsGrid}>
            <DigitalToolCard
              title="Teksto rengyklė"
              description="Naudojama tekstui rašyti ir tvarkyti. Joje galima keisti šriftą, įterpti paveikslėlius, sudaryti sąrašus ir kurti dokumentus."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/digital-tools/text-editor.png"
              imageAlt="Teksto rengyklės simbolis"
            />

            <DigitalToolCard
              title="Pateikčių programa"
              description="Naudojama skaidrėms kurti. Ji tinka pristatymams, kuriuose derinamas tekstas, paveikslėliai, diagramos ir kiti elementai."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/digital-tools/presentation.png"
              imageAlt="Pateikčių programos simbolis"
            />

            <DigitalToolCard
              title="Skaičiuoklė"
              description="Naudojama duomenims lentelėse tvarkyti, skaičiavimams atlikti ir diagramoms kurti."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/digital-tools/spreadsheet.png"
              imageAlt="Skaičiuoklės simbolis"
            />

            <DigitalToolCard
              title="Piešimo ar vaizdų redagavimo programa"
              description="Naudojama piešti, kurti iliustracijas, apkarpyti paveikslėlius ir atlikti kitus vaizdo pakeitimus."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/digital-tools/image-editor.png"
              imageAlt="Vaizdų redagavimo programos simbolis"
            />

            <DigitalToolCard
              title="Interneto naršyklė"
              description="Leidžia atidaryti interneto svetaines, naudotis internetinėmis paslaugomis ir ieškoti informacijos internete."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/digital-tools/browser.png"
              imageAlt="Interneto naršyklės simbolis"
            />

            <DigitalToolCard
              title="Bendravimo priemonė"
              description="Naudojama žinutėms, vaizdo pokalbiams ar failams siųsti ir bendrauti su kitais žmonėmis internetu."
              imageSrc="/images/5-klase/informatika/failai-ir-skaitmenines-priemones/digital-tools/chat.png"
              imageAlt="Bendravimo ir žinučių simbolis"
            />
          </div>
          <div className={styles.toolChoiceBlock}>
            <h3>Kokią priemonę pasirinkti?</h3>

            <div className={styles.toolChoiceGrid}>
              <ToolChoiceCard
                task="Reikia parašyti referatą"
                options={[
                  "Teksto rengyklė",
                  "Skaičiuoklė",
                  "Interneto naršyklė",
                ]}
                correctIndex={0}
              />

              <ToolChoiceCard
                task="Reikia pristatyti projektą klasei"
                options={[
                  "Pateikčių programa",
                  "Skaičiuoklė",
                  "Bendravimo priemonė",
                ]}
                correctIndex={0}
              />

              <ToolChoiceCard
                task="Reikia suskaičiuoti apklausos rezultatus"
                options={[
                  "Piešimo ar vaizdų redagavimo programa",
                  "Skaičiuoklė",
                  "Teksto rengyklė",
                ]}
                correctIndex={1}
              />

              <ToolChoiceCard
                task="Reikia nupiešti plakato iliustraciją"
                options={[
                  "Interneto naršyklė",
                  "Pateikčių programa",
                  "Piešimo ar vaizdų redagavimo programa",
                ]}
                correctIndex={2}
              />

              <ToolChoiceCard
                task="Reikia rasti informacijos internete"
                options={[
                  "Interneto naršyklė",
                  "Skaičiuoklė",
                  "Teksto rengyklė",
                ]}
                correctIndex={0}
              />

              <ToolChoiceCard
                task="Reikia pasikalbėti su klasės draugu nuotoliu"
                options={[
                  "Pateikčių programa",
                  "Bendravimo priemonė",
                  "Skaičiuoklė",
                ]}
                correctIndex={1}
              />
            </div>
          </div>
          <div className={styles.toolChoiceNote}>
            <h3>Svarbu renkantis priemonę</h3>

            <p>
              Tą pačią užduotį dažnai galima atlikti keliomis skirtingomis
              programomis. Svarbu pasirinkti ne konkretaus pavadinimo programą,
              o tokią priemonę, kurios galimybės tinka tavo užduočiai.
            </p>

            <p>
              Rinkdamasis pagalvok: <strong>ką turiu padaryti</strong>,{" "}
              <strong>kokių funkcijų man reikia</strong> ir{" "}
              <strong>ar priemone galiu naudotis saugiai</strong>.
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
              <p>
                <strong>Failas</strong> saugo informaciją, o{" "}
                <strong>aplankas</strong> padeda failus suskirstyti ir
                tvarkingai laikyti.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <strong>Failo plėtinys</strong>, pavyzdžiui, .jpg ar .docx,
                padeda atpažinti failo tipą.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Aiškūs failų pavadinimai ir tvarkinga aplankų struktūra padeda
                informaciją greitai rasti.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Skaitmeninę priemonę reikia pasirinkti pagal tai,{" "}
                <strong>kokią užduotį nori atlikti</strong>.
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
            Perskaityk situaciją ir pagalvok, koks sprendimas būtų
            tinkamiausias.
          </p>
          <div className={styles.checkCard}>
            <span className={styles.checkNumber}>1</span>

            <CheckQuestion
              question="Gabija nori išsaugoti klasės išvykos nuotraukas taip, kad jas vėliau būtų lengva rasti. Ką jai geriausia padaryti?"
              options={[
                "Visas nuotraukas palikti darbalaukyje",
                "Sukurti aplanką „Klasės išvyka 2026“ ir nuotraukas sudėti į jį",
                "Visas nuotraukas pervadinti „foto“",
              ]}
              correctIndex={1}
            />
          </div>
          <div className={styles.checkCard}>
            <span className={styles.checkNumber}>2</span>

            <CheckQuestion
              question="Matas gavo failą „gamtos-projektas.pdf“. Ką apie šį failą galima suprasti iš jo pavadinimo?"
              options={[
                "Tai tikrai paveikslėlio failas",
                "Tai PDF dokumentas",
                "Tai aplankas, kuriame saugomi projekto failai",
              ]}
              correctIndex={1}
            />
          </div>
          <div className={styles.checkCard}>
            <span className={styles.checkNumber}>3</span>

            <CheckQuestion
              question="Emilija nori nuotrauką palikti aplanke „Nuotraukos“, bet dar vieną jos kopiją įdėti į aplanką „Projektas“. Kurį veiksmą ji turėtų pasirinkti?"
              options={["Perkelti", "Kopijuoti", "Pervadinti"]}
              correctIndex={1}
            />
          </div>
          <div className={styles.checkCard}>
            <span className={styles.checkNumber}>4</span>

            <CheckQuestion
              question="Tomas atliko klasės apklausą ir nori suskaičiuoti atsakymus bei sudaryti diagramą. Kokią priemonę jam tinkamiausia pasirinkti?"
              options={["Teksto rengyklę", "Skaičiuoklę", "Piešimo programą"]}
              correctIndex={1}
            />
          </div>
          <div className={styles.finishBlock}>
            <p className={styles.finishLabel}>Tema baigta</p>

            <h2>Puiku! Perėjai visą temą.</h2>

            <p>
              Dabar jau turėtum mokėti atskirti failą nuo aplanko, atpažinti
              dažniausius failų tipus, tvarkingai tvarkyti failus ir pasirinkti
              tinkamą skaitmeninę priemonę užduočiai.
            </p>

            <Link href="/5-klase/informatika" className={styles.finishLink}>
              Grįžti į 5 klasės informatiką →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
