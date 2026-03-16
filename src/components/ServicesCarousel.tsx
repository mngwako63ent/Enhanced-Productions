import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FileText, Award, Building, Database, Briefcase, Users, BookOpen, Target } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'Personal Tax Returns', description: 'Expert assistance with your personal tax filings.', icon: FileText },
  { title: 'BBBEE Certification', description: 'Professional BBBEE certification services.', icon: Award },
  { title: 'Company Tax Returns', description: 'Comprehensive tax solutions for your company.', icon: Building },
  { title: 'CSD Registration & Updates', description: 'Keep your CSD registration up to date.', icon: Database },
  { title: 'New Company Registration', description: 'Fast and easy company registration.', icon: Briefcase },
  { title: 'Beneficial Ownership Filing', description: 'Ensure compliance with beneficial ownership.', icon: Users },
  { title: 'NGO Registration', description: 'Professional assistance for NGO registration.', icon: BookOpen },
  { title: 'Business Consultancy', description: 'Strategic consultancy for your business.', icon: Target }
];

export default function ServicesCarousel() {
  return (
    <div id="services" className="py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="mySwiper w-full max-w-4xl"
      >
        {services.map((service) => (
          <SwiperSlide key={service.title} className="w-80">
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
