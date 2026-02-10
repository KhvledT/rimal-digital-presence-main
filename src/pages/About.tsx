import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-sand">
        <div className="section-padding max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-serif italic text-gold text-lg">About</span>
            <h1 className="font-serif text-4xl md:text-6xl text-navy mt-2 leading-tight">
              RIMAL Trading Group
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-16 space-y-16"
          >
            <div>
              <h2 className="font-serif text-2xl text-navy mb-4">Who We Are</h2>
              <p className="font-body text-base text-foreground/70 leading-relaxed max-w-2xl">
                {siteContent.about.description} The name "Rimal," inspired by Arabian heritage,
                refers to sands — symbolizing abundance, resilience, and the land where our
                forefathers once lived.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy mb-4">Our Mission</h2>
              <p className="font-body text-base text-foreground/70 leading-relaxed max-w-2xl">
                {siteContent.about.mission}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy mb-4">Our Vision</h2>
              <p className="font-body text-base text-foreground/70 leading-relaxed max-w-2xl">
                {siteContent.about.vision}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy mb-4">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Passion", desc: "We are wholeheartedly committed to everything we do." },
                  { title: "Creativity", desc: "Innovation is the engine that drives our success." },
                  { title: "Persistence", desc: "Growth takes time, and challenges strengthen our determination." },
                  { title: "Humility", desc: "We grow with respect, responsibility, and integrity." },
                ].map((v) => (
                  <div key={v.title}>
                    <h3 className="font-serif text-lg text-primary mb-2">{v.title}</h3>
                    <p className="font-body text-sm text-foreground/60">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
