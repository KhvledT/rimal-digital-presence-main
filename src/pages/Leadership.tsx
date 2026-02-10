import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const principles = [
  {
    title: "Integrity First",
    description: "Every decision is guided by transparency, honesty, and accountability.",
  },
  {
    title: "Long-Term Vision",
    description: "We build for decades, not quarters. Patience is our competitive advantage.",
  },
  {
    title: "People-Centered Growth",
    description: "Success begins with investing in the people who drive the organization forward.",
  },
  {
    title: "Strategic Discipline",
    description: "We enter markets with precision, not impulse. Every expansion is deliberate.",
  },
];

const Leadership = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-sand">
        <div className="section-padding max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-serif italic text-gold text-lg">Philosophy</span>
            <h1 className="font-serif text-4xl md:text-6xl text-navy mt-2 leading-tight">
              Leadership & Values
            </h1>
            <p className="font-body text-base text-foreground/60 mt-6 max-w-xl">
              How we lead, how decisions are made, and how partnerships are chosen.
            </p>
          </motion.div>

          <div className="mt-16 space-y-12">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="border-l-2 border-gold/40 pl-8"
              >
                <h3 className="font-serif text-xl text-navy mb-3">{p.title}</h3>
                <p className="font-body text-sm text-foreground/60 max-w-lg">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
