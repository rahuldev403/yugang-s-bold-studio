import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const projects = [
  {
    num: "01",
    title: "Rift Hackathon",
    subtitle: "Head of Branding",
    href: "https://www.figma.com/proto/mlwUEVnP8duIq1WWFfVAIf/rift?node-id=11-11&t=mS3UzFwfmRNhihGw-1",
    bg: "bg-primary",
    shape: (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/rift.jpeg"
          alt="Rift project preview"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    ),
    size: "large",
  },
  {
    num: "02",
    title: "Fintech App",
    subtitle: "UI/UX",
    href: "https://www.figma.com/proto/Xw314fdIrS1tAxO8DAB80j/thumb?node-id=1-2&p=f&t=ZnSSwCMmR4Pnrtlb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    bg: "bg-foreground",
    shape: (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/thumbnail.jpeg"
          alt="Thumbnail project preview"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    ),
    size: "small",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shapeY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${project.size === "large" ? "md:col-span-1" : "md:col-span-1"} ${
        index === 1 ? "md:mt-24" : index === 2 ? "md:-mt-12" : ""
      }`}
    >
      <Magnetic strength={0.05}>
        <a
          href={project.href}
          target={project.href ? "_blank" : undefined}
          rel={project.href ? "noopener noreferrer" : undefined}
          className="block border-2 border-foreground group relative overflow-hidden"
          onClick={(e) => {
            if (!project.href) e.preventDefault();
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`${project.bg} ${
              project.size === "large"
                ? "h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]"
                : "h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px]"
            } flex items-center justify-center overflow-hidden relative`}
          >
            <motion.div style={{ y: shapeY }}>{project.shape}</motion.div>

            {/* Cursor-following title on hover */}
            {isHovered && (
              <motion.div
                className="absolute pointer-events-none z-10 bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  left: hoverPos.x,
                  top: hoverPos.y,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                transition={{ duration: 0.15 }}
              >
                View Project
              </motion.div>
            )}
          </div>
          <div className="p-5 md:p-6 border-t-2 border-foreground flex justify-between items-baseline">
            <div>
              <p className="text-[10px] text-muted-foreground tracking-[0.3em] mb-1">
                PROJECT {project.num}
              </p>
              <p className="text-base md:text-lg font-bold tracking-tight">
                {project.title}
              </p>
            </div>
            <p className="text-xs text-muted-foreground tracking-wider">
              {project.subtitle}
            </p>
          </div>
        </a>
      </Magnetic>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section
      id="work"
      className="px-4 md:px-8 lg:px-12 py-20 md:py-24 lg:py-32 border-b-2 border-foreground"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.05em] mb-14 md:mb-20 xl:mb-24"
        >
          SELECTED
          <br />
          <span className="text-primary">WORK</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14 text-center text-[11px] sm:text-xs uppercase tracking-[0.28em] text-muted-foreground"
        >
          More case studies are in the works. Stay tuned, the next drop is going
          to be loud.
        </motion.p>
      </div>
    </section>
  );
};

export default WorkSection;
