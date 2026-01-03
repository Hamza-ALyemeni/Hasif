import { PageHero } from '../components/shared/PageHero';
export function ClientsPage() {
  const clients = Array.from({ length: 20 }, (_, i) => i + 1);

  // const testimonials = [
  //   {
  //     name: 'أحمد المالكي',
  //     position: 'مدير تنفيذي',
  //     company: 'شركة النجاح',
  //     text: 'تعاملنا مع حصيف كان استثنائياً. نجحوا في تحويل رؤيتنا إلى واقع رقمي ملموس وحققنا نتائج تفوق التوقعات. فريق محترف وملتزم بالجودة.'
  //   },
  //   {
  //     name: 'فاطمة العتيبي',
  //     position: 'مديرة التسويق',
  //     company: 'مؤسسة الابتكار',
  //     text: 'حصيف ليسوا مجرد وكالة تسويق، بل شركاء نجاح حقيقيون. ساعدونا في بناء حضور رقمي قوي وزيادة مبيعاتنا بنسبة 200% خلال 6 أشهر.'
  //   },
  //   {
  //     name: 'محمد الغامدي',
  //     position: 'صاحب متجر إلكتروني',
  //     company: 'متجر الرقي',
  //     text: 'الإبداع والاحترافية هما ما يميزان فريق حصيف. من التصميم إلى الحملات التسويقية، كل شيء كان في أعلى مستوى من الجودة والإتقان.'
  //   },
  //   {
  //     name: 'نورة السعيد',
  //     position: 'مؤسسة علامة تجارية',
  //     company: 'علامة نورة',
  //     text: 'بفضل حصيف، تمكنا من الوصول إلى جمهور أوسع وبناء قاعدة عملاء مخلصين. استراتيجياتهم التسويقية فعالة ومبنية على بيانات دقيقة.'
  //   },
  //   {
  //     name: 'خالد الشمري',
  //     position: 'مدير عام',
  //     company: 'مجموعة الريادة',
  //     text: 'العمل مع حصيف كان تجربة ممتعة ومثمرة. فهمهم العميق للسوق السعودي ساعدنا في تحقيق أهدافنا التسويقية بكفاءة عالية.'
  //   },
  //   {
  //     name: 'سارة القحطاني',
  //     position: 'مالكة مشروع',
  //     company: 'بوتيك سارة',
  //     text: 'أنصح بشدة بالتعامل مع حصيف. فريقهم ملتزم ومبدع ويقدم حلولاً مبتكرة تناسب ميزانيتك وأهدافك. شكراً لكم على دعمكم المستمر.'
  //   }
  // ];

  return (
    <div className="min-h-screen">
      <PageHero
        badge="عملاؤنا"
        title="شركاء النجاح"
        subtitle="نفخر بثقة أكثر من 40 علامة تجارية رائدة في مختلف القطاعات"
      />

      {/* Counter Section */}
      <section className="hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[500px] h-[300px] bg-[#5DDCD1]/10 rounded-full blur-[120px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                يثق بنا أكثر من
              </h2>
              <div className="text-8xl md:text-9xl bg-gradient-to-l from-[#5DDCD1] to-[#733A93] bg-clip-text text-transparent mb-6">
                +40
              </div>
              <p className="text-2xl text-white/80 mb-12">علامة تجارية رائدة في المملكة والخليج</p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl text-[#5DDCD1] mb-2">+300</div>
                  <div className="text-white/60">مشروع منجز</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl text-[#5DDCD1] mb-2">98%</div>
                  <div className="text-white/60">رضا العملاء</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl text-[#5DDCD1] mb-2">7+</div>
                  <div className="text-white/60">سنوات خبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              من يثق بنا
            </h2>
            <p className="text-lg text-white/60">
              علامات تجارية رائدة في مختلف المجالات
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="aspect-square rounded-xl bg-[#1A2B3A] border border-white/5 hover:border-[#5DDCD1]/30 hover:bg-[#213648] transition-all duration-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="text-5xl text-white/20 group-hover:text-[#5DDCD1]/30 transition-colors duration-300">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            كن شريكنا القادم
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            انضم إلى قائمة عملائنا الناجحين ودعنا نساعدك في تحقيق أهدافك الرقمية
          </p>
          <button className="px-8 py-5 bg-[#5DDCD1] text-[#0F1D2A] rounded-xl hover:bg-[#4DCCC1] transition-all duration-300 shadow-2xl shadow-[#5DDCD1]/30 hover:shadow-[#5DDCD1]/50 hover:scale-105">
            <span className="text-lg">ابدأ مشروعك معنا</span>
          </button>
        </div>
      </section>
    </div>
  );
}
