import { useState } from 'react';
import { HelpCircle, Sparkles, Send, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function FAQPageEN() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Haseef provide?',
      answer:
        'We deliver end-to-end digital marketing — from brand identity design to campaigns, content production, and continuous optimization.',
    },
    {
      question: 'Do you support bilingual (Arabic/English) experiences?',
      answer:
        'Yes. We design, write, and optimize every touchpoint in both Arabic and English to keep your messaging consistent across markets.',
    },
    {
      question: 'How long does it take to kick off a project?',
      answer:
        'Discovery and planning usually take 1-2 weeks. Launch timelines vary by scope, but we share a clear roadmap and milestones on day one.',
    },
    {
      question: 'Can you manage our social media accounts?',
      answer:
        'Absolutely. We handle calendars, creative assets, publishing, community management, and reporting so your team can stay focused on the business.',
    },
    {
      question: 'Do you provide performance reports?',
      answer:
        'Every engagement includes dashboards and monthly/weekly reports with KPIs, ad spend, and clear next-step recommendations.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Share your goals via the contact page. We will schedule a short call, align on objectives, and deliver a tailored proposal within 48 hours.',
    },
  ];

  return (
    <div className="min-h-screen pt-20" dir="ltr">
      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-left" color="turquoise" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative inline-flex items-center gap-3 px-5 py-2 mb-6 bg-white/5 border border-white/10 rounded-full">
            <Sparkles className="w-5 h-5 text-[#5DDCD1]" />
            <span className="text-sm text-white/70">Answers in one place</span>
          </div>
          <h1 className="text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mt-4 leading-relaxed">
            Quick answers about our process, deliverables, and how we keep your brand moving fast.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B1620] overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex flex-col gap-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#5DDCD1]/40 bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A]' : 'border-white/10 bg-gradient-to-br from-[#1A2B3A]/60 to-[#0F1D2A]/60'}`}
                >
                  <button
                    className="w-full flex items-center gap-4 p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110' : ''}`}>
                      <HelpCircle className="w-5 h-5 text-[#5DDCD1]" />
                    </div>
                    <span className="flex-1 text-white font-semibold text-base">{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#5DDCD1] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pl-20 text-white/70 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="pyramid" size="md" position="top-right" color="mixed" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#5DDCD1]/15 via-[#733A93]/10 to-[#0F1D2A]/60 border border-white/10 backdrop-blur">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[#5DDCD1] text-sm mb-2">Need something specific?</p>
                <h2 className="text-3xl text-white font-bold mb-2">Let’s tailor the right plan for you</h2>
                <p className="text-white/70 max-w-2xl">
                  Tell us about your goals and channels you care about most. We’ll recommend the ideal mix of strategy,
                  creative, and media to get you there.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/en/contact"
                  className="flex-1 md:flex-none px-5 py-3 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg font-semibold hover:bg-[#4DCCC1] transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  Contact Us
                </Link>
                <Link
                  to="/en/services"
                  className="flex-1 md:flex-none px-5 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 border border-white/10 transition-colors duration-300 whitespace-nowrap text-sm text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
