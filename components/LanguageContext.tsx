'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface LanguageContextType {
  language: 'fr' | 'en' | 'uk';
  setLanguage: (language: 'fr' | 'en' | 'uk') => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a hook to use the context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en' | 'uk'>('fr');

  // Basic translation function (can be expanded with actual translations)
  const t = (key: string) => {
    const translations: { [key: string]: { [lang: string]: string } } = {
      'nav.about': { fr: 'À propos', en: 'About', uk: 'Про нас' },
      'nav.news': { fr: 'Actualités', en: 'News', uk: 'Новини' },
      'nav.teachers': { fr: 'Nos professeurs', en: 'Our Teachers', uk: 'Наші вчителі' },
      'nav.blog': { fr: 'Blog', en: 'Blog', uk: 'Блог' },
      'nav.contact': { fr: 'Contact', en: 'Contact', uk: 'Контакти' },
      'nav.login': { fr: 'Connexion', en: 'Login', uk: 'Увійти' },
      'nav.schoolTitle': { fr: 'École Ukrainienne Saint-Nicolas', en: 'Saint-Nicolas Ukrainian School', uk: 'Українська школа Святого Миколая' },
      'nav.schoolSubtitle': { fr: 'LYON • FRANCE', en: 'LYON • FRANCE', uk: 'ЛІОН • ФРАНЦІЯ' },
      'nav.home': { fr: 'Accueil', en: 'Home', uk: 'Головна' },
      'nav.planning': { fr: 'Planning Parental', en: 'Parental Planning', uk: 'Батьківський розклад' },
    };
    return translations[key]?.[language] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
