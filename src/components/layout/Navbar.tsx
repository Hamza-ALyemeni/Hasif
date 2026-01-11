import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'AR' | 'EN'>('AR');
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'الخدمات', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'عملاؤنا', href: '/clients' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#0F1D2A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* CTA Button + Language Switcher - Left side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg hover:bg-[#4DCCC1] transition-all duration-300 shadow-lg shadow-[#5DDCD1]/20"
            >
              احجز استشارة مجانية
            </Link>
            <button
              onClick={() => setLanguage(language === 'AR' ? 'EN' : 'AR')}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
            >
              <Globe className="w-4 h-4 text-[#5DDCD1]" />
              <span className="text-sm text-white">{language}</span>
            </button>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center gap-8">
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

          {/* Logo - Right side */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="á?áćâ?â?" className="w-10 h-10" />
            <span className="text-2xl text-white">á?áćâ?â?</span>
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
                <Link
                  to="/contact"
                  className="flex-1 px-6 py-2.5 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg hover:bg-[#4DCCC1] transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  احجز استشارة مجانية
                </Link>
                <button
                  onClick={() => setLanguage(language === 'AR' ? 'EN' : 'AR')}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg"
                >
                  <Globe className="w-4 h-4 text-[#5DDCD1]" />
                  <span className="text-sm text-white">{language}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
