import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/Logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About RIMAL", path: "/about" },
  { label: "Our Businesses", path: "/businesses" },
  { label: "Partners", path: "/partners" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-burgundy/95 backdrop-blur-sm">
      <nav className="section-padding flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-wider text-gold">
          <img src={Logo} alt="RIMAL" className="h-12 opacity-80" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary-foreground font-medium"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block px-6 py-2.5 bg-gold text-secondary-foreground font-body text-sm tracking-wide transition-opacity duration-300 hover:opacity-90"
        >
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-burgundy border-t border-primary-foreground/10"
          >
            <ul className="section-padding py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block mt-2 px-6 py-2.5 bg-gold text-secondary-foreground font-body text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
