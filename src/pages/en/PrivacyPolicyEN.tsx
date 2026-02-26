import { ShieldCheck, Lock, FileText, Bell, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function PrivacyPolicyEN() {
  const sections = [
    {
      title: 'What we collect',
      icon: FileText,
      points: [
        'Contact details you share through our forms or email, such as your name, email, phone, company, and project needs.',
        'Any files or brand assets you choose to send so we can understand scope and design preferences.',
        'Basic technical logs (IP address, browser type) kept briefly to maintain site reliability and security.',
      ],
    },
    {
      title: 'What we do not collect',
      icon: ShieldCheck,
      points: [
        'No accounts, passwords, or payment details are collected on this site.',
        'No ad tracking or marketing cookies are used; only essential site functionality.',
        'No biometric, health, or other sensitive categories of data are requested.',
      ],
    },
    {
      title: 'How we use your info',
      icon: Send,
      points: [
        'Respond to your inquiries, prepare proposals, and coordinate ongoing projects.',
        'Share relevant updates about timelines, deliverables, or necessary service changes.',
        'Improve how we communicate and scope work based on the questions you submit.',
      ],
    },
    {
      title: 'Sharing',
      icon: Bell,
      points: [
        'We do not sell or rent your information.',
        'If needed to deliver a project, we may share limited details with trusted vendors (e.g., hosting or analytics providers).',
        'These vendors must protect the data and use it only for the agreed purpose.',
      ],
    },
    {
      title: 'Security and retention',
      icon: Lock,
      points: [
        'Access is limited to team members who need it to serve you.',
        'We use encrypted channels where possible and regularly review access.',
        'Data is kept only as long as necessary for the purposes above or to meet legal obligations.',
      ],
    },
    {
      title: 'Your choices',
      icon: ShieldCheck,
      points: [
        'You can request a copy, correction, or deletion of your information at any time.',
        'You may opt out of non-essential communications by letting us know.',
        'If you have concerns about how your data is handled, contact us and we will respond quickly.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20" dir="ltr">
      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-left" color="mixed" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative inline-flex items-center gap-3 px-5 py-2 mb-6 bg-white/5 border border-white/10 rounded-full">
            <ShieldCheck className="w-5 h-5 text-[#5DDCD1]" />
            <span className="text-sm text-white/70">Privacy first</span>
          </div>
          <h1 className="text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mt-4 leading-relaxed">
            A simple overview of what we collect when you contact us about services and how we keep it safe.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1A2B3A]/60 to-[#0F1D2A]/60 border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-[#5DDCD1]" />
                  </div>
                  <h3 className="text-xl text-white font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3 text-white/70 leading-relaxed list-disc list-inside">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-right" color="turquoise" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#5DDCD1]/15 via-[#733A93]/10 to-[#0F1D2A]/60 border border-white/10 backdrop-blur">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[#5DDCD1] text-sm mb-2">Questions about privacy?</p>
                <h2 className="text-3xl text-white font-bold mb-2">We are here to help</h2>
                <p className="text-white/70 max-w-2xl">
                  If you want a copy of your information, need corrections, or prefer we delete it, reach out. We will
                  respond promptly and transparently.
                </p>
              </div>
              <Link
                to="/en/contact"
                className="px-5 py-3 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg font-semibold hover:bg-[#4DCCC1] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap text-sm shrink-0"
              >
                <Send className="w-4 h-4 shrink-0" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
