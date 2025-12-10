import { ArrowLeft, Sparkles, Megaphone, Palette, BarChart3, Video,  Camera, Target, Lightbulb, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Shape3D } from '../../components/shared/Shape3D';
import { CosmicBackground } from '../../components/shared/CosmicBackground';

export function HomePageAR() {
  const services = [
    {
      icon: Megaphone,
      title: 'إدارة حسابات التواصل الاجتماعي',
      description: 'إدارة يومية، ردود، بناء تقويم محتوى، تحسين الهوية على المنصات، وتحليل الأداء شهرياً'
    },
    {
      icon: Palette,
      title: 'كتابة المحتوى الإبداعي',
      description: 'محتوى سوشيال، تغريدات قوية، سكربتات فيديو، نصوص إعلانية، بروفايلات الشركات ومواقع إلكترونية'
    },
    {
      icon: Lightbulb,
      title: 'الهوية البصرية',
      description: 'شعارات، كتيب هوية، ألوان وخطوط، تطبيقات الهوية، وبناء علامة تجارية كاملة'
    },
    {
      icon: BarChart3,
      title: 'الحملات الإعلانية',
      description: 'إعلانات Meta و Google، إدارة الميزانيات، تحسين النتائج، استهداف دقيق وتقارير أداء واضحة'
    },
    {
      icon: Video,
      title: 'الموشن جرافيك',
      description: 'فيديوهات تعريفية، فيديوهات إعلانية، فيديوهات للخدمات، مونتاج، تترات وإعلانات'
    },
    {
      icon: Camera,
      title: 'التصوير',
      description: 'تصوير منتجات، تصوير أشخاص، تصوير للشركات، UGC، وتصوير جوي (درون)'
    }
  ];

  const workflow = [
    {
      number: '01',
      title: 'فهم المشروع والجمهور',
      description: 'نبدأ بفهم عميق لمشروعك وجمهورك المستهدف لنضع الأساس الصحيح'
    },
    {
      number: '02',
      title: 'بناء استراتيجية واضحة',
      description: 'نصمم خطة محسوبة وذكية تحقق أهدافك بوضوح وبدون تعقيد'
    },
    {
      number: '03',
      title: 'إنتاج المحتوى بأعلى جودة',
      description: 'نبدع محتوى احترافي يعكس هويتك ويحقق التأثير المطلوب'
    },
    {
      number: '04',
      title: 'الإطلاق والمتابعة والتحسين',
      description: 'نطلق الحملات ونتابع الأداء باستمرار لتحسين النتائج'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'الشفافية',
      description: 'نتحدث بوضوح ونقدم تقارير دقيقة لكل ما نفعله'
    },
    {
      icon: Award,
      title: 'الجودة',
      description: 'نهتم بكل تفصيلة صغيرة لنقدم عملاً يليق بعلامتك'
    },
    {
      icon: CheckCircle2,
      title: 'الالتزام',
      description: 'نفي بوعودنا ونلتزم بالمواعيد والمعايير المتفق عليها'
    },
    {
      icon: Lightbulb,
      title: 'الإبداع',
      description: 'نفكر خارج الصندوق لنقدم حلولاً مبتكرة تميزك عن المنافسين'
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
        {/* Cosmic Background */}
        <CosmicBackground />
        
        {/* 3D Shapes */}
        <Shape3D variant="sphere" size="lg" position="top-right" color="turquoise" />
        <Shape3D variant="cube" size="md" position="bottom-left" color="purple" />
        
        {/* Rotating 3D Glow */}
        <div className="absolute top-[30%] right-[20%] w-64 h-64 opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#5DDCD1] to-[#733A93] blur-3xl rotate-slow"></div>
        </div>
        
        {/* Nebula-style gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1620]/50 to-[#0F1D2A]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-[#5DDCD1]" />
            <span className="text-sm text-white/90">حلول محسوبة × إبداع موزون</span>
          </div>

          {/* Main Headline with Glow */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 via-[#733A93]/20 to-[#5DDCD1]/20 blur-3xl"></div>
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl leading-tight">
              <span className="block mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                ليس ضجيجاً
              </span>
              <span className="block bg-gradient-to-l from-[#5DDCD1] via-[#4DCCC1] to-[#733A93] bg-clip-text text-transparent">
                بل قرار محسوب
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            وكالة سعودية حديثة تمزج بين الإبداع، الحكمة، والوضوح لتقدم حلولاً تسويقية فعّالة وموزونة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/ar/contact"
              className="group px-8 py-4 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105 flex items-center gap-2 font-semibold"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ar/portfolio"
              className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              استكشف أعمالنا
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="relative">
              <div className="absolute inset-0 bg-[#5DDCD1]/5 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2 font-bold">+300</div>
                <div className="text-sm text-white/60">مشروع ناجح</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#733A93]/5 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2 font-bold">+150</div>
                <div className="text-sm text-white/60">عميل سعيد</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#5DDCD1]/5 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl text-[#5DDCD1] mb-2 font-bold">7+</div>
                <div className="text-sm text-white/60">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#0B1620]">
        <CosmicBackground />
        <Shape3D variant="torus" size="md" position="top-right" color="purple" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="w-24 h-1 bg-gradient-to-l from-[#5DDCD1] to-[#733A93] mx-auto mb-12 rounded-full"></div>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
            <h2 className="relative text-3xl md:text-5xl mb-8 text-white leading-relaxed">
              <span className="text-[#5DDCD1] font-bold">حصيف</span> تأسست لإغلاق الفجوة بين
              <br />
              <span className="text-white/90">الإبداع الفني والجدوى التجارية الفعلية</span>
            </h2>
          </div>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
            نحن وكالة سعودية حديثة تمزج بين الإبداع، الحكمة، والوضوح. نقدم حلولاً محسوبة وذكية تركز على النتائج الحقيقية وليس الضجيج. نعمل بأسلوب هادئ، حكيم، وتقني، نحب التفاصيل، ونتحدث بأقل كلام وبأعلى قيمة.
          </p>
          
          <Link
            to="/ar/about"
            className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-[#5DDCD1]/40 transition-all duration-300"
          >
            اعرف المزيد عن حصيف
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="lg" position="bottom-right" color="turquoise" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                خدماتنا
              </h2>
            </div>
            <p className="text-lg text-white/60">حلول تسويقية متكاملة بأعلى جودة</p>
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
              to="/ar/services"
              className="inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-[#5DDCD1]/40 transition-all duration-300"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-left" color="mixed" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#733A93]/20 to-[#5DDCD1]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                طريقة عملنا
              </h2>
            </div>
            <p className="text-lg text-white/60">عملية محسوبة ومدروسة لتحقيق النجاح</p>
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
        <Shape3D variant="sphere" size="lg" position="bottom-left" color="purple" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                قيمنا
              </h2>
            </div>
            <p className="text-lg text-white/60">المبادئ التي تقودنا في كل عمل نقوم به</p>
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
              جاهز لصناعة قصة نجاحك؟
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            دعنا نبدأ رحلة النجاح الرقمي معاً بأسلوب محسوب وواضح يحقق نتائج حقيقية
          </p>
          
          <Link
            to="/ar/contact"
            className="inline-block px-10 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/40 hover:shadow-[#5DDCD1]/60 hover:scale-105 text-lg font-semibold"
          >
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
