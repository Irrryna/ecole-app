'use client';

import { useState } from "react";
import { Navigation } from "./Navigation";
import { HeroCarousel } from "./HeroCarousel";
import { AboutSection } from "./AboutSection";
import { NewsSection } from "./NewsSection";
import { BlogSection } from "./BlogSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { ParentalPlanningPage } from "./ParentalPlanningPage";
import { LanguageProvider } from "./LanguageContext";
import { TeamPage } from "./TeamPage";

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
        <section className="px-6 py-8 relative">
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
