import React from "react";
import { motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

export const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      {children}
    </motion.div>
  );
};
