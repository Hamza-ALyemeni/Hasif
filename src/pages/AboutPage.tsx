import { PageHero } from '../components/shared/PageHero';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'الدقة والاحترافية',
      description: 'نلتزم بأعلى معايير الجودة في كل مشروع نقوم به لضمان تحقيق النتائج المرجوة'
    },
    {
      icon: Heart,
      title: 'الشغف بالتميز',
      description: 'نعمل بشغف لتقديم أفضل الحلول التسويقية التي تتجاوز توقعات عملائنا'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار المستمر',
      description: 'نواكب أحدث الاتجاهات والتقنيات لنقدم حلولاً مبتكرة تواكب العصر'
    },
    {
      icon: Award,
      title: 'الشفافية والثقة',
      description: 'نبني علاقات طويلة الأمد مع عملائنا من خلال الشفافية والمصداقية'
    }
  ];

  const team = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <PageHero
        badge="من نحن"
        title="قصتنا في صناعة النجاح الرقمي"
        subtitle="نحن فريق من المبدعين والمتخصصين نعمل معاً لتحقيق أهدافك الرقمية"
      />

      {/* Story Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 mb-6 bg-gradient-to-l from-[#5DDCD1]/20 to-[#733A93]/20 border border-[#5DDCD1]/30 rounded-full">
                <span className="text-[#5DDCD1]">رحلتنا</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
                نصنع تأثيراً رقمياً حقيقياً
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  بدأت حصيف من رؤية بسيطة: مساعدة العلامات التجارية السعودية على النمو والازدهار في العالم الرقمي.
                  منذ انطلاقتنا، نجحنا في تحويل هذه الرؤية إلى واقع ملموس من خلال العمل مع أكثر من 150 علامة تجارية.
                </p>
                <p>
                  نؤمن بأن التسويق الرقمي ليس مجرد إعلانات وحملات، بل هو فن صناعة تجارب استثنائية تربط العلامات
                  التجارية بجمهورها بطريقة مبتكرة وفعالة. نجمع بين الإبداع والتحليل الدقيق للبيانات لتحقيق نتائج قابلة للقياس.
                </p>
                <p>
                  فريقنا المتخصص يضم نخبة من المحترفين في مجالات التسويق الرقمي، التصميم، إنتاج المحتوى، وتحليل البيانات.
                  نعمل معاً بروح الفريق الواحد لتحقيق أهداف عملائنا وتجاوز توقعاتهم.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-white/10 mb-4">📸</div>
                    <div className="text-white/40">صورة الوكالة</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5DDCD1]/20 rounded-full blur-[60px]"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#733A93]/20 rounded-full blur-[60px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#0A1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              قيمنا
            </h2>
            <p className="text-lg text-white/60">المبادئ التي نعمل بها</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDCD1]/0 to-[#733A93]/0 group-hover:from-[#5DDCD1]/10 group-hover:to-[#733A93]/10 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-[#5DDCD1]" />
                  </div>
                  <h3 className="text-xl mb-3 text-white">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              فريق العمل
            </h2>
            <p className="text-lg text-white/60">خبراء متخصصون في مجالاتهم</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div
                key={member}
                className="group relative aspect-square rounded-2xl bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/5 hover:border-[#5DDCD1]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white/40">👤</span>
                  </div>
                  <div className="text-sm text-white/60 text-center">عضو الفريق</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Images */}
      <section className="py-24 px-6 lg:px-12 bg-[#0A1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              مكتبنا
            </h2>
            <p className="text-lg text-white/60">بيئة عمل إبداعية ملهمة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((img) => (
              <div
                key={img}
                className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-white/10 mb-4">🏢</div>
                    <div className="text-white/40">صورة المكتب</div>
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
