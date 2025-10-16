import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Using next/image for optimization
import { Calendar, User, MessageCircle, ArrowRight } from "lucide-react";
import { VyshyvankaPattern } from "./VyshyvankaPattern";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "La fête de la courge : traditions et recettes de Toussaint en Ukraine",
      excerpt: "Découvrez comment la fête de la courge est célébrée en Ukraine à travers des recettes savoureuses.",
      author: "Oksana Petrenko",
      date: "2025-12-15",
      category: "Traditions",
      image: "/blog1.png",
      comments: 15,
      featured: true
    },
    {
      id: 2,
      title: "L&apos;alphabet ukrainien : conseils pour débutants",
      excerpt: "Guide pratique pour apprendre l&apos;alphabet cyrillique ukrainien et ses spécificités.",
      author: "Andriy Bondarenko",
      date: "2025-12-10",
      category: "Langue",
      image: "/blog2.jpg",
      comments: 8
    },
    {
      id: 3,
      title: "Broderie ukrainienne : l&apos;art du vyshyvanka",
      excerpt: "Plongez dans l&apos;univers fascinant de la broderie traditionnelle ukrainienne et ses symboles.",
      author: "Iryna Marchenko",
      date: "2025-12-05",
      category: "Artisanat",
      image: "/blog3.jpg",
      comments: 12
    },
    {
      id: 4,
      title: "Kiev : voyage virtuel dans la capitale",
      excerpt: "Une exploration de Kiev à travers l&apos;histoire, l&apos;architecture et la culture contemporaine.",
      author: "Volodymyr Kovalenko",
      date: "2025-11-28",
      category: "Histoire",
      image: "/blog4.jpg",
      comments: 6
    },
    {
      id: 5,
      title: "Recettes ukrainiennes pour enfants",
      excerpt: "Des recettes simples et authentiques à préparer en famille pour découvrir la cuisine ukrainienne.",
      author: "Parents bénévoles",
      date: "2025-11-20",
      category: "Cuisine",
      image: "/blog5.jpg", // Updated path
      comments: 22
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
      "Traditions": "bg-red-100 text-red-800",
      "Langue": "bg-blue-100 text-blue-800",
      "Artisanat": "bg-purple-100 text-purple-800",
      "Histoire": "bg-green-100 text-green-800",
      "Cuisine": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <VyshyvankaPattern position="top-left" size="md" className="opacity-8" />
      <VyshyvankaPattern position="bottom-right" size="lg" className="opacity-12" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-6" style={{ color: '#072AC8' }}>Blog & Ressources</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explorez nos articles sur la culture, l&apos;histoire, la langue et les traditions ukrainiennes. 
            Des ressources précieuses pour enrichir vos connaissances.
          </p>
        </div>

        {/* Article principal */}
        {featuredPost && (
          <Card className="mb-12 overflow-hidden shadow-lg border-2 border-blue-200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredPost.image!}
                  alt={featuredPost.title}
                  width={600} // Added width
                  height={400} // Added height
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {featuredPost.category}
                  </Badge>
                  <span className="text-sm text-gray-500">Article à la une</span>
                </div>
                
                <h3 className="text-blue-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {featuredPost.comments} commentaires
                    </span>
                  </div>
                </div>
                
                <Button style={{ backgroundColor: '#1E96FC' }} className="text-white hover:bg-blue-600">
                  Lire l&apos;article complet <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Autres articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(post.category)} variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-blue-900 leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    {post.comments}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </span>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Lire plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section catégories */}
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg p-8">
          <h3 className="text-center text-blue-900 mb-6">Explorez par catégorie</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Traditions", "Langue", "Artisanat", "Histoire", "Cuisine", "Événements", "Témoignages"].map((category) => (
              <Button key={category} variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-100">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
