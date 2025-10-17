import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.about"), value: "about" },
    { label: t("nav.news"), value: "news" },
    { label: t("nav.team"), value: "team" },
    { label: t("nav.blog"), value: "blog" },
    { label: t("nav.contact"), value: "contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'uk' : 'fr');
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Barre supérieure avec langue et connexion */}
      <div 
        style={{ 
          backgroundColor: '#072AC8',
          width: '100%',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: isScrolled ? 0 : 1,
          transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
          height: isScrolled ? '0' : 'auto',
          overflow: 'hidden'
        }} 
      >
        <div className="flex items-center justify-between py-2 px-6 text-sm">
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className="text-white hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              {language === 'fr' ? 'FRANÇAIS' : 'УКРАЇНСЬКА'}
            </button>
            <span className="text-white">|</span>
            <button 
              onClick={toggleLanguage}
              className="text-white hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              {language === 'fr' ? 'УКРАЇНСЬКА' : 'FRANÇAIS'}
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-white hover:text-yellow-300 transition-colors uppercase text-xs">
              INSCRIPTION
            </button>
            <span className="text-white">|</span>
            <button className="text-white hover:text-yellow-300 transition-colors uppercase text-xs">
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* Navigation principale arrondie */}
      <nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white shadow-lg px-8 rounded-r-full transition-all duration-300"
        style={{ 
          width: 'calc(100% - 150px)',
          opacity: isScrolled && !isHovered ? 0.85 : 1,
          backgroundColor: isScrolled && !isHovered ? 'rgba(255, 255, 255, 0.95)' : '#ffffff'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo et texte */}
          <div 
            onClick={() => onNavigate("home")}
            className="flex items-center cursor-pointer"
            style={{ marginLeft: '-50px' }}
          >
            <Image
              src="/logonew.png"
              alt="École Ukrainienne Saint-Nicolas"
              width={129}
              height={129}
              className="w-auto object-contain"
            />
            <div className="flex flex-col justify-center items-center ml-4">
              <span 
                className="text-2xl font-bold uppercase"
                style={{ color: '#2E3192', lineHeight: '1.5' }}
              >
                ECOLE UKRAINIENNE
              </span>
              <span 
                className="text-lg"
                style={{ color: '#FFC600' }}
              >
                de Saint-Nicolas à LYON
              </span>
            </div>
          </div>

          {/* Navigation centrale */}
          <div className="hidden xl:flex items-center space-x-6 flex-1 justify-center">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors font-medium uppercase text-base ${
                currentPage === "home" ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
              style={{ color: currentPage === "home" ? '#FFC600' : '#2E3192' }}
            >
              {t("nav.home")}
            </button>
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`transition-colors font-medium uppercase text-base ${
                  currentPage === item.value ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
                style={{ color: currentPage === item.value ? '#FFC600' : '#2E3192' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Lien Planning Parental - discret */}
          <div className="hidden xl:block">
            <button
              onClick={() => onNavigate("planning")}
              className="transition-colors text-xs uppercase text-gray-500 hover:text-blue-600 underline decoration-dotted underline-offset-4"
              style={{ 
                color: currentPage === "planning" ? '#1E96FC' : '#999',
                textDecorationStyle: 'dotted'
              }}
            >
              {t("nav.planning")}
            </button>
          </div>

          {/* Menu mobile */}
          <Button
            className="xl:hidden"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#072AC8' }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors px-2 py-1 rounded ${
                  currentPage === "home" ? 'text-blue-600 bg-blue-50' : 'text-purple-800 hover:text-blue-600'
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
                  className={`text-left transition-colors px-2 py-1 rounded ${
                    currentPage === item.value ? 'text-blue-600 bg-blue-50' : 'text-purple-800 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => {
                  onNavigate("planning");
                  setIsMenuOpen(false);
                }}
                className="text-left transition-colors px-2 py-1 rounded text-sm text-gray-500 hover:text-blue-600 underline decoration-dotted"
              >
                {t("nav.planning")}
              </button>
              
              <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-200">
                <button 
                  onClick={toggleLanguage}
                  className="text-sm text-purple-800 hover:text-blue-600 uppercase"
                >
                  {language === 'fr' ? 'FRANÇAIS' : 'УКРАЇНСЬКА'}
                </button>
                <span>|</span>
                <button 
                  onClick={toggleLanguage}
                  className="text-sm text-purple-800 hover:text-blue-600 uppercase"
                >
                  {language === 'fr' ? 'УКРАЇНСЬКА' : 'FRANÇAIS'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}