import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import CinematicScroll from './components/CinematicScroll';
import ProjectsSection from './components/ProjectsSection';
import FloorPlanSection from './components/FloorPlanSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <CinematicScroll />
      <ProjectsSection />
      <FloorPlanSection />
      <ContactSection />
    </>
  );
}
