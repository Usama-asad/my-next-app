'use client'; // Required for useRef and useEffect for video control

import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented. User might need to interact.", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-trust-grey dark:text-trust-grey overflow-hidden bg-gradient-hero dark:bg-dark-gradient-hero mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-dark dark:bg-dark-primary-dark opacity-70 z-10 backdrop-blur-sm"></div>

      {/* Main Content Area - Centered and width-constrained */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        {/* Heading - Centered, comes first in desktop */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center max-w-7xl mx-auto">
          Skaliere auf 100K/Monat mit 1 Mitarbeiter in unter 12 Monaten mit SPEEDSCALING
        </h1>

        {/* Content Grid for Desktop (2 columns) and Mobile (stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Sentence, List, Single Line, Button */}
          <div className="flex flex-col text-center lg:text-left order-2 lg:order-1">
            <p className="text-base sm:text-lg text-trust-gray  dark:text-dark-secondary-base mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Finde als Coach, Berater & Creator endlich mal eine 1:1 Begleitung auf Augenhöhe und einen Prozess, den schon 2.000+ Coaches nutzen, um entspannt ohne Team auf 100k zu wachsen.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-left mx-auto max-w-lg lg:mx-0 mb-6 sm:mb-8">
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-2 mt-1">✓</span>
                Erhalte deine individuelle 100K-Roadmap direkt von zwei 7-stelligen Marketern
              </li>
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-2 mt-1">✓</span>
                Nutze 2.000-fach erprobte Vorlagen aus 25 Mio. € Launch-Umsatz
              </li>
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-2 mt-1">✓</span>
                Sichere dir 40 %+ Profit mit 0-1 Teammitgliedern
              </li>
            </ul>
            {/* <p className="text-base sm:text-lg font-semibold text-trust-gray dark:text-dark-trust-gray mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 hover:underline hover:text-primary-accent dark:hover:text-dark-primary-accent">
              Too good to be true? Dann lies weiter.
            </p> */}
            <input type="text" placeholder='Email' className='bg-secondary-base placeholder-trust-grey py-2 px-4 mb-4 rounded-md opacity-80' />
            <input type="Password" placeholder='Password' className='bg-secondary-base placeholder-trust-grey py-2 px-4 mb-4 rounded-md opacity-80' />
            <button className="bg-primary-light dark:bg-primary-light text-primary-dark dark:text-primary-dark font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-primary-accent dark:hover:bg-dark-primary-accent hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] focus:ring-2 focus:ring-primary-accent dark:focus:ring-dark-primary-accent focus:outline-none w-2/3 max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF] mx-auto lg:mx-0">
              JETZT ERSTGESPRÄCH BUCHEN
              <br />
              <span className="text-sm font-normal">Such Dir einen freien Termin aus!</span>
            </button>
          </div>

          {/* Right Column: Team Photo - Full width on mobile */}
          <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl mx-auto lg:mx-0 order-1 lg:order-2">
            <Image
              src="/team-photo.jpg"
              alt="Team discussing project"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}