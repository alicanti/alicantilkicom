export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-10 h-10 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6"/>
            <stop offset="100%" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
        {/* Hexagon shape */}
        <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" fill="url(#logo-gradient)" opacity="0.2"/>
        <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" stroke="url(#logo-gradient)" strokeWidth="2" fill="none"/>
        
        {/* Network nodes */}
        <circle cx="20" cy="20" r="3" fill="url(#logo-gradient)"/>
        <circle cx="12" cy="12" r="2" fill="url(#logo-gradient)" opacity="0.8"/>
        <circle cx="28" cy="12" r="2" fill="url(#logo-gradient)" opacity="0.8"/>
        <circle cx="12" cy="28" r="2" fill="url(#logo-gradient)" opacity="0.8"/>
        <circle cx="28" cy="28" r="2" fill="url(#logo-gradient)" opacity="0.8"/>
        
        {/* Connecting lines */}
        <line x1="20" y1="20" x2="12" y2="12" stroke="url(#logo-gradient)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="20" y1="20" x2="28" y2="12" stroke="url(#logo-gradient)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="20" y1="20" x2="12" y2="28" stroke="url(#logo-gradient)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="20" y1="20" x2="28" y2="28" stroke="url(#logo-gradient)" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    </div>
  );
}

