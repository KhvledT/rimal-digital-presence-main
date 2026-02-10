import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Partners = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-sand">
        <div className="section-padding max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-serif italic text-gold text-lg">Trust</span>
            <h1 className="font-serif text-4xl md:text-6xl text-navy mt-2 leading-tight">
              Our Partners
            </h1>
            <p className="font-body text-base text-foreground/60 mt-6 max-w-xl">
              Long-term relationships built on mutual respect, shared values, and strategic alignment.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="aspect-[4/3] bg-card shadow-sm flex items-center justify-center"
              >
                <span className="font-serif text-sm text-gold/50 tracking-widest">PARTNER</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="font-serif text-xl text-navy mb-4">Regions</h3>
            <p className="font-body text-sm text-foreground/60 max-w-lg">
              Qatar · GCC · MENA · Global Markets
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
