import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // future: send to backend
  };

  return (
    <section id="contact" className="section-spacing bg-sand">
      {/* Full width wrapper */}
      <div className="section-padding px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-primary leading-tight max-w-4xl mx-auto">
            Let's
            <br />
            Build the Future{" "}
            <span className="text-gold">Together</span>
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              mt-10
              max-w-4xl
              mx-auto
              border
              border-border/50
              rounded-2xl
              p-8
              md:p-12
              bg-card
            "
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="
                  w-full
                  px-4
                  py-3.5
                  border
                  border-border
                  rounded-lg
                  bg-transparent
                  font-body
                  text-sm
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:border-gold
                  transition-colors
                "
                required
                maxLength={100}
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="
                  w-full
                  px-4
                  py-3.5
                  border
                  border-border
                  rounded-lg
                  bg-transparent
                  font-body
                  text-sm
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:border-gold
                  transition-colors
                "
                required
                maxLength={255}
              />

              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="
                  w-full
                  px-4
                  py-3.5
                  border
                  border-border
                  rounded-lg
                  bg-transparent
                  font-body
                  text-sm
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:border-gold
                  transition-colors
                  resize-none
                "
                required
                maxLength={1000}
              />
            </div>

            {/* Submit */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="
                  px-12
                  py-3.5
                  bg-gold
                  text-secondary-foreground
                  font-body
                  text-sm
                  tracking-wide
                  hover:opacity-90
                  transition-opacity
                  duration-300
                "
              >
                Contact Us
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
