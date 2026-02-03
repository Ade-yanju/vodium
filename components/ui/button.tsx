"use client";

import { motion } from "framer-motion";

export function Button({
  children,
  onClick,
  secondary,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{
        padding: "14px 26px",
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
        background: secondary
          ? "rgba(255,255,255,0.08)"
          : "linear-gradient(135deg, #7c7cff, #5b5bff)",
        color: secondary ? "#fff" : "#000",
      }}
    >
      {children}
    </motion.button>
  );
}
