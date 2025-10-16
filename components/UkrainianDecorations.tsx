interface UkrainianDecorationsProps {
  className?: string;
}

export function UkrainianDecorations({ className = '' }: UkrainianDecorationsProps) {
  return (
    <div className={`flex items-center justify-center space-x-3 ${className}`}>
      {/* Épi de blé stylisé */}
      <svg width="24" height="32" viewBox="0 0 24 32" className="text-yellow-500">
        <path
          d="M12 2 L12 30 M8 6 Q12 4 16 6 M8 10 Q12 8 16 10 M8 14 Q12 12 16 14 M8 18 Q12 16 16 18 M8 22 Q12 20 16 22"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      
      {/* Motif floral central */}
      <svg width="40" height="20" viewBox="0 0 40 20" className="text-blue-500">
        <circle cx="20" cy="10" r="3" fill="#1E96FC" />
        <circle cx="20" cy="10" r="1.5" fill="#FCF300" />
        
        {/* Feuilles */}
        <path d="M20,7 Q15,5 10,7 Q15,9 20,7" fill="#A2D6F9" />
        <path d="M20,13 Q25,15 30,13 Q25,11 20,13" fill="#A2D6F9" />
        
        {/* Points décoratifs */}
        <circle cx="5" cy="10" r="1" fill="#FFC600" />
        <circle cx="35" cy="10" r="1" fill="#FFC600" />
      </svg>
      
      {/* Épi de blé stylisé (droite) */}
      <svg width="24" height="32" viewBox="0 0 24 32" className="text-yellow-500">
        <path
          d="M12 2 L12 30 M8 6 Q12 4 16 6 M8 10 Q12 8 16 10 M8 14 Q12 12 16 14 M8 18 Q12 16 16 18 M8 22 Q12 20 16 22"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}