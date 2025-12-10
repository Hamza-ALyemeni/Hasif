export function SpaceDecorations() {
  return (
    <>
      {/* Floating Particles */}
      <div className="absolute top-20 right-[10%] w-1 h-1 rounded-full bg-[#5DDCD1] opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-[25%] w-1.5 h-1.5 rounded-full bg-[#733A93] opacity-40 animate-pulse delay-300"></div>
      <div className="absolute top-60 right-[40%] w-1 h-1 rounded-full bg-white opacity-30 animate-pulse delay-700"></div>
      <div className="absolute bottom-40 right-[15%] w-1 h-1 rounded-full bg-[#5DDCD1] opacity-50 animate-pulse delay-500"></div>
      <div className="absolute bottom-60 right-[60%] w-1.5 h-1.5 rounded-full bg-[#733A93] opacity-40 animate-pulse delay-1000"></div>
      
      {/* Scattered Lines */}
      <div className="absolute top-32 left-[20%] w-12 h-[1px] bg-gradient-to-r from-transparent via-[#5DDCD1]/20 to-transparent rotate-45"></div>
      <div className="absolute bottom-48 left-[70%] w-16 h-[1px] bg-gradient-to-r from-transparent via-[#733A93]/20 to-transparent -rotate-45"></div>
      
      {/* Constellation Dots */}
      <div className="absolute top-[30%] left-[15%]">
        <div className="relative">
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          <div className="absolute top-4 left-6 w-1 h-1 rounded-full bg-white/20"></div>
          <div className="absolute top-8 left-2 w-1 h-1 rounded-full bg-white/20"></div>
          <svg className="absolute top-0 left-0 w-16 h-16 opacity-10" stroke="white" strokeWidth="0.5" fill="none">
            <line x1="2" y1="2" x2="26" y2="18" />
            <line x1="26" y1="18" x2="10" y2="34" />
          </svg>
        </div>
      </div>
      
      {/* Orbit Paths */}
      <div className="absolute top-[20%] right-[10%] w-32 h-32 border border-white/5 rounded-full"></div>
      <div className="absolute bottom-[30%] left-[5%] w-40 h-40 border border-[#5DDCD1]/5 rounded-full"></div>
    </>
  );
}
