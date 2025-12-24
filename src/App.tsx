import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavbarBilingual } from './components/layout/NavbarBilingual';
import { FooterBilingual } from './components/layout/FooterBilingual';
import { LoadingScreen } from './components/shared/LoadingScreen';

// Arabic Pages
import { HomePageAR } from './pages/ar/HomePageAR';
import { AboutPageAR } from './pages/ar/AboutPageAR';
import { FAQPageAR } from './pages/ar/FAQPageAR';
import { PrivacyPolicyAR } from './pages/ar/PrivacyPolicyAR';

// English Pages
import { HomePageEN } from './pages/en/HomePageEN';
import { AboutPageEN } from './pages/en/AboutPageEN';
import { ServicesPageEN } from './pages/en/ServicesPageEN';
import { PortfolioPageEN } from './pages/en/PortfolioPageEN';
import { ClientsPageEN } from './pages/en/ClientsPageEN';
import { ContactPageEN } from './pages/en/ContactPageEN';
import { FAQPageEN } from './pages/en/FAQPageEN';
import { PrivacyPolicyEN } from './pages/en/PrivacyPolicyEN';

// Arabic Pages (existing)
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isArabic = location.pathname.startsWith('/ar');
  const language: 'ar' | 'en' = isArabic ? 'ar' : 'en';

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const fallback = setTimeout(() => setIsLoading(false), 800);

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <NavbarBilingual language={language} />
      <Routes>
        {/* Redirect root to Arabic home */}
        <Route path="/" element={<Navigate to="/ar" replace />} />
        
        {/* Arabic Routes */}
        <Route path="/ar" element={<HomePageAR />} />
        <Route path="/ar/about" element={<AboutPageAR />} />
        <Route path="/ar/services" element={<div dir="rtl"><ServicesPage /></div>} />
        <Route path="/ar/portfolio" element={<div dir="rtl"><PortfolioPage /></div>} />
        <Route path="/ar/clients" element={<div dir="rtl"><ClientsPage /></div>} />
        <Route path="/ar/contact" element={<div dir="rtl"><ContactPage /></div>} />
        <Route path="/ar/faq" element={<FAQPageAR />} />
        <Route path="/ar/privacy" element={<PrivacyPolicyAR />} />
        
        {/* English Routes */}
        <Route path="/en" element={<HomePageEN />} />
        <Route path="/en/about" element={<AboutPageEN />} />
        <Route path="/en/services" element={<ServicesPageEN />} />
        <Route path="/en/portfolio" element={<PortfolioPageEN />} />
        <Route path="/en/clients" element={<ClientsPageEN />} />
        <Route path="/en/contact" element={<ContactPageEN />} />
        <Route path="/en/faq" element={<FAQPageEN />} />
        <Route path="/en/privacy" element={<PrivacyPolicyEN />} />
        
        {/* Catch all - redirect to Arabic home */}
        <Route path="*" element={<Navigate to="/ar" replace />} />
      </Routes>
      <FooterBilingual language={language} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
