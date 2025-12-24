import { HelpCircle, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function FAQPageAR() {
  const faqs = [
    {
      question: 'ما الخدمات التي تقدمها حسيف؟',
      answer:
        'نقدّم منظومة تسويق رقمي متكاملة تشمل بناء الهوية، إدارة الحملات الإعلانية، إنتاج المحتوى، والتحسين المستمر للأداء.',
    },
    {
      question: 'هل تدعمون التجارب ثنائية اللغة (العربية والإنجليزية)؟',
      answer:
        'نعم. نصمم ونكتب ونحسن كل نقاط الاتصال باللغتين مع الحفاظ على انسجام الرسالة عبر القنوات والأسواق المختلفة.',
    },
    {
      question: 'كم يستغرق بدء المشروع؟',
      answer:
        'تستغرق مرحلة الاكتشاف والتخطيط عادة 1-2 أسبوع. مدة الإطلاق تعتمد على نطاق المشروع، ونشارككم خارطة طريق واضحة منذ البداية.',
    },
    {
      question: 'هل يمكنكم إدارة حسابات التواصل الاجتماعي؟',
      answer:
        'بالتأكيد. نتولى الجداول التحريرية، التصميمات، النشر، إدارة التفاعل، والتقارير بحيث يركز فريقكم على العمل الأساسي.',
    },
    {
      question: 'هل توفّرون تقارير أداء واضحة؟',
      answer:
        'كل عقد يشمل لوحات متابعة وتقارير أسبوعية أو شهرية تحتوي المؤشرات الرئيسية، مصروف الإعلانات، وخطوات التحسين التالية.',
    },
    {
      question: 'كيف نبدأ التعاون معكم؟',
      answer:
        'شاركونا أهدافكم عبر صفحة التواصل. سنحدد مكالمة تعريفية قصيرة ثم نرسل عرضًا وخطة عمل مخصصة خلال 48 ساعة.',
    },
  ];

  return (
    <div className="min-h-screen pt-20" dir="rtl">
      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-right" color="turquoise" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative inline-flex items-center gap-3 px-5 py-2 mb-6 bg-white/5 border border-white/10 rounded-full">
            <Sparkles className="w-5 h-5 text-[#5DDCD1]" />
            <span className="text-sm text-white/70">كل الإجابات في مكان واحد</span>
          </div>
          <h1 className="text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            الأسئلة الشائعة
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mt-4 leading-relaxed">
            إجابات سريعة حول خدماتنا، طريقة العمل، وكيف نحافظ على تقدم علامتك بخطى ثابتة.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-left" color="purple" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-[#1A2B3A]/60 to-[#0F1D2A]/60 rounded-2xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="w-6 h-6 text-[#5DDCD1]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-3 font-semibold">{item.question}</h3>
                    <p className="text-white/70 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-left" color="mixed" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-l from-[#5DDCD1]/15 via-[#733A93]/10 to-[#0F1D2A]/60 border border-white/10 backdrop-blur">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[#5DDCD1] text-sm mb-2">تحتاج إجابة أدق؟</p>
                <h2 className="text-3xl text-white font-bold mb-2">لنصمم الخطة الأنسب لعلامتك</h2>
                <p className="text-white/70 max-w-2xl">
                  أخبرنا بأهدافك والقنوات الأكثر أهمية لك، وسنوصي بالتوليفة المثالية من الاستراتيجية والإبداع والإعلام
                  للوصول إلى النتائج المطلوبة.
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Link
                  to="/ar/contact"
                  className="flex-1 md:flex-none px-6 py-3 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg font-semibold hover:bg-[#4DCCC1] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  تواصل معنا
                </Link>
                <Link
                  to="/ar/services"
                  className="flex-1 md:flex-none px-6 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 border border-white/10 transition-colors duration-300"
                >
                  استعرض الخدمات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
