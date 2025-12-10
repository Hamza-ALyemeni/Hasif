import { ArrowRight, Sparkles, Megaphone, Palette, BarChart3, Video, Camera, Target, Lightbulb, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Shape3D } from '../../components/shared/Shape3D';
import { CosmicBackground } from '../../components/shared/CosmicBackground';

export function HomePageEN() {
  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Daily management, responses, content calendar planning, platform identity optimization, and monthly performance analysis'
    },
    {
      icon: Palette,
      title: 'Creative Content Writing',
      description: 'Social content, powerful tweets, video scripts, ad copy, company profiles, and website content'
    },
    {
      icon: Lightbulb,
      title: 'Visual Identity',
      description: 'Logos, brand books, colors and fonts, identity applications, and complete brand building'
    },
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      description: 'Meta & Google ads, budget management, results optimization, precise targeting, and clear performance reports'
    },
    {
      icon: Video,
      title: 'Motion Graphics',
      description: 'Explainer videos, promotional videos, service videos, editing, intros and commercials'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Product photography, portraits, corporate photography, UGC, and aerial photography (drone)'
    }
  ];

  const workflow = [
    {
      number: '01',
      title: 'Understanding Project & Audience',
      description: 'We start with a deep understanding of your project and target audience to lay the right foundation'
    },
    {
      number: '02',
      title: 'Building Clear Strategy',
      description: 'We design a calculated, smart plan that achieves your goals clearly and without complexity'
    },
    {
      number: '03',
      title: 'Producing High-Quality Content',
      description: 'We create professional content that reflects your identity and achieves the desired impact'
    },
    {
      number: '04',
      title: 'Launch, Monitor & Optimize',
      description: 'We launch campaigns and continuously monitor performance to improve results'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Transparency',
      description: 'We speak clearly and provide accurate reports for everything we do'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We care about every small detail to deliver work worthy of your brand'
    },
    {
      icon: CheckCircle2,
      title: 'Commitment',
      description: 'We keep our promises and adhere to agreed deadlines and standards'
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We think outside the box to deliver innovative solutions that set you apart'
    }
  ];

  return (
    <div className="min-h-screen" dir="ltr">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
        {/* Cosmic Background */}
        <CosmicBackground />
        
        {/* 3D Shapes */}
        <Shape3D variant="sphere" size="lg" position="top-left" color="turquoise" />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />
        
        {/* Rotating 3D Glow */}
        <div className="absolute top-[30%] left-[20%] w-64 h-64 opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#5DDCD1] to-[#733A93] blur-3xl rotate-slow"></div>
        </div>
        
        {/* Nebula-style gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1620]/50 to-[#0F1D2A]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-[#5DDCD1]" />
            <span className="text-sm text-white/90">Calculated Solutions × Balanced Creativity</span>
          </div>

          {/* Main Headline with Glow */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 via-[#733A93]/20 to-[#5DDCD1]/20 blur-3xl"></div>
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl leading-tight">
              <span className="block mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Not Just Noise
              </span>
              <span className="block bg-gradient-to-r from-[#5DDCD1] via-[#4DCCC1] to-[#733A93] bg-clip-text text-transparent">
                But Calculated Decisions
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            A modern Saudi agency blending creativity, wisdom, and clarity to deliver effective and balanced marketing solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/en/contact"
              className="group px-8 py-4 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105 flex items-center gap-2 font-semibold"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/en/portfolio"
              className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="relative">
              <div className="absolute inset-0 bg-[#5DDCD1]/5 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2 font-bold">+300</div>
                <div className="text-sm text-white/60">Successful Projects</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#733A93]/5 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2 font-bold">+150</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#5DDCD1]/5 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2 font-bold">7+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#0B1620]">
        <CosmicBackground />
        <Shape3D variant="torus" size="md" position="top-left" color="purple" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="w-24 h-1 bg-gradient-to-r from-[#5DDCD1] to-[#733A93] mx-auto mb-12 rounded-full"></div>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
            <h2 className="relative text-3xl md:text-5xl mb-8 text-white leading-relaxed">
              <span className="text-[#5DDCD1] font-bold">Haseif</span> was founded to bridge the gap between
              <br />
              <span className="text-white/90">artistic creativity and actual business results</span>
            </h2>
          </div>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
            We are a modern Saudi agency that blends creativity, wisdom, and clarity. We deliver calculated and smart solutions focused on real results, not noise. We work in a calm, wise, and technical manner, care about details, and speak with fewer words but higher value.
          </p>
          
          <Link
            to="/en/about"
            className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-[#5DDCD1]/40 transition-all duration-300"
          >
            Learn More About Haseif
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="lg" position="bottom-left" color="turquoise" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Our Services
              </h2>
            </div>
            <p className="text-lg text-white/60">Integrated marketing solutions with highest quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/5 hover:border-[#5DDCD1]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5DDCD1]/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDCD1]/0 to-[#733A93]/0 group-hover:from-[#5DDCD1]/5 group-hover:to-[#733A93]/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#5DDCD1]" />
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/en/services"
              className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-[#5DDCD1]/40 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-right" color="mixed" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#733A93]/20 to-[#5DDCD1]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Our Workflow
              </h2>
            </div>
            <p className="text-lg text-white/60">A calculated and studied process to achieve success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1A2B3A]/30 to-[#0F1D2A]/30 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#5DDCD1]/20 mb-4">{step.number}</div>
                <h3 className="text-xl mb-3 text-white font-semibold">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="bottom-right" color="purple" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Our Values
              </h2>
            </div>
            <p className="text-lg text-white/60">The principles that guide us in everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1A2B3A]/30 to-[#0F1D2A]/30 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-[#5DDCD1]" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="center" color="mixed" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/30 via-[#733A93]/30 to-[#5DDCD1]/30 blur-3xl"></div>
            <h2 className="relative text-4xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              Ready to Create Your Success Story?
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's start your digital success journey together with a calculated and clear approach that delivers real results
          </p>
          
          <Link
            to="/en/contact"
            className="inline-block px-10 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/40 hover:shadow-[#5DDCD1]/60 hover:scale-105 text-lg font-semibold"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
