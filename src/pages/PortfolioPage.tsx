import { useState } from 'react';
import { PageHero } from '../components/shared/PageHero';
import { ArrowUpLeft } from 'lucide-react';

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'مواقع إلكترونية', 'هويات بصرية', 'حملات تسويقية', 'متاجر إلكترونية', 'محتوى مرئي'];

  const projects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `مشروع ${i + 1}`,
    category: filters[Math.floor(Math.random() * (filters.length - 1)) + 1],
    description: 'وصف قصير للمشروع وما تم إنجازه',
  }));

  const filteredProjects = activeFilter === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <PageHero
        badge="أعمالنا"
        title="نماذج من مشاريع نفخر بتنفيذها"
        subtitle="نستعرض هنا مجموعة من الأعمال التي عملنا عليها — كل مشروع بُني على استراتيجية واضحة وتنفيذ دقيق ونتائج قابلة للقياس."
      />

      {/* Filters */}
      <section className="py-12 px-6 lg:px-12 bg-[#0A1419] sticky top-20 z-40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#5DDCD1] text-[#0F1D2A] shadow-lg shadow-[#5DDCD1]/20'
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
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
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
                  <h3 className="text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/60">{project.description}</p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-[#5DDCD1]/10 backdrop-blur-sm border border-[#5DDCD1]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <section className="py-24 px-6 lg:px-12 bg-[#0A1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              دراسات الحالة
            </h2>
            <p className="text-lg text-white/60">
              نظرة تفصيلية على مشاريع ناجحة
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
                    <div className="inline-block px-3 py-1 mb-4 bg-gradient-to-l from-[#5DDCD1]/20 to-[#733A93]/20 border border-[#5DDCD1]/30 rounded-full text-sm text-[#5DDCD1]">
                      دراسة حالة
                    </div>
                    <h3 className="text-3xl mb-4 text-white">
                      دراسة حالة {study}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      شرح تفصيلي عن المشروع والتحديات التي واجهناها والحلول المبتكرة التي قدمناها
                      وكيف ساهمت في تحقيق أهداف العميل ونمو أعماله الرقمية بشكل ملحوظ
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl text-[#5DDCD1] mb-1">+150%</div>
                        <div className="text-xs text-white/60">نمو في المبيعات</div>
                      </div>
                      <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl text-[#5DDCD1] mb-1">+200%</div>
                        <div className="text-xs text-white/60">زيادة في الوصول</div>
                      </div>
                      <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl text-[#5DDCD1] mb-1">+80%</div>
                        <div className="text-xs text-white/60">تحسين التفاعل</div>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                      اقرأ المزيد
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
