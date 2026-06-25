import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MapPin, Zap, ArrowRight } from "lucide-react";
import { B, PROJECTS, useInViewOnce, CountUp, PageHero } from "../shared";

const CATS = ["All", "Residential", "Commercial", "Agricultural", "Street Lighting", "Water Heating"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [ref, inView] = useInViewOnce();
  const [statsRef, statsInView] = useInViewOnce();

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <>
      <PageHero
        title="Our Project Portfolio"
        subtitle="Over 500 completed solar projects across Kenya — from residential rooftops to large commercial installations."
        img="https://images.unsplash.com/photo-1726866492047-7f9516558c6e?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="Projects"
      />

      {/* Stats */}
      <div style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #004557 100%)` }}>
        <div ref={statsRef} className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { num: 500, suffix: "+", label: "Projects Completed" },
            { num: 25, suffix: "+", label: "Counties Covered" },
            { num: 4200, suffix: " kW", label: "Total Capacity Installed" },
            { num: 3800, suffix: " T", label: "CO₂ Emissions Avoided" },
          ].map(({ num, suffix, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <CountUp end={num} suffix={suffix} />
              </div>
              <div className="text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div style={{ background: B.soft }}>
        <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Featured Work</div>
            <h2 className="font-bold mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Browse Projects by Category</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATS.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{ fontFamily: "'Inter', sans-serif", background: filter === c ? B.primary : "#fff", color: filter === c ? "#fff" : B.body, border: `1.5px solid ${filter === c ? B.primary : "rgba(0,0,0,0.09)"}` }}>
                  {c}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {visible.map(({ img, title, tag, location, kw }, i) => (
              <motion.div key={title} initial={{ opacity: 0, scale: 0.94 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.4) }}
                className="group relative rounded-2xl overflow-hidden mb-5 cursor-pointer bg-teal-900 break-inside-avoid">
                <img src={img} alt={title} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }}>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2" style={{ background: `${B.accent}28`, color: B.accent, fontFamily: "'Inter', sans-serif" }}>{tag}</span>
                  <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{location}</span>
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" />{kw}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Start Your Project</div>
          <h2 className="font-bold mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: B.dark }}>
            Ready to Add Your Project to Our Portfolio?
          </h2>
          <p className="mb-8" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>
            Contact our team for a free site assessment and customised solar proposal.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
            Request Site Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
