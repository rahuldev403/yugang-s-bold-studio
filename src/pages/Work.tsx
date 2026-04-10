import { motion } from "framer-motion";
import { useState } from "react";
import Magnetic from "@/components/Magnetic";
import PageTransition from "@/components/PageTransition";

const projects = [
  { num: "01", title: "Aura Skincare", subtitle: "Brand Identity", color: "bg-primary" },
  { num: "02", title: "Fintech App", subtitle: "UI/UX", color: "bg-foreground" },
  { num: "03", title: "Urban Magazine", subtitle: "Editorial", color: "bg-secondary" },
  { num: "04", title: "Festival", subtitle: "Art Direction", color: "bg-primary" },
  { num: "05", title: "Tech Summit", subtitle: "Event Branding", color: "bg-foreground" },
  { num: "06", title: "Organic Co.", subtitle: "Packaging", color: "bg-secondary" },
];

const shapes = [
  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-background/30 transition-transform duration-700 group-hover:scale-[1.4]" />,
  <div className="w-24 h-14 md:w-36 md:h-20 bg-primary/40 transition-transform duration-700 group-hover:scale-[1.4]" />,
  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden transition-transform duration-700 group-hover:scale-[1.4]">
    <div className="w-full h-1/2 bg-foreground/30" />
    <div className="w-full h-1/2 bg-primary/30" />
  </div>,
  <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-background/40 rotate-45 transition-transform duration-700 group-hover:scale-[1.4] group-hover:rotate-[55deg]" />,
  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-background/30 transition-transform duration-700 group-hover:scale-[1.4]" />,
  <div className="w-20 h-20 md:w-32 md:h-32 bg-background/20 transition-transform duration-700 group-hover:scale-[1.4]" />,
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Magnetic strength={0.03}>
        <div
          className="border-2 border-foreground group relative overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`${project.color} h-[280px] md:h-[380px] flex items-center justify-center overflow-hidden relative`}
          >
            {shapes[index % shapes.length]}

            {isHovered && (
              <motion.div
                className="absolute pointer-events-none z-10 bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ left: hoverPos.x, top: hoverPos.y, translateX: "-50%", translateY: "-50%" }}
                transition={{ duration: 0.15 }}
              >
                VIEW
              </motion.div>
            )}
          </div>
          <div className="p-5 border-t-2 border-foreground flex justify-between items-baseline">
            <div>
              <p className="text-[10px] text-muted-foreground tracking-[0.3em] mb-1">
                PROJECT {project.num}
              </p>
              <p className="text-base md:text-lg font-bold tracking-tight">{project.title}</p>
            </div>
            <p className="text-xs text-muted-foreground tracking-wider">{project.subtitle}</p>
          </div>
        </div>
      </Magnetic>
    </motion.div>
  );
};

const Work = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-[-0.05em] mb-4"
          >
            THE <span className="text-primary">ARCHIVE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm tracking-widest uppercase mb-16 md:mb-24"
          >
            Selected projects 2022 — 2026
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-foreground px-6 md:px-12 py-8 flex justify-between items-center">
        <span className="text-muted-foreground text-xs tracking-widest">© 2026 YUGANG BAGHEL</span>
        <span className="text-muted-foreground text-xs tracking-widest">ALL RIGHTS RESERVED</span>
      </footer>
    </PageTransition>
  );
};

export default Work;
