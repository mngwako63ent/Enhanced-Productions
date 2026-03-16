/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import GlassCard from './components/GlassCard';
import ServicesCarousel from './components/ServicesCarousel';
import FloatingBalloon from './components/FloatingBalloon';
import SpinningOrange from './components/SpinningOrange';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden px-4">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
            src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773666611/IMG-20260316-WA0005_1_q5cd0z.jpg"
            alt="Business Background"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-accent-yellow/20 blur-3xl" />
          <div className="relative text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">Enhanced Productions<br/><span className="text-accent-yellow">Leap to Greatness</span></h1>
            <p className="text-lg md:text-xl mt-4 text-gray-300">Premium B2B Consultancy and Computer Literacy Training in Potchefstroom.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-green px-8 py-3 rounded-full font-semibold hover:bg-secondary-green transition-all">Get a Quote</button>
              <button className="border border-accent-yellow px-8 py-3 rounded-full font-semibold hover:bg-accent-yellow hover:text-black transition-all">Enroll Now</button>
            </div>
          </div>
        </section>
        
        <ServicesCarousel />
        
        <section id="testimonials" className="py-20 bg-white/5 px-4 relative overflow-hidden">
          <FloatingBalloon className="hidden md:block top-10 right-10 z-0" />
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard>
                <p className="italic text-gray-300">"Enhanced Productions helped me register my company quickly and professionally."</p>
                <p className="mt-4 font-bold">- Lerato</p>
              </GlassCard>
              <GlassCard>
                <p className="italic text-gray-300">"The computer literacy course was practical and very helpful for my career."</p>
                <p className="mt-4 font-bold">- Tshepho</p>
              </GlassCard>
              <GlassCard>
                <p className="italic text-gray-300">"Professional tax services, highly recommended!"</p>
                <p className="mt-4 font-bold">- Lebogang</p>
              </GlassCard>
            </div>
          </div>
        </section>
        
        <section id="computer-courses" className="py-20 bg-white/5 relative overflow-hidden">
          <FloatingBalloon className="hidden md:block bottom-10 left-10 z-0" />
          <SpinningOrange className="opacity-20 md:opacity-100 -top-20 -right-20 z-0" />
          <SpinningOrange className="opacity-20 md:opacity-100 -top-20 -left-20 z-0" />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8">3-Month Comprehensive Computer Literacy Course</h2>
            <p className="text-xl text-gray-300 mb-8">Microsoft Office Training, Internet & Email Skills, Computer Basics, Practical Hands-on Learning.</p>
            <p className="text-5xl font-bold text-accent-yellow mb-8">Only R1650</p>
            <button className="bg-primary-green px-10 py-4 rounded-full text-xl font-bold hover:bg-secondary-green transition-all">Enroll Today</button>
          </div>
        </section>
        
        <section id="about-us" className="py-20 container mx-auto px-4">
          <GlassCard>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-300">Established in 2016, located in Ikageng, Potchefstroom. Our mission is to empower businesses and individuals through professional services and education.</p>
          </GlassCard>
        </section>
        
        <section id="contact" className="py-20 container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
              <p>Consultancy Phone: 067 045 6770</p>
              <p>Training Phone: 076 422 8913</p>
              <p>Email: enhancedproductions@yahoo.com</p>
              <p>Address: 4691 Mafoko St, Ikageng, Potchefstroom, 2531</p>
            </GlassCard>
            <GlassCard>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="bg-white/5 p-3 rounded-lg w-full" />
                <input type="email" placeholder="Email" className="bg-white/5 p-3 rounded-lg w-full" />
                <input type="tel" placeholder="Phone" className="bg-white/5 p-3 rounded-lg w-full" />
                <textarea placeholder="Message" className="bg-white/5 p-3 rounded-lg w-full" rows={4}></textarea>
                <button className="bg-primary-green p-3 rounded-lg font-bold hover:bg-secondary-green transition-all w-full">Send Message</button>
              </form>
            </GlassCard>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        <p>&copy; 2026 Enhanced Productions. All rights reserved.</p>
      </footer>
    </div>
  );
}
