'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import Image from "next/image";

interface PlanningSlot {
  date: string;
  parent1_id: string | null;
  parent2_id: string | null;
  parent3_id: string | null;
  comments: string | null;
}

// Mock data for now
const mockPlanning: PlanningSlot[] = [
  { date: '2025-10-12', parent1_id: 'user1', parent2_id: null, parent3_id: null, comments: 'Aide pour la cuisine' },
  { date: '2025-10-19', parent1_id: null, parent2_id: null, parent3_id: null, comments: null },
  { date: '2025-10-26', parent1_id: 'user2', parent2_id: 'user3', parent3_id: null, comments: 'Préparation des activités' },
  { date: '2025-11-02', parent1_id: null, parent2_id: null, parent3_id: null, comments: null },
];

export function ParentalPlanningPage({ onBack }: { onBack: () => void }) {
  const [planning] = useState<PlanningSlot[]>(mockPlanning);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
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
  
  useEffect(() => {
    // In a real app, you would fetch the planning data here
    // and check authentication status.
    // For now, we'll simulate it.
    const checkAuth = async () => {
      // const profile = await getProfile(); // This would be a server call
      // if (profile) {
      //   setIsAuthenticated(true);
      //   setCurrentUserId(profile.id);
      // }
      // Simulating authenticated user for testing
      setIsAuthenticated(true);
      setCurrentUserId('user1'); 
    };
    checkAuth();
  }, []);

  const handleSignUp = (date: string) => {
    if (!isAuthenticated || !currentUserId) {
      alert("Vous devez être connecté pour vous inscrire.");
      return;
    }
    // Logic to sign up for a slot
    alert(`S'inscrire pour la date: ${date}`);
    // In a real app, this would trigger a server action
  };

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

          {/* Titre "Planning Parental" - style bouton de nav */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <span 
              className="transition-colors font-medium uppercase text-sm"
              style={{ color: '#1E96FC' }}
            >
              {t("nav.planning")}
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

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Planning Parental</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Parent 1</th>
                <th className="py-2 px-4 border-b">Parent 2</th>
                <th className="py-2 px-4 border-b">Parent 3</th>
                <th className="py-2 px-4 border-b">Commentaires</th>
                {isAuthenticated && <th className="py-2 px-4 border-b">Action</th>}
              </tr>
            </thead>
            <tbody>
              {planning.map((slot) => (
                <tr key={slot.date}>
                  <td className="py-2 px-4 border-b">{slot.date}</td>
                  <td className="py-2 px-4 border-b">{slot.parent1_id || 'Libre'}</td>
                  <td className="py-2 px-4 border-b">{slot.parent2_id || 'Libre'}</td>
                  <td className="py-2 px-4 border-b">{slot.parent3_id || 'Libre'}</td>
                  <td className="py-2 px-4 border-b">{slot.comments || '-'}</td>
                  {isAuthenticated && (
                    <td className="py-2 px-4 border-b">
                      <Button onClick={() => handleSignUp(slot.date)} disabled={!!slot.parent1_id && !!slot.parent2_id && !!slot.parent3_id}>
                        S'inscrire
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}