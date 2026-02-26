import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { Megaphone, Palette, BarChart3, Share2, Video, Smartphone, Search, MousePointerClick, TrendingUp } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Megaphone,
      title: 'التسويق عبر وسائل التواصل',
      description: 'إدارة شاملة لحساباتك على منصات التواصل الاجتماعي بمحتوى إبداعي يجذب جمهورك المستهدف ويزيد من تفاعلهم'
    },
    {
      icon: Palette,
      title: 'تصميم الهوية البصرية',
      description: 'تصميم هويات بصرية متكاملة تعكس قيم علامتك التجارية وتميزك عن المنافسين في السوق'
    },
    {
      icon: BarChart3,
      title: 'تحليل البيانات والأداء',
      description: 'تتبع وتحليل أداء حملاتك التسويقية بتقارير مفصلة ورؤى قابلة للتنفيذ لتحسين النتائج'
    },
    {
      icon: Share2,
      title: 'الحملات الإعلانية المدفوعة',
      description: 'إدارة احترافية للحملات الإعلانية على جوجل ومنصات التواصل لتحقيق أعلى عائد استثمار'
    },
    {
      icon: Video,
      title: 'إنتاج المحتوى المرئي',
      description: 'إنتاج فيديوهات احترافية وموشن جرافيك تروي قصة علامتك بطريقة مؤثرة ومميزة'
    },
    {
      icon: Smartphone,
      title: 'استراتيجية التسويق الرقمي',
      description: 'وضع خطط تسويقية متكاملة تحقق أهدافك وتزيد من نمو أعمالك الرقمية بشكل مستدام'
    },
    {
      icon: Search,
      title: 'تحسين محركات البحث SEO',
      description: 'تحسين موقعك لمحركات البحث لزيادة ظهورك في النتائج الأولى وجذب المزيد من الزوار'
    },
    {
      icon: MousePointerClick,
      title: 'تصميم وتطوير المواقع',
      description: 'تصميم وتطوير مواقع إلكترونية حديثة وسريعة تقدم تجربة مستخدم استثنائية'
    },
    {
      icon: TrendingUp,
      title: 'إدارة السمعة الإلكترونية',
      description: 'متابعة وإدارة سمعة علامتك التجارية على الإنترنت والتفاعل مع العملاء بشكل احترافي'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'الاكتشاف والتحليل',
      description: 'فهم عميق لعلامتك، أهدافك، وسوقك لتحديد الاتجاه الصحيح.'
    },
    {
      number: '02',
      title: 'التخطيط الاستراتيجي',
      description: 'بناء خطة واضحة تستند إلى بيانات ومؤشرات أداء محددة.'
    },
    {
      number: '03',
      title: 'التنفيذ الإبداعي',
      description: 'تحويل الاستراتيجية إلى محتوى وحملات مدروسة بعناية.'
    },
    {
      number: '04',
      title: 'القياس والتطوير',
      description: 'تحليل النتائج وتحسين الأداء باستمرار لضمان نمو مستدام.'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        badge="خدماتنا"
        title="حلول تسويقية محسوبة تدعم نموك وتحقق أهدافك"
        subtitle="نقدم خدمات تشغيلية واستراتيجية تغطي جميع مراحل بناء العلامة التجارية وإدارة حضورها الرقمي — من الفكرة إلى التنفيذ."
      />

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-[#1A2B3A] rounded-2xl border border-white/5 hover:border-[#5DDCD1]/30 hover:bg-[#213648] transition-all duration-300 hover:shadow-2xl hover:shadow-[#5DDCD1]/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-[#5DDCD1]" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDCD1]/0 to-[#733A93]/0 group-hover:from-[#5DDCD1]/5 group-hover:to-[#733A93]/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Workflow Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#0A1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              آلية العمل
            </h2>
            <p className="text-lg text-white/60">
              نعتمد عملية واضحة ومبنية على التحليل لضمان نتائج قابلة للقياس.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 w-full h-[2px] bg-gradient-to-l from-[#5DDCD1]/30 to-transparent translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300">
                  {/* Number */}
                  <div className="text-6xl bg-gradient-to-l from-[#5DDCD1] to-[#733A93] bg-clip-text text-transparent mb-4 opacity-50">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Background Glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[500px] h-[300px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 mb-8 bg-gradient-to-l from-[#5DDCD1]/20 to-[#733A93]/20 border border-[#5DDCD1]/30 rounded-full">
              <span className="text-[#5DDCD1]">ابدأ الآن</span>
            </div>

            <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              هل أنت مستعد للبدء؟
            </h2>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              دعنا نبني لك استراتيجية تسويقية محسوبة تعزز حضورك الرقمي وتدعم نمو أعمالك.
            </p>

            <Link to="/contact" className="px-8 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105 inline-block">
              <span className="text-lg">احجز استشارة مجانية</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
