// components/RevealText.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
}

const RevealText: React.FC<RevealTextProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className="relative">
      {children}
    </motion.div>
    // <div className="relative inline-block overflow-hidden">
    //   {/* Text */}
    //   <span className="relative z-10">{children}</span>

    //   {/* Sliding Block */}
    //   <motion.div initial={{ x: 0 }} animate={{ x: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 left-0 w-full h-full bg-teal-500 z-1" />
    // </div>
  );
};

export default RevealText;
