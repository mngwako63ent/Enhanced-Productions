import React from 'react';
import { motion } from 'motion/react';

export default function GlassCard({ children, className = "", key }: { children: React.ReactNode, className?: string, key?: string }) {
  return (
    <motion.div 
      key={key}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] rounded-3xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
