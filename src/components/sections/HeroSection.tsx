import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-handshake.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative lg:h-screen bg-burgundy flex items-center flex-col lg:flex-row">
      {/* Image */}
      <div className="h-full py-28 sm:py-36 lg:py-0 lg:absolute lg:top-0 lg:right-0 w-1/2">
        <img
          src={heroImage}
          alt="Corporate partnership"
          className="w-full h-full object-cover scale-150 lg:scale-100"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-30 section-padding pt-0 lg:pt-32 pb-20 w-full text-center lg:text-left">
        <div className="max-w-2xl mx-auto lg:mx-0">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="
              font-serif
              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
              2xl:text-8xl
              leading-tight
              text-primary-foreground
              whitespace-pre-line
            "
          >
            Built to {"\n"}
            <span className="italic text-gold">Lead</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="
              mt-6
              font-body
              text-sm
              sm:text-base
              lg:text-lg
              xl:text-xl
              text-primary-foreground/70
              leading-relaxed
              max-w-md
              whitespace-pre-line
              mx-auto
              lg:mx-0
            "
          >
            Strategic Trading & Investment Group
            Driving Growth Through Vision and Trust.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="mt-12 flex gap-4 flex-row max-w-fit mx-auto lg:mx-0"
          >
            <Link
              to="/contact"
              className="
                px-8 py-3.5
                bg-gold
                text-secondary-foreground
                font-body
                text-xs
                sm:text-sm
                tracking-wide
                hover:opacity-90
                transition-opacity
                duration-300
              "
            >
              Contact Us
            </Link>

            <Link
              to="/businesses"
              className="
                px-8 py-3.5
                border
                border-primary-foreground/30
                text-primary-foreground
                font-body
                text-xs
                sm:text-sm
                tracking-wide
                hover:border-primary-foreground/60
                transition-colors
                duration-300
              "
            >
              Our Business
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
