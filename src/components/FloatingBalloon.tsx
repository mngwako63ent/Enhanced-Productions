import React from 'react';
import { motion } from 'motion/react';

export default function FloatingBalloon({ className = "" }: { className?: string }) {
  return (
    <motion.img
      src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773666846/IMG-20260316-WA0004_1_hptj9t.png"
      alt="Floating Balloon"
      className={`absolute w-32 h-32 object-contain ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      referrerPolicy="no-referrer"
    />
  );
}
