import { Link, useParams, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Tag, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { B } from "../shared";
import { ARTICLES } from "../data/articles";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) return <Navigate to="/resources" replace />;

  const related = ARTICLES.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden pt-16">
        <img src={article.img} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,102,128,0.9) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <Link to="/resources" className="text-white/50 hover:text-white transition-colors">Resources</Link>
              <span className="text-white/30">/</span>
              <span style={{ color: B.accent }}>{article.tag}</span>
            </div>
            <h1 className="text-white font-bold leading-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime}</span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: `${B.accent}25`, color: B.accent }}>
                <Tag className="w-3 h-3" />{article.tag}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_260px] gap-14">

            {/* Main content */}
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {/* Back link */}
              <Link to="/resources"
                className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-opacity hover:opacity-60"
                style={{ color: B.primary, fontFamily: "'Inter', sans-serif" }}>
                <ArrowLeft className="w-4 h-4" /> Back to Resources
              </Link>

              {/* Intro */}
              <p className="text-lg leading-relaxed mb-10"
                style={{ color: B.dark, fontFamily: "'Inter', sans-serif", borderLeft: `4px solid ${B.accent}`, paddingLeft: "1.25rem" }}>
                {article.intro}
              </p>

              {/* Sections */}
              {article.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="font-bold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", color: B.dark, fontSize: "1.3rem" }}>
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed mb-4"
                    style={{ color: B.body, fontFamily: "'Inter', sans-serif", fontSize: "1.02rem" }}>
                    {section.body}
                  </p>
                  {section.bullets && (
                    <ul className="space-y-3">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: B.accent }} />
                          <span className="leading-relaxed text-sm"
                            style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="rounded-2xl p-7 mt-6"
                style={{ background: `linear-gradient(135deg, ${B.primary}08 0%, ${B.accent}08 100%)`, border: `1px solid ${B.primary}18` }}>
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>Final Thoughts</h3>
                <p className="leading-relaxed" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>
                  {article.conclusion}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-2xl p-7 text-white"
                style={{ background: `linear-gradient(135deg, ${B.primary} 0%, #004557 100%)` }}>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Ready to Get Started?
                </h3>
                <p className="text-white/70 mb-5 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Talk to our solar experts for a free consultation tailored to your specific needs.
                </p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:scale-105"
                  style={{ background: B.accent, fontFamily: "'Poppins', sans-serif" }}>
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Article info card */}
              <div className="rounded-2xl p-6 sticky top-24" style={{ background: B.soft }}>
                <h3 className="font-semibold mb-4 text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>
                  About This Article
                </h3>
                <div className="space-y-3 text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif", color: B.body }}>
                  <div className="flex justify-between"><span>Published</span><span className="font-medium" style={{ color: B.dark }}>{article.date}</span></div>
                  <div className="flex justify-between"><span>Read time</span><span className="font-medium" style={{ color: B.dark }}>{article.readTime}</span></div>
                  <div className="flex justify-between"><span>Category</span><span className="font-medium" style={{ color: B.accent }}>{article.tag}</span></div>
                </div>

                <div className="pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                  <p className="text-xs mb-4" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>
                    Have questions about this topic?
                  </p>
                  <Link to="/contact"
                    className="block w-full py-3 rounded-xl text-sm font-semibold text-white text-center transition-all hover:opacity-90"
                    style={{ background: B.primary, fontFamily: "'Poppins', sans-serif" }}>
                    Ask Our Experts
                  </Link>
                </div>
              </div>

              {/* Related articles */}
              <div>
                <h3 className="font-semibold mb-4 text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {related.map(rel => (
                    <Link key={rel.slug} to={`/resources/${rel.slug}`}
                      className="flex gap-3 group">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-teal-900">
                        <img src={rel.img} alt={rel.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium leading-snug transition-opacity group-hover:opacity-70"
                          style={{ color: B.dark, fontFamily: "'Poppins', sans-serif" }}>
                          {rel.title}
                        </p>
                        <p className="text-xs mt-1" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{rel.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* More articles */}
      <div style={{ background: B.soft }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark, fontSize: "1.4rem" }}>
              More Articles
            </h2>
            <Link to="/resources" className="flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: B.primary, fontFamily: "'Poppins', sans-serif" }}>
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map(rel => (
              <Link key={rel.slug} to={`/resources/${rel.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="overflow-hidden h-40 bg-teal-900">
                  <img src={rel.img} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${B.accent}18`, color: B.accent, fontFamily: "'Inter', sans-serif" }}>{rel.tag}</span>
                    <span className="text-xs" style={{ color: B.body, fontFamily: "'Inter', sans-serif" }}>{rel.readTime}</span>
                  </div>
                  <h3 className="font-semibold leading-snug text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: B.dark }}>{rel.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
