import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ArchievementsSection from "./components/ArchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div
        className="
          container
          mt-24 
          mx-auto 
          relative
        "
      >
        <HeroSection />
        <ArchievementsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
