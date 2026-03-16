/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import GlassCard from './components/GlassCard';
import ServicesCarousel from './components/ServicesCarousel';
import FloatingBalloon from './components/FloatingBalloon';
import SpinningOrange from './components/SpinningOrange';
import CourseFeatureCard from './components/CourseFeatureCard';
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
            src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773673072/language-lab-181083_1280_ubxne6.jpg"
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
        
        <section id="computer-courses" className="py-16 bg-white/5 relative overflow-hidden">
          <FloatingBalloon className="hidden md:block bottom-10 left-10 z-0 opacity-50" />
          <SpinningOrange className="opacity-10 -top-20 -right-20 z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter leading-none">
                3-Month <span className="text-primary-green italic">Comprehensive</span> Computer Literacy Course
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <CourseFeatureCard 
                  title="Microsoft Office Training" 
                  image="https://www.abujadataschool.com/wp-content/uploads/2021/11/Microsoft-office-training-in-Abuja-Nigeria-1024x576.png"
                  rotation={-2}
                />
                <CourseFeatureCard 
                  title="Internet & Email Skills" 
                  image="https://images.unsplash.com/photo-1673515335586-f9f662c01482?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  rotation={1}
                />
                <CourseFeatureCard 
                  title="Computer Basics" 
                  image="https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  rotation={-1}
                />
                <CourseFeatureCard 
                  title="Practical Hands-on Learning" 
                  image="https://iafrica.com/wp-content/uploads/2025/07/AI-forum.jpg"
                  rotation={2}
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <p className="text-5xl md:text-7xl font-black text-accent-yellow drop-shadow-xl">Only R1650</p>
                <button className="bg-primary-green px-10 py-4 rounded-full text-xl font-bold hover:bg-secondary-green transition-all hover:scale-105 shadow-lg">
                  Enroll Today
                </button>
              </div>
            </div>
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
