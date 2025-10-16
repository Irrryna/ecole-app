'use client';

import { useLanguage } from "./LanguageContext";
import { SunflowerDecoration } from "./SunflowerDecoration";
import Image from "next/image";

type Teacher = {
  id: number;
  nameKey: string;
  roleKey: string;
  image: string;
  bioKey: string;
};

export function TeachersSection() {
  const { t } = useLanguage();

  const teachers: Teacher[] = [
    { id: 1, nameKey: 'teachers.angelina.name',   roleKey: 'teachers.angelina.role',   image: "/prof1.png", bioKey: 'teachers.angelina.bio' },
    { id: 2, nameKey: 'teachers.valentina.name',  roleKey: 'teachers.valentina.role',  image: "/prof2.png", bioKey: 'teachers.valentina.bio' },
    { id: 3, nameKey: 'teachers.volodymyr.name',  roleKey: 'teachers.volodymyr.role',  image: "/prof3.png", bioKey: 'teachers.volodymyr.bio' },
    { id: 4, nameKey: 'teachers.teacher4.name',   roleKey: 'teachers.teacher4.role',   image: "/prof4.png", bioKey: 'teachers.teacher4.bio' },
    { id: 5, nameKey: 'teachers.teacher5.name',   roleKey: 'teachers.teacher5.role',   image: "/prof5.png", bioKey: 'teachers.teacher5.bio' },
    { id: 6, nameKey: 'teachers.teacher6.name',   roleKey: 'teachers.teacher6.role',   image: "/prof6.png", bioKey: 'teachers.teacher6.bio' },
    { id: 7, nameKey: 'teachers.viktoria.name',   roleKey: 'teachers.viktoria.role',   image: "/prof7.png", bioKey: 'teachers.viktoria.bio' },
    { id: 8, nameKey: 'teachers.nataliia_k.name', roleKey: 'teachers.nataliia_k.role', image: "/prof8.png",  bioKey: 'teachers.nataliia_k.bio' },
    { id: 9, nameKey: 'teachers.nataliia_s.name', roleKey: 'teachers.nataliia_s.role', image: "/prof9.png",  bioKey: 'teachers.nataliia_s.bio' },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900">{t('teachers.title')}</h2>
        </div>

        {/* Chaque bloc professeur */}
        <div className="space-y-28">
          {teachers.map((teacher, index) => {
            const reversed = index % 2 !== 0; // alterne photo/texte
            return (
              <div
                key={teacher.id}
                className="relative md:px-16 lg:px-28 xl:px-36" // 👉 crée de larges gouttières latérales pour les tournesols
              >
                {/* Décorations tournesols : affichées ≥ md et placées DANS les marges */}
                <div className="hidden md:block absolute inset-0 pointer-events-none select-none">
                  {reversed ? (
                    <>
                      <div className="absolute top-0 right-0 translate-x-6 -translate-y-2 z-0">
                        <SunflowerDecoration position="top-right" />
                      </div>
                      <div className="absolute bottom-0 left-0 -translate-x-6 translate-y-2 z-0">
                        <SunflowerDecoration position="bottom-left" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute top-0 left-0 -translate-x-6 -translate-y-2 z-0">
                        <SunflowerDecoration position="top-left" />
                      </div>
                      <div className="absolute bottom-0 right-0 translate-x-6 translate-y-2 z-0">
                        <SunflowerDecoration position="bottom-right" />
                      </div>
                    </>
                  )}
                </div>

                {/* Contenu (au-dessus des tournesols) */}
                <div
                  className={`relative z-10 flex flex-col ${
                    reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-10`}
                >
                  {/* Photo grand format */}
                  <div className="flex-shrink-0">
                    <div className="w-[320px] sm:w-[360px] lg:w-[380px] h-[420px] sm:h-[460px] overflow-hidden rounded-xl shadow-xl bg-white">
                      <Image
                        src={teacher.image}
                        alt={t(teacher.nameKey)}
                        width={380}
                        height={460}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Texte */}
                  <div className={`flex-1 ${reversed ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="mb-6 text-center">
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "'Brush Script MT', cursive",
                          fontSize: '2.5rem',
                          color: '#333',
                          lineHeight: 1.1
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
