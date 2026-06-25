import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, ClipboardList, MapPin, Cpu, Wrench, HeartHandshake } from "lucide-react";
import { B, SOLUTIONS, useInViewOnce, PageHero } from "../shared";

const PROCESS = [
  { icon: ClipboardList, step: "01", title: "Free Consultation", desc: "Our energy advisors conduct a detailed discussion to understand your energy needs, budget and goals." },
  { icon: MapPin, step: "02", title: "Site Survey", desc: "Our engineers perform an on-site assessment of your property, measuring solar potential and load requirements." },
  { icon: Cpu, step: "03", title: "System Design", desc: "We engineer a custom solar system design optimized for your specific location, usage patterns and budget." },
  { icon: Wrench, step: "04", title: "Professional Installation", desc: "Our certified technicians install your system to the highest safety and quality standards." },
  { icon: HeartHandshake, step: "05", title: "After-Sales Support", desc: "We provide ongoing monitoring, maintenance and technical support to keep your system performing at its best." },
];

const SOLUTION_DETAILS = [
  { ...SOLUTIONS[0], features: ["Lithium & lead-acid battery options", "Hybrid and off-grid inverters", "Remote monitoring capability", "Automatic grid switching", "Surge protection included"] },
  { ...SOLUTIONS[1], features: ["DC and AC pump configurations", "Suitable for boreholes and rivers", "Variable speed drive control", "Float switch automation", "Dry-run protection"] },
  { ...SOLUTIONS[2], features: ["Flat plate and evacuated tube collectors", "150L – 1000L tank capacities", "Corrosion-resistant materials", "Frost protection system", "10-year tank warranty"] },
  { ...SOLUTIONS[3], features: ["Integrated solar panel + battery + LED", "Dusk-to-dawn auto control", "Motion sensing option", "IP65 weatherproof rating", "10-year LED lifespan"] },
  { ...SOLUTIONS[4], features: ["Free site assessment included", "Structural and electrical engineering", "EPRA-compliant installations", "Performance commissioning test", "Warranty and documentation"] },
  { ...SOLUTIONS[5], features: ["MPPT and PWM charge controllers", "Aluminium and steel mounting frames", "UV-resistant DC cabling", "Digital energy meters", "System monitoring hardware"] },
];

export default function Solutions() {
  const [solutionsRef, solutionsInView] = useInViewOnce();
  const [processRef, processInView] = useInViewOnce();

  return (
    <>
      <PageHero
        title="Our Solar Solutions"
        subtitle="Comprehensive renewable energy solutions engineered for homes, businesses, farms and institutions across Kenya."
        img="https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="Solutions"
      />

      {/* Solutions Grid */}
      <div style={{ background: B.soft }}>
        <div ref={solutionsRef} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={solutionsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>What We Offer</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Comprehensive Solar Solutions</h2>
          </motion.div>

          <div className="space-y-10">
            {SOLUTION_DETAILS.map(({ title, desc, icon: Icon, img, features }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} animate={solutionsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl overflow-hidden shadow-sm border`}
                style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className={`overflow-hidden h-64 lg:h-auto lg:min-h-[340px] bg-teal-900 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className={`p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${B.primary}12` }}>
                    <Icon className="w-6 h-6" style={{ color: B.primary }} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{title}</h3>
                  <p className="leading-relaxed mb-6" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: B.accent }} />
                        <span className="text-sm" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:scale-105"
                    style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #003f50 100%)` }}>
        <div ref={processRef} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>How We Work</div>
            <h2 className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Our Installation Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {PROCESS.map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 40 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border relative"
                style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.12)" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: B.accent, color: "#fff", fontFamily: "'Poppins', sans-serif" }}>{step}</div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto my-5" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
