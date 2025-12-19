import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { NavbarBilingual } from './components/layout/NavbarBilingual';
import { FooterBilingual } from './components/layout/FooterBilingual';

// Arabic Pages
import { HomePageAR } from './pages/ar/HomePageAR';
import { AboutPageAR } from './pages/ar/AboutPageAR';

// English Pages
import { HomePageEN } from './pages/en/HomePageEN';
import { AboutPageEN } from './pages/en/AboutPageEN';
import { ServicesPageEN } from './pages/en/ServicesPageEN';
import { PortfolioPageEN } from './pages/en/PortfolioPageEN';
import { ClientsPageEN } from './pages/en/ClientsPageEN';
import { ContactPageEN } from './pages/en/ContactPageEN';

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
  const location = useLocation();
  const isArabic = location.pathname.startsWith('/ar');
  const language: 'ar' | 'en' = isArabic ? 'ar' : 'en';

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
        
        {/* English Routes */}
        <Route path="/en" element={<HomePageEN />} />
        <Route path="/en/about" element={<AboutPageEN />} />
        <Route path="/en/services" element={<ServicesPageEN />} />
        <Route path="/en/portfolio" element={<PortfolioPageEN />} />
        <Route path="/en/clients" element={<ClientsPageEN />} />
        <Route path="/en/contact" element={<ContactPageEN />} />
        
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
