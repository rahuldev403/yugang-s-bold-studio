import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 420;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Go to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[70] h-12 w-12 md:h-14 md:w-14 border-2 border-foreground bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-background ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="flex items-center justify-center w-full h-full">
        <ArrowUp size={20} strokeWidth={2.5} />
      </span>
    </button>
  );
};

export default ScrollToTopButton;
