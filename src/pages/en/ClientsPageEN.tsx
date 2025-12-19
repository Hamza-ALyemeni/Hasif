import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function ClientsPageEN() {
  const clients = Array.from({ length: 20 }, (_, i) => i + 1);

  const testimonials = [
    {
      name: 'Ahmed Al-Maliki',
      position: 'CEO',
      company: 'Success Company',
      text: 'Working with Haseif was exceptional. They successfully transformed our vision into a tangible digital reality and we achieved results that exceeded expectations. A professional team committed to quality.'
    },
    {
      name: 'Fatima Al-Otaibi',
      position: 'Marketing Director',
      company: 'Innovation Foundation',
      text: 'Haseif is not just a marketing agency, but true success partners. They helped us build a strong digital presence and increase our sales by 200% within 6 months.'
    },
    {
      name: 'Mohammed Al-Ghamdi',
      position: 'E-commerce Store Owner',
      company: 'Elegance Store',
      text: 'Creativity and professionalism are what distinguish Haseif\'s team. From design to marketing campaigns, everything was at the highest level of quality and excellence.'
    },
    {
      name: 'Nora Al-Saeed',
      position: 'Brand Founder',
      company: 'Nora Brand',
      text: 'Thanks to Haseif, we were able to reach a wider audience and build a loyal customer base. Their marketing strategies are effective and based on accurate data.'
    },
    {
      name: 'Khalid Al-Shammari',
      position: 'General Manager',
      company: 'Leadership Group',
      text: 'Working with Haseif was an enjoyable and fruitful experience. Their deep understanding of the Saudi market helped us achieve our marketing goals with high efficiency.'
    },
    {
      name: 'Sarah Al-Qahtani',
      position: 'Business Owner',
      company: 'Sarah Boutique',
      text: 'I highly recommend working with Haseif. Their team is committed, creative, and provides innovative solutions that suit your budget and goals. Thank you for your continuous support.'
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
              Our Clients
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are proud to be trusted by more than 40 leading brands across various sectors
          </p>
        </div>
      </section>

      {/* Counter Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Trusted by More Than
              </h2>
              <div className="text-8xl md:text-9xl bg-gradient-to-r from-[#5DDCD1] to-[#733A93] bg-clip-text text-transparent mb-6 font-bold">
                +40
              </div>
              <p className="text-2xl text-white/80 mb-12">Leading Brands in Saudi Arabia and the Gulf</p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl text-[#5DDCD1] mb-2 font-bold">+300</div>
                  <div className="text-white/60">Completed Projects</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl text-[#5DDCD1] mb-2 font-bold">98%</div>
                  <div className="text-white/60">Client Satisfaction</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl text-[#5DDCD1] mb-2 font-bold">7+</div>
                  <div className="text-white/60">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Grid */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="torus" size="md" position="top-left" color="mixed" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Who Trusts Us
              </h2>
            </div>
            <p className="text-lg text-white/60">
              Leading brands across various industries
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="aspect-square rounded-xl bg-[#1A2B3A] border border-white/5 hover:border-[#5DDCD1]/30 hover:bg-[#213648] transition-all duration-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="text-5xl text-white/20 group-hover:text-[#5DDCD1]/30 transition-colors duration-300">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="lg" position="bottom-right" color="turquoise" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#733A93]/20 to-[#5DDCD1]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-lg text-white/60">
              Real opinions and experiences from our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#5DDCD1]" />
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-white mb-1 font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.position}</div>
                  <div className="text-sm text-[#5DDCD1]">{testimonial.company}</div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDCD1]/0 to-[#733A93]/0 group-hover:from-[#5DDCD1]/5 group-hover:to-[#733A93]/5 transition-all duration-300 pointer-events-none"></div>
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
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
            <h2 className="relative text-4xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              Be Our Next Partner
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our list of successful clients and let us help you achieve your digital goals
          </p>
          <Link
            to="/en/contact"
            className="inline-block px-8 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105 text-lg font-semibold"
          >
            Start Your Project With Us
          </Link>
        </div>
      </section>
    </div>
  );
}

