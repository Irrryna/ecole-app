import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { VyshyvankaBorder } from "./VyshyvankaBorder";
import Image from "next/image";

const logoImage = "/logoseul.png"; // Using the same logo as Navigation

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#072AC8' }} className="text-white py-12 px-6 relative">
      {/* Bordure décorative en haut */}
      <div className="absolute top-0 left-0 w-full">
        <VyshyvankaBorder orientation="horizontal" className="opacity-60" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full p-1.5 flex items-center justify-center">
                <Image 
                  src={logoImage} 
                  alt="École Ukrainienne Saint-Nicolas" 
                  className="w-full h-full object-contain"
                  width={48} // Added width
                  height={48} // Added height
                />
              </div>
              <div>
                <h4 className="text-white">École Ukrainienne</h4>
                <p className="text-blue-200 text-sm">Saint-Nicolas à Lyon</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Un lieu d&apos;apprentissage et de préservation de la culture ukrainienne 
              au cœur de Lyon, pour les enfants et leurs familles.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-blue-600"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-blue-600"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#home" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Actualités</a></li>
              <li><a href="#teachers" className="hover:text-white transition-colors">Professeurs</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-white mb-4">Informations</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Inscriptions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programmes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Événements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Galerie photos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Centre culturel Saint-Nicolas</p>
                  <p>15 rue de la République</p>
                  <p>69001 Lyon, France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>+33 4 78 28 32 45</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <p>contact@ecole-ukrainienne-lyon.fr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-blue-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-center md:text-left">
              <p>&copy; {currentYear} École Ukrainienne de Saint-Nicolas à Lyon. Tous droits réservés.</p>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-100">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>pour la communauté ukrainienne</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
