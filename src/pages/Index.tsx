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
import PolicyOverlay from "@/components/sections/PolicyOverlay";
import ScrollTop from "@/components/sections/ScrollTop";
import Footer from "@/components/sections/Footer";
import useReveal from "@/hooks/useReveal";

export default function Index() {
  const [certsOpen, setCertsOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  useReveal();

  useEffect(() => {
    document.body.style.overflow = certsOpen || policyOpen ? "hidden" : "";
  }, [certsOpen, policyOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCertsOpen(false);
        setPolicyOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
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
      <ContactSection onOpenPolicy={() => setPolicyOpen(true)} />
      <CertsOverlay open={certsOpen} onClose={() => setCertsOpen(false)} />
      <PolicyOverlay open={policyOpen} onClose={() => setPolicyOpen(false)} />
      <ScrollTop />
      <Footer onOpenPolicy={() => setPolicyOpen(true)} />
    </>
  );
}