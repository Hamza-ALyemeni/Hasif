import { FileCheck, Shield, AlertCircle, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function TermsConditionsAR() {
  const sections = [
    {
      title: 'أولاً: طبيعة الخدمات',
      icon: FileCheck,
      points: [
        'حصيف وكالة تسويق تقدم خدمات رقمية تشمل (ولا تقتصر على): إدارة المنصات، الحملات الإعلانية، تصميم الهوية البصرية، إنتاج المحتوى، تصميم وتطوير المواقع، تحسين محركات البحث.',
        'جميع الخدمات يتم تنفيذها وفق نطاق العمل المتفق عليه رسميًا.',
      ],
    },
    {
      title: 'ثانياً: نطاق العمل',
      icon: FileCheck,
      points: [
        'يتم تحديد تفاصيل كل مشروع في عرض السعر أو الاتفاق الرسمي، ويشمل ذلك: وصف الخدمة، المدة الزمنية، عدد التعديلات، آلية الدفع، مخرجات المشروع.',
        'أي طلبات إضافية خارج نطاق العمل تعتبر إضافة مستقلة ويتم تسعيرها بشكل منفصل.',
      ],
    },
    {
      title: 'ثالثاً: آلية الدفع',
      icon: Clock,
      points: [
        'يبدأ تنفيذ المشروع بعد استلام الدفعة المتفق عليها.',
        'قد يتم تقسيم الدفعات حسب مراحل المشروع.',
        'لا يتم تسليم الملفات النهائية أو المصدرية قبل استكمال المستحقات المالية.',
      ],
    },
    {
      title: 'رابعاً: التعديلات',
      icon: FileCheck,
      points: [
        'يشمل كل مشروع عددًا محددًا من التعديلات يتم تحديده مسبقًا.',
        'أي تعديلات إضافية خارج العدد المتفق عليه قد يتم احتسابها برسوم إضافية.',
      ],
    },
    {
      title: 'خامساً: الملكية الفكرية',
      icon: Shield,
      points: [
        'تبقى جميع المواد والتصاميم ملكًا لحصيف حتى استكمال السداد الكامل.',
        'بعد السداد الكامل، يتم نقل حقوق الاستخدام للعميل وفق ما هو محدد في الاتفاق.',
        'لا يحق إعادة بيع أو توزيع الأعمال دون موافقة خطية إذا لم يُذكر ذلك في الاتفاق.',
      ],
    },
    {
      title: 'سادساً: إلغاء المشروع',
      icon: AlertCircle,
      points: [
        'في حال إلغاء المشروع بعد بدء التنفيذ، يتم احتساب قيمة الأعمال المنجزة حتى تاريخ الإلغاء.',
        'الدفعات المقدمة غير قابلة للاسترداد بعد بدء التنفيذ.',
      ],
    },
    {
      title: 'سابعاً: النتائج والأداء',
      icon: Shield,
      points: [
        'تلتزم حصيف بتقديم خدمات مبنية على تحليل وبيانات، لكن لا يمكن ضمان نتائج محددة نظرًا لتأثرها بعوامل خارجية مثل السوق والمنافسة وسلوك الجمهور.',
      ],
    },
    {
      title: 'ثامناً: التزامات العميل',
      icon: FileCheck,
      points: [
        'يلتزم العميل بـ: تزويد حصيف بالمعلومات والمواد المطلوبة في الوقت المحدد، الرد على الملاحظات خلال فترة مناسبة، الالتزام بجدول الدفع.',
        'أي تأخير من جانب العميل قد يؤدي إلى تمديد مدة التنفيذ.',
      ],
    },
    {
      title: 'تاسعاً: حدود المسؤولية',
      icon: AlertCircle,
      points: [
        'لا تتحمل حصيف أي مسؤولية عن أضرار مباشرة أو غير مباشرة ناتجة عن: سوء استخدام الخدمات، قرارات تجارية خارج نطاق التوصيات، توقف منصات خارجية (Meta، Google، وغيرها).',
      ],
    },
    {
      title: 'عاشراً: السرية',
      icon: Shield,
      points: [
        'تلتزم حصيف بالحفاظ على سرية معلومات العميل وعدم مشاركتها مع أي طرف ثالث دون إذن.',
      ],
    },
    {
      title: 'حادي عشر: التعديلات على الشروط',
      icon: FileCheck,
      points: [
        'يحق لحصيف تحديث هذه الشروط عند الحاجة، ويعد استمرار استخدام الموقع أو الخدمات موافقة على أي تحديث.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20" dir="rtl">
      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-right" color="mixed" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative inline-flex items-center gap-3 px-5 py-2 mb-6 bg-white/5 border border-white/10 rounded-full">
            <FileCheck className="w-5 h-5 text-[#5DDCD1]" />
            <span className="text-sm text-white/70">الشروط والأحكام</span>
          </div>
          <h1 className="text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            الشروط والأحكام
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mt-4 leading-relaxed">
            موقع حصيف
          </p>
          <p className="text-base text-white/60 max-w-3xl mx-auto mt-2 leading-relaxed">
            آخر تحديث: 2026
          </p>
          <p className="text-base text-white/60 max-w-3xl mx-auto mt-2 leading-relaxed">
            باستخدامك لموقع حصيف أو تعاقدك معنا على أي خدمة، فإنك توافق على الالتزام بالشروط والأحكام التالية:
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-left" color="purple" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1A2B3A]/60 to-[#0F1D2A]/60 border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-[#5DDCD1]" />
                  </div>
                  <h3 className="text-xl text-white font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3 text-white/70 leading-relaxed list-disc list-inside">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-left" color="turquoise" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-l from-[#5DDCD1]/15 via-[#733A93]/10 to-[#0F1D2A]/60 border border-white/10 backdrop-blur">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[#5DDCD1] text-sm mb-2">التواصل</p>
                <h2 className="text-3xl text-white font-bold mb-2">لأي استفسارات بخصوص هذه الشروط</h2>
                <p className="text-white/70 max-w-2xl">
                  يمكن التواصل عبر: info@haseif.com
                </p>
              </div>
              <Link
                to="/ar/contact"
                className="px-6 py-3 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg font-semibold hover:bg-[#4DCCC1] transition-colors duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
