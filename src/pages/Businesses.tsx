import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const Businesses = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-sand">
        <div className="section-padding max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-serif italic text-gold text-lg">Capabilities</span>
            <h1 className="font-serif text-4xl md:text-6xl text-navy mt-2 leading-tight">
              Our Businesses
            </h1>
            <p className="font-body text-base text-foreground/60 mt-6 max-w-xl">
              Structured sectors driven by discipline, strategy, and long-term vision.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {siteContent.sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-card p-10"
              >
                <h3 className="font-serif text-xl text-navy mb-3">{sector.name}</h3>
                <p className="font-body text-sm text-foreground/60">{sector.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-beige p-10"
          >
            <h3 className="font-serif text-xl text-navy mb-4">Markets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="font-body text-xs text-gold uppercase tracking-widest">Primary</span>
                <p className="font-body text-sm text-foreground/70 mt-1">{siteContent.markets.primary}</p>
              </div>
              <div>
                <span className="font-body text-xs text-gold uppercase tracking-widest">Secondary</span>
                <p className="font-body text-sm text-foreground/70 mt-1">{siteContent.markets.secondary}</p>
              </div>
              <div>
                <span className="font-body text-xs text-gold uppercase tracking-widest">Global</span>
                <p className="font-body text-sm text-foreground/70 mt-1">{siteContent.markets.global}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Businesses;
