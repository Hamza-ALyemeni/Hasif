import { Target, Eye, Heart, Award, Users, Zap, Shield } from 'lucide-react';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function AboutPageAR() {
  const story = [
    {
      title: 'البداية',
      description: 'تأسست حصيف من رؤية واضحة: سد الفجوة بين الإبداع الفني والجدوى التجارية الفعلية. رأينا سوقًا مليئًا بالضجيج، الوعود الكبيرة، والحلول غير المحسوبة — وكان لابد من نموذج مختلف.'
    },
    {
      title: 'الفلسفة',
      description: 'آمنا بأن التسويق ليس ضجيجًا، بل قرار محسوب له أثر واضح وقابل للقياس. هذه الفلسفة أصبحت روح حصيف ومنهجنا في كل مشروع نعمل عليه.'
    },
    {
      title: 'المنهج',
      description: 'نعمل بأسلوب هادئ، منظم، وتقني. نبدأ بالفهم، نخطط بوضوح، ونبني قراراتنا على بيانات وتحليل دقيق. نؤمن أن التفاصيل الصغيرة تصنع الفرق الكبير، وأن القيمة لا تُقاس بكثرة الكلام بل بجودة التنفيذ.'
    },
    {
      title: 'اليوم',
      description: 'اليوم، حصيف تخدم مجموعة من العلامات التجارية الطموحة، وتعمل على بناء حضور رقمي مستدام قائم على استراتيجية واضحة وتنفيذ احترافي.'
    }
  ];

  const mission = {
    title: 'رسالتنا',
    description: 'تقديم حلول تسويقية محسوبة وذكية تصنع نتائج حقيقية بدون تعقيد. نركز على الوضوح، الجودة، والتأثير الفعلي على أعمال عملائنا.',
    icon: Target
  };

  const vision = {
    title: 'رؤيتنا',
    description: 'بناء حضور رقمي متقدم يتوافق مع مستقبل السوق السعودي وتوجهاته. نطمح أن نكون الخيار الأول للعلامات التجارية التي تبحث عن الجودة، الاستراتيجية، والوضوح.',
    icon: Eye
  };

  const values = [
    {
      icon: Shield,
      title: 'الشفافية',
      description: 'وضوح كامل في التواصل، وتقارير دقيقة تعكس الأداء الحقيقي.'
    },
    {
      icon: Award,
      title: 'الجودة',
      description: 'اهتمام دقيق بالتفاصيل لضمان تجربة احترافية متكاملة.'
    },
    {
      icon: Heart,
      title: 'الالتزام',
      description: 'الوفاء بالوعود واحترام الوقت والمعايير المتفق عليها.'
    },
    {
      icon: Zap,
      title: 'الإبداع',
      description: 'حلول مدروسة وغير تقليدية، مبنية على فهم وتحليل لا على الحدس.'
    }
  ];

  const team = [
    {
      title: 'فريق التسويق الرقمي',
      description: 'مختصون في بناء الاستراتيجيات وإدارة الحملات الإعلانية المبنية على البيانات.'
    },
    {
      title: 'فريق التصميم',
      description: 'مصممون محترفون يصنعون هويات بصرية متناسقة ومؤثرة.'
    },
    {
      title: 'فريق المحتوى',
      description: 'كتّاب ومنتجو محتوى يحولون الأفكار إلى رسائل واضحة ومقنعة.'
    },
    {
      title: 'فريق الإنتاج',
      description: 'مصورون ومختصو موشن جرافيك ينتجون محتوى مرئي يعكس احترافية العلامة.'
    }
  ];

  return (
    <div className="min-h-screen pt-20" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-right" color="turquoise" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/30 to-[#733A93]/30 blur-3xl"></div>
            <h1 className="relative text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              من نحن
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            وكالة سعودية تعمل بعقلية استراتيجية، تمزج بين الإبداع، الحكمة، والوضوح.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-left" color="purple" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              قصتنا
            </h2>
            <p className="text-lg text-white/60">كيف بدأت حصيف وأين نحن اليوم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {story.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/30 transition-all duration-300"
              >
                <div className="w-12 h-1 bg-gradient-to-l from-[#5DDCD1] to-[#733A93] mb-6 rounded-full"></div>
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
        <Shape3D variant="torus" size="lg" position="top-left" color="mixed" />
        
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
        <Shape3D variant="pyramid" size="md" position="bottom-right" color="turquoise" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              قيمنا
            </h2>
            <p className="text-lg text-white/60">المبادئ التي تقود كل قرار نتخذه</p>
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
              فريقنا
            </h2>
            <p className="text-lg text-white/60">خبرات متخصصة تعمل بروح واحدة</p>
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
