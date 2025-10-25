import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AffordableFinancing = () => {
  const financingOptions = [
    { number: '01', method: 'Bildungsgutschein', description: 'Agentur für Arbeit' },
    { number: '02', method: 'Sofort zahlen', description: 'kein Problem' },
    { number: '03', method: 'Der Arbeitgeber zahlt', description: 'Re- & Upskilling' },
  ];

  return (
    <div className="bg-gradient-hero dark:bg-dark-gradient-hero py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section: Content */}
        <div className="lg:w-1/2 text-center lg:text-left order-1">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
            Einfach und fair <br /> bezahlbar
          </h2>
          <p className="text-lg text-secondary-base dark:text-trust-grey mb-8 max-w-xl lg:max-w-none mx-auto">
            Bildung muss bezahlbar sein. Schau dir jetzt alle{' '}
            <Link href="/finanzierungsoptionen" className="text-primary-light dark:text-dark-primary-light hover:text-primary-accent dark:hover:text-dark-primary-accent max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
              Optionen der Finanzierung
            </Link>{' '}
            an.
          </p>

          {/* Financing Options List */}
          <div className="mb-12">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-start py-4 border-b border-secondary-base dark:border-dark-secondary-base last:border-b-0"
              >
                <span className="text-2xl font-bold text-secondary-base dark:text-trust-grey mr-4 w-12 flex-shrink-0 text-left">
                  {option.number}
                </span>
                <div className="flex-grow flex justify-between items-center flex-wrap gap-2">
                  <span className="text-xl font-semibold text-primary-dark dark:text-trust-grey">{option.method}</span>
                  <span className="text-md text-secondary-base dark:text-dark-secondary-base">{option.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Link */}
          <Link href="/bildungsgutschein" className="inline-flex items-center text-lg font-semibold text-primary-light dark:text-dark-primary-light hover:text-primary-accent dark:hover:text-dark-primary-accent max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
            Zum Bildungsgutschein <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-2">
          <div className="relative w-full max-w-lg lg:max-w-none h-auto aspect-video rounded-lg overflow-hidden shadow-primary-light/20 dark:shadow-dark-primary-light/20 backdrop-blur-sm">
            <Image
              src="/affortable-financing.jpg"
              alt="People discussing financing options"
              width={700}
              height={500}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffordableFinancing;