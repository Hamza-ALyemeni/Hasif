export function CosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Astronaut Floating Element */}
      <div className="astronaut-float absolute top-[15%] right-[8%] w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="astronautGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#5DDCD1', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#733A93', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          {/* Helmet */}
          <circle cx="50" cy="35" r="18" fill="url(#astronautGrad)" opacity="0.6" />
          <circle cx="50" cy="35" r="12" fill="#0F1D2A" opacity="0.8" />
          {/* Body */}
          <ellipse cx="50" cy="60" rx="14" ry="18" fill="url(#astronautGrad)" opacity="0.5" />
          {/* Arms */}
          <ellipse cx="35" cy="55" rx="5" ry="12" fill="url(#astronautGrad)" opacity="0.4" transform="rotate(-20 35 55)" />
          <ellipse cx="65" cy="55" rx="5" ry="12" fill="url(#astronautGrad)" opacity="0.4" transform="rotate(20 65 55)" />
          {/* Legs */}
          <ellipse cx="44" cy="82" rx="4" ry="10" fill="url(#astronautGrad)" opacity="0.4" />
          <ellipse cx="56" cy="82" rx="4" ry="10" fill="url(#astronautGrad)" opacity="0.4" />
        </svg>
      </div>

      {/* Moon Surface Elements */}
      <div className="absolute top-[25%] left-[12%] w-40 h-40 rounded-full opacity-5 bg-gradient-radial from-white/20 to-transparent" 
           style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}>
        <div className="absolute w-6 h-6 bg-white/10 rounded-full top-8 left-12 blur-sm"></div>
        <div className="absolute w-4 h-4 bg-white/10 rounded-full top-20 left-24 blur-sm"></div>
        <div className="absolute w-5 h-5 bg-white/10 rounded-full top-28 left-16 blur-sm"></div>
      </div>

      {/* Comet Trails */}
      <div className="absolute top-[10%] left-[40%] comet-trail">
        <div className="w-1 h-1 rounded-full bg-[#5DDCD1] shadow-lg shadow-[#5DDCD1]/50"></div>
        <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-[#5DDCD1]/60 via-[#5DDCD1]/20 to-transparent -rotate-45 origin-left blur-sm"></div>
      </div>

      <div className="absolute top-[60%] right-[30%] comet-trail delay-2000">
        <div className="w-1.5 h-1.5 rounded-full bg-[#733A93] shadow-lg shadow-[#733A93]/50"></div>
        <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-[#733A93]/60 via-[#733A93]/20 to-transparent rotate-[135deg] origin-left blur-sm"></div>
      </div>

      {/* Space Dust Particles */}
      <div className="space-dust absolute top-[20%] left-[25%] w-2 h-2 rounded-full bg-white/30 blur-sm animate-float"></div>
      <div className="space-dust absolute top-[45%] left-[70%] w-1.5 h-1.5 rounded-full bg-[#5DDCD1]/40 blur-sm animate-float delay-700"></div>
      <div className="space-dust absolute top-[70%] left-[15%] w-1 h-1 rounded-full bg-[#733A93]/50 blur-sm animate-float delay-1200"></div>
      <div className="space-dust absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-white/20 blur-sm animate-float delay-500"></div>
      <div className="space-dust absolute bottom-[30%] right-[45%] w-1.5 h-1.5 rounded-full bg-[#5DDCD1]/30 blur-sm animate-float delay-1500"></div>

      {/* Constellation Patterns */}
      <svg className="absolute top-[15%] right-[25%] w-32 h-32 opacity-20" viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="1.5" fill="white" />
        <circle cx="50" cy="30" r="1.5" fill="white" />
        <circle cx="70" cy="50" r="1.5" fill="white" />
        <circle cx="40" cy="70" r="1.5" fill="white" />
        <line x1="20" y1="20" x2="50" y2="30" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="50" y1="30" x2="70" y2="50" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="70" y1="50" x2="40" y2="70" stroke="white" strokeWidth="0.5" opacity="0.4" />
      </svg>

      <svg className="absolute bottom-[20%] left-[35%] w-28 h-28 opacity-15" viewBox="0 0 100 100">
        <circle cx="30" cy="25" r="1.5" fill="#5DDCD1" />
        <circle cx="60" cy="40" r="1.5" fill="#5DDCD1" />
        <circle cx="45" cy="65" r="1.5" fill="#5DDCD1" />
        <circle cx="75" cy="70" r="1.5" fill="#5DDCD1" />
        <line x1="30" y1="25" x2="60" y2="40" stroke="#5DDCD1" strokeWidth="0.5" opacity="0.5" />
        <line x1="60" y1="40" x2="45" y2="65" stroke="#5DDCD1" strokeWidth="0.5" opacity="0.5" />
        <line x1="45" y1="65" x2="75" y2="70" stroke="#5DDCD1" strokeWidth="0.5" opacity="0.5" />
      </svg>

      {/* Orbit Paths */}
      <svg className="absolute top-[10%] left-[10%] w-64 h-64 opacity-5" viewBox="0 0 200 200">
        <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="#5DDCD1" strokeWidth="1" transform="rotate(30 100 100)" />
      </svg>

      <svg className="absolute bottom-[15%] right-[15%] w-56 h-56 opacity-5" viewBox="0 0 200 200">
        <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="#733A93" strokeWidth="1" transform="rotate(-45 100 100)" />
      </svg>

      {/* Nebula Gradients */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#5DDCD1]/10 via-[#733A93]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-[20%] left-[15%] w-[450px] h-[450px] bg-gradient-radial from-[#733A93]/10 via-[#5DDCD1]/5 to-transparent rounded-full blur-3xl"></div>

      {/* Rotating Glowing Particles */}
      <div className="absolute top-[40%] left-[50%] w-3 h-3 rounded-full bg-[#5DDCD1]/60 blur-md glow-pulse"></div>
      <div className="absolute top-[55%] left-[30%] w-2.5 h-2.5 rounded-full bg-[#733A93]/60 blur-md glow-pulse delay-1000"></div>
      <div className="absolute bottom-[35%] right-[40%] w-3 h-3 rounded-full bg-white/40 blur-md glow-pulse delay-1500"></div>
    </div>
  );
}
