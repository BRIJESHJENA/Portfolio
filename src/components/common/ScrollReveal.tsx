import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  duration?: number;
  once?: boolean;
  /** Stretch to fill parent grid/flex cell for equal-height rows */
  stretch?: boolean;
}

const offsets: Record<Direction, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 48, scale: 1 },
  down: { x: 0, y: -48, scale: 1 },
  left: { x: 48, y: 0, scale: 1 },
  right: { x: -48, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.92 },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.65,
  once = true,
  stretch = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: offset.scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={[className, stretch ? "scroll-reveal-stretch" : ""].filter(Boolean).join(" ")}
      style={stretch ? { height: "100%", width: "100%", display: "flex", flexDirection: "column" } : undefined}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
