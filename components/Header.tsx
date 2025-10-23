// src/components/Header.tsx
// (or .jsx if using JavaScript)

'use client'; // This component needs to be a client component for state management (mobile menu)

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define navigation links for easier mapping
  const navLinks = [
    { name: 'Bootcamps', href: '#' },
    { name: 'Nützliche Infos', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Für Arbeitsvermittler', href: '#' },
    { name: 'Für Unternehmen', href: '#' },
  ];

  return (
    <header className="relative z-50">
      {/* Top Banner */}
      <div className="bg-primary-dark font-bold text-white text-sm py-2 flex items-center justify-center">
        <span role="img" aria-label="trophy" className="mr-2 text-xl">🏆</span>
        Jetzt neu: Data Science & AI + AI Modeling mit IHK-Zertifikat
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-primary-dark py-4 px-4 sm:px-6 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="relative h-6 w-32">
          <Image
            src="/neue-fische-logo.png" // Ensure this path is correct
            alt="neue fische logo"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority // Prioritize loading the logo
          />
        </div>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <ul className="hidden lg:flex space-x-6 text-white font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary-accent transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Section (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Switch */}
          <div className="flex text-white font-bold">
            <a href="#" className="text-primary-light px-1 border-r border-secondary-base">DE</a>
            <a href="#" className="text-secondary-base hover:text-primary-accent px-1 transition-colors">EN</a>
          </div>

          {/* Chat Icon Button */}
          <button className="bg-secondary-dark text-white p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary-light transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>

          </button>

          {/* Call to Action Button */}
          <button className="bg-gradient-to-r from-primary-light to-primary-accent text-primary-dark px-5 py-2 rounded-full font-semibold hover:from-primary-accent hover:to-primary-accent transition-colors duration-300 shadow-lg">
            Jetzt starten
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (slidable, hidden by default) */}
      <div
        className={`fixed inset-0 lg:hidden bg-primary-dark transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full w-full">
          {/* Mobile Menu Header (Logo and Close Button) */}
          <div className="flex items-center justify-between bg-primary-dark p-4 sm:px-6 border-b border-secondary-dark">
            <div className="relative h-6 w-32">
              <Image
                src="/neue-fische-logo.png" // Ensure this path is correct
                alt="neue fische logo"
                fill
                style={{ objectFit: 'contain' }}
                sizes="33vw"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-primary-light"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col py-4 overflow-y-auto flex-grow">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-secondary-dark last:border-b-0">
                <a
                  href={link.href}
                  className="flex items-center justify-between text-white text-lg py-4 px-6 hover:bg-secondary-dark transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
            {/* Mobile Language Switch */}
            <li className="py-4 px-6 border-b border-secondary-dark">
              <div className="flex text-lg font-medium">
                <a href="#" className="text-primary-light px-1 border-r border-secondary-base">DE</a>
                <a href="#" className="text-secondary-base hover:text-primary-accent px-1">EN</a>
              </div>
            </li>
          </ul>

          {/* Mobile CTA and Chat Button */}
          <div className="p-4 sm:px-6 border-t border-secondary-dark flex flex-col items-center space-y-4">
            {/* Chat Button (aligned bottom right in your image) */}
            <div className="w-full flex justify-end">
              <div className="relative">
                <button className="bg-white text-primary-dark p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </button>
                <div className="absolute -bottom-4 -right-4 h-8 w-8"> {/* Adjust positioning */}
                   <Image src="/blackbox-logo.png" alt="Blackbox" fill style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-primary-light to-primary-accent text-primary-dark px-5 py-3 w-full rounded-md font-semibold text-lg hover:from-primary-accent hover:to-primary-accent transition-colors duration-300 shadow-lg">
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}