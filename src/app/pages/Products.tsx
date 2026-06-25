import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { B, PRODUCTS, useInViewOnce, PageHero } from "../shared";

const CATEGORIES = ["All", "Residential", "Commercial", "Agricultural", "Accessories"];

const EXTENDED_PRODUCTS = [
  ...PRODUCTS,
  { name: "DC Cable Sets", spec: "4mm², 6mm², UV-resistant", tag: "Wiring", icon: PRODUCTS[5].icon, category: "Accessories", img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365212/dc_kbimoc.jpg" },
  { name: "Solar Water Heater", spec: "150L – 500L, Evacuated tube", tag: "Thermal", icon: PRODUCTS[3].icon, category: "Residential", img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365213/solar_water_heater_jmn6g5.jpg" },
  { name: "Ground Mounting", spec: "Adjustable angle, Galvanised", tag: "Structural", icon: PRODUCTS[6].icon, category: "Commercial", img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365213/ground-mount_qzxvnk.jpg" },
];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [ref, inView] = useInViewOnce();

  const visible = filter === "All" ? EXTENDED_PRODUCTS : EXTENDED_PRODUCTS.filter(p => p.category === filter);

  return (
    <>
      <PageHero
        title="Solar Products Catalog"
        subtitle="Premium solar components and systems sourced from globally certified manufacturers."
        img="https://images.unsplash.com/photo-1726866492047-7f9516558c6e?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="Products"
      />

      <div style={{ background: B.soft }}>
        <div ref={ref} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Our Catalog</div>
            <h2 className="font-bold mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Browse Our Product Range</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                  style={{ fontFamily: "'Inter', sans-serif", background: filter === c ? B.primary : "#fff", color: filter === c ? "#fff" : B.body, border: `1.5px solid ${filter === c ? B.primary : "rgba(0,0,0,0.09)"}` }}>
                  {c}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map(({ name, spec, tag, icon: Icon, category, img }, i) => (
              <motion.div key={name + i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: Math.min(i * 0.07, 0.5) }}
                className="group bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="relative overflow-hidden h-44 bg-teal-900">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${B.accent}ee`, color: "#fff", fontFamily: "'Inter', sans-serif" }}>{tag}</span>
                  <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.45)", color: "#fff", fontFamily: "'Inter', sans-serif" }}>{category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${B.primary}10` }}>
                      <Icon className="w-5 h-5" style={{ color: B.primary }} />
                    </div>
                    <h3 className="font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{name}</h3>
                  </div>
                  <p className="text-sm mb-5" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{spec}</p>
                  <div className="flex gap-3">
                    <Link to="/contact"
                      className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all hover:opacity-90"
                      style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                      Get Quote
                    </Link>
                    <button className="px-3 py-2.5 rounded-xl border transition-all hover:opacity-70"
                      style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                      <MessageSquare className="w-4 h-4" style={{ color: B.body }} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #003f50 100%)` }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}>
            Not Sure Which Products You Need?
          </h2>
          <p className="text-white/70 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our engineers will assess your energy requirements and recommend the ideal system configuration.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: B.accent, fontFamily: "'Poppins', sans-serif" }}>
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
