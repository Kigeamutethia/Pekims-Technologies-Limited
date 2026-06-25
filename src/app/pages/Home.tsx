import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Sun, Battery, Droplets, Lightbulb, Wrench, Shield,
  Star, ArrowRight, Zap, Leaf, Clock, CheckCircle,
  ChevronDown, Globe, Thermometer, X, Phone,
} from "lucide-react";
import { B, HERO_SLIDES, SOLUTIONS, PRODUCTS, TESTIMONIALS, PARTNERS, PROJECTS, useInViewOnce, CountUp } from "../shared";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {HERO_SLIDES.map(({ img, alt }, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000 bg-teal-950"
          style={{ opacity: i === slide ? 1 : 0 }}>
          <img src={img} alt={alt} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(0,102,128,0.55) 55%, rgba(0,0,0,0.45) 100%)" }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="35%" x2="100%" y2="65%" stroke="#7ABD14" strokeWidth="1.5" strokeDasharray="10,18">
          <animate attributeName="stroke-dashoffset" from="0" to="-56" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="65%" x2="100%" y2="25%" stroke="#006680" strokeWidth="1" strokeDasharray="6,20">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="3.5s" repeatCount="indefinite" />
        </line>
      </svg>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: `${4 + (i % 5)}px`, height: `${4 + (i % 5)}px`, background: i % 2 === 0 ? B.accent : B.primary, opacity: 0.22, left: `${12 + i * 11}%`, top: `${20 + (i * 17) % 60}%`, animation: `floatUp ${3 + (i % 3)}s ease-in-out infinite ${i * 0.4}s` }} />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="max-w-5xl">
          <h1 className="text-white font-bold leading-[1.08] mb-6"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            Powering Tomorrow Through{" "}
            <span style={{ color: B.accent }}>Intelligent Solar</span> Energy
          </h1>
          <p className="text-white/70 leading-relaxed mb-10 mx-auto max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
            Design. Install. Optimize. — Reliable renewable energy solutions engineered for homes, businesses, farms and institutions across Kenya.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="px-9 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105"
              style={{ background: B.accent, fontFamily: "'Poppins', sans-serif", boxShadow: "0 6px 28px rgba(122,189,20,0.45)" }}>
              Get Free Consultation
            </Link>
            <Link to="/solutions"
              className="px-9 py-4 rounded-full font-semibold text-white text-base border border-white/35 transition-all hover:bg-white/10"
              style={{ fontFamily: "'Poppins', sans-serif", backdropFilter: "blur(4px)" }}>
              Explore Solutions <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === slide ? "28px" : "8px", height: "8px", background: i === slide ? B.accent : "rgba(255,255,255,0.35)" }} />
        ))}
      </div>
      <div className="absolute bottom-8 right-8 text-white/30 animate-bounce z-10">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
}

