import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

const AboutSection = () => (
  <section
    id="about"
    className="px-6 md:px-12 py-24 md:py-36 border-b-2 border-foreground"
  >
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Left */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-[-0.05em] mb-10"
        >
          ABOUT
          <br />
          <span className="text-primary">YUGANG</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
        >
          Business and Design student building bold, intuitive digital
          experiences with strategy and style. I turn complex problems into
          clean interfaces using Figma and Adobe tools, collaborating closely
          with developers so every pixel works hard and still looks like it has
          a personality.
        </motion.p>
      </div>

      {/* Right — Aesthetic Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Portrait placeholder */}
        <div className="w-[82%] md:w-[72%] aspect-[3/4] bg-secondary border-2 border-foreground mb-6 overflow-hidden flex items-center justify-center">
          <img
            src="/about-hero.jpeg"
            alt="Yugang portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info card overlapping */}
        <div className="lg:absolute lg:bottom-0 lg:right-0 lg:translate-x-4 lg:translate-y-4 bg-background border-2 border-foreground p-6 md:p-8 max-w-sm">
          <div className="flex items-center gap-2 text-muted-foreground text-xs tracking-[0.2em] uppercase mb-3">
            <MapPin size={14} />
            Bengalore
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs tracking-[0.2em] uppercase mb-6">
            <Mail size={14} />
            <a
              href="mailto:hello@yugangbaghel.com"
              className="hover:text-foreground transition-colors"
            >
              yugangbaghel@gmail.com
            </a>
          </div>
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.3em] uppercase">
            Open for Work
          </span>
        </div>
      </motion.div>
    </div>

    {/* CV Button */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="max-w-[1400px] mx-auto mt-16 md:mt-24"
    >
      <a
        href="/the_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-12 py-6 border-2 border-foreground text-sm md:text-base font-bold uppercase tracking-[0.3em] hover-invert transition-colors duration-100"
      >
        View My CV
      </a>
    </motion.div>
  </section>
);

export default AboutSection;
