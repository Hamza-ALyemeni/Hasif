import { Megaphone, Palette, BarChart3, Share2, Video, Smartphone, Search, MousePointerClick, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function ServicesPageEN() {
  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Comprehensive management of your social media accounts with creative content that attracts your target audience and increases engagement'
    },
    {
      icon: Palette,
      title: 'Visual Identity Design',
      description: 'Design integrated visual identities that reflect your brand values and distinguish you from competitors in the market'
    },
    {
      icon: BarChart3,
      title: 'Data & Performance Analysis',
      description: 'Track and analyze your marketing campaigns with detailed reports and actionable insights to improve results'
    },
    {
      icon: Share2,
      title: 'Paid Advertising Campaigns',
      description: 'Professional management of advertising campaigns on Google and social platforms to achieve the highest ROI'
    },
    {
      icon: Video,
      title: 'Video Content Production',
      description: 'Production of professional videos and motion graphics that tell your brand story in an impactful and distinctive way'
    },
    {
      icon: Smartphone,
      title: 'Digital Marketing Strategy',
      description: 'Develop integrated marketing plans that achieve your goals and sustainably increase your digital business growth'
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Optimize your website for search engines to increase visibility in top results and attract more visitors'
    },
    {
      icon: MousePointerClick,
      title: 'Web Design & Development',
      description: 'Design and develop modern, fast websites that deliver an exceptional user experience'
    },
    {
      icon: TrendingUp,
      title: 'Online Reputation Management',
      description: 'Monitor and manage your brand reputation online and interact with customers professionally'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Exploration & Analysis',
      description: 'We start with a deep understanding of your brand, goals, and target audience'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'We develop a comprehensive marketing strategy based on data and analysis'
    },
    {
      number: '03',
      title: 'Creative Execution',
      description: 'We transform strategy into reality through creative content and effective campaigns'
    },
    {
      number: '04',
      title: 'Measurement & Optimization',
      description: 'We continuously measure results and optimize campaigns to achieve the best possible performance'
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
              Our Services
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions to achieve your goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/5 hover:border-[#5DDCD1]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5DDCD1]/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDCD1]/0 to-[#733A93]/0 group-hover:from-[#5DDCD1]/5 group-hover:to-[#733A93]/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#5DDCD1]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-white font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Workflow Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-left" color="mixed" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#733A93]/20 to-[#5DDCD1]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Our Workflow
              </h2>
            </div>
            <p className="text-lg text-white/60">
              A scientific methodology to ensure the best results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-[#5DDCD1]/30 to-transparent -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300">
                  {/* Number */}
                  <div className="text-6xl bg-gradient-to-r from-[#5DDCD1] to-[#733A93] bg-clip-text text-transparent mb-4 opacity-50 font-bold">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl mb-3 text-white font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="center" color="mixed" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 mb-8 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 border border-[#5DDCD1]/30 rounded-full">
              <span className="text-[#5DDCD1]">Get Started</span>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
                Ready to Get Started?
              </h2>
            </div>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let us help you achieve your marketing goals and build a strong digital presence for your brand
            </p>

            <Link
              to="/en/contact"
              className="inline-block px-8 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105 text-lg font-semibold"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

