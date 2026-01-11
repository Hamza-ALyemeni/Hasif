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
        servicesTitle: 'الخدمات',
        services: [
          { label: 'التسويق الرقمي المتكامل', path: `${prefix}/services` },
          { label: 'تصميم الهوية البصرية', path: `${prefix}/services` },
          { label: 'إدارة وسائل التواصل الاجتماعي', path: `${prefix}/services` },
          { label: 'الحملات الإعلانية', path: `${prefix}/services` },
          { label: 'إنتاج المحتوى', path: `${prefix}/services` },
        ],
        companyTitle: 'روابط',
        company: [
          { label: 'تواصل معنا', path: `${prefix}/contact` },
          { label: 'انضم إلى فريقنا', path: '#' },
          { label: 'كن شريكًا معنا', path: '#' },
        ],
        supportTitle: 'الدعم',
        support: [
          { label: 'الأسئلة الشائعة', path: `${prefix}/faq` },
          { label: 'سياسة الخصوصية', path: `${prefix}/privacy` },
          { label: 'تواصل معنا', path: `${prefix}/contact` },
        ],
        copyright: '© 2026 حسيف. جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        privacyLink: `${prefix}/privacy`,
      }
    : {
        description: 'An integrated digital marketing agency creating exceptional experiences for brands',
        servicesTitle: 'Services',
        services: [
          { label: 'Digital Marketing', path: `${prefix}/services` },
          { label: 'Brand Identity Design', path: `${prefix}/services` },
          { label: 'Social Media Management', path: `${prefix}/services` },
          { label: 'Ad Campaigns', path: `${prefix}/services` },
          { label: 'Content Production', path: `${prefix}/services` },
        ],
        companyTitle: 'links',
        company: [
          { label: 'Contact Us', path: `${prefix}/contact` },
          { label: 'Join our team', path: '#' },
          { label: 'Become our partner', path: '#' },
        ],
        supportTitle: 'Support',
        support: [
          { label: 'FAQ', path: `${prefix}/faq` },
          { label: 'Privacy Policy', path: `${prefix}/privacy` },
          { label: 'Contact Us', path: `${prefix}/contact` },
        ],
        copyright: '© 2026 Haseef. All rights reserved.',
        privacy: 'Privacy Policy',
        privacyLink: `${prefix}/privacy`,
      };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const whatsappLink = 'https://wa.me/1234567890';

  return (
    <>
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
                      to={item.path}
                      className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                    >
                      {item.label}
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
                      to={item.path}
                      className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                    >
                      {item.label}
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
                      to={item.path}
                      className="text-white/60 hover:text-[#5DDCD1] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">{footerContent.copyright}</p>
            <div className="flex items-center gap-6">
              <Link to={footerContent.privacyLink} className="text-white/40 hover:text-[#5DDCD1] text-sm transition-colors duration-300">
                {footerContent.privacy}
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <a
        href={whatsappLink}
        aria-label="WhatsApp"
        className="fixed left-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        target="_blank"
        rel="noreferrer"
        title="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.41c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.24-1.38-.83-.74-1.39-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.33 0 1.37 1 2.69 1.14 2.88.14.19 1.97 3 4.78 4.2.67.29 1.2.46 1.6.59.67.21 1.27.18 1.75.11.53-.08 1.66-.68 1.9-1.34.23-.66.23-1.23.16-1.34-.07-.11-.26-.18-.54-.32z" />
          <path d="M16.02 3.2c-6.84 0-12.4 5.56-12.4 12.4 0 2.17.56 4.28 1.63 6.15L3.5 28.8l7.23-1.9c1.8.98 3.82 1.5 5.86 1.5 6.84 0 12.4-5.56 12.4-12.4 0-6.84-5.56-12.4-12.4-12.4zm0 22.74c-1.88 0-3.72-.5-5.34-1.45l-.38-.22-4.29 1.13 1.15-4.18-.25-.4c-1-1.6-1.53-3.45-1.53-5.34 0-5.5 4.47-9.97 9.97-9.97 5.5 0 9.97 4.47 9.97 9.97 0 5.5-4.47 9.97-9.97 9.97z" />
        </svg>
      </a>
    </>
  );
}
