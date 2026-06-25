import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, ClipboardList, Wrench, CheckCircle } from "lucide-react";
import { B, useInViewOnce, PageHero } from "../shared";

const QUICK_ACTIONS = [
  { icon: MapPin, title: "Request Site Visit", desc: "Book a free on-site assessment from our engineers." },
  { icon: ClipboardList, title: "Get a Quotation", desc: "Receive a detailed, no-obligation system quotation." },
  { icon: Wrench, title: "Technical Support", desc: "Get help with an existing Pekims installation." },
  { icon: MessageSquare, title: "General Enquiry", desc: "Ask us anything about our products or services." },
];

export default function Contact() {
  const [ref, inView] = useInViewOnce();
  const [formRef, formInView] = useInViewOnce();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Request Site Visit", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1.5px solid rgba(0,0,0,0.1)",
    fontSize: "14px", outline: "none", fontFamily: "'Inter', sans-serif", color: B.dark, background: "#fff",
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team of renewable energy experts. We're here to help you make the switch to solar."
        img="https://images.unsplash.com/photo-1660330589257-813305a4a383?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="Contact"
      />

      {/* Quick Actions */}
      <div style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #004557 100%)` }}>
        <div ref={ref} className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_ACTIONS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 border cursor-pointer transition-all hover:scale-[1.02]"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderColor: "rgba(255,255,255,0.12)" }}
                onClick={() => setForm(f => ({ ...f, subject: title }))}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(122,189,20,0.2)" }}>
                  <Icon className="w-5 h-5" style={{ color: B.accent }} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</h3>
                <p className="text-xs text-white/55" style={{ fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form + Info */}
      <div style={{ background: B.soft }}>
        <div ref={formRef} className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={formInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <h2 className="font-bold text-2xl mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>Send Us a Message</h2>
              <p className="mb-7" style={{ color: B.body, fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
                Fill in the form below and our team will get back to you within 24 hours.
              </p>

              {sent ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${B.accent}15` }}>
                    <CheckCircle className="w-10 h-10" style={{ color: B.accent }} />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>Message Sent!</h3>
                  <p className="mb-6" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>
                    Thank you for reaching out. One of our energy advisors will contact you shortly.
                  </p>
                  <button onClick={() => setSent(false)} className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Full Name *</label>
                      <input required style={inputStyle} placeholder="John Kamau" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Email Address *</label>
                      <input required type="email" style={inputStyle} placeholder="john@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Phone Number</label>
                      <input style={inputStyle} placeholder="+254 700 000 000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Subject</label>
                      <select style={inputStyle} value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                        {["Request Site Visit", "Get a Quotation", "Technical Support", "General Enquiry"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Message *</label>
                    <textarea required rows={5} style={{ ...inputStyle, resize: "none" }} placeholder="Tell us about your energy needs or how we can help..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-lg"
                    style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={formInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl p-7 shadow-sm border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <h3 className="font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "Call Us", value: "0713 910 900 / 0748 034 558", href: "tel:+254713910900" },
                    { icon: Mail, label: "Email Address", value: "info@pekims.co.ke", href: "mailto:info@pekims.co.ke" },
                    { icon: MapPin, label: "Office Location", value: "Nyamakima House Complex, Duruma Road, Nairobi", href: "https://www.google.com/maps?q=-1.2836528,36.8307293" },
                    { icon: MessageSquare, label: "WhatsApp", value: "0713 910 900 / 0748 034 558", href: "https://wa.me/254713910900?text=Hello%20Pekims%20Technologies!%20I%27d%20like%20to%20inquire%20about%20your%20solar%20solutions." },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href}
                      className="flex items-start gap-4 group transition-opacity hover:opacity-70">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${B.primary}10` }}>
                        <Icon className="w-5 h-5" style={{ color: B.primary }} />
                      </div>
                      <div>
                        <div className="text-xs font-medium mb-0.5" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{label}</div>
                        <div className="text-sm font-semibold" style={{ color: B.dark, fontFamily: "'Poppins', sans-serif" }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-7 text-white" style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #004557 100%)` }}>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Office Hours</h3>
                <div className="space-y-2 text-sm text-white/75" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-white">8:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-white">9:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-white">Emergency Only</span></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <iframe
                  title="Pekims Technologies Location"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=-1.2836528,36.8307293&z=16&output=embed"
                />
                <a
                  href="https://www.google.com/maps?q=-1.2836528,36.8307293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
