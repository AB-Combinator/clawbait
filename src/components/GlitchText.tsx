"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function GlitchText({
  children,
  className = "",
  as: Tag = "span",
}: GlitchTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{
        textShadow: [
          "0 0 0px transparent",
          "-2px 0 #EF4444, 2px 0 #22C55E",
          "2px 0 #EF4444, -2px 0 #22C55E",
          "0 0 0px transparent",
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      <Tag>{children}</Tag>
    </motion.span>
  );
}
