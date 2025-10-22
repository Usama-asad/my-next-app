// src/components/Header.tsx
// (or .jsx if using JavaScript)

// If you need client-side interactivity in the future (e.g., dynamic language switch,
// pop-up for the chat button), you would add 'use client' at the top.
// For a purely static header, it can remain a Server Component.

import Image from 'next/image'; // Import Next.js Image component for optimized images

export default function Header() {
  return (
    <header>
      {/* Top Banner */}
      <div className="bg-gray-800 text-white text-sm py-2 flex items-center justify-center font-bold">
        <span role="img" aria-label="trophy" className="mr-2 text-xl">🏆</span>
        Jetzt neu: Data Science & AI + AI Modeling mit IHK-Zertifikat
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
        {/* Left Section - Logo and Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="relative h-15 w-32"> {/* Adjust width/height as needed for your logo */}
            {/* Replace /neue-fische-logo.png with the actual path to your logo */}
            <Image
              src="/neue-fische-logo.png"
              alt="neue fische logo"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-6 text-gray-700 font-bold">
            <li><a href="#" className="hover:text-red-600">Bootcamps</a></li>
            <li><a href="#" className="hover:text-red-600">Nützliche Infos</a></li>
            <li><a href="#" className="hover:text-red-600">Community</a></li>
            <li><a href="#" className="hover:text-red-600">Für Arbeitsvermittler</a></li>
            <li><a href="#" className="hover:text-red-600">Für Unternehmen</a></li>
          </ul>
        </div>

        {/* Right Section - Language, Chat, Button */}
        <div className="flex items-center space-x-4">
          {/* Language Switch */}
          <div className="flex text-gray-700 font-bold">
            <a href="#" className="text-red-600 px-1 border-r border-gray-300">DE</a>
            <a href="#" className="text-gray-500 hover:text-red-600 px-1">EN</a>
          </div>

          {/* Chat Icon Button */}
          <button className="bg-gray-800 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors">
            {/* Chat icon SVG - using a simple message icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

          {/* Call to Action Button */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors">
            Jetzt starten
          </button>
        </div>
      </nav>
    </header>
  );
}