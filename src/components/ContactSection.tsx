import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Instagram,
  Linkedin,
  MessageSquare,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", handle: "@yugangbaghel" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "/in/yugangbaghel" },
  { icon: MessageSquare, label: "Slack", href: "#", handle: "@yugang" },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@yugangbaghel.com",
    handle: "hello@yugangbaghel.com",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+910000000000",
    handle: "+91 00000 00000",
  },
];

const ContactSection = () => {
  return (
    <section
      id="talk"
      className="bg-primary px-6 md:px-12 py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-primary-foreground pointer-events-none select-none whitespace-nowrap"
      >
        TALK
      </motion.div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-16 lg:gap-20 items-center lg:items-stretch">
          {/* Left: Title + Social Links */}
          <div className="flex flex-col h-full">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl lg:text-[8rem] font-bold tracking-[-0.05em] text-primary-foreground leading-[0.85] mb-16"
            >
              LET'S
              <br />
              TALK.
            </motion.h2>

            <div className="space-y-0">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") || link.href === "#"
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center justify-between py-5 border-b border-primary-foreground/20 hover:border-primary-foreground transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-5 h-5 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 group-hover:text-primary-foreground transition-colors w-20">
                      {link.label}
                    </span>
                    <span className="text-primary-foreground text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                      {link.handle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary-foreground/30 group-hover:text-primary-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center lg:justify-end h-[320px] md:h-[460px] lg:h-full"
          >
            <DotLottieReact
              src="https://lottie.host/86f3bd48-7105-400e-8507-2d667c1e897a/8Qodr9Y411.lottie"
              loop
              autoplay
              className="w-full h-full max-w-[680px]"
            />
          </motion.div>
        </div>

        <div className="mt-24 md:mt-36 pt-8 border-t border-primary-foreground/20 flex justify-between items-center">
          <span className="text-primary-foreground/50 text-xs tracking-widest">
            © 2026 YUGANG BAGHEL
          </span>
          <span className="text-primary-foreground/50 text-xs tracking-widest">
            ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
