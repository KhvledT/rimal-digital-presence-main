import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import handshakeImage from "@/assets/handshake-partnership.jpg";

const partnerCategories = [
  {
    category: "Global Brands",
    description: "Representing world-class brands across retail, fashion, and lifestyle sectors.",
    partners: ["Brand Partner 1", "Brand Partner 2", "Brand Partner 3", "Brand Partner 4"],
  },
  {
    category: "F&B Franchises",
    description: "Strategic franchise partnerships bringing acclaimed culinary concepts to local markets.",
    partners: ["Franchise 1", "Franchise 2", "Franchise 3"],
  },
  {
    category: "Strategic Investors",
    description: "Aligned investors and holding companies powering our expansion across sectors.",
    partners: ["Investor 1", "Investor 2"],
  },
  {
    category: "Technology Partners",
    description: "Digital and technology alliances driving innovation across our operations.",
    partners: ["Tech Partner 1", "Tech Partner 2", "Tech Partner 3"],
  },
];

const partnershipValues = [
  { title: "Mutual Respect", text: "Every partnership begins with genuine respect for each other's strengths, expertise, and market knowledge." },
  { title: "Shared Vision", text: "We align with partners who share our commitment to excellence, innovation, and long-term growth." },
  { title: "Strategic Alignment", text: "Each partnership is deliberate — we enter collaborations with precision, ensuring mutual benefit and sustainable outcomes." },
  { title: "Trust & Transparency", text: "Open communication and honest dealings form the bedrock of every relationship we build." },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Partners = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-24 bg-primary overflow-hidden min-h-[60vh] flex items-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="section-padding max-w-5xl relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            Trust
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-primary-foreground mt-4 leading-[0.95]"
          >
            Our<br />
            <span className="italic text-gold">Partners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg text-primary-foreground/50 mt-8 max-w-lg"
          >
            Long-term relationships built on mutual respect, shared values, and strategic alignment.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="w-24 h-[2px] bg-gold mt-8 origin-left"
          />
        </motion.div>
      </section>

      {/* Partnership Philosophy */}
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              custom={0}
            >
              <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Philosophy</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3 leading-tight">
                Built on Trust,<br />
                <span className="italic text-primary">Not Transactions</span>
              </h2>
              <p className="font-body text-base text-foreground/70 leading-relaxed mt-6">
                At Rimal, we believe that enduring partnerships are the cornerstone of lasting success. 
                We don't just seek business relationships — we cultivate alliances that create 
                shared value and drive meaningful impact across markets.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              custom={1}
              className="relative"
            >
              <div className="border border-gold/30 p-3">
                <img src={handshakeImage} alt="Partnership" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="section-spacing bg-beige">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="mb-16"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold text-center block">Foundation</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3 text-center">What We Value in Partners</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i}
                className="border-l-2 border-gold/30 pl-8 py-4"
              >
                <h3 className="font-serif text-xl text-navy mb-3">{v.title}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="text-center mb-16"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Network</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">Partner Ecosystem</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {partnerCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i % 2}
                className="bg-card p-10"
              >
                <h3 className="font-serif text-xl text-navy mb-3">{cat.category}</h3>
                <p className="font-body text-sm text-foreground/60 mb-6">{cat.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {cat.partners.map((p) => (
                    <div
                      key={p}
                      className="aspect-[3/2] bg-beige flex items-center justify-center"
                    >
                      <span className="font-serif text-xs text-gold/50 tracking-widest">LOGO</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 bg-burgundy">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0}
            className="text-center"
          >
            <h3 className="font-serif text-xl text-primary-foreground mb-4">Global Reach</h3>
            <p className="font-body text-sm text-primary-foreground/50 tracking-widest">
              Qatar · GCC · MENA · Global Markets
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
