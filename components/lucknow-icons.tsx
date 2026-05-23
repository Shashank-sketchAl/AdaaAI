"use client";

// Lucknow Monument SVG Icons - Rumi Darwaza, Bara Imambara, etc.

export function RumiDarwazaIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="currentColor">
      {/* Main Gateway Structure */}
      <path d="M10 120 L10 40 Q10 20 30 15 L50 5 L70 15 Q90 20 90 40 L90 120" fill="none" stroke="currentColor" strokeWidth="2"/>
      {/* Central Arch */}
      <path d="M25 120 L25 55 Q25 35 50 30 Q75 35 75 55 L75 120" fill="none" stroke="currentColor" strokeWidth="2"/>
      {/* Decorative Top Dome */}
      <ellipse cx="50" cy="8" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      {/* Finial */}
      <line x1="50" y1="3" x2="50" y2="0" stroke="currentColor" strokeWidth="1.5"/>
      {/* Side Minarets */}
      <rect x="5" y="30" width="8" height="90" fill="none" stroke="currentColor" strokeWidth="1"/>
      <rect x="87" y="30" width="8" height="90" fill="none" stroke="currentColor" strokeWidth="1"/>
      {/* Minaret Tops */}
      <path d="M5 30 Q9 22 13 30" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M87 30 Q91 22 95 30" fill="none" stroke="currentColor" strokeWidth="1"/>
      {/* Decorative Elements */}
      <circle cx="50" cy="45" r="3" fill="currentColor" opacity="0.5"/>
      <path d="M35 70 Q50 60 65 70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

export function BaraImambaraIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" className={className} fill="currentColor">
      {/* Main Building */}
      <rect x="20" y="40" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="2"/>
      {/* Central Dome */}
      <path d="M50 40 Q70 10 90 40" fill="none" stroke="currentColor" strokeWidth="2"/>
      {/* Dome Finial */}
      <line x1="70" y1="15" x2="70" y2="8" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="70" cy="6" r="2" fill="currentColor"/>
      {/* Arched Windows */}
      <path d="M30 100 L30 60 Q30 50 40 50 Q50 50 50 60 L50 100" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M55 100 L55 60 Q55 50 70 50 Q85 50 85 60 L85 100" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M90 100 L90 60 Q90 50 100 50 Q110 50 110 60 L110 100" fill="none" stroke="currentColor" strokeWidth="1"/>
      {/* Side Towers */}
      <rect x="10" y="35" width="12" height="65" fill="none" stroke="currentColor" strokeWidth="1"/>
      <rect x="118" y="35" width="12" height="65" fill="none" stroke="currentColor" strokeWidth="1"/>
      {/* Tower Domes */}
      <path d="M10 35 Q16 25 22 35" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M118 35 Q124 25 130 35" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

export function ChotaImambaraIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Main Structure */}
      <rect x="15" y="45" width="70" height="55" fill="none" stroke="currentColor" strokeWidth="2"/>
      {/* Central Dome */}
      <path d="M35 45 Q50 20 65 45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="50" y1="22" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="50" cy="13" r="2" fill="currentColor"/>
      {/* Arched Entrance */}
      <path d="M35 100 L35 65 Q35 55 50 55 Q65 55 65 65 L65 100" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      {/* Side Minarets */}
      <rect x="5" y="40" width="10" height="60" fill="none" stroke="currentColor" strokeWidth="1"/>
      <rect x="85" y="40" width="10" height="60" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M5 40 Q10 30 15 40" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M85 40 Q90 30 95 40" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

export function ChikankariPatternIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
      {/* Floral Chikankari Pattern */}
      <circle cx="25" cy="25" r="8"/>
      <path d="M25 10 Q30 17 25 25 Q20 17 25 10"/>
      <path d="M25 40 Q20 33 25 25 Q30 33 25 40"/>
      <path d="M10 25 Q17 20 25 25 Q17 30 10 25"/>
      <path d="M40 25 Q33 30 25 25 Q33 20 40 25"/>
      {/* Corner Leaves */}
      <path d="M12 12 Q18 15 15 18"/>
      <path d="M38 12 Q32 15 35 18"/>
      <path d="M12 38 Q18 35 15 32"/>
      <path d="M38 38 Q32 35 35 32"/>
      {/* Dots */}
      <circle cx="25" cy="25" r="2" fill="currentColor"/>
    </svg>
  );
}

export function ZardoziPatternIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="currentColor">
      {/* Metallic Thread Pattern */}
      <path d="M25 5 L30 15 L40 15 L32 22 L35 32 L25 26 L15 32 L18 22 L10 15 L20 15 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
      <circle cx="25" cy="18" r="3"/>
      <path d="M15 40 Q25 35 35 40" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M18 45 Q25 42 32 45" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

export function MukaishPatternIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="currentColor">
      {/* Mukaish - Small metallic pieces */}
      <circle cx="10" cy="10" r="2"/>
      <circle cx="25" cy="10" r="2"/>
      <circle cx="40" cy="10" r="2"/>
      <circle cx="17" cy="22" r="2"/>
      <circle cx="33" cy="22" r="2"/>
      <circle cx="10" cy="34" r="2"/>
      <circle cx="25" cy="34" r="2"/>
      <circle cx="40" cy="34" r="2"/>
      <circle cx="17" cy="46" r="2"/>
      <circle cx="33" cy="46" r="2"/>
    </svg>
  );
}

export function LoomIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Handloom Frame */}
      <rect x="5" y="10" width="40" height="35" rx="2"/>
      {/* Warp Threads */}
      <line x1="12" y1="10" x2="12" y2="45"/>
      <line x1="19" y1="10" x2="19" y2="45"/>
      <line x1="26" y1="10" x2="26" y2="45"/>
      <line x1="33" y1="10" x2="33" y2="45"/>
      <line x1="40" y1="10" x2="40" y2="45"/>
      {/* Weft */}
      <path d="M5 20 Q12 18 19 20 Q26 22 33 20 Q40 18 45 20" strokeWidth="2"/>
      <path d="M5 30 Q12 32 19 30 Q26 28 33 30 Q40 32 45 30" strokeWidth="2"/>
      {/* Shuttle */}
      <ellipse cx="25" cy="40" rx="8" ry="3" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

export function NeedleThreadIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Needle */}
      <path d="M10 40 L35 15" strokeWidth="2"/>
      <circle cx="37" cy="13" r="3"/>
      <circle cx="37" cy="13" r="1" fill="currentColor"/>
      {/* Thread */}
      <path d="M10 40 Q15 35 12 30 Q9 25 15 20 Q21 15 18 10 Q15 5 20 3"/>
    </svg>
  );
}

// Decorative Border Pattern
export function DecorativeBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
      <ChikankariPatternIcon className="w-6 h-6 text-primary/40" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
    </div>
  );
}
