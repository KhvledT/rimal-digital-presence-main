import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="bg-burgundy section-spacing">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Opening quote */}
          <span className="absolute -top-4 left-0 font-serif text-8xl text-gold/60 leading-none select-none">
            "
          </span>

          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-primary-foreground leading-snug">
            Leadership is not claimed.
            <br />
            It's built.
          </p>

          {/* Closing quote */}
          <span className="absolute -bottom-8 right-0 md:right-8 font-serif text-8xl text-gold/60 leading-none select-none rotate-180">
            "
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
