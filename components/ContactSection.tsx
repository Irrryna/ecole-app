import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { VyshyvankaPattern } from "./VyshyvankaPattern";

export function ContactSection() {
  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ backgroundColor: '#A2D6F9' }}>
      <VyshyvankaPattern position="top-left" size="lg" className="opacity-15" />
      <VyshyvankaPattern position="bottom-right" size="md" className="opacity-12" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-blue-900">Contactez-nous</h2>
          <p className="max-w-3xl mx-auto text-blue-800">
            Vous avez des questions sur nos cours ou souhaitez inscrire votre enfant ? 
            N&apos;hésitez pas à nous contacter, nous serons ravis de vous renseigner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <Card className="bg-white shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-blue-800">Prénom</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Votre prénom" 
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-blue-800">Nom</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Votre nom" 
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-blue-800">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre.email@exemple.com" 
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-blue-800">Téléphone (optionnel)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="06 12 34 56 78" 
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-blue-800">Sujet</Label>
                <Input 
                  id="subject" 
                  placeholder="Inscription, information, autre..." 
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-blue-800">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez votre demande ou vos questions..."
                  rows={5}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <Button 
                className="w-full text-white" 
                style={{ backgroundColor: '#072AC8' }}
              >
                Envoyer le message
              </Button>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-900">Adresse</p>
                    <p className="text-blue-700">
                      Centre culturel Saint-Nicolas<br />
                      15 rue de la République<br />
                      69001 Lyon, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-900">Téléphone</p>
                    <p className="text-blue-700">+33 4 78 28 32 45</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-900">Email</p>
                    <p className="text-blue-700">contact@ecole-ukrainienne-lyon.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-900">Horaires des cours</p>
                    <p className="text-blue-700">
                      Samedi : 10h00 - 16h00<br />
                      (avec pause déjeuner 12h30-13h30)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Restez connectés avec notre communauté sur les réseaux sociaux pour ne rien manquer de nos actualités.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-100 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <h4 className="text-blue-900 mb-3">Inscriptions</h4>
                <p className="text-blue-700 mb-4">
                  Les inscriptions pour l&apos;année scolaire 2025-2026 sont ouvertes ! 
                  Contactez-nous pour réserver la place de votre enfant.
                </p>
                <Button 
                  style={{ backgroundColor: '#FFC600' }}
                  className="text-blue-900 hover:bg-yellow-400"
                >
                  Demander une inscription
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
