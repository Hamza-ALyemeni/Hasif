interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#733A93]/10 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm text-[#5DDCD1]">{badge}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
