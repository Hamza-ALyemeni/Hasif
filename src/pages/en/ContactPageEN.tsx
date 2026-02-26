import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { CosmicBackground } from '../../components/shared/CosmicBackground';
import { Shape3D } from '../../components/shared/Shape3D';

export function ContactPageEN() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@haseif.co',
      href: 'mailto:info@haseif.co'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+966543268744',
      href: 'tel:+966543268744'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Riyadh, Saudi Arabia',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20" dir="ltr">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="sphere" size="lg" position="top-left" color="turquoise" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/30 to-[#733A93]/30 blur-3xl"></div>
            <h1 className="relative text-5xl md:text-7xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
              Contact Us
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your inquiries and help you achieve your digital goals
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        <CosmicBackground />
        <Shape3D variant="cube" size="md" position="bottom-right" color="purple" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#5DDCD1]/10 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 p-8 lg:p-12 bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] rounded-2xl border border-white/10">
                <h3 className="text-3xl mb-2 text-white font-bold">Send Us a Message</h3>
                <p className="text-white/60 mb-8">We'll get back to you as soon as possible</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#5DDCD1]/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#5DDCD1]/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#5DDCD1]/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#5DDCD1] text-[#0F1D2A] rounded-lg hover:bg-[#4DCCC1] transition-all duration-300 shadow-lg shadow-[#5DDCD1]/20 hover:shadow-[#5DDCD1]/40 flex items-center justify-center gap-2 font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl mb-2 text-white font-bold">Contact Information</h3>
                <p className="text-white/60 mb-8">
                  You can reach us directly through the following channels
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-xl border border-white/10 hover:border-[#5DDCD1]/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5DDCD1]/20 to-[#733A93]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <info.icon className="w-6 h-6 text-[#5DDCD1]" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">{info.title}</div>
                        <div className="text-white text-lg">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="text-xl text-white mb-4 font-semibold">Quick Contact</h4>
                
                <a href="https://wa.me/966543268744" target="_blank" rel="noreferrer" className="w-full px-6 py-4 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 text-white rounded-xl hover:from-[#25D366]/30 hover:to-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact via WhatsApp</span>
                </a>

                {/* <a
                  href="mailto:info@haseef.sa"
                  className="block w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a> */}
              </div>

              {/* Working Hours */}
              {/* <div className="p-6 bg-gradient-to-br from-[#1A2B3A]/50 to-[#0F1D2A]/50 rounded-xl border border-white/10">
                <h4 className="text-xl text-white mb-4 font-semibold">Working Hours</h4>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Placeholder */}
      <section className="hidden">
        <CosmicBackground />
        <Shape3D variant="torus" size="lg" position="top-right" color="mixed" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DDCD1]/20 to-[#733A93]/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-6xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Our Location
              </h2>
            </div>
            <p className="text-lg text-white/60">
              We welcome you to visit our office in Riyadh
            </p>
          </div>

          <div className="relative aspect-[21/9] rounded-2xl bg-gradient-to-br from-[#1A2B3A] to-[#0F1D2A] border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-white/10 mb-4">🗺️</div>
                <div className="text-white/40">Location Map</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

