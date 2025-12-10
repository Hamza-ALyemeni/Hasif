import { Target, Eye, Heart, Award, Users, Zap, Shield } from 'lucide-react';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function AboutPageEN() {
  const story = [
    {
      title: 'The Beginning',
      description: 'Haseif was founded from a clear vision: bridging the gap between artistic creativity and actual business results. We saw a market full of noise, big promises, and uncalculated solutions.'
    },
    {
      title: 'The Philosophy',
      description: 'We believed that marketing is not noise, but a calculated decision with clear impact. This philosophy became the soul of Haseif and our approach in every project.'
    },
    {
      title: 'The Approach',
      description: 'We work in a calm, wise, and technical manner. We love details and speak with fewer words but higher value. Every decision is based on data and precise analysis.'
    },
    {
      title: 'Today',
      description: 'Today, Haseif is a leading Saudi agency serving dozens of brands with effective marketing solutions that achieve real results and build strong digital presence.'
    }
  ];

  const mission = {
    title: 'Our Mission',
    description: 'To deliver calculated and smart marketing solutions that create real results without complexity. We focus on clarity, quality, and actual impact on our clients\' businesses.',
    icon: Target
  };

  const vision = {
    title: 'Our Vision',
    description: 'To build effective and advanced digital presence aligned with the future of the Saudi market and Vision 2030. We aspire to be the first agency for brands seeking quality and clarity.',
    icon: Eye
  };

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We speak with complete clarity with our clients and provide accurate reports for everything we do'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We care about every small detail to deliver work worthy of your brand'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'We keep our promises and adhere to agreed deadlines and standards'
    },
    {
      icon: Zap,
      title: 'Creativity',
      description: 'We think outside the box to deliver innovative solutions that set you apart'
    }
  ];

  const team = [
    {
      title: 'Digital Marketing Team',
      description: 'Experts in digital marketing strategies and advertising campaign management'
    },
    {
      title: 'Design Team',
      description: 'Professional designers creating unique and impactful visual identities'
    },
    {
      title: 'Content Team',
      description: 'Writers and content producers transforming ideas into inspiring and impactful stories'
    },
    {
      title: 'Production Team',
      description: 'Photographers and motion graphics specialists producing professional visual content'
    }
  ];

  return (
    <div className="min-h-screen pt-20" dir="ltr">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-left" color="turquoise" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/30 to-[#733A93]/30 blur-3xl"></div>
            <h1 className="relative text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              About Us
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A modern Saudi agency blending creativity, wisdom, and clarity
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-white/60">How Haseif started and where we are today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {story.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/30 transition-all duration-300"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-[#5DDCD1] to-[#733A93] mb-6 rounded-full"></div>
                <h3 className="text-2xl mb-4 text-white font-semibold">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="torus" size="lg" position="top-right" color="mixed" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative p-12 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-3xl border border-white/10 hover:border-[#5DDCD1]/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5DDCD1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center">
                  <mission.icon className="w-8 h-8 text-[#5DDCD1]" />
                </div>
                <h3 className="text-3xl mb-6 text-white font-bold">{mission.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{mission.description}</p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative p-12 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-3xl border border-white/10 hover:border-[#733A93]/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#733A93]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#733A93]/20 to-[#5DDCD1]/20 flex items-center justify-center">
                  <vision.icon className="w-8 h-8 text-[#733A93]" />
                </div>
                <h3 className="text-3xl mb-6 text-white font-bold">{vision.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{vision.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="bottom-left" color="turquoise" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-lg text-white/60">The principles that guide us in everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-[#1A2B3A]/40 to-[#0F1D2A]/40 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#5DDCD1]" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="center" color="mixed" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-lg text-white/60">Elite experts in their fields</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-[#5DDCD1]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white font-semibold">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
