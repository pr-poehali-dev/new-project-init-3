import { useEffect, useState } from "react";
import NavBar from "@/components/sections/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Marquees from "@/components/sections/Marquees";
import WorksSection from "@/components/sections/WorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import CertsOverlay from "@/components/sections/CertsOverlay";
import Footer from "@/components/sections/Footer";
import useReveal from "@/hooks/useReveal";

export default function Index() {
  const [certsOpen, setCertsOpen] = useState(false);
  useReveal();

  useEffect(() => {
    document.body.style.overflow = certsOpen ? "hidden" : "";
  }, [certsOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCertsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Marquees />
      <WorksSection />
      <ServicesSection />
      <AboutSection onOpenCerts={() => setCertsOpen(true)} />
      <ProcessSection />
      <ClientsSection />
      <ContactSection />
      <CertsOverlay open={certsOpen} onClose={() => setCertsOpen(false)} />
      <Footer />
    </>
  );
}
