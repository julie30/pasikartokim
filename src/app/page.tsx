import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedActivity from "@/components/FeaturedActivity";
import LearningLibrary from "@/components/LearningLibrary";
import GradeSelector from "@/components/GradeSelector";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SupportBanner from "@/components/SupportBanner";
import FuturePlan from "@/components/FuturePlan";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <FeaturedActivity />
        <LearningLibrary />
        <GradeSelector />
        <HowItWorks />
        <Benefits />
        <SupportBanner />
        <FuturePlan />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}