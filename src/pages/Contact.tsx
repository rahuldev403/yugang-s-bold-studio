import { motion } from "framer-motion";
import { useState } from "react";
import Magnetic from "@/components/Magnetic";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <PageTransition>
      <section className="min-h-screen bg-primary flex flex-col justify-center px-6 md:px-12 lg:px-16 py-32 relative overflow-hidden">
        {/* Background decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-primary-foreground pointer-events-none select-none whitespace-nowrap"
        >
          TALK
        </motion.div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-[-0.05em] text-primary-foreground leading-[0.85] mb-6"
          >
            LET'S
            <br />
            <span className="text-foreground">TALK.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary-foreground/60 text-sm tracking-widest uppercase mb-16 md:mb-24 max-w-md"
          >
            Have a project in mind? Let's create something extraordinary together.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-12"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { name: "name", label: "Your Name", type: "text" },
              { name: "email", label: "Your Email", type: "email" },
            ].map((f) => (
              <motion.div
                key={f.name}
                animate={{ scale: focusedField === f.name ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-3">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  onFocus={() => setFocusedField(f.name)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-primary-foreground/30 focus:border-foreground text-primary-foreground py-4 outline-none transition-all duration-300 text-lg"
                />
              </motion.div>
            ))}
            <motion.div
              animate={{ scale: focusedField === "message" ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-3">
                Your Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b-2 border-primary-foreground/30 focus:border-foreground text-primary-foreground py-4 outline-none transition-all duration-300 text-lg resize-none"
              />
            </motion.div>
            <Magnetic strength={0.2}>
              <button
                type="submit"
                className="px-10 py-5 border-2 border-primary-foreground text-primary-foreground text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-100 hover:bg-primary-foreground hover:text-primary"
              >
                Send Message
              </button>
            </Magnetic>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">Email</p>
              <p className="text-primary-foreground text-sm font-bold">hello@yugangbaghel.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">Based in</p>
              <p className="text-primary-foreground text-sm font-bold">India</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">Availability</p>
              <p className="text-primary-foreground text-sm font-bold">Open to Projects</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground px-6 md:px-12 py-8 flex justify-between items-center">
        <span className="text-background/50 text-xs tracking-widest">© 2026 YUGANG BAGHEL</span>
        <span className="text-background/50 text-xs tracking-widest">ALL RIGHTS RESERVED</span>
      </footer>
    </PageTransition>
  );
};

export default Contact;
