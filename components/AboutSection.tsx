import { Card, CardContent } from "./ui/card";
import { Heart, Users, BookOpen, Globe } from "lucide-react";
import { VyshyvankaPattern } from "./VyshyvankaPattern";
import { UkrainianDecorations } from "./UkrainianDecorations";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Préserver la culture",
      description: "Nous nous engageons à transmettre la riche culture ukrainienne aux nouvelles générations."
    },
    {
      icon: Users,
      title: "Communauté unie",
      description: "Un espace de rencontre et d&apos;échange pour les familles ukrainiennes de Lyon."
    },
    {
      icon: BookOpen,
      title: "Éducation de qualité",
      description: "Des cours de langue, d&apos;histoire et de traditions dispensés par des professeurs qualifiés."
    },
    {
      icon: Globe,
      title: "Ouverture au monde",
      description: "Favoriser l&apos;intégration tout en préservant l&apos;identité culturelle ukrainienne."
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ backgroundColor: '#A2D6F9' }}>
      <VyshyvankaPattern position="top-left" size="lg" className="opacity-15" />
      <VyshyvankaPattern position="bottom-right" size="lg" className="opacity-15" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <UkrainianDecorations className="mb-6" />
          <h2 className="mb-6 text-blue-900">À propos de notre école</h2>
          <p className="max-w-3xl mx-auto text-blue-800">
            L&apos;École Ukrainienne de Saint-Nicolas à Lyon est un lieu d&apos;apprentissage et de transmission culturelle 
            fondé en 2018. Chaque samedi, nous accueillons des enfants et leurs familles pour maintenir vivantes 
            les traditions, la langue et l&apos;identité ukrainiennes.
          </p>
          <UkrainianDecorations className="mt-6 opacity-60" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4" style={{ color: '#072AC8' }} />
                <h4 className="mb-3 text-blue-900">{feature.title}</h4>
                <p className="text-blue-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-l-4 border-yellow-400 relative">
          <div className="absolute top-0 left-0 w-full h-1 vyshyvanka-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full vyshyvanka-border-vertical"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="mb-4 text-blue-900">Notre mission</h3>
              <p className="text-blue-800 mb-4">
                Créée par des familles ukrainiennes installées à Lyon, notre école a pour mission de :
              </p>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li>Enseigner la langue ukrainienne aux enfants</li>
                <li>Transmettre l&apos;histoire et la culture de l&apos;Ukraine</li>
                <li>Créer des liens communautaires forts</li>
                <li>Organiser des événements culturels et festivités traditionnelles</li>
                <li>Soutenir l&apos;intégration des familles en France</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-yellow-100 p-6 rounded-lg">
              <h4 className="mb-3 text-blue-900">Horaires et infos pratiques</h4>
              <div className="space-y-2 text-blue-800">
                <p><strong>Cours :</strong> Tous les samedis</p>
                <p><strong>Horaires :</strong> 10h00 - 16h00</p>
                <p><strong>Âges :</strong> 4 à 16 ans</p>
                <p><strong>Groupes :</strong> Par niveau et âge</p>
                <p><strong>Langue :</strong> Cours en ukrainien et français</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
