import { useState } from 'react';
import { PageHero } from '../components/shared/PageHero';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@haseif.co',
      href: 'mailto:info@haseif.co'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '966543268744+',
      href: 'tel:+966543268744'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'الرياض، المملكة العربية السعودية',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        badge="تواصل معنا"
        title="لنبدأ رحلة النجاح معاً"
        subtitle="نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك الرقمية"
      />

      {/* Contact Form and Info */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#5DDCD1]/10 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 p-8 lg:p-12 bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] rounded-2xl border border-white/10">
                <h3 className="text-3xl mb-2 text-white">أرسل لنا رسالة</h3>
                <p className="text-white/60 mb-8">سنرد عليك في أقرب وقت ممكن</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#5DDCD1]/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#5DDCD1]/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      رسالتك
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#5DDCD1]/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="أخبرنا عن مشروعك..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg hover:bg-[#4DCCC1] transition-all duration-300 shadow-lg shadow-[#5DDCD1]/20 hover:shadow-[#5DDCD1]/40 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl mb-2 text-white">معلومات الاتصال</h3>
                <p className="text-white/60 mb-8">
                  يمكنك التواصل معنا مباشرة عبر القنوات التالية
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <info.icon className="w-6 h-6 text-[#5DDCD1]" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">{info.title}</div>
                        <div className="text-white text-lg">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="text-xl text-white mb-4">تواصل سريع</h4>
                
                <button className="w-full px-6 py-4 bg-gradient-to-l from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 text-white rounded-xl hover:from-[#25D366]/30 hover:to-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر واتساب</span>
                </button>

                {/* <button className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>أرسل بريد إلكتروني</span>
                </button> */}
              </div>

              {/* Working Hours */}
              <div className="p-6 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-xl border border-white/10">
                <h4 className="text-xl text-white mb-4">ساعات العمل</h4>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span dir="ltr">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة - السبت</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Placeholder */}
      {/* <section className="hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              موقعنا
            </h2>
            <p className="text-lg text-white/60">
              نرحب بزيارتك لمكتبنا في الرياض
            </p>
          </div>

          <div className="relative aspect-[21/9] rounded-2xl bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-white/10 mb-4">🗺️</div>
                <div className="text-white/40">خريطة الموقع</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
