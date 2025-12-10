import { ArrowLeft, Sparkles, Megaphone, Palette, BarChart3, ArrowUpLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const services = [
    {
      icon: Megaphone,
      title: 'التسويق عبر وسائل التواصل',
      description: 'إدارة شاملة لحساباتك على منصات التواصل الاجتماعي'
    },
    {
      icon: Palette,
      title: 'تصميم الهوية البصرية',
      description: 'تصميم هويات بصرية متكاملة تعكس قيم علامتك'
    },
    {
      icon: BarChart3,
      title: 'تحليل البيانات والأداء',
      description: 'تتبع وتحليل أداء حملاتك بتقارير مفصلة'
    }
  ];

  const projects = [
    { title: 'تصميم موقع إلكتروني', category: 'تطوير واجهات' },
    { title: 'حملة تسويقية', category: 'إدارة سوشيال ميديا' },
    { title: 'هوية بصرية', category: 'تصميم علامات تجارية' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#733A93]/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-[#5DDCD1]" />
            <span className="text-sm text-white/90">وكالة التسويق الرقمي الأولى في السعودية</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            نبني علامات تجارية
            <br />
            <span className="bg-gradient-to-l from-[#5DDCD1] to-[#733A93] bg-clip-text text-transparent">
              تترك أثراً رقمياً
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            نحول أفكارك إلى حملات رقمية ناجحة من خلال استراتيجيات تسويقية مبتكرة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105 flex items-center gap-2"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              استكشف أعمالنا
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10">
            <div>
              <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2">+300</div>
              <div className="text-sm text-white/60">مشروع ناجح</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2">+150</div>
              <div className="text-sm text-white/60">عميل سعيد</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2">7+</div>
              <div className="text-sm text-white/60">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini About Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-1 bg-gradient-to-l from-[#5DDCD1] to-[#733A93] mx-auto mb-12 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            <span className="text-[#5DDCD1]">حصيف</span> هي وكالة تسويق رقمي متكاملة تقدم حلولاً مبتكرة للعلامات التجارية
            الطموحة. نجمع بين الإبداع والتكنولوجيا لصناعة تجارب رقمية استثنائية
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-12 bg-[#0A1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              خدماتنا
            </h2>
            <p className="text-lg text-white/60">حلول تسويقية متكاملة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-[#1A2B3A] rounded-2xl border border-white/5 hover:border-[#5DDCD1]/30 hover:bg-[#213648] transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-[#5DDCD1]" />
                </div>
                <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              أعمالنا
            </h2>
            <p className="text-lg text-white/60">مشاريع نفخر بإنجازها</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/5 hover:border-[#5DDCD1]/30 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D2A]/95 via-[#0F1D2A]/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-xs text-[#5DDCD1] mb-2">{project.category}</div>
                  <h3 className="text-xl text-white mb-2">{project.title}</h3>
                </div>
                <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-[#5DDCD1]/10 backdrop-blur-sm border border-[#5DDCD1]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpLeft className="w-5 h-5 text-[#5DDCD1]" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              عرض جميع الأعمال
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Preview */}
      <section className="py-24 px-6 lg:px-12 bg-[#0A1419]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              يثق بنا أكثر من
            </h2>
            <div className="text-7xl md:text-8xl bg-gradient-to-l from-[#5DDCD1] to-[#733A93] bg-clip-text text-transparent mb-8">
              +40
            </div>
            <p className="text-xl text-white/80">علامة تجارية رائدة</p>
          </div>
          <Link
            to="/clients"
            className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            تعرف على عملائنا
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[500px] h-[300px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              جاهز لتحويل علامتك التجارية؟
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              دعنا نبدأ رحلة نجاحك الرقمي معاً
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105"
            >
              <span className="text-lg">تواصل معنا الآن</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
