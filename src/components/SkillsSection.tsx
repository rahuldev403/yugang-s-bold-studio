import { motion } from "framer-motion";

const skills = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Web Design",
  "UI/UX",
  "Brand Identity",
  "Typography",
  "Print Design",
];

const SkillsSection = () => (
  <section
    id="skills"
    className="px-6 md:px-12 py-24 md:py-36 border-b-2 border-foreground bg-foreground"
  >
    <div className="max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-[-0.05em] mb-16 md:mb-24 text-background"
      >
        TOOLS &<br />
        <span className="text-primary">SKILLS</span>
      </motion.h2>

      <div className="flex flex-wrap gap-3 md:gap-4">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="px-5 py-3 md:px-8 md:py-4 border border-background/30 text-background text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-150"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
