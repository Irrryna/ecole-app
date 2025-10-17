import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VyshyvankaPattern } from "@/components/VyshyvankaPattern";

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Célébration de la Saint-Nicolas",
      excerpt: "Rejoignez-nous le 6 décembre pour une journée spéciale dédiée à la tradition de la Saint-Nicolas avec spectacles et ateliers.",
      date: "2025-12-06",
      category: "Événement",
      featured: true
    },
    {
      id: 2,
      title: "Nouveau cours de danse folklorique",
      excerpt: "Ouverture d&apos;un atelier de danses traditionnelles ukrainiennes pour les enfants de 8 à 14 ans.",
      date: "2025-11-15",
      category: "Cours"
    },
    {
      id: 3,
      title: "Exposition sur l'artisanat ukrainien",
      excerpt: "Découvrez l&apos;art traditionnel ukrainien à travers une exposition interactive organisée par nos élèves.",
      date: "2025-11-08",
      category: "Culture"
    },
    {
      id: 4,
      title: "Concours de poésie ukrainienne",
      excerpt: "Les inscriptions sont ouvertes pour le concours annuel de récitation de poèmes ukrainiens.",
      date: "2025-10-20",
      category: "Concours"
    },
    {
      id: 5,
      title: "Atelier cuisine ukrainienne",
      excerpt: "Apprenez à préparer des plats traditionnels avec les parents bénévoles de l&apos;école.",
      date: "2025-10-15",
      category: "Atelier"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Événement": "bg-red-100 text-red-800",
      "Cours": "bg-blue-100 text-blue-800",
      "Culture": "bg-purple-100 text-purple-800",
      "Concours": "bg-green-100 text-green-800",
      "Atelier": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <VyshyvankaPattern position="top-right" size="lg" className="opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-6" style={{ color: '#072AC8' }}>Actualités</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Découvrez les dernières nouvelles de l&apos;École Ukrainienne de Saint-Nicolas, nos événements 
            à venir et les moments forts de notre communauté.
          </p>
        </div>

        {/* Article principal */}
        {news.filter(article => article.featured).map((article) => (
          <Card key={article.id} className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-yellow-50">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <span className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(article.date)}
                </span>
              </div>
              <CardTitle className="text-blue-900">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <Button style={{ backgroundColor: '#1E96FC' }} className="text-white hover:bg-blue-600">
                Lire la suite <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Autres articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.filter(article => !article.featured).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className={getCategoryColor(article.category)} variant="secondary">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-blue-900">{article.title}</CardTitle>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(article.date)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            style={{ borderColor: '#072AC8', color: '#072AC8' }}
            className="hover:bg-blue-50"
          >
            Voir toutes les actualités
          </Button>
        </div>
      </div>
    </section>
  );
}
