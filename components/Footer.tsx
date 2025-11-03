import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark py-12 px-4 sm:px-6 lg:px-8 border-t border-primary-light/20 dark:border-dark-primary-light/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Company Info and Socials */}
        <div className="flex flex-col items-start">
          <div className="relative h-6 w-32 mb-4">
            <Image
              src="/neue-fische-logo.png"
              alt="neue fische logo"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-16 h-1 bg-primary-light/50 dark:bg-dark-primary-light/50 mb-6 rounded-full"></div>
          
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Über uns (About Us) */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary-light dark:text-dark-primary-light">
            Über uns
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-primary-accent hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300 font-medium">
                STARTSEITE
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300">
                REFERENZEN
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300">
                SPEEDSCALING SHOW
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300">
                ÜBER UNS
              </a>
            </li>
          </ul>
        </div>

        {/* Infos (Information) */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary-light dark:text-dark-primary-light">
            Infos
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300">
                DATENSCHUTZ
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-base hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300">
                IMPRESSUM
              </a>
            </li>
          </ul>
        </div>

        {/* Kontakt (Contact) */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary-light dark:text-dark-primary-light">
            Kontakt
          </h3>
          <address className="not-italic space-y-4 text-secondary-base dark:text-dark-secondary-base">
            <div className="flex items-start">
              <FaMapMarkerAlt className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary-light dark:text-dark-primary-light" />
              <span className="leading-tight">
                Im Zollhafen 18 <br />
                50678 Köln
              </span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="h-5 w-5 mr-3 flex-shrink-0 text-primary-light dark:text-dark-primary-light" />
              <a 
                href="mailto:team@speedscaling.de" 
                className="hover:text-primary-light dark:hover:text-dark-primary-light transition-colors duration-300 underline underline-offset-2"
              >
                team@speedscaling.de
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Optional: Subtle bottom border or glass line */}
      <div className="mt-12 pt-8 border-t border-primary-light/10 dark:border-dark-primary-light/10">
        <p className="text-center text-xs text-secondary-base/60 dark:text-dark-secondary-base/60">
          © {new Date().getFullYear()} SpeedScaling. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;