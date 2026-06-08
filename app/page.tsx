import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Programs } from "@/components/sections/Programs";
import { About } from "@/components/sections/About";
import { RooftopTurf } from "@/components/sections/RooftopTurf";
import { Gallery } from "@/components/sections/Gallery";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Stats />
        <WhyUs />
        <Programs />
        <About />
        <RooftopTurf />
        <Gallery />
        <Transformations />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
