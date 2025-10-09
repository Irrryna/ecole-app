'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';

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

  useEffect(() => {
    // In a real app, you would fetch the planning data here
    // and check authentication status.
    // For now, we&apos;ll simulate it.
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
    alert(`S&apos;inscrire pour la date: ${date}`);
    // In a real app, this would trigger a server action
  };

  return (
    <div className="container mx-auto p-4">
      <Button onClick={onBack} className="mb-4">Retour à l&apos;accueil</Button>
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
                      S&apos;inscrire
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
