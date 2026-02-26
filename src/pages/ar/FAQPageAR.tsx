import { useState } from 'react';
import { HelpCircle, Sparkles, Send, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function FAQPageAR() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '1. كيف أبدأ العمل مع حصيف؟',
      answer: 'يمكنك تعبئة نموذج طلب الخدمة عبر الموقع أو التواصل معنا مباشرة. بعد ذلك نقوم بفهم احتياجك، ثم نرسل عرضًا مخصصًا يوضح نطاق العمل والمدة والتكلفة.'
    },
    {
      question: '2. هل تقدمون باقات ثابتة؟',
      answer: 'نحن لا نعتمد قوالب جاهزة، بل نصمم حلولًا تناسب كل مشروع حسب أهدافه وميزانيته وطبيعة السوق.'
    },
    {
      question: '3. كيف يتم احتساب الأسعار؟',
      answer: 'يتم تسعير كل مشروع بناءً على: نطاق العمل، مدة التنفيذ، حجم الفريق المطلوب، ومستوى التعقيد. يتم توضيح جميع التفاصيل في عرض السعر الرسمي.'
    },
    {
      question: '4. ما آلية الدفع؟',
      answer: 'عادة يتم دفع نسبة مقدمة قبل بدء التنفيذ، ويُستكمل المبلغ حسب مراحل المشروع أو وفق الاتفاق المبرم. قد يكون الدفع دفعة واحدة أو مقسمًا إلى دفعات حسب حجم المشروع ومدته.'
    },
    {
      question: '5. هل توقيع عقد إلزامي؟',
      answer: 'نعم، يتم توثيق نطاق العمل والالتزامات بين الطرفين من خلال اتفاق رسمي. في بعض المشاريع يتم الاكتفاء بعرض سعر معتمد، وفي مشاريع أخرى يتم توقيع عرض فني ومالي أو عقد مفصل حسب حجم المشروع.'
    },
    {
      question: '6. كم تستغرق مدة تنفيذ المشروع؟',
      answer: 'تختلف المدة حسب نوع الخدمة: الهوية البصرية: من 7 إلى 14 يوم عمل، المواقع والمتاجر: من 2 إلى 4 أسابيع، الحملات الإعلانية: تبدأ خلال أيام بعد تجهيز المواد، إدارة المنصات: اشتراك شهري مستمر. يتم تحديد المدة بدقة في العرض.'
    },
    {
      question: '7. هل تقدمون ضمان نتائج؟',
      answer: 'نضمن تنفيذًا احترافيًا مبنيًا على تحليل وبيانات، لكن النتائج تتأثر بعوامل السوق والمنافسة وطبيعة النشاط.'
    },
    {
      question: '8. هل يمكن طلب تعديلات؟',
      answer: 'نعم، يشمل كل مشروع عددًا محددًا من التعديلات يتم الاتفاق عليه مسبقًا لضمان جودة العمل وتنظيمه.'
    },
    {
      question: '9. هل تسلمون الملفات المصدرية؟',
      answer: 'يتم تسليم الملفات النهائية، وتسليم الملفات المصدرية يكون وفق الاتفاق المبرم وبعد استكمال المستحقات المالية.'
    },
    {
      question: '10. هل أحتاج إلى توفير مواد أو معلومات قبل بدء المشروع؟',
      answer: 'نعم، لضمان تنفيذ احترافي وسريع، نطلب من العميل تزويدنا بالمعلومات الأساسية المتعلقة بالمشروع مثل: نبذة عن النشاط، الأهداف التسويقية، الجمهور المستهدف، والمواد المتوفرة (شعار، صور، محتوى سابق…). كلما كانت المعلومات أوضح، كانت النتائج أدق وأسرع.'
    },
    {
      question: '11. هل تقدمون إدارة كاملة للحسابات؟',
      answer: 'نعم، يمكننا إدارة الحسابات بشكل شامل يشمل المحتوى، التفاعل، الحملات، والتحليل الدوري.'
    },
    {
      question: '12. كيف أتابع أداء الحملات؟',
      answer: 'نقدم تقارير دورية توضح: النتائج، التحليلات، التوصيات، وخطط التحسين بأسلوب واضح وسهل الفهم.'
    },
    {
      question: '13. هل يمكن إلغاء الخدمة؟',
      answer: 'يمكن إيقاف أو تعديل الخدمة وفق الشروط المتفق عليها مسبقًا في العرض أو العقد، مع الالتزام بما تم إنجازه حتى تاريخ الإيقاف.'
    },
    {
      question: '14. هل تقدمون استشارة قبل التعاقد؟',
      answer: 'نعم، نوفر جلسة تعريفية لفهم المشروع وتحديد الاتجاه المناسب قبل بدء التنفيذ.'
    },
    {
      question: '15. ما الذي يميز حصيف عن غيرها؟',
      answer: 'نحن لا نبيع خدمات جاهزة، بل نصمم قرارات تسويقية محسوبة مبنية على تحليل وفهم عميق للسوق.'
    }
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
            كل ما تحتاج معرفته قبل بدء مشروعك معنا. نؤمن في حصيف بالوضوح قبل البدء، لذلك جمعنا هنا أكثر الأسئلة التي يطرحها عملاؤنا.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-left" color="purple" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex flex-col gap-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#5DDCD1]/40 bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A]' : 'border-white/10 bg-gradient-to-br from-[#1A2B3A]/60 to-[#0F1D2A]/60'}`}
                >
                  <button
                    className="w-full flex items-center gap-4 p-6 text-right"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110' : ''}`}>
                      <HelpCircle className="w-5 h-5 text-[#5DDCD1]" />
                    </div>
                    <span className="flex-1 text-white font-semibold text-base">{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#5DDCD1] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pr-20 text-white/70 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
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
                <p className="text-[#5DDCD1] text-sm mb-2">لم تجد إجابة لسؤالك؟</p>
                <h2 className="text-3xl text-white font-bold mb-2">تواصل معنا الآن</h2>
                <p className="text-white/70 max-w-2xl">
                  تواصل معنا وسنكون سعداء بالإجابة عليك.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/ar/contact"
                  className="flex-1 md:flex-none px-5 py-3 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg font-semibold hover:bg-[#4DCCC1] transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  تواصل معنا
                </Link>
                <Link
                  to="/ar/services"
                  className="flex-1 md:flex-none px-5 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 border border-white/10 transition-colors duration-300 whitespace-nowrap text-sm text-center"
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
