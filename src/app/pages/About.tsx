import { Link } from "react-router";
import { motion } from "motion/react";
import { CheckCircle, Zap, Leaf, Users, Shield, Globe, Award, Heart, ArrowRight } from "lucide-react";
import { B, useInViewOnce, CountUp, PageHero } from "../shared";

const TIMELINE = [
  { year: "2017", title: "Company Founded", desc: "Pekims Technologies Ltd was established in Nairobi with a vision to transform Kenya's energy landscape through solar innovation." },
  { year: "2018", title: "First 50 Installations", desc: "Completed our first 50 residential and commercial solar installations across Nairobi and the Central Region." },
  { year: "2020", title: "Agricultural Expansion", desc: "Launched solar water pumping solutions for farms in the Rift Valley, transforming irrigation and livestock watering systems." },
  { year: "2022", title: "500 Projects Milestone", desc: "Crossed 500 completed projects and expanded operations to coastal and western Kenya, serving 25+ counties." },
  { year: "2024", title: "Technology Partner Network", desc: "Established formal partnerships with leading global manufacturers including SUOER, RIIOSUN and HOBER for premium product supply." },
  { year: "2025+", title: "East Africa Expansion", desc: "Expanding our footprint to serve Uganda, Tanzania and Rwanda with world-class solar engineering solutions." },
];

const VALUES = [
  { icon: Zap, title: "Innovation", desc: "We continuously adopt cutting-edge technology to deliver smarter, more efficient solar solutions." },
  { icon: Shield, title: "Reliability", desc: "Every system we design and install is built to deliver dependable performance for 25+ years." },
  { icon: Leaf, title: "Sustainability", desc: "Our mission is to protect Kenya's environment through 100% clean renewable energy alternatives." },
  { icon: Users, title: "Human-Centered", desc: "We listen first. Every solution is tailored to the unique energy needs of the people we serve." },
  { icon: Globe, title: "Excellence", desc: "We hold ourselves to the highest engineering standards in every project, no matter the size." },
  { icon: Heart, title: "Community", desc: "We invest in the communities we serve through training, employment and energy access programs." },
];

function Stats() {
  const [ref, inView] = useInViewOnce();
  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        { num: 2017, suffix: "", label: "Year Founded" },
        { num: 500, suffix: "+", label: "Projects Completed" },
        { num: 25, suffix: "+", label: "Counties Served" },
        { num: 100, suffix: "%", label: "Renewable Focus" },
      ].map(({ num, suffix, label }, i) => (
        <motion.div key={label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center p-6 rounded-2xl" style={{ background: "#fff" }}>
          <div className="text-3xl font-bold mb-1" style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
            <CountUp end={num} suffix={suffix} />
          </div>
          <div className="text-sm" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default function About() {
  const [storyRef, storyInView] = useInViewOnce();
  const [valuesRef, valuesInView] = useInViewOnce();
  const [timelineRef, timelineInView] = useInViewOnce();

  return (
    <>
      <PageHero
        title="About Pekims Technologies"
        subtitle="Innovating Kenya's energy future through intelligent, affordable and reliable solar solutions since 2017."
        img="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1920&h=600&fit=crop&auto=format"
        breadcrumb="About Us"
      />

      {/* Story */}
      <div style={{ background: B.soft }}>
        <div ref={storyRef} className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Our Story</div>
              <h2 className="font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>
                Building Kenya's Clean Energy Future
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: B.body, fontFamily: "'Inter', sans-serif", fontSize: "1.05rem" }}>
                Pekims Technologies Ltd was founded in 2017 with a clear vision: to make high-quality solar energy accessible to every Kenyan household, business and farm. Starting with a small team of passionate engineers in Nairobi, we set out to close the energy gap through affordable, reliable and sustainable solar solutions.
              </p>
              <p className="leading-relaxed mb-5" style={{ color: B.body, fontFamily: "'Inter', sans-serif", fontSize: "1.05rem" }}>
                Over the years, we have grown into one of Kenya's most trusted renewable energy companies, delivering over 500 solar projects across 25+ counties. Our team of certified engineers brings together expertise in system design, installation, and long-term maintenance.
              </p>
              <p className="leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif", fontSize: "1.05rem" }}>
                We are not simply a solar installer — we are an energy transformation partner. We work closely with each client to engineer solutions tailored to their unique situation, whether a rural homestead, a commercial building or a large agricultural operation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="rounded-2xl overflow-hidden mb-6 bg-teal-900">
                <img src="https://images.unsplash.com/photo-1780445392528-4895da4b2cb8?w=800&h=600&fit=crop&auto=format" alt="Pekims solar installation team" className="w-full h-80 object-cover opacity-90" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Mission", text: "Deliver affordable, reliable solar energy to every Kenyan." },
                  { label: "Vision", text: "Become East Africa's leading renewable energy innovator." },
                  { label: "Values", text: "Innovation, reliability, sustainability and community." },
                ].map(({ label, text }) => (
                  <div key={label} className="rounded-xl p-4 bg-white border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>{label}</div>
                    <p className="text-xs leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <Stats />
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: "#fff" }}>
        <div ref={timelineRef} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>Our Journey</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>From Startup to Market Leader</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden lg:block" style={{ background: `linear-gradient(to bottom, ${B.primary}, ${B.accent})` }} />
            <div className="space-y-8">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <motion.div key={year} initial={{ opacity: 0, y: 30 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  {i % 2 === 0 ? (
                    <>
                      <div className="lg:text-right">
                        <div className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-3" style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>{year}</div>
                        <h3 className="font-semibold text-xl mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
                      </div>
                      <div className="hidden lg:flex items-center">
                        <div className="w-5 h-5 rounded-full border-4 mx-auto" style={{ background: "#fff", borderColor: B.accent }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:flex items-center">
                        <div className="w-5 h-5 rounded-full border-4 mx-auto" style={{ background: "#fff", borderColor: B.primary }} />
                      </div>
                      <div>
                        <div className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-3" style={{ background: B.accent, fontFamily: "'Poppins', sans-serif" }}>{year}</div>
                        <h3 className="font-semibold text-xl mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ background: B.soft }}>
        <div ref={valuesRef} className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: B.accent, fontFamily: "'Poppins', sans-serif" }}>What Drives Us</div>
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: B.dark }}>Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${B.primary}10` }}>
                  <Icon className="w-7 h-7" style={{ color: B.primary }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-20 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1726866492047-7f9516558c6e?w=1920&h=600&fit=crop&auto=format" alt="Solar installation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(130deg, rgba(0,102,128,0.94) 0%, rgba(0,0,0,0.78) 100%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Ready to Partner With Us?</h2>
          <p className="text-white/70 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>Get in touch with our team of renewable energy experts today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: B.accent, fontFamily: "'Poppins', sans-serif" }}>
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
