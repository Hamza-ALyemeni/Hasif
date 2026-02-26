import { FaInstagram, FaTiktok, FaXTwitter, FaSnapchat, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

export function Footer() {
  const footerLinks = {
    company: [
      { name: 'من نحن', href: '/about' },
      { name: 'خدماتنا', href: '/services' },
      { name: 'أعمالنا', href: '/portfolio' },
      { name: 'عملاؤنا', href: '#' },
      { name: 'الوظائف', href: '#' },
      { name: 'تواصل معنا', href: '/contact' }
    ],
    services: [
      { name: 'إدارة المنصات', href: '/services' },
      { name: 'الهوية البصرية', href: '/services' },
      { name: 'الحملات الإعلانية', href: '/services' },
      { name: 'المواقع والمتاجر', href: '/services' },
      { name: 'إنتاج المحتوى', href: '/services' }
    ],
    support: [
      { name: 'الأسئلة الشائعة', href: '/ar/faq' },
      { name: 'سياسة الخصوصية', href: '/ar/privacy-policy' },
      { name: 'الشروط والأحكام', href: '/ar/terms-conditions' },
      { name: 'المدونة', href: '#' }
    ]
  };

   const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/Haseif.sa', label: 'Instagram' },
    { icon: FaXTwitter, href: 'https://x.com/Haseif_sa', label: 'X' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaSnapchat, href: 'https://www.snapchat.com/@haseif.sa', label: 'Snapchat' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@haseif.sa', label: 'TikTok' }
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0A1419]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="حصيف" className="w-12 h-12" />
              <span className="text-2xl text-white">حصيف</span>
            </div>
            <p className="text-white/60 mb-4 leading-relaxed text-sm">
              حصيف وكالة تسويق رقمي تعمل بعقلية استراتيجية، تمزج بين الإبداع والتحليل لبناء حضور رقمي محسوب يحقق نتائج واضحة ومستدامة.
            </p>
            <p className="text-[#5DDCD1] mb-6 text-sm italic">
              ليس ضجيجاً، بل قرار محسوب.
            </p>
            <div className="text-white/60 text-sm space-y-1 mb-6">
              <p>الرياض، المملكة العربية السعودية</p>
              <p>info@haseif.com</p>
              <p>+966 54 326 8744</p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#5DDCD1]/20 border border-white/10 hover:border-[#5DDCD1]/40 flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-[#5DDCD1] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white mb-6">الشركة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white mb-6">الخدمات</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white mb-6">الدعم</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 حصيف. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/ar/privacy-policy" className="text-white/40 hover:text-[#5DDCD1] text-sm transition-colors duration-300">
              سياسة الخصوصية
            </Link>
            <Link to="/ar/terms-conditions" className="text-white/40 hover:text-[#5DDCD1] text-sm transition-colors duration-300">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
