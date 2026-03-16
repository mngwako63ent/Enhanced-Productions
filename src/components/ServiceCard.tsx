import React from 'react';
import { LucideIcon } from 'lucide-react';
import GlassCard from './GlassCard';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <GlassCard className="flex flex-col items-center text-center h-full">
      <div className="bg-white/10 p-4 rounded-full mb-6">
        <Icon className="w-8 h-8 text-accent-yellow" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      {link && (
        <a href={link} className="text-accent-yellow font-semibold hover:underline">
          Learn More
        </a>
      )}
    </GlassCard>
  );
}
