import { ShieldCheck, Lock, FileText, Bell, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function PrivacyPolicyAR() {
  const sections = [
    {
      title: 'البيانات التي نجمعها',
      icon: FileText,
      points: [
        'بيانات الاتصال التي تزودنا بها مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند طلب معلومات أو بدء مشروع.',
        'معلومات عن المشروع تشمل الهوية والعناصر البصرية والجمهور المستهدف والأهداف لنتمكن من تقديم توصيات دقيقة.',
        'ملاحظات حول استخدام الموقع أو المنتج التي تشاركونها طوعًا لتحسين تجربتكم.',
      ],
    },
    {
      title: 'كيفية استخدام البيانات',
      icon: ShieldCheck,
      points: [
        'الرد على الاستفسارات، إعداد العروض، وتنفيذ الخدمات المتفق عليها.',
        'تحسين الحملات، قياس الأداء، وتخصيص المحتوى حيثما كان ذلك مناسبًا.',
        'التواصل حول تقدم المشاريع، الفواتير، وأي تغييرات مهمة في خدماتنا.',
      ],
    },
    {
      title: 'حماية معلوماتك',
      icon: Lock,
      points: [
        'نقصر الوصول إلى بيانات العملاء على أعضاء الفريق الذين يحتاجونها لإنجاز أعمالهم.',
        'نستخدم تخزينًا آمنًا، وقنوات مشفرة قدر الإمكان، ومراجعات دورية للصلاحيات.',
        'نحتفظ بالبيانات فقط للمدة اللازمة للأغراض المذكورة أو للمتطلبات القانونية.',
      ],
    },
    {
      title: 'المشاركة مع أطراف ثالثة',
      icon: Bell,
      points: [
        'لا نبيع معلوماتك. نشاركها فقط مع شركاء موثوقين عند الحاجة لتقديم خدمة (مثل منصات الإعلانات أو أدوات التحليل).',
        'أي طرف ثالث نتعامل معه مطالب بحماية البيانات واستخدامها للغرض المتفق عليه فقط.',
        'إذا تطلب النطاق مشاركة إضافية، سنبلغك ونحصل على موافقتك عند الحاجة.',
      ],
    },
    {
      title: 'خياراتك وحقوقك',
      icon: ShieldCheck,
      points: [
        'يمكنك طلب الوصول إلى بياناتك الشخصية أو تحديثها أو حذفها عبر التواصل معنا.',
        'بإمكانك إيقاف الرسائل غير الضرورية في أي وقت.',
        'إذا اعتقدت أن البيانات استُخدمت بطريقة غير صحيحة، أخبرنا لنحقق ونتخذ الإجراءات اللازمة.',
      ],
    },
    {
      title: 'تحديثات السياسة',
      icon: FileText,
      points: [
        'قد نقوم بتحديث هذه السياسة لتعكس ممارسات جديدة أو متطلبات قانونية.',
        'في حال وجود تغييرات جوهرية سنوضح ذلك هنا، وعند اللزوم سنرسل إشعارًا عبر البريد الإلكتروني.',
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
            <ShieldCheck className="w-5 h-5 text-[#5DDCD1]" />
            <span className="text-sm text-white/70">الخصوصية أولًا</span>
          </div>
          <h1 className="text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            سياسة الخصوصية
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mt-4 leading-relaxed">
            كيف نجمع بياناتك ونستخدمها ونحميها عند تعاملك مع حسيف أو الاستفادة من خدماتنا.
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
                <p className="text-[#5DDCD1] text-sm mb-2">أسئلة حول الخصوصية؟</p>
                <h2 className="text-3xl text-white font-bold mb-2">يسعدنا توضيح أي استفسار</h2>
                <p className="text-white/70 max-w-2xl">
                  إذا كان لديك أي قلق بخصوص كيفية تعاملنا مع بياناتك، تواصل معنا. سنرد بسرعة وبشفافية.
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
