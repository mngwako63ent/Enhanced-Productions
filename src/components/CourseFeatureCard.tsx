import React from 'react';
import { motion } from 'motion/react';

interface CourseFeatureCardProps {
  title: string;
  image: string;
  className?: string;
  rotation?: number;
}

export default function CourseFeatureCard({ title, image, className = '', rotation = 0 }: CourseFeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
      initial={{ rotate: rotation }}
      className={`relative group cursor-pointer ${className}`}
    >
      <div className="overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:border-accent-yellow/50">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 md:h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
        <div className="p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-lg font-bold text-white group-hover:text-accent-yellow transition-colors">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
