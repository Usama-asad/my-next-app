'use client'; // Required for client-side functionality (Swiper, useState)

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import AudioPlayer from './AudioPlayer'; // Assuming AudioPlayer is a client component

// Import Swiper styles
// Make sure these are installed: npm install swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 1. Define the TypeScript Interface for a single testimonial item
interface TestimonialItem {
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarSrc: string; // Path to image
  audioSrc?: string; // Optional path to audio
}

// 2. Import the JSON data directly
// Adjust the path as needed based on where you saved testimonials.json
// Ensure tsconfig.json has "resolveJsonModule": true
import testimonialsData from '../data/testimonials.json';

// Testimonial Card Component (unchanged, but types are now clearer from interface)
const TestimonialCard = ({ quote, authorName, authorTitle, avatarSrc, audioSrc }: TestimonialItem) => {
  return (
    <div className="bg-trust-grey dark:bg-dark-trust-grey rounded-lg p-6 lg:p-8 flex flex-col justify-between h-full w-[80%] shadow-primary-light dark:shadow-primary-light backdrop-blur-sm">
      <div className="mb-6">
        <span className="text-primary-light dark:text-dark-primary-light text-5xl font-serif leading-none block mb-4">”</span>
        {/* If you want to display the quote text, uncomment this: */}
        {/* <p className="text-secondary-base dark:text-dark-secondary-base text-lg leading-relaxed">{quote}</p> */}

        {audioSrc && ( // Only render if audioSrc is provided
          <div className="mt-4"> {/* Added margin-top for spacing below the quote */}
            <AudioPlayer src={audioSrc} title={`Testimonial from ${authorName}`} />
          </div>
        )}
      </div>
      <div className="flex items-center mt-auto">
        {avatarSrc && (
          <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4 flex-shrink-0">
            <Image
              src={avatarSrc}
              alt={authorName}
              layout="fill" // Note: layout="fill" requires the parent to be relative
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        )}
        <div>
          <p className="text-primary-dark dark:text-dark-primary-dark font-semibold">{authorName}</p>
          <p className="text-secondary-base dark:text-dark-secondary-base text-sm">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonial Slider Component
const AlumniTestimonials = () => {
  // 3. Use the imported data (with a type assertion for safety)
  const testimonials: TestimonialItem[] = testimonialsData;

  return (
    <div className="bg-gradient-hero dark:bg-dark-gradient-hero py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Subtitle */}
        <h2 className="text-primary-light dark:text-dark-primary-light text-3xl md:text-4xl font-bold text-center mb-4 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          Das sagen unsere Alumni und Autor:innen
        </h2>
        <p className="text-secondary-base dark:text-trust-grey text-lg text-center mb-12">
          Höre, was unsere ehemaligen Teilnehmer über ihre Erfahrungen sagen.
        </p>

        {/* Swiper Slider */}
        {/* Wrap your Swiper component and navigation buttons in a div */}
        <div className="relative w-full"> {/* This is your new wrapper */}
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper w-[90%] !pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex h-auto">
                <TestimonialCard
                  quote={testimonial.quote}
                  authorName={testimonial.authorName}
                  authorTitle={testimonial.authorTitle}
                  avatarSrc={testimonial.avatarSrc}
                  audioSrc={testimonial.audioSrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons (now positioned relative to the new wrapper) */}
          <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-12 z-10 flex items-center justify-center p-2 rounded-full bg-trust-grey/50 dark:bg-primary-dark/50 text-primary-light dark:text-dark-primary-light cursor-pointer hover:bg-trust-grey dark:hover:bg-primary-dark transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 -right-12 z-10 flex items-center justify-center p-2 rounded-full bg-trust-grey/50 dark:bg-primary-dark/50 text-primary-light dark:text-dark-primary-light cursor-pointer hover:bg-trust-grey dark:hover:bg-primary-dark transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniTestimonials;