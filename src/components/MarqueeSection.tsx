import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MarqueeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScroll = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    return scrollY.on("change", (v) => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const speed = Math.abs(v - lastScroll.current) / dt;
        setScrollSpeed(Math.min(speed * 2, 8));
      }
      lastScroll.current = v;
      lastTime.current = now;
    });
  }, [scrollY]);

  const baseSpeed = 20;
  const duration = Math.max(3, baseSpeed - scrollSpeed * 3);
  const text = "BRAND IDENTITY \u2022 DIGITAL DESIGN \u2022 TYPOGRAPHY \u2022 EDITORIAL \u2022 ART DIRECTION \u2022 ";

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="border-b-2 border-foreground bg-primary py-6 md:py-8 overflow-hidden">
      <motion.div
        className="whitespace-nowrap flex"
        style={{ x }}
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-primary-foreground text-3xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] mx-0 select-none"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
