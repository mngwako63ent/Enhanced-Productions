import React from 'react';
import { motion } from 'motion/react';

export default function SpinningOrange({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute w-64 h-64 rounded-full border-8 border-accent-yellow/30 ${className}`}
      initial={{ rotate: 0 }}
      whileInView={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  );
}
