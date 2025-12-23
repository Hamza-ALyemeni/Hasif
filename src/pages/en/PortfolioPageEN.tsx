import { useState } from 'react';
import { ArrowUpLeft } from 'lucide-react';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function PortfolioPageEN() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Websites', 'Visual Identity', 'Marketing Campaigns', 'Mobile Apps', 'Video Content'];

  const projects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: filters[Math.floor(Math.random() * (filters.length - 1)) + 1],
    description: 'Brief description of the project and what was accomplished',
  }));

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
              Our Portfolio
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore a collection of our outstanding work that achieved exceptional results for our clients
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 lg:px-12 bg-[#0B1620] sticky top-20 z-40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#5DDCD1] text-[#0F1D2A] shadow-lg shadow-[#5DDCD1]/20 font-semibold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/5 hover:border-[#5DDCD1]/30 transition-all duration-500 cursor-pointer"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D2A]/95 via-[#0F1D2A]/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-xs text-[#5DDCD1] mb-2">{project.category}</div>
                  <h3 className="text-xl text-white mb-2 font-semibold">{project.title}</h3>
                  <p className="text-sm text-white/60">{project.description}</p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#5DDCD1]/10 backdrop-blur-sm border border-[#5DDCD1]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpLeft className="w-5 h-5 text-[#5DDCD1]" />
                </div>

                {/* Placeholder Pattern */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="text-6xl">🎨</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview Cards */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="torus" size="lg" position="top-right" color="mixed" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Case Studies
              </h2>
            </div>
            <p className="text-lg text-white/60">
              Detailed look at successful projects
            </p>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((study) => (
              <div
                key={study}
                className="group relative p-8 lg:p-12 bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300 cursor-pointer"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="inline-block px-3 py-1 mb-4 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 border border-[#5DDCD1]/30 rounded-full text-sm text-[#5DDCD1]">
                      Case Study
                    </div>
                    <h3 className="text-3xl mb-4 text-white font-bold">
                      Case Study {study}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Detailed explanation of the project, challenges we faced, innovative solutions we provided,
                      and how they contributed to achieving client goals and significantly growing their digital business
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl text-[#5DDCD1] mb-1 font-bold">+150%</div>
                        <div className="text-xs text-white/60">Sales Growth</div>
                      </div>
                      <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl text-[#5DDCD1] mb-1 font-bold">+200%</div>
                        <div className="text-xs text-white/60">Reach Increase</div>
                      </div>
                      <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl text-[#5DDCD1] mb-1 font-bold">+80%</div>
                        <div className="text-xs text-white/60">Engagement Improvement</div>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                      Read More
                    </button>
                  </div>

                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/10] rounded-xl bg-gradient-to-br from-[#213648] to-[#1A2B3A] border border-white/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📊</div>
                    </div>
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

