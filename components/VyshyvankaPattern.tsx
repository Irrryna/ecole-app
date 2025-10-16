interface VyshyvankaPatternProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function VyshyvankaPattern({ position, size = 'md', className = '' }: VyshyvankaPatternProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'absolute top-0 left-0';
      case 'top-right':
        return 'absolute top-0 right-0';
      case 'bottom-left':
        return 'absolute bottom-0 left-0';
      case 'bottom-right':
        return 'absolute bottom-0 right-0';
      case 'center':
        return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default:
        return '';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-16 h-16';
      case 'md':
        return 'w-24 h-24';
      case 'lg':
        return 'w-32 h-32';
      default:
        return 'w-24 h-24';
    }
  };

  return (
    <div className={`${getPositionClasses()} ${getSizeClasses()} ${className} opacity-20 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Motif floral ukrainien */}
        <g fill="#1E96FC">
          {/* Fleur centrale */}
          <circle cx="50" cy="50" r="8" />
          <circle cx="50" cy="50" r="4" fill="#FCF300" />
          
          {/* Pétales */}
          <path d="M50,30 Q40,20 30,30 Q40,40 50,30" />
          <path d="M70,50 Q80,40 80,50 Q80,60 70,50" />
          <path d="M50,70 Q60,80 50,80 Q40,80 50,70" />
          <path d="M30,50 Q20,60 20,50 Q20,40 30,50" />
          
          {/* Feuilles */}
          <path d="M50,30 Q35,25 30,15 Q45,20 50,30" fill="#A2D6F9" />
          <path d="M70,50 Q75,35 85,30 Q80,45 70,50" fill="#A2D6F9" />
          <path d="M50,70 Q65,75 70,85 Q55,80 50,70" fill="#A2D6F9" />
          <path d="M30,50 Q25,65 15,70 Q20,55 30,50" fill="#A2D6F9" />
        </g>
        
        {/* Motifs géométriques */}
        <g fill="#FFC600" opacity="0.7">
          <circle cx="25" cy="25" r="2" />
          <circle cx="75" cy="25" r="2" />
          <circle cx="25" cy="75" r="2" />
          <circle cx="75" cy="75" r="2" />
          
          {/* Lignes décoratives */}
          <path d="M20,50 L80,50" stroke="#072AC8" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <path d="M50,20 L50,80" stroke="#072AC8" strokeWidth="1" fill="none" strokeDasharray="2,2" />
        </g>
      </svg>
    </div>
  );
}