import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import heroImg from "@/assets/hero-yug.png";
import Magnetic from "@/components/Magnetic";
import MarqueeSection from "@/components/MarqueeSection";
import PageTransition from "@/components/PageTransition";

const letterVariants = {
  hidden: { y: "110%", rotateX: -80 },
  visible: (i: number) => ({
    y: "0%",
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.04,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const AnimatedWord = ({ word, offset = 0 }: { word: string; offset?: number }) => (
  <span className="inline-flex overflow-hidden">
    {word.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i + offset}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const projects = [
  { num: "01", title: "Aura Skincare", subtitle: "Brand Identity", color: "bg-primary" },
  { num: "02", title: "Fintech App", subtitle: "UI/UX", color: "bg-foreground" },
  { num: "03", title: "Urban Magazine", subtitle: "Editorial", color: "bg-secondary" },
  { num: "04", title: "Festival", subtitle: "Art Direction", color: "bg-primary" },
];

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const horizontalX = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <PageTransition>
      {/* HERO */}
      <section className="min-h-screen flex flex-col lg:flex-row items-stretch border-b-2 border-foreground relative overflow-hidden">
        {/* Left — Typography */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-0 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xs tracking-[0.3em] uppercase mb-6 text-muted-foreground"
          >
            Multidisciplinary Designer
          </motion.p>

          <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] tracking-[-0.05em]">
            <AnimatedWord word="YUGANG" />
            <br />
            <AnimatedWord word="BAGHEL" offset={6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed"
          >
            Crafting bold visual identities and digital experiences that refuse to blend in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-10"
          >
            <Magnetic strength={0.2}>
              <Link
                to="/work"
                className="inline-block px-10 py-5 border-2 border-foreground text-xs font-bold uppercase tracking-[0.3em] hover-invert"
              >
                View Selected Works
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right — Hero Image + Lottie Overlay */}
        <div className="flex-1 relative flex items-center justify-center border-l-0 lg:border-l-2 border-foreground min-h-[400px] lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Hero Image */}
            <img
              src={heroImg}
              alt="Yugang Baghel"
              className="w-[280px] md:w-[360px] lg:w-[420px] object-contain relative z-10"
            />
            {/* Lottie Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <DotLottieReact
                src="https://lottie.host/86f3bd48-7105-400e-8507-2d667c1e897a/8Qodr9Y411.lottie"
                loop
                autoplay
                className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] opacity-60"
              />
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full border-2 border-foreground/10 pointer-events-none"
          />
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeSection />

      {/* HORIZONTAL SCROLL SELECTED WORK */}
      <section ref={scrollRef} className="relative h-[300vh] border-b-2 border-foreground">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-[-0.05em] px-6 md:px-12 mb-12"
          >
            SELECTED <span className="text-primary">WORK</span>
          </motion.h2>

          <motion.div
            style={{ x: horizontalX }}
            className="flex gap-6 md:gap-10 px-6 md:px-12"
          >
            {projects.map((p, i) => (
              <Link
                key={i}
                to="/work"
                className="flex-shrink-0 w-[320px] md:w-[450px] lg:w-[550px] group"
              >
                <div className="border-2 border-foreground overflow-hidden">
                  <div
                    className={`${p.color} h-[240px] md:h-[340px] flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/20 transition-transform duration-500 group-hover:scale-150" />
                  </div>
                  <div className="p-5 border-t-2 border-foreground flex justify-between items-baseline bg-background">
                    <div>
                      <p className="text-[10px] text-muted-foreground tracking-[0.3em] mb-1">
                        PROJECT {p.num}
                      </p>
                      <p className="text-base md:text-lg font-bold tracking-tight">{p.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground tracking-wider">{p.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-[-0.04em]"
          >
            HAVE A PROJECT?
          </motion.h2>
          <Magnetic strength={0.2}>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-primary-foreground text-primary-foreground text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-100 hover:bg-primary-foreground hover:text-primary"
            >
              Let's Talk
            </Link>
          </Magnetic>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
