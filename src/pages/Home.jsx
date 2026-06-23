import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import WhyUs from "../components/home/WhyUs";
import LearningEcosystem from "../components/home/LearningEcosystem";
import Courses from "../components/home/Courses";
import FounderTeam from "../components/home/FounderTeam";
import Testimonials from "../components/home/Testimonials";
import Gallery from "../components/home/Gallery";
import Contact from "../components/home/Contact";
import AdmissionsBanner from "../components/home/AdmissionsBanner";

import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <WhyUs />
      <LearningEcosystem />
      <Courses />
      <FounderTeam />
      <Testimonials />
      <Gallery />
      <AdmissionsBanner />
      <Contact />

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;