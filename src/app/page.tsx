import Header from "../components/Header";
import Hero from "../components/Hero";
import LearningLibrary from "../components/LearningLibrary";
import GradeSelector from "../components/GradeSelector";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import SupportBanner from "../components/SupportBanner";
import FuturePlan from "../components/FuturePlan";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <LearningLibrary />
      <GradeSelector />
      <HowItWorks />
      <Benefits />
      <SupportBanner />
      <FuturePlan />
      <Footer />
      <BackToTop />

      {/* <section id="uzduotys" aria-labelledby="tasks-title">
        <p>Rekomenduojama pradėti nuo čia</p>
        <h2 id="tasks-title">Populiarios užduotys</h2>

        <div>
          <article>
            <h3>4 klasė – 1 savaitė, 1 diena</h3>
            <p>Lengvas įsivažiavimas: skaitymas, matematika ir orų stebėjimas.</p>
            <a href="/mokytis/4-klase/1-savaite/1-diena">Pradėti</a>
          </article>

          <article>
            <h3>4 klasė – 1 savaitė, 2 diena</h3>
            <p>Sudėtingesnės vasariškos užduotys ir tekstiniai uždaviniai.</p>
            <a href="/mokytis/4-klase/1-savaite/2-diena">Pradėti</a>
          </article>

          <article>
            <h3>4 klasė – 1 savaitė, 3 diena</h3>
            <p>Tęstinės užduotys, duomenų lyginimas ir gamtos tyrinėjimas.</p>
            <a href="/mokytis/4-klase/1-savaite/3-diena">Pradėti</a>
          </article>

          <article>
            <h3>4 klasė – kūrybos diena</h3>
            <p>Kūrybinė misija, orų stebėjimas ir savaitės apibendrinimas.</p>
            <a href="/mokytis/4-klase/1-savaite/kurybos-diena">Pradėti</a>
          </article>
        </div>
      </section> */}

    </main>
  );
}