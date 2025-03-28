import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import WhatIsSection from "@/components/what-is-section";
import HowItWorksSection from "@/components/how-it-works-section";
import BenefitsSection from "@/components/benefits-section";
import MLBPilotSection from "@/components/mlb-pilot-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <MLBPilotSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
