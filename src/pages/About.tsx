import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";
import Logo from "@/assets/Logo.png";

const ceoMessage = `Our journey began with a simple belief: Uniqueness and Excellence lead to prosperity. Thus, we support creative ideas in our local market and try to bring innovative brands from abroad.

In our globalized generation, a true modernity is born when legacy integrates with novelty, that is why we have deep respect for our heritage. The values passed down through generations — integrity, resilience, and pride in quality — are the same values that guide us as we build a forward-looking, innovative organization.

We believe that innovation is not a luxury; it is a responsibility. We encourage new ideas, challenge outdated assumptions, and constantly seek inventive ways to improve our work.`;

const culture = [
  { point: "Sales create revenue, but trust builds brands." },
  { point: "A first sale keeps you running today — trust keeps you thriving for decades." },
  { point: "People don't just buy products, they buy belief, reliability, and consistency." },
];

const coreValues = [
  { title: "Passion", desc: "We are wholeheartedly committed to everything we do.", icon: "🔥" },
  { title: "Creativity", desc: "Innovation is the engine that drives our success.", icon: "💡" },
  { title: "Persistence", desc: "Growth takes time, and challenges strengthen our determination.", icon: "⚡" },
  { title: "Humility", desc: "We grow with respect, responsibility, and integrity.", icon: "🤝" },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative bg-burgundy flex items-center flex-col lg:flex-row">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative pt-20 z-30 section-padding  lg:pt-32 pb-20 w-full"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mt-4 leading-[0.95]"
          >
            RIMAL<br />
            <span className="italic text-gold">Trading Group</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-body text-lg text-primary-foreground/60 mt-8 max-w-lg leading-relaxed"
          >
            Born on 07/07/2025 — uniting diverse entrepreneurial ventures under one structured organization.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="w-24 h-[2px] bg-gold mt-8 origin-left"
          />
        </motion.div>

        {/* Logo image */}
        <div className="h-full hidden lg:block relative">
          <img src={Logo} alt="" className="object-cover" />
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
      </section>

      {/* The Name */}
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              custom={0}
            >
              <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Heritage</span>
              <h2 className="font-serif text-3xl md:text-5xl text-navy mt-3 leading-tight">
                The Name<br /><span className="italic text-primary">"Rimal"</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              custom={1}
            >
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                Inspired by Arabian heritage, "Rimal" refers to sands — symbolizing abundance, resilience, 
                and the land where our forefathers once lived. The name carries with it the weight of 
                tradition and the promise of a bold future.
              </p>
              <p className="font-body text-base text-foreground/70 leading-relaxed mt-6">
                {siteContent.about.description} What began as independent businesses has grown into a dynamic 
                group that embodies unity, professionalism, and ambition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-spacing bg-beige">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="mb-12"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Founder & CEO</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">
              A Message from{" "}
              <span className="italic text-primary">Sheikh Alharith Al Thani</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <span className="absolute -top-6 -left-2 font-serif text-[120px] text-gold/20 leading-none select-none hidden md:block">
              "
            </span>
            <div className="space-y-6 md:pl-16">
              {ceoMessage.split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeUpVariant}
                  custom={i + 1}
                  className="font-body text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={4}
            className="font-serif italic text-gold text-lg mt-10 md:pl-16"
          >
            — "Driven by Ideas. Powered by Trust."
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { label: "Our Mission", text: siteContent.about.mission },
              { label: "Our Vision", text: siteContent.about.vision },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUpVariant}
                custom={i}
                className="relative"
              >
                <div className="w-12 h-[2px] bg-gold mb-6" />
                <h3 className="font-serif text-2xl text-navy mb-4">{item.label}</h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-burgundy">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="text-center mb-16"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">What Drives Us</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mt-3">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i}
                className="border border-primary-foreground/10 p-8 md:p-10 group hover:border-gold/40 transition-colors duration-500"
              >
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-serif text-xl text-primary-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="mb-12"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">Our Culture</h2>
            <p className="font-body text-base text-foreground/60 mt-4 max-w-xl">
              At Rimal, success is a mindset, not an option. We build trust before transactions.
            </p>
          </motion.div>

          <div className="space-y-8">
            {culture.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i}
                className="flex items-start gap-6 border-l-2 border-gold/30 pl-8 py-2"
              >
                <span className="font-serif text-2xl text-gold/40 font-bold">0{i + 1}</span>
                <p className="font-body text-base text-foreground/70 leading-relaxed">{item.point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
