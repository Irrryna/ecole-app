import { VyshyvankaPattern } from "./VyshyvankaPattern";
import { SunflowerDecoration } from "./SunflowerDecoration";
import { useLanguage } from "./LanguageContext";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TeamPageProps {
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export function TeamPage({ onBack, onNavigate }: TeamPageProps) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teachers = [
    {
      id: 1,
      nameKey: 'teachers.angelina.name',
      roleKey: 'teachers.angelina.role',
      image: "/prof1.png",
      bioKey: 'teachers.angelina.bio'
    },
    {
      id: 2,
      nameKey: 'teachers.valentina.name',
      roleKey: 'teachers.valentina.role',
      image: "/prof2.png",
      bioKey: 'teachers.valentina.bio'
    },
    {
      id: 3,
      nameKey: 'teachers.volodymyr.name',
      roleKey: 'teachers.volodymyr.role',
      image: "/prof3.png",
      bioKey: 'teachers.volodymyr.bio'
    },
    {
      id: 4,
      nameKey: 'teachers.teacher4.name',
      roleKey: 'teachers.teacher4.role',
      image: "/prof4.png",
      bioKey: 'teachers.teacher4.bio'
    },
    {
      id: 5,
      nameKey: 'teachers.teacher5.name',
      roleKey: 'teachers.teacher5.role',
      image: "/prof5.png",
      bioKey: 'teachers.teacher5.bio'
    },
    {
      id: 6,
      nameKey: 'teachers.teacher6.name',
      roleKey: 'teachers.teacher6.role',
      image: "/prof6.png",
      bioKey: 'teachers.teacher6.bio'
    },
    {
      id: 7,
      nameKey: 'teachers.viktoria.name',
      roleKey: 'teachers.viktoria.role',
      image: "/prof7.png",
      bioKey: 'teachers.viktoria.bio'
    },
    {
      id: 8,
      nameKey: 'teachers.nataliia_k.name',
      roleKey: 'teachers.nataliia_k.role',
      image: "/prof8.png",
      bioKey: 'teachers.nataliia_k.bio'
    },
    {
      id: 9,
      nameKey: 'teachers.nataliia_s.name',
      roleKey: 'teachers.nataliia_s.role',
      image: "/prof9.png",
      bioKey: 'teachers.nataliia_s.bio'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation sticky en forme de demi-pilule */}
      <nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="sticky top-0 z-50 bg-white px-8 rounded-r-full transition-all duration-300"
        style={{ 
          width: 'calc(100% - 150px)',
          opacity: isScrolled && !isHovered ? 0.5 : 1,
          backgroundColor: isScrolled && !isHovered ? 'rgba(255, 255, 255, 0.5)' : '#ffffff',
          boxShadow: '0 4px 12px rgba(7, 42, 200, 0.15)'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
          {/* Logo et retour à l'accueil */}
          <div 
            onClick={onBack}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <Image 
              src="/logonew.png" 
              alt="École Ukrainienne Saint-Nicolas" 
              width={96}
              height={96}
              className="h-24 w-auto object-contain"
            />
            <div className="flex flex-col justify-center">
              <span 
                className="text-2xl font-bold uppercase leading-tight"
                style={{ color: '#2E3192' }}
              >
                ECOLE UKRAINIENNE
              </span>
              <span 
                className="text-lg leading-tight"
                style={{ color: '#FFC600' }}
              >
                de Saint-Nicolas à LYON
              </span>
            </div>
          </div>

          {/* Titre "Notre Équipe Pédagogique" - style bouton de nav */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <span 
              className="transition-colors font-medium uppercase text-sm"
              style={{ color: '#1E96FC' }}
            >
              {t("teachers.pageTitle")}
            </span>
          </div>

          {/* Bouton "Retour à l'accueil" - style bouton de nav */}
          <div className="hidden lg:block">
            <button
              onClick={onBack}
              className="transition-colors font-medium uppercase text-sm hover:text-blue-600"
              style={{ color: '#2E3192' }}
            >
              {t("common.backToHome")}
            </button>
          </div>
        </div>
      </nav>

      {/* Décorations */}
      <VyshyvankaPattern position="top-right" size="lg" className="opacity-10" />
      <VyshyvankaPattern position="bottom-left" size="md" className="opacity-8" />

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="space-y-32">
          {teachers.map((teacher, index) => (
            <div key={teacher.id} className="relative">
              {/* Décorations de tournesols */}
              {index % 2 === 0 ? (
                <>
                  <SunflowerDecoration position="top-left" />
                  <SunflowerDecoration position="bottom-right" />
                </>
              ) : (
                <>
                  <SunflowerDecoration position="top-right" />
                  <SunflowerDecoration position="bottom-left" />
                </>
              )}

              {/* Contenu du professeur */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 relative z-10`}>
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-[350px] h-[450px] overflow-hidden rounded-lg shadow-xl">
                    <Image 
                      src={teacher.image} 
                      alt={t(teacher.nameKey)}
                      width={350}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="mb-6 text-center">
                    <h3 
                      className="mb-2"
                      style={{ 
                        fontFamily: "'Brush Script MT', cursive",
                        fontSize: '2.5rem',
                        color: '#333'
                      }}
                    >
                      {t(teacher.nameKey)}
                    </h3>
                    <p 
                      className="text-xl"
                      style={{ 
                        fontFamily: "'Brush Script MT', cursive",
                        color: '#555'
                      }}
                    >
                      {t(teacher.roleKey)}
                    </p>
                  </div>

                  <div className="text-gray-700 leading-relaxed text-center">
                    <p>{t(teacher.bioKey)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}