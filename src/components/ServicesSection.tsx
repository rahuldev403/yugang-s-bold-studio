import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Palette, Monitor, Package } from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    desc: "Crafting distinctive visual systems that define who you are — from logos and color palettes to complete brand guidelines that stand the test of time.",
    icon: Palette,
    num: "01",
  },
  {
    title: "Digital & Web Design",
    desc: "Designing intuitive, visually striking interfaces for web and mobile platforms. Every pixel serves a purpose.",
    icon: Monitor,
    num: "02",
  },
  {
    title: "Graphic Design",
    desc: "From social creatives to campaign visuals, I design bold graphics that are clear, memorable, and built to make your brand instantly recognizable.",
    icon: Package,
    num: "03",
  },
];

const ServicesSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-4 md:px-8 lg:px-12 py-24 md:py-36 border-b-2 border-foreground">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-[-0.05em] mb-16 md:mb-24"
        >
          WHAT I<br />
          <span className="text-primary">DO</span>
        </motion.h2>
        <div>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t-2 border-foreground cursor-pointer select-none"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <div className="flex justify-between items-center py-8 md:py-12 group">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs text-muted-foreground tracking-[0.3em] hidden md:inline">
                      {s.num}
                    </span>
                    <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-150 group-hover:text-primary">
                      {s.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl font-light flex-shrink-0 ml-4"
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pb-14 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 md:pl-16 lg:pl-24">
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="w-16 h-16 md:w-20 md:h-20 bg-primary flex items-center justify-center flex-shrink-0"
                        >
                          <Icon className="text-primary-foreground" size={32} />
                        </motion.div>
                        <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="border-t-2 border-foreground" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
