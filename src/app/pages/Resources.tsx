import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp, ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router";
import { B, useInViewOnce, PageHero } from "../shared";
import { ARTICLES } from "../data/articles";

const FAQS = [
  { q: "How long does a solar panel system last?", a: "Quality solar panels are warrantied for 25 years of performance, and most last 30+ years. Inverters typically last 10–15 years, while lithium batteries have a cycle life of 3,000–6,000 cycles (approximately 8–15 years depending on usage)." },
  { q: "How much electricity does a solar system generate in Kenya?", a: "Kenya has excellent solar irradiance of approximately 4.5–6 peak sun hours per day. A well-installed 1 kWp system will generate approximately 4–5 kWh of electricity per day, meaning a 5 kWp system produces roughly 20–25 kWh daily." },
  { q: "Can a solar system power my entire home or business?", a: "Yes. Our engineers conduct a detailed load analysis to size your system appropriately. A fully off-grid or hybrid system with battery storage can power your entire property 24/7, even during cloudy days or at night." },
  { q: "What is the payback period for a solar investment?", a: "For residential systems in Kenya, the typical payback period is 3–5 years depending on current electricity costs and system size. Commercial systems often see ROI within 2–4 years. After payback, you enjoy free electricity for 20+ more years." },
  { q: "Does Pekims Technologies offer after-sales support?", a: "Absolutely. We provide comprehensive after-sales support including system monitoring, preventive maintenance, warranty claims processing, and emergency technical assistance. All our installed systems come with at least a 1-year workmanship warranty." },
  { q: "Do I need permission to install a solar system in Kenya?", a: "Roof-mounted systems generally do not require planning permission. However, grid-tied systems above 1 kWp require notification to your electricity distributor (KPLC or a county utility), and all systems above 10 kWp require EPRA licensing. Pekims handles all regulatory compliance on your behalf." },
  { q: "What financing options are available?", a: "We work with several financial institutions to offer solar financing solutions including asset finance, pay-as-you-go arrangements, and lease-to-own structures. Contact us to discuss which option best suits your budget." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [ref, inView] = useInViewOnce();

  return (
    <div style={{ background: "#fff" }}>
      <div ref={ref} className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>FAQ</div>
          <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:opacity-80"
                style={{ background: open === i ? `${B.primary}08` : "#fff" }}>
                <span className="font-semibold pr-4" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark, fontSize: "0.95rem" }}>{q}</span>
                {open === i ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: B.primary }} /> : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: B.body }} />}
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  const [ref, inView] = useInViewOnce();

  return (
    <>
      <PageHero
        title="Resources & Knowledge Centre"
        subtitle="Solar guides, buying advice, FAQs and expert articles to help you make informed energy decisions."
        img="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="Resources"
      />

      <div style={{ background: B.soft }}>
        <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Solar Guides</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Latest Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map(({ slug, title, date, tag, excerpt, img, readTime }, i) => (
              <motion.div key={slug} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.09 }}>
                <Link to={`/resources/${slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="overflow-hidden h-44 bg-teal-900">
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${B.accent}18`, color: B.accent, fontFamily: "'Inter', sans-serif" }}>
                        <Tag className="inline w-3 h-3 mr-1" />{tag}
                      </span>
                      <span className="text-xs flex items-center gap-1" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>
                        <Clock className="w-3 h-3" />{readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 leading-snug" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{date}</span>
                      <span className="flex items-center gap-1 text-sm font-semibold transition-opacity group-hover:opacity-70"
                        style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <FAQ />

      <div className="py-14" style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #003f50 100%)` }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}>Have a Question Not Listed Here?</h2>
          <p className="text-white/70 mb-7" style={{ fontFamily: "'Inter', sans-serif" }}>Our solar experts are ready to answer your specific questions.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: B.accent, fontFamily: "'Poppins', sans-serif" }}>
            Ask Our Experts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
