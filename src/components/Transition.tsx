import React from "react";
import { motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

const animationConfiguration = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

export const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      {children}
    </motion.div>
  );
};
