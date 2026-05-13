import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MarqueeSection from './components/MarqueeSection';
import ProjectsSection from './components/ProjectsSection';
import FloorPlanSection from './components/FloorPlanSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <FloorPlanSection />
      <ContactSection />
    </div>
  );
}

export default App;