// ─── About Teaser ─────────────────────────────────────────────────────────────
function AboutTeaser() {
  const [ref, inView] = useInViewOnce();
  const stats = [
    { label: "Established", num: 2017, suffix: "+", icon: Clock },
    { label: "Projects Delivered", num: 500, suffix: "+", icon: CheckCircle },
    { label: "Renewable Focus", num: 100, suffix: "%", icon: Leaf },
    { label: "Support", num: 24, suffix: "/7", icon: Shield },
  ];
  return (
    <div style={{ background: B.soft }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ background: B.primary }}>
              <img src="https://images.unsplash.com/photo-1780445392528-4895da4b2cb8?w=800&h=900&fit=crop&auto=format" alt="Pekims solar installation" className="w-full h-[440px] object-cover opacity-90" style={{ mixBlendMode: "luminosity" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-2xl" style={{ background: B.primary }}>
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>500+</div>
              <div className="text-sm text-white/75 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Projects Completed</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Trusted Energy Partner</div>
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: B.dark }}>
              Renewable Energy Solutions You Can Trust
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: B.body, fontFamily: "'Inter', sans-serif", fontSize: "1.05rem" }}>
              Founded in 2017, Pekims Technologies delivers innovative renewable energy solutions designed to power homes, businesses and agricultural operations with reliable, affordable and sustainable energy across Kenya.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ label, num, suffix, icon: Icon }) => (
                <div key={label} className="rounded-xl p-5 bg-white shadow-sm border" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
                  <Icon className="w-5 h-5 mb-3" style={{ color: B.primary }} />
                  <div className="text-2xl font-bold mb-0.5" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                    <CountUp end={num} suffix={suffix} />
                  </div>
                  <div className="text-sm" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-70"
              style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
              Learn Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function Dashboard() {
  const [ref, inView] = useInViewOnce();
  const cards = [
    { label: "Clean Energy Generated", value: 4200, suffix: " kW", icon: Zap },
    { label: "Carbon Emissions Reduced", value: 3800, suffix: " T", icon: Leaf },
    { label: "Solar Systems Installed", value: 500, suffix: "+", icon: Sun },
    { label: "Water Pumping Projects", value: 120, suffix: "+", icon: Droplets },
    { label: "Regions Served", value: 25, suffix: "+", icon: Globe },
  ];
  return (
    <div className="relative overflow-hidden py-24" style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #003f50 100%)` }}>
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Live Energy Impact</div>
          <h2 className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Our Cumulative Energy Dashboard</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map(({ label, value, suffix, icon: Icon }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.09 }}
              className="rounded-2xl p-6 text-center border"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(14px)", borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(122,189,20,0.18)" }}>
                <Icon className="w-6 h-6" style={{ color: B.accent }} />
              </div>
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Solutions Preview ────────────────────────────────────────────────────────
function SolutionsPreview() {
  const [ref, inView] = useInViewOnce();
  return (
    <div style={{ background: "#fff" }}>
      <div ref={ref} className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>What We Offer</div>
              <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Comprehensive Solar Solutions</h2>
            </div>
            <Link to="/solutions" className="flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-70" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
              View All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-10 px-6" style={{ scrollbarWidth: "none" }}>
          {SOLUTIONS.map(({ title, desc, icon: Icon, img }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group flex-shrink-0 w-72 rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: B.soft, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="overflow-hidden h-44 bg-teal-900">
                <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${B.primary}14` }}>
                  <Icon className="w-5 h-5" style={{ color: B.primary }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark, fontSize: "0.95rem" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
                <Link to="/solutions" className="flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-60" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Products Preview ─────────────────────────────────────────────────────────
function ProductsPreview() {
  const [ref, inView] = useInViewOnce();
  return (
    <div style={{ background: B.soft }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Our Products</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Premium Solar Products</h2>
          </div>
          <Link to="/products" className="flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-70" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 6).map(({ name, spec, tag, icon: Icon, img }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <div className="relative overflow-hidden h-44 bg-teal-900">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
                <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${B.accent}ee`, color: "#fff", fontFamily: "'Inter', sans-serif" }}>{tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${B.primary}10` }}>
                    <Icon className="w-5 h-5" style={{ color: B.primary }} />
                  </div>
                  <h3 className="font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{name}</h3>
                </div>
                <p className="text-sm mb-5" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{spec}</p>
                <Link to="/products"
                  className="block w-full py-2.5 rounded-xl text-sm font-semibold border text-center transition-all hover:opacity-80"
                  style={{ color: B.primary, borderColor: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                  Request Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Why Choose ───────────────────────────────────────────────────────────────
function WhyChoose() {
  const [ref, inView] = useInViewOnce();
  const traditional = ["Unreliable power supply", "High recurring fuel costs", "Carbon emissions", "Reactive maintenance only", "No system customization", "Fuel dependency risk"];
  const pekims = ["24/7 solar-powered energy", "Near-zero running costs", "100% clean and green", "Proactive monitoring", "Custom-engineered systems", "True energy independence"];
  return (
    <div style={{ background: "#fff" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>The Pekims Advantage</div>
          <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Why Choose Pekims?</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 border" style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fafafa" }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Poppins', sans-serif", color: "#aaa" }}>Traditional Energy</h3>
            </div>
            <div className="space-y-3.5">
              {traditional.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-sm line-through" style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(140deg, ${B.primary} 0%, #004557 100%)` }}>
            <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-15" style={{ background: B.accent }} />
            <div className="flex items-center gap-3 mb-7 relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(122,189,20,0.25)" }}>
                <CheckCircle className="w-5 h-5" style={{ color: B.accent }} />
              </div>
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Pekims Solar</h3>
            </div>
            <div className="space-y-3.5 relative">
              {pekims.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(122,189,20,0.22)" }}>
                    <CheckCircle className="w-3 h-3" style={{ color: B.accent }} />
                  </div>
                  <span className="text-sm text-white/88" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Shield, title: "Quality Products", desc: "Only premium, warranted components from verified global manufacturers" },
            { icon: Wrench, title: "Expert Installation", desc: "Certified engineers with extensive on-site field experience" },
            { icon: CheckCircle, title: "Reliable Support", desc: "Responsive after-sales service and remote system monitoring" },
            { icon: Globe, title: "Custom Solutions", desc: "Every system precision-designed for your specific energy profile" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="text-center p-6 rounded-2xl" style={{ background: B.soft }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${B.primary}12` }}>
                <Icon className="w-6 h-6" style={{ color: B.primary }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark, fontSize: "0.9rem" }}>{title}</h4>
              <p className="text-sm" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Projects Preview ─────────────────────────────────────────────────────────
function ProjectsPreview() {
  const [ref, inView] = useInViewOnce();
  return (
    <div style={{ background: B.soft }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Our Portfolio</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Featured Projects</h2>
          </div>
          <Link to="/projects" className="flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-70" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.slice(0, 4).map(({ img, title, tag, location }, i) => (
            <motion.div key={title} initial={{ opacity: 0, scale: 0.94 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-teal-900 aspect-square">
              <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%)" }}>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2" style={{ background: `${B.accent}28`, color: B.accent, fontFamily: "'Inter', sans-serif" }}>{tag}</span>
                <h3 className="text-white font-semibold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</h3>
                <p className="text-white/60 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Partners Strip ───────────────────────────────────────────────────────────
function PartnersStrip() {
  const marquee = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <div className="py-14 overflow-hidden border-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
      <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: B.body, fontFamily: "'Poppins', sans-serif" }}>Trusted Technology Partners</p>
      <div className="relative flex overflow-hidden">
        <motion.div animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 flex-shrink-0 whitespace-nowrap">
          {marquee.map((name, i) => (
            <div key={i} className="flex-shrink-0 px-8 py-3.5 rounded-xl border font-bold text-base transition-colors hover:border-teal-400 cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif", color: B.body, borderColor: "rgba(0,0,0,0.08)", background: "#fff" }}>{name}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const [ref, inView] = useInViewOnce();
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: "#fff" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Client Stories</div>
          <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>What Our Clients Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map(({ name, role, rating, text }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className="rounded-2xl p-6 cursor-pointer border transition-all duration-300"
              style={{ background: i === active ? B.primary : "#fff", borderColor: i === active ? B.primary : "rgba(0,0,0,0.08)", transform: i === active ? "translateY(-4px)" : "none", boxShadow: i === active ? `0 16px 48px ${B.primary}28` : "none" }}>
              <div className="flex gap-0.5 mb-4">
                {[...Array(rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: B.accent }} />)}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: i === active ? "rgba(255,255,255,0.82)" : B.body, fontFamily: "'Inter', sans-serif" }}>&ldquo;{text}&rdquo;</p>
              <div>
                <div className="font-semibold text-sm" style={{ color: i === active ? "#fff" : B.dark, fontFamily: "'Poppins', sans-serif" }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color: i === active ? "rgba(255,255,255,0.55)" : B.body, fontFamily: "'Inter', sans-serif" }}>{role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Calculator ───────────────────────────────────────────────────────────────
function SolarCalculator() {
  const [ref, inView] = useInViewOnce();
  const [bill, setBill] = useState(8000);
  const [propType, setPropType] = useState("Residential");
  const [result, setResult] = useState<{ system: string; savings: number; roi: string; carbon: string } | null>(null);
  const calculate = () => {
    const factor = propType === "Commercial" ? 1.5 : propType === "Agricultural" ? 1.3 : 1;
    const annualSavings = Math.round(bill * 12 * 0.85 * factor);
    const systemSize = Math.round((bill / 1800) * factor * 10) / 10;
    const systemCost = systemSize * 85000;
    setResult({ system: `${systemSize} kWp Solar System`, savings: annualSavings, roi: `${(systemCost / annualSavings).toFixed(1)} years`, carbon: `${Math.round(annualSavings / 15)} kg CO₂/yr` });
  };
  return (
    <div style={{ background: B.soft }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Solar Savings Estimator</div>
          <h2 className="font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>How Much Can You Save?</h2>
          <p style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>Get an instant estimate of your solar savings and recommended system size.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 border-r" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <h3 className="font-semibold text-lg mb-7" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>Your Energy Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Monthly Electricity Bill (KES)</label>
                  <input type="range" min={2000} max={100000} step={500} value={bill} onChange={e => setBill(Number(e.target.value))} className="w-full mb-2" style={{ accentColor: B.primary }} />
                  <div className="text-xl font-bold" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>KES {bill.toLocaleString()}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: B.dark, fontFamily: "'Inter', sans-serif" }}>Property Type</label>
                  <select value={propType} onChange={e => setPropType(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "rgba(0,0,0,0.12)", color: B.dark, fontFamily: "'Inter', sans-serif" }}>
                    {["Residential", "Commercial", "Agricultural", "Institution"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <button onClick={calculate} className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02]" style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                  Calculate My Savings
                </button>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              {!result ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${B.primary}10` }}>
                    <Sun className="w-10 h-10" style={{ color: B.primary }} />
                  </div>
                  <p className="text-sm" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>Fill in your details and click Calculate to see your savings estimate.</p>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>Your Savings Estimate</h3>
                  <div className="space-y-4 mb-7">
                    {[
                      { label: "Recommended System", value: result.system },
                      { label: "Est. Annual Savings", value: `KES ${result.savings.toLocaleString()}` },
                      { label: "Payback Period", value: result.roi },
                      { label: "Carbon Reduction", value: result.carbon },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                        <span className="text-sm" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{label}</span>
                        <span className="font-semibold text-sm" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="block w-full py-4 rounded-xl font-semibold text-white text-center transition-all hover:scale-[1.02]" style={{ background: B.accent, fontFamily: "'Poppins', sans-serif" }}>
                    Get Free Site Assessment
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <div className="relative py-32 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1726866492047-7f9516558c6e?w=1920&h=800&fit=crop&auto=format" alt="Solar panels" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(130deg, rgba(0,102,128,0.94) 0%, rgba(0,0,0,0.78) 100%)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Start Your Solar Journey</div>
        <h2 className="text-white font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
          Ready to Switch to Smart Solar Energy?
        </h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          Join over 500 satisfied customers powering their properties with clean, reliable solar energy from Pekims Technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="px-10 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105" style={{ background: B.accent, fontFamily: "'Poppins', sans-serif", boxShadow: `0 8px 32px ${B.accent}50` }}>
            Request Free Site Assessment
          </Link>
          <a href="tel:+254713910900" className="px-10 py-4 rounded-full font-semibold text-white text-base border border-white/30 transition-all hover:bg-white/10" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <Phone className="inline w-4 h-4 mr-2" />Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <Dashboard />
      <SolutionsPreview />
      <ProductsPreview />
      <WhyChoose />
      <ProjectsPreview />
      <PartnersStrip />
      <Testimonials />
      <SolarCalculator />
      <CTA />
    </>
  );
}
