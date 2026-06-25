import { Link } from "react-router";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Globe, Shield, Zap, Users } from "lucide-react";
import { B, PARTNERS, useInViewOnce, PageHero } from "../shared";

const PARTNER_DETAILS = [
  { name: "SUOER", origin: "China", focus: "Inverters & Batteries", desc: "Global leader in hybrid inverter and battery storage technology, known for premium quality and reliability." },
  { name: "RIIOSUN", origin: "China", focus: "Solar Panels", desc: "Manufacturer of high-efficiency monocrystalline and bifacial solar panels with Tier-1 certifications." },
  { name: "HOBER", origin: "China", focus: "Solar Water Pumps", desc: "Specialist in solar-powered submersible and surface pumps for agricultural and water supply applications." },
  { name: "Blue Carbon", origin: "UAE", focus: "Energy Solutions", desc: "Provides integrated renewable energy products with a focus on emerging markets across Africa and Asia." },
  { name: "Entelechy", origin: "Kenya", focus: "Engineering Consultancy", desc: "Local engineering partner for system design, certification and quality assurance across East Africa." },
  { name: "East African Cables", origin: "Kenya", focus: "Electrical Cables", desc: "Kenya's premier cable manufacturer, supplying UV-rated DC and AC solar wiring solutions since 1964." },
];

const BENEFITS = [
  { icon: Shield, title: "Certified Products", desc: "All partner products carry IEC, CE or local KEBS certification for safety and quality assurance." },
  { icon: Globe, title: "Global Reach", desc: "Our partner network spans China, UAE and East Africa, ensuring access to the best technology worldwide." },
  { icon: Zap, title: "Latest Technology", desc: "We continuously evaluate and onboard partners offering the most efficient and cost-effective solar technology." },
  { icon: Users, title: "Local Support", desc: "Our local partners provide technical support, spare parts and warranty services right here in Kenya." },
];

export default function Partners() {
  const [ref, inView] = useInViewOnce();
  const [benefitsRef, benefitsInView] = useInViewOnce();

  return (
    <>
      <PageHero
        title="Our Technology Partners"
        subtitle="We partner with globally certified manufacturers to deliver premium, reliable solar products to our clients."
        img="https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="Partners"
      />

      {/* Partner Cards */}
      <div style={{ background: B.soft }}>
        <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Our Network</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Trusted Technology Partners</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_DETAILS.map(({ name, origin, focus, desc }, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-white rounded-2xl p-7 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl"
                    style={{ background: `${B.primary}10`, color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                    {name.slice(0, 2)}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: `${B.secondary}20`, color: B.secondary, fontFamily: "'Inter', sans-serif" }}>{origin}</span>
                </div>
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{name}</h3>
                <div className="text-sm font-medium mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>{focus}</div>
                <p className="text-sm leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="py-12 overflow-hidden border-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <div key={i} className="flex-shrink-0 px-10 py-4 rounded-xl border font-bold text-lg"
              style={{ fontFamily: "'Poppins', sans-serif", color: B.body, borderColor: "rgba(0,0,0,0.08)", background: "#fff" }}>{name}</div>
          ))}
        </motion.div>
      </div>

      {/* Benefits */}
      <div style={{ background: "#fff" }}>
        <div ref={benefitsRef} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={benefitsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Why It Matters</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Partnership Benefits for You</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} animate={benefitsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.09 }}
                className="text-center p-7 rounded-2xl" style={{ background: B.soft }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${B.primary}12` }}>
                  <Icon className="w-7 h-7" style={{ color: B.primary }} />
                </div>
                <h3 className="font-semibold mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
