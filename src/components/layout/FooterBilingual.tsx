import { Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
interface FooterBilingualProps {
  language: 'ar' | 'en';
}

export function FooterBilingual({ language }: FooterBilingualProps) {
  const isArabic = language === 'ar';
  const prefix = isArabic ? '/ar' : '/en';

  const footerContent = isArabic
    ? {
        description: 'وكالة تسويق رقمي متكاملة تصنع تجارب استثنائية للعلامات التجارية',
        servicesTitle: 'خدماتنا',
        services: [
          'التسويق الرقمي',
          'تصميم الهوية البصرية',
          'إدارة السوشيال ميديا',
          'الحملات الإعلانية',
          'إنتاج المحتوى',
        ],
        companyTitle: 'الشركة',
        company: ['من نحن', 'أعمالنا', 'عملاؤنا', 'المدونة', 'الوظائف'],
        supportTitle: 'الدعم',
        support: ['الأسئلة الشائعة', 'سياسة الخصوصية', 'اتصل بنا'],
        copyright: '© 2024 حصيف. جميع الحقوق محفوظة',
        privacy: 'سياسة الخصوصية',
        terms: 'الشروط والأحكام',
      }
    : {
        description: 'An integrated digital marketing agency creating exceptional experiences for brands',
        servicesTitle: 'Services',
        services: [
          'Digital Marketing',
          'Brand Identity Design',
          'Social Media Management',
          'Ad Campaigns',
          'Content Production',
        ],
        companyTitle: 'Company',
        company: ['About Us', 'Portfolio', 'Clients', 'Blog', 'Careers'],
        supportTitle: 'Support',
        support: ['FAQ', 'Privacy Policy', 'Contact Us'],
        copyright: '© 2024 Haseef. All rights reserved',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
      };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0A1419]" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Haseef" className="w-12 h-12" />
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">{footerContent.description}</p>
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
            <h3 className="text-white mb-6">{footerContent.servicesTitle}</h3>
            <ul className="space-y-3">
              {footerContent.services.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${prefix}/services`}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white mb-6">{footerContent.companyTitle}</h3>
            <ul className="space-y-3">
              {footerContent.company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${prefix}/about`}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white mb-6">{footerContent.supportTitle}</h3>
            <ul className="space-y-3">
              {footerContent.support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${prefix}/contact`}
                    className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {isArabic ? '© 2026 حصيف. جميع الحقوق محفوظة.' : '© 2026 Haseif. All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-white/40 hover:text-[#5DDCD1] text-sm transition-colors duration-300">
              {footerContent.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}