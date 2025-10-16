'use client';

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { NewsSection } from "@/components/NewsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ParentalPlanningPage } from "@/components/ParentalPlanningPage";
import { LanguageProvider } from "@/components/LanguageContext";
import { TeamPage } from "@/components/TeamPage";

export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Si on est sur la page planning, on affiche seulement cette page
  if (currentPage === "planning") {
    return (
      <LanguageProvider>
        <ParentalPlanningPage onBack={() => setCurrentPage("home")} />
      </LanguageProvider>
    );
  }

  if (currentPage === "team") {
    return (
      <LanguageProvider>
        <TeamPage onBack={() => setCurrentPage("home")} />
      </LanguageProvider>
    );
  }

  // Page principale avec toutes les sections
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Section Hero avec carrousel */}
      {currentPage === "home" && (
        <section id="home" className="px-6 py-8 relative">
          <div className="max-w-6xl mx-auto">
            <HeroCarousel />
          </div>
        </section>
      )}

      {/* Sections selon la navigation */}
      {(currentPage === "home" || currentPage === "about") && (
        <div id="about">
          <AboutSection />
        </div>
      )}

      {(currentPage === "home" || currentPage === "news") && (
        <div id="news">
          <NewsSection />
        </div>
      )}



      {(currentPage === "home" || currentPage === "blog") && (
        <div id="blog">
          <BlogSection />
        </div>
      )}

      {(currentPage === "home" || currentPage === "contact") && (
        <div id="contact">
          <ContactSection />
        </div>
      )}

      <Footer />
      </div>
    </LanguageProvider>
  );
}
