import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import yugLogo from "@/assets/yug-logo.png";
import Magnetic from "./Magnetic";

const scrollTo = (id: string) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const links = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "work", label: "WORK" },
  { id: "talk", label: "TALK" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[9990] px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-5 flex justify-between items-center mix-blend-normal lg:mix-blend-difference"
    >
      <Magnetic strength={0.15}>
        <button
          onClick={() => handleNavClick("hero")}
          className="inline-flex items-center hover:opacity-70 transition-opacity"
          aria-label="Go to hero section"
        >
          <img
            src={yugLogo}
            alt="YUG logo"
            className="h-8 sm:h-9 md:h-9 lg:h-10 w-auto object-contain"
          />
        </button>
      </Magnetic>

      <div className="hidden lg:flex gap-6 xl:gap-10">
        {links.map((link) => (
          <Magnetic key={link.id} strength={0.15}>
            <button
              onClick={() => handleNavClick(link.id)}
              className="text-white text-xs xl:text-sm font-bold tracking-[0.18em] xl:tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </button>
          </Magnetic>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden inline-flex items-center justify-center h-10 w-10 border border-foreground/60 bg-white text-foreground"
        aria-label="Toggle navigation menu"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close-icon"
              initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <X size={18} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="menu-icon"
              initial={{ opacity: 0, rotate: 90, scale: 0.75 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.75 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <Menu size={18} strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white text-foreground border-2 border-foreground mix-blend-normal shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
          >
            <div className="flex flex-col py-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full text-left px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase border-b border-foreground/20 last:border-b-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
