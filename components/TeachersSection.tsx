import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image"; // Using next/image for optimization
import { Mail, Award, BookOpen } from "lucide-react";
import { VyshyvankaPattern } from "./VyshyvankaPattern";

export function TeachersSection() {
  const teachers = [
    {
      id: 1,
      name: "Oksana Petrenko",
      role: "Directrice pédagogique",
      subjects: ["Langue ukrainienne", "Littérature"],
      image: "/prof1.png",
      bio: "Diplômée de l&apos;Université de Kiev en philologie ukrainienne, Oksana enseigne depuis 15 ans et dirige notre équipe pédagogique avec passion.",
      email: "oksana.petrenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Philologie", "Certificat pédagogie FLE"]
    },
    {
      id: 2,
      name: "Valentyna Kovalenko",
      role: "Professeur d&apos;histoire",
      subjects: ["Histoire de l&apos;Ukraine", "Géographie"],
      image: "/prof2.png",
      bio: "Historienne passionnée, Valentyna transmet l&apos;amour de l&apos;histoire ukrainienne aux enfants à travers des cours interactifs et vivants.",
      email: "valentyna.kovalenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Doctorat en Histoire", "Formation pédagogie active"]
    },
    {
      id: 3,
      name: "Iryna Marchenko",
      role: "Professeure de culture",
      subjects: ["Arts traditionnels", "Musique folklorique"],
      image: "/prof3.png",
      bio: "Artiste et musicienne, Iryna initie les enfants aux traditions culturelles ukrainiennes à travers l&apos;art et la musique.",
      email: "iryna.marchenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Arts appliqués", "Diplôme conservatoire"]
    },
    {
      id: 4,
      name: "Anna Bondarenko",
      role: "Professeur de langue",
      subjects: ["Ukrainien débutant", "Français-Ukrainien"],
      image: "/prof4.png",
      bio: "Linguiste spécialisée dans l&apos;enseignement bilingue, Anna aide les enfants à maîtriser la langue ukrainienne.",
      email: "anna.bondarenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Linguistique", "Certification DELF/DALF"]
    },
    {
      id: 5,
      name: "Olena Lysenko", // Duplicated data
      role: "Professeure d&apos;art",
      subjects: ["Dessin", "Peinture"],
      image: "/prof5.png",
      bio: "Artiste peintre, Olena partage son savoir-faire avec les élèves pour développer leur créativité.",
      email: "olena.lysenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Diplôme Beaux-Arts", "Master en Pédagogie"]
    },
    {
      id: 6,
      name: "Maria Savchenko", // Duplicated data
      role: "Professeur de musique",
      subjects: ["Chant choral", "Instruments traditionnels"],
      image: "/prof6.png",
      bio: "Musicienne et chef de chœur, Maria éveille les talents musicaux des enfants.",
      email: "maria.savchenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Diplôme Conservatoire", "Master en Musicologie"]
    },
    {
      id: 7,
      name: "Natalia Tkachenko", // Duplicated data
      role: "Professeure de danse",
      subjects: ["Danse folklorique", "Chorégraphie"],
      image: "/prof7.png",
      bio: "Danseuse professionnelle, Natalia enseigne les pas et les figures des danses ukrainiennes.",
      email: "natalia.tkachenko@ecole-ukrainienne-lyon.fr",
      qualifications: ["Diplôme Danse Classique", "Certificat Danse Folklorique"]
    },
    {
      id: 8,
      name: "Dmytro Melnyk", // Duplicated data
      role: "Enseignant du catéchisme",
      subjects: ["Catéchisme", "Lectures bibliques"],
      image: "/prof8.png",
      bio: "Théologien de formation, Dmytro guide les enfants dans la découverte des valeurs chrétiennes.",
      email: "dmytro.melnyk@ecole-ukrainienne-lyon.fr",
      qualifications: ["Licence en Théologie", "Formation catéchisme"]
    },
    {
      id: 9,
      name: "Svitlana Koval", // Duplicated data
      role: "Trésorière et comptable",
      subjects: ["Gestion financière", "Comptabilité"],
      image: "/prof9.png",
      bio: "Experte en gestion financière, Svitlana veille à la bonne gestion des ressources de l&apos;école.",
      email: "svitlana.koval@ecole-ukrainienne-lyon.fr",
      qualifications: ["Master en Finance"]
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ backgroundColor: '#FCF300' }}>
      <VyshyvankaPattern position="bottom-left" size="lg" className="opacity-15" />
      <VyshyvankaPattern position="top-right" size="md" className="opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-blue-900">Notre équipe enseignante</h2>
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
                      alt={teacher.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-blue-900 mb-1">{teacher.name}</h4>
                    <p className="text-blue-600 mb-3">{teacher.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {teacher.subjects.map((subject, index) => (
                        <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 mt-4">{teacher.bio}</p>
                
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