import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";

interface NavbarBilingualProps {
  language: 'ar' | 'en';
}

export function NavbarBilingual({ language }: NavbarBilingualProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isArabic = language === 'ar';

  const navLinks = isArabic
    ? [
        { name: 'الرئيسية', href: '/ar' },
        { name: 'من نحن', href: '/ar/about' },
        { name: 'خدماتنا', href: '/ar/services' },
        { name: 'أعمالنا', href: '/ar/portfolio' },
        { name: 'عملاؤنا', href: '/ar/clients' },
        { name: 'تواصل معنا', href: '/ar/contact' },
      ]
    : [
        { name: 'Home', href: '/en' },
        { name: 'About', href: '/en/about' },
        { name: 'Services', href: '/en/services' },
        { name: 'Portfolio', href: '/en/portfolio' },
        { name: 'Clients', href: '/en/clients' },
        { name: 'Contact', href: '/en/contact' },
      ];

  const ctaText = isArabic ? 'احجز استشارة مجانية' : 'Book Free Consultation';

  const isActive = (path: string) => location.pathname === path;

  const switchLanguage = () => {
    const currentPath = location.pathname;
    if (currentPath.startsWith('/ar')) {
      navigate(currentPath.replace('/ar', '/en'));
    } else if (currentPath.startsWith('/en')) {
      navigate(currentPath.replace('/en', '/ar'));
    }
  };

  return (
    <nav className={`fixed top-0 ${isArabic ? 'right-0 left-0' : 'left-0 right-0'} z-50 bg-[#0F1D2A]/80 backdrop-blur-xl border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between h-20 ${isArabic ? '' : 'flex-row-reverse'}`}>
          {/* CTA Button + Language Switcher - Left/Right side */}
          <div className={`hidden lg:flex items-center gap-4 ${isArabic ? '' : 'flex-row-reverse'}`}>
            <button className="px-6 py-2.5 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg hover:bg-[#4DCCC1] transition-all duration-300 shadow-lg shadow-[#5DDCD1]/20 whitespace-nowrap">
              {ctaText}
            </button>
            <button
              onClick={switchLanguage}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
            >
              <Globe className="w-4 h-4 text-[#5DDCD1]" />
              <span className="text-sm text-white">{isArabic ? 'EN' : 'AR'}</span>
            </button>
          </div>

          {/* Navigation Links - Center */}
          <div className={`hidden lg:flex items-center gap-8 ${isArabic ? '' : 'flex-row-reverse'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-[#5DDCD1]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo - Right/Left side */}
          <Link to={isArabic ? '/ar' : '/en'} className="flex items-center">
            <img src={logo} alt="Haseef" className="w-12 h-12" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-2 transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-[#5DDCD1]'
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <button className="flex-1 px-6 py-2.5 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg hover:bg-[#4DCCC1] transition-all duration-300 text-sm">
                  {ctaText}
                </button>
                <button
                  onClick={switchLanguage}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg"
                >
                  <Globe className="w-4 h-4 text-[#5DDCD1]" />
                  <span className="text-sm text-white">{isArabic ? 'EN' : 'AR'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
