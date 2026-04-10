import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useSpring(0, { damping: 25, stiffness: 300, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300, mass: 0.5 });
  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches;

    if (!canUseCustomCursor) {
      setVisible(false);
      return;
    }

    const getClampedX = (x: number) => {
      const viewportWidth = document.documentElement.clientWidth;
      const safeInset = 14;
      return Math.min(x, viewportWidth - safeInset);
    };

    const move = (e: PointerEvent) => {
      const nextX = getClampedX(e.clientX);
      cursorX.set(nextX);
      cursorY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const target = e.target as HTMLElement;
      const isHoverTarget = Boolean(
        target?.closest(
          "[data-magnetic], a, button, [role='button'], input, textarea, select, label",
        ),
      );

      if (isHoverTarget !== hoveringRef.current) {
        hoveringRef.current = isHoverTarget;
        setHovering(isHoverTarget);
      }
    };

    const hide = () => {
      if (visibleRef.current || hoveringRef.current) {
        visibleRef.current = false;
        hoveringRef.current = false;
        setVisible(false);
        setHovering(false);
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[60] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: hovering ? 56 : 20,
          height: hovering ? 56 : 20,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hovering ? "transparent" : "hsl(var(--foreground))",
          border: `2px solid hsl(var(--primary))`,
          transition:
            "width 0.3s cubic-bezier(.4,0,.2,1), height 0.3s cubic-bezier(.4,0,.2,1), background-color 0.3s",
        }}
      />
    </>
  );
};

export default CustomCursor;
