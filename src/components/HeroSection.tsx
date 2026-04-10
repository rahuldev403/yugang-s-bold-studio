import { motion } from "framer-motion";
import heroImg from "@/assets/hero-yug.png";
import Magnetic from "./Magnetic";

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

const AnimatedWord = ({
  word,
  offset = 0,
  outlined = false,
}: {
  word: string;
  offset?: number;
  outlined?: boolean;
}) => (
  <span className="inline-flex overflow-hidden">
    {word.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i + offset}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className={`inline-block ${outlined ? "text-transparent [-webkit-text-stroke:2px_hsl(var(--foreground))]" : ""}`}
        style={{ transformOrigin: "bottom" }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-[100svh] lg:h-[100svh] relative overflow-hidden flex flex-col border-b-2 border-foreground"
    >
      {/* Layer 1: Background Typography */}
      <div
        className="absolute inset-0 hidden sm:flex flex-col justify-center px-6 md:px-12 pointer-events-none select-none"
        aria-hidden
      >
        <div className="space-y-2 md:space-y-4">
          {[false, true, false, true].map((outlined, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: outlined ? 0.08 : 0.04 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 1 }}
              className="text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.9] tracking-[-0.05em]"
            >
              <span
                className={
                  outlined
                    ? "text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground))]"
                    : "text-foreground"
                }
              >
                YUGANG BAGHEL
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Layer 2 & 3: Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:h-full pt-14 sm:pt-16 md:pt-20 lg:pt-20">
        {/* Left — Typography */}
        <div className="flex-1 lg:flex-none lg:w-1/2 lg:h-full flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 py-6 sm:py-10 md:py-8 lg:py-0 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-[10px] sm:text-xs tracking-[0.24em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6 text-muted-foreground"
          >
            Multidisciplinary Designer
          </motion.p>

          <h1 className="text-[clamp(2.4rem,16vw,5rem)] md:text-[clamp(3.2rem,10vw,7.2rem)] xl:text-[clamp(3.8rem,11vw,13rem)] font-bold leading-[0.85] tracking-[-0.05em]">
            <AnimatedWord word="YUGANG" />
            <br />
            <AnimatedWord word="BAGHEL" offset={6} outlined />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-6 sm:mt-8 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm text-muted-foreground leading-relaxed"
          >
            Crafting bold visual identities and digital experiences that refuse
            to blend in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-8 sm:mt-10"
          >
            <Magnetic strength={0.2}>
              <button
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-foreground text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.3em] hover-invert"
              >
                View Work
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right — Portrait */}
        <div className="w-full lg:w-1/2 lg:flex-none relative h-[36svh] sm:h-[48svh] md:h-[52svh] lg:h-full overflow-hidden">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <img
              src={heroImg}
              alt="Yugang Baghel"
              className="w-full h-full object-cover object-[center_18%] sm:object-center relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
