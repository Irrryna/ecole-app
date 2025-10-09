'use client';
import { Button } from "./ui/Button";
import { Menu, X, Globe, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { ScrollingText } from "./ScrollingText";

const logoImage = '/logopng.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav.about"), value: "about" },
    { label: t("nav.news"), value: "news" },
    { label: t("nav.teachers"), value: "teachers" },
    { label: t("nav.blog"), value: "blog" },
    { label: t("nav.contact"), value: "contact" },
  ];

  return (
    <div style={{ backgroundColor: '#072AC8' }} className="sticky top-0 z-50">
      {/* Barre du haut avec sélecteur de langue et connexion */}
      <div className="border-b border-blue-600 py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white">FRANÇAIS</span>
              <span className="text-blue-200">EN</span>
              <span className="text-blue-200">УКРАЇНСЬКА</span>
            </div>
          </div>
          <div>
            <button className="text-white hover:text-yellow-300 transition-colors">
              <ScrollingText text={t("nav.login")} maxLength={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo et réseaux sociaux */}
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center shadow-lg">
                <Image 
                  src={logoImage} 
                  alt="École Ukrainienne Saint-Nicolas" 
                  className="w-full h-full object-contain"
                  width={64} // Added width
                  height={64} // Added height
                />
              </div>
              <div className="hidden sm:block">
                <h2 
                  onClick={() => onNavigate("home")}
                  className="text-white text-lg font-semibold cursor-pointer hover:text-yellow-300 transition-colors"
                >
                  {t("nav.schoolTitle")}
                </h2>
                <p className="text-blue-200 text-sm">{t("nav.schoolSubtitle")}</p>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="hidden lg:flex items-center space-x-2">
              <a href="#" className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation centrale */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                currentPage === "home" ? 'text-yellow-300' : ''
              }`}
            >
              {t("nav.home").toUpperCase()}
            </button>
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                  currentPage === item.value ? 'text-yellow-300' : ''
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Bouton Planning Parental */}
          <div className="hidden lg:block">
            <Button
              onClick={() => onNavigate("planning")}
              className="text-white hover:bg-blue-400 transition-colors px-6 py-3 rounded-full font-medium"
              style={{ backgroundColor: '#1E96FC' }}
            >
              {t("nav.planning").toUpperCase()}
            </Button>
          </div>

          {/* Menu mobile */}
          <Button
            className="lg:hidden text-white"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMenuOpen(false);
                }}
                className={`text-white text-left hover:text-yellow-300 transition-colors px-2 py-1 rounded ${
                  currentPage === "home" ? 'text-yellow-300 bg-blue-800' : ''
                }`}
              >
                {t("nav.home")}
              </button>
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-white text-left hover:text-yellow-300 transition-colors px-2 py-1 rounded ${
                    currentPage === item.value ? 'text-yellow-300 bg-blue-800' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <Button
                onClick={() => {
                  onNavigate("planning");
                  setIsMenuOpen(false);
                }}
                style={{ backgroundColor: '#1E96FC' }}
                className="text-white mt-3"
              >
                {t("nav.planning")}
              </Button>
              
              {/* Sélecteur de langue mobile */}
              <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-blue-600">
                <Globe className="w-4 h-4 text-white" />
                <span className="text-white text-sm">Langue:</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'fr' | 'uk')}
                  className="bg-transparent text-white border border-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option value="fr" className="text-black">Français</option>
                  <option value="uk" className="text-black">Українська</option>
                </select>
              </div>

              {/* Réseaux sociaux mobile */}
              <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-blue-600">
                <span className="text-white text-sm mr-2">Suivez-nous:</span>
                <a href="#" className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
