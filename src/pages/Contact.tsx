import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-sand">
        <div className="section-padding max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-serif italic text-gold text-lg">Invitation</span>
            <h1 className="font-serif text-4xl md:text-6xl text-navy mt-2 leading-tight">
              Get in Touch
            </h1>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors"
                required
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors"
                required
                maxLength={255}
              />
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
                required
                maxLength={1000}
              />
              <button
                type="submit"
                className="px-12 py-3.5 bg-gold text-secondary-foreground font-body text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-lg text-navy mb-2">Address</h3>
                <p className="font-body text-sm text-foreground/60 whitespace-pre-line">
                  {siteContent.company.address}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-navy mb-2">Email</h3>
                <p className="font-body text-sm text-foreground/60">{siteContent.company.email}</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-navy mb-2">Phone</h3>
                <p className="font-body text-sm text-foreground/60">{siteContent.company.phone}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
