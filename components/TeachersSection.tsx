'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Mail, Award, BookOpen } from "lucide-react";
import { VyshyvankaPattern } from "@/components/VyshyvankaPattern";
import { useLanguage } from "@/components/LanguageContext";

export function TeachersSection() {
  const { t } = useLanguage();

  const teachers = [
    {
      id: 1,
      nameKey: "teachers.angelina.name",
      roleKey: "teachers.angelina.role",
      bioKey: "teachers.angelina.bio",
      subjects: ["Langue ukrainienne"],
      image: "/prof1.png",
      email: "angelina.nedapak@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Philologie"]
    },
    {
      id: 2,
      nameKey: "teachers.valentina.name",
      roleKey: "teachers.valentina.role",
      bioKey: "teachers.valentina.bio",
      subjects: ["Langue ukrainienne"],
      image: "/prof2.png",
      email: "valentina.selve@ecole-ukrainienne-lyon.fr",
      qualifications: ["Doctorat en Histoire"]
    },
    {
      id: 3,
      nameKey: "teachers.volodymyr.name",
      roleKey: "teachers.volodymyr.role",
      bioKey: "teachers.volodymyr.bio",
      subjects: ["Catéchisme"],
      image: "/prof3.png",
      email: "volodymyr.pendyei@ecole-ukrainienne-lyon.fr",
      qualifications: ["Licence en Théologie"]
    },
    {
      id: 4,
      nameKey: "teachers.teacher4.name",
      roleKey: "teachers.teacher4.role",
      bioKey: "teachers.teacher4.bio",
      subjects: ["Matière"],
      image: "/prof4.png",
      email: "prof4@ecole-ukrainienne-lyon.fr",
      qualifications: ["Qualification"]
    },
    {
      id: 5,
      nameKey: "teachers.teacher5.name",
      roleKey: "teachers.teacher5.role",
      bioKey: "teachers.teacher5.bio",
      subjects: ["Matière"],
      image: "/prof5.png",
      email: "prof5@ecole-ukrainienne-lyon.fr",
      qualifications: ["Qualification"]
    },
    {
      id: 6,
      nameKey: "teachers.teacher6.name",
      roleKey: "teachers.teacher6.role",
      bioKey: "teachers.teacher6.bio",
      subjects: ["Matière"],
      image: "/prof6.png",
      email: "prof6@ecole-ukrainienne-lyon.fr",
      qualifications: ["Qualification"]
    },
    {
      id: 7,
      nameKey: "teachers.viktoria.name",
      roleKey: "teachers.viktoria.role",
      bioKey: "teachers.viktoria.bio",
      subjects: ["Histoire de l'Ukraine"],
      image: "/prof7.png",
      email: "viktoria.hnatyk@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Management"]
    },
    {
      id: 8,
      nameKey: "teachers.nataliia_k.name",
      roleKey: "teachers.nataliia_k.role",
      bioKey: "teachers.nataliia_k.bio",
      subjects: ["Géographie de l'Ukraine"],
      image: "/prof8.png",
      email: "nataliia.kolipaniscuri@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Linguistique"]
    },
    {
      id: 9,
      nameKey: "teachers.nataliia_s.name",
      roleKey: "teachers.nataliia_s.role",
      bioKey: "teachers.nataliia_s.bio",
      subjects: ["Trésorerie"],
      image: "/prof9.png",
      email: "nataliia.surdarean@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Management"]
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ backgroundColor: '#FCF300' }}>
      <VyshyvankaPattern position="bottom-left" size="lg" className="opacity-15" />
      <VyshyvankaPattern position="top-right" size="md" className="opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-blue-900">{t('teachers.title')}</h2>
          <p className="max-w-3xl mx-auto text-blue-800">
            Rencontrez nos professeurs dévoués qui transmettent avec passion la langue, 
            la culture et l&apos;histoire ukrainiennes à nos élèves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={teacher.image}
                      alt={t(teacher.nameKey)}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-blue-900 mb-1">{t(teacher.nameKey)}</h4>
                    <p className="text-blue-600 mb-3">{t(teacher.roleKey)}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {teacher.subjects.map((subject, index) => (
                        <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 mt-4">{t(teacher.bioKey)}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-blue-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {teacher.qualifications.join(" • ")}
                    </span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${teacher.email}`} className="text-sm hover:underline">
                      {teacher.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center mb-6">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-blue-900 mb-3">Rejoignez notre équipe</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Vous êtes passionné par l&apos;enseignement et la culture ukrainienne ? 
              Nous recherchons régulièrement de nouveaux professeurs pour enrichir notre équipe.
            </p>
          </div>
          <div className="text-center">
            <a 
              href="mailto:recrutement@ecole-ukrainienne-lyon.fr"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}