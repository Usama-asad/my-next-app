// components/WhatMakesUnique.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import the JSON data directly
import featuresDataJson from '../data/whatMakesUnique.json';

// Define the TypeScript Interface for a single feature item directly in the component file
interface FeatureContent {
  imageSrc: string;
  imageAlt: string;
  text: string;
  linkText: string;
  linkHref: string;
}

interface Feature {
  id: string;
  leftTitle: string;
  rightContent: FeatureContent;
}

const WhatMakesUnique = () => {
  // Use the imported data (with a type assertion for safety)
  const features: Feature[] = featuresDataJson;

  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(features[0].id);
  const activeFeatureContent = features.find(
    (feature) => feature.id === activeFeatureId
  )?.rightContent;

  return (
    <div className="bg-gradient-hero dark:bg-dark-gradient-hero py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <p className="text-primary-light dark:text-dark-primary-light font-semibold text-sm uppercase tracking-wide text-center lg:text-center mb-2 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          WARUM LE WAGON?
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-light dark:text-dark-primary-light text-center lg:text-center mb-4 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          Was macht Le Wagon einzigartig?
        </h1>
        <p className="text-lg text-secondary-base dark:text-trust-grey text-center lg:text-center lg:mx-0 mb-12">
          Wir sind nicht umsonst der bestbewertete Bootcamp. Hier sind einige Gründe:
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Feature List */}
          <div className="lg:w-1/2 flex flex-col">
            {features.map((feature) => (
              <div key={feature.id} className="mb-4 last:mb-0">
                {/* Desktop View: Clickable "buttons" */}
                <button
                  className={`hidden lg:flex w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                    activeFeatureId === feature.id
                      ? 'bg-primary-light/20 dark:bg-primary-light text-primary-dark dark:text-dark-primary-dark font-bold hover:bg-primary-light/10 dark:hover:bg-primary-accent'
                      : 'bg-trust-grey dark:bg-dark-trust-grey text-primary-dark dark:text-dark-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-accent'
                  }`}
                  onClick={() => setActiveFeatureId(feature.id)}
                >
                  {feature.leftTitle}
                  <span className="ml-auto text-primary-light dark:text-primary-dark">→</span>
                </button>

                {/* Mobile View: Accordion style */}
                <div className="lg:hidden bg-trust-grey dark:bg-dark-trust-grey rounded-lg shadow-primary-light/20 dark:shadow-dark-primary-light/20 overflow-hidden border border-primary-light/20 dark:border-dark-primary-light/20 backdrop-blur-sm">
                  <button
                    className="w-full text-left p-4 flex items-center justify-between text-primary-dark dark:text-dark-primary-dark font-semibold"
                    onClick={() => setActiveFeatureId(activeFeatureId === feature.id ? null : feature.id)}
                  >
                    {feature.leftTitle}
                    <span className={`transform transition-transform duration-200 text-secondary-base dark:text-dark-secondary-base ${activeFeatureId === feature.id ? 'rotate-180' : ''}`}>
                      &#9660;
                    </span>
                  </button>
                  {activeFeatureId === feature.id && activeFeatureContent && (
                    <div className="p-4 border-t border-primary-light/20 dark:border-dark-primary-light/20 bg-trust-grey/50 dark:bg-dark-trust-grey/50 flex flex-col sm:flex-row gap-4 backdrop-blur-sm">
                      {activeFeatureContent.imageSrc && (
                        <div className="relative w-full sm:w-1/2 aspect-video rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={activeFeatureContent.imageSrc}
                            alt={activeFeatureContent.imageAlt}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      )}
                      <div className="sm:w-1/2">
                        <p className="text-secondary-base dark:text-dark-secondary-base mb-3 text-sm">{activeFeatureContent.text}</p>
                        <Link href={activeFeatureContent.linkHref} className="inline-flex items-center text-primary-light dark:text-dark-primary-light hover:text-primary-accent dark:hover:text-dark-primary-accent text-sm font-semibold max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                          {activeFeatureContent.linkText} <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Main CTA Button at the bottom of the left section */}
            <Link
              href="/methodik"
              className="mt-8 lg:mt-12 w-full flex-shrink-0 bg-primary-light dark:bg-dark-primary-light hover:bg-primary-accent dark:hover:bg-dark-primary-accent text-trust-grey dark:text-dark-trust-grey font-bold py-4 px-6 rounded-md text-lg text-center transition duration-300 lg:w-2/3 max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]"
            >
              Erfahre mehr über unsere Methodik
            </Link>
          </div>

          {/* Right Section: Dynamic Card (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/2 bg-trust-grey dark:bg-dark-trust-grey p-6 rounded-lg shadow-primary-light/20 dark:shadow-dark-primary-light/20 flex-shrink-0 backdrop-blur-sm">
            {activeFeatureContent ? (
              <div className="flex flex-col h-full">
                {activeFeatureContent.imageSrc && (
                  <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src={activeFeatureContent.imageSrc}
                      alt={activeFeatureContent.imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <p className="text-secondary-base dark:text-dark-secondary-base mb-4">{activeFeatureContent.text}</p>
                <Link href={activeFeatureContent.linkHref} className="inline-flex items-center text-primary-light dark:text-dark-primary-light hover:text-primary-accent dark:hover:text-dark-primary-accent font-semibold mt-auto max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                  {activeFeatureContent.linkText} <span className="ml-2">→</span>
                </Link>
              </div>
            ) : (
              <p className="text-secondary-base dark:text-dark-secondary-base">Bitte wähle eine Option aus.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUnique;