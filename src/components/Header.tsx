import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter">
          Enhanced<span className="text-primary-green">Productions</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          {['Home', 'Services', 'Computer Courses', 'About Us', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent-yellow transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/80 backdrop-blur-md p-6 mt-4 rounded-2xl flex flex-col gap-4"
        >
          {['Home', 'Services', 'Computer Courses', 'About Us', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
