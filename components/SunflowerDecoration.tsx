interface SunflowerDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function SunflowerDecoration({ position }: SunflowerDecorationProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none`}>
      <svg 
        width="200" 
        height="350" 
        viewBox="0 0 200 350" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        {/* Grand tournesol */}
        <g transform={position.includes('right') ? 'translate(100, 100)' : 'translate(50, 50)'}>
          {/* Pétales */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x = Math.cos(angle) * 35;
            const y = Math.sin(angle) * 35;
            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="18"
                ry="8"
                fill="#FFC600"
                transform={`rotate(${i * 30}, ${x}, ${y})`}
              />
            );
          })}
          {/* Centre */}
          <circle cx="0" cy="0" r="22" fill="#4A2511" />
          <circle cx="0" cy="0" r="20" fill="#5D3319" opacity="0.8" />
          {/* Texture du centre */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const x = (Math.random() - 0.5) * 30;
            const y = (Math.random() - 0.5) * 30;
            return <circle key={`dot-${i}`} cx={x} cy={y} r="2" fill="#3A1A0A" opacity="0.5" />;
          })}
        </g>

        {/* Tournesol moyen */}
        <g transform={position.includes('right') ? 'translate(150, 200)' : 'translate(100, 150)'}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            const angle = (i * 36) * Math.PI / 180;
            const x = Math.cos(angle) * 25;
            const y = Math.sin(angle) * 25;
            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="13"
                ry="6"
                fill="#FCF300"
                transform={`rotate(${i * 36}, ${x}, ${y})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="15" fill="#4A2511" />
          <circle cx="0" cy="0" r="13" fill="#5D3319" opacity="0.8" />
        </g>

        {/* Petit tournesol */}
        <g transform={position.includes('right') ? 'translate(50, 250)' : 'translate(150, 220)'}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x = Math.cos(angle) * 18;
            const y = Math.sin(angle) * 18;
            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="10"
                ry="5"
                fill="#FFC600"
                transform={`rotate(${i * 45}, ${x}, ${y})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="10" fill="#4A2511" />
          <circle cx="0" cy="0" r="8" fill="#5D3319" opacity="0.8" />
        </g>

        {/* Feuilles */}
        {position.includes('left') && (
          <>
            <ellipse cx="40" cy="130" rx="25" ry="12" fill="#4A7C59" transform="rotate(-45, 40, 130)" />
            <ellipse cx="60" cy="180" rx="22" ry="10" fill="#5A8C69" transform="rotate(30, 60, 180)" />
            <ellipse cx="100" cy="240" rx="20" ry="10" fill="#4A7C59" transform="rotate(-20, 100, 240)" />
          </>
        )}
        {position.includes('right') && (
          <>
            <ellipse cx="160" cy="130" rx="25" ry="12" fill="#4A7C59" transform="rotate(45, 160, 130)" />
            <ellipse cx="140" cy="180" rx="22" ry="10" fill="#5A8C69" transform="rotate(-30, 140, 180)" />
            <ellipse cx="100" cy="240" rx="20" ry="10" fill="#4A7C59" transform="rotate(20, 100, 240)" />
          </>
        )}
      </svg>
    </div>
  );
}