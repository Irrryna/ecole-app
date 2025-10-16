import { useState, useEffect } from 'react';

interface ScrollingTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export function ScrollingText({ text, maxLength = 15, className = '' }: ScrollingTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    // Afficher le texte initialement
    setDisplayText(text);
    
    // Si le texte est court, pas besoin de faire défiler
    if (text.length <= maxLength) {
      return;
    }

    // Le texte est long, on active le défilement
    const words = text.split(' ');
    
    if (words.length <= 1) {
      // Si c'est un seul mot long, on l'affiche tel quel
      setDisplayText(text);
      return;
    }

    let currentIndex = 0;

    const scrollInterval = setInterval(() => {
      if (currentIndex < words.length) {
        // Afficher chaque mot individuellement
        setDisplayText(words[currentIndex]);
        currentIndex++;
      } else {
        // Revenir au début et afficher le texte complet brièvement
        setDisplayText(text);
        setTimeout(() => {
          currentIndex = 0;
        }, 1000);
      }
    }, 1200);

    return () => clearInterval(scrollInterval);
  }, [text, maxLength]);

  return (
    <span className={`inline-block whitespace-nowrap ${className}`} style={{ minWidth: '120px', color: 'inherit' }}>
      {displayText}
    </span>
  );
}