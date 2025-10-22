// src/components/HeroSection.tsx
// (or .jsx if using JavaScript)

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
      // No onended logic for now; video will pause on its last frame.
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        {/* <source src="/background-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Main Content Area - Centered and width-constrained */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">

        {/* Heading (full width) */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center mb-8 max-w-4xl">
          Skaliere auf 100K/Monat mit 1 Mitarbeiter in unter 12 Monaten mit SPEEDSCALING
        </h1>

        {/* Content Grid for Left Text and Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Finde als Coach, Berater & Creator endlich mal eine 1:1 Begleitung auf Augenhöhe und einen Prozess, den schon 2.000+ Coaches nutzen, um entspannt ohne Team auf 100k zu wachsen.
            </p>

            <ul className="space-y-3 mb-10 text-left mx-auto max-w-lg lg:mx-0">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                Erhalte deine individuelle 100K-Roadmap direkt von zwei 7-stelligen Marketern
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                Nutze 2.000-fach erprobte Vorlagen aus 25 Mio. € Launch-Umsatz
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                Sichere dir 40 %+ Profit mit 0-1 Teammitgliedern
              </li>
            </ul>

            <p className="text-lg font-semibold mb-6">
              Too good to be true? Dann lies weiter.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
              JETZT ERSTGESPRÄCH BUCHEN
              <br />
              <span className="text-sm font-normal">Such Dir einen freien Termin aus!</span>
            </button>
          </div>

          {/* Right Image Section - Full width within its grid column */}
          <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <Image
              src="/team-photo.jpg"
              alt="Team discussing project"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw" // Adjust sizes for better performance
              priority
            />
          </div>
        </div>
      </div>

      {/* Fixed Logos at the bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-8 md:space-x-12 px-4 opacity-70">
        {/* Replace with actual logo paths and adjust dimensions */}
        <div className="relative h-8 w-24 hidden sm:block"> {/* Hide on small screens if too crowded */}
          <Image src="/logo1.png" alt="Logo 1" fill style={{ objectFit: 'contain' }} sizes="80px" />
        </div>
        <div className="relative h-8 w-24 hidden sm:block">
          <Image src="/logo2.png" alt="Logo 2" fill style={{ objectFit: 'contain' }} sizes="80px" />
        </div>
        <div className="relative h-8 w-24 hidden md:block">
          <Image src="/logo3.png" alt="Logo 3" fill style={{ objectFit: 'contain' }} sizes="80px" />
        </div>
        <div className="relative h-8 w-24 hidden lg:block">
          <Image src="/logo4.png" alt="Logo 4" fill style={{ objectFit: 'contain' }} sizes="80px" />
        </div>
        <div className="relative h-8 w-24 hidden xl:block">
          <Image src="/logo5.png" alt="Logo 5" fill style={{ objectFit: 'contain' }} sizes="80px" />
        </div>
        {/* Blackbox logo - always show if possible */}
        <div className="absolute right-4 bottom-0 h-10 w-10">
          <Image src="/blackbox-logo.png" alt="Blackbox" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}