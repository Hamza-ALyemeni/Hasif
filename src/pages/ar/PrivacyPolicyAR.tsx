import { ShieldCheck, Lock, FileText, Bell, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function PrivacyPolicyAR() {
  const sections = [
    {
      title: 'أولاً: المعلومات التي نقوم بجمعها',
      icon: FileText,
      points: [
        'الاسم الكامل',
        'البريد الإلكتروني',
        'رقم الجوال',
        'اسم الشركة',
        'تفاصيل المشروع',
        'أي معلومات يتم إدخالها طوعًا عبر النماذج',
        'كما قد نقوم بجمع بيانات غير شخصية مثل: عنوان IP، نوع الجهاز والمتصفح، الصفحات التي يتم زيارتها، ومدة التصفح',
      ],
    },
    {
      title: 'ثانياً: كيف نستخدم المعلومات',
      icon: ShieldCheck,
      points: [
        'التواصل معك بخصوص مشروعك',
        'إعداد عروض الأسعار',
        'تنفيذ الخدمات المتفق عليها',
        'تحسين تجربة المستخدم',
        'تطوير خدماتنا',
        'إرسال تحديثات أو عروض (إذا وافقت على ذلك)',
      ],
    },
    {
      title: 'ثالثاً: مشاركة المعلومات',
      icon: Bell,
      points: [
        'لا نقوم ببيع أو تأجير بياناتك لأي طرف ثالث.',
        'قد تتم مشاركة المعلومات فقط في الحالات التالية: مع مزودي الخدمات المرتبطين بتنفيذ المشروع، عند وجود التزام قانوني، بموافقتك المسبقة.',
      ],
    },
    {
      title: 'رابعاً: حماية البيانات',
      icon: Lock,
      points: [
        'نتخذ إجراءات تقنية وتنظيمية مناسبة لحماية معلوماتك من: الوصول غير المصرح به، الاستخدام غير القانوني، والفقد أو التعديل.',
      ],
    },
    {
      title: 'خامساً: ملفات تعريف الارتباط (Cookies)',
      icon: FileText,
      points: [
        'قد يستخدم الموقع ملفات تعريف الارتباط لتحسين الأداء وتحليل الاستخدام.',
        'يمكنك تعطيلها من إعدادات المتصفح الخاص بك.',
      ],
    },
    {
      title: 'سادساً: حقوقك',
      icon: ShieldCheck,
      points: [
        'يحق لك: طلب معرفة البيانات المخزنة عنك، طلب تعديلها، طلب حذفها (ما لم يكن هناك التزام قانوني بالاحتفاظ بها).',
      ],
    },
    {
      title: 'سابعاً: الاحتفاظ بالبيانات',
      icon: FileText,
      points: [
        'نحتفظ بالمعلومات فقط للمدة اللازمة لتنفيذ الأغراض المذكورة أو للامتثال للمتطلبات القانونية.',
      ],
    },
    {
      title: 'ثامناً: الروابط الخارجية',
      icon: Bell,
      points: [
        'قد يحتوي الموقع على روابط لمواقع أخرى، ولسنا مسؤولين عن سياسات الخصوصية الخاصة بها.',
      ],
    },
    {
      title: 'تاسعاً: تحديث السياسة',
      icon: FileText,
      points: [
        'قد يتم تحديث سياسة الخصوصية عند الحاجة.',
        'يعد استمرار استخدام الموقع موافقة على التحديثات.',
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
            آخر تحديث: 2026
          </p>
          <p className="text-base text-white/60 max-w-3xl mx-auto mt-2 leading-relaxed">
            نحن في حصيف نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات عند استخدامك لموقعنا أو خدماتنا.
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
                <h2 className="text-3xl text-white font-bold mb-2">لأي استفسار بخصوص الخصوصية</h2>
                <p className="text-white/70 max-w-2xl">
                  info@haseif.com
                </p>
              </div>
              <Link
                to="/ar/contact"
                className="px-5 py-3 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg font-semibold hover:bg-[#4DCCC1] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap text-sm shrink-0"
              >
                <Send className="w-4 h-4 shrink-0" />
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
