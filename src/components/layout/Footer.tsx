import { Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

export function Footer() {
  const footerLinks = {
    services: [
      { name: 'التسويق الرقمي', href: '/services' },
      { name: 'تصميم الهوية البصرية', href: '/services' },
      { name: 'إدارة السوشيال ميديا', href: '/services' },
      { name: 'الحملات الإعلانية', href: '/services' },
      { name: 'إنتاج المحتوى', href: '/services' }
    ],
    company: [
      { name: 'من نحن', href: '/about' },
      { name: 'أعمالنا', href: '/portfolio' },
      { name: 'عملاؤنا', href: '/clients' },
      { name: 'المدونة', href: '#' },
      { name: 'الوظائف', href: '#' }
    ],
    support: [
      { name: 'مركز المساعدة', href: '#' },
      { name: 'الأسئلة الشائعة', href: '#' },
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'الشروط والأحكام', href: '#' },
      { name: 'اتصل بنا', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' }
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
            <p className="text-white/60 mb-6 leading-relaxed">
              وكالة تسويق رقمي متكاملة تصنع تجارب استثنائية للعلامات التجارية في المملكة والخليج
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#5DDCD1]/20 border border-white/10 hover:border-[#5DDCD1]/40 flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-[#5DDCD1] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white mb-6">الشركة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
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
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
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
            © 2024 حصيف. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-white/40 hover:text-[#5DDCD1] text-sm transition-colors duration-300">
              سياسة الخصوصية
            </Link>
            <Link to="#" className="text-white/40 hover:text-[#5DDCD1] text-sm transition-colors duration-300">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
