interface VyshyvankaBorderProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function VyshyvankaBorder({ orientation = 'horizontal', className = '' }: VyshyvankaBorderProps) {
  return (
    <div className={`${orientation === 'horizontal' ? 'w-full h-2' : 'w-2 h-full'} ${className}`}>
      <svg 
        viewBox={orientation === 'horizontal' ? '0 0 200 20' : '0 0 20 200'} 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <pattern 
          id={`vyshyvanka-${orientation}`} 
          x="0" 
          y="0" 
          width={orientation === 'horizontal' ? '40' : '20'} 
          height={orientation === 'horizontal' ? '20' : '40'} 
          patternUnits="userSpaceOnUse"
        >
          {/* Motif de base */}
          <rect width="20" height="20" fill="#1E96FC" />
          <circle cx="10" cy="10" r="4" fill="#FCF300" />
          <circle cx="10" cy="10" r="2" fill="#FFC600" />
          
          {/* Motifs géométriques */}
          <path d="M2,2 L18,2 L18,18 L2,18 Z" fill="none" stroke="#072AC8" strokeWidth="0.5" />
          <path d="M6,6 L14,6 L14,14 L6,14 Z" fill="none" stroke="#A2D6F9" strokeWidth="0.3" />
        </pattern>
        
        <rect 
          width="100%" 
          height="100%" 
          fill={`url(#vyshyvanka-${orientation})`} 
          opacity="0.7" 
        />
      </svg>
    </div>
  );
}