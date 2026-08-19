import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedActivity from "@/components/FeaturedActivity";
import LearningLibrary from "@/components/LearningLibrary";
import GradeSelector from "@/components/GradeSelector";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SupportBanner from "@/components/SupportBanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <GradeSelector />
        <FeaturedActivity />
        <LearningLibrary />
        <HowItWorks />
        <Benefits />
        <SupportBanner />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}