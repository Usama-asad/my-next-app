'use client'; // This component will run on the client-side

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  category: string; // Add category to the interface
}

import faqsData from '../data/faqs.json'; // Ensure this path is correct

// Define props interface for FaqGrid
interface FaqGridProps {
  activeCategory: string;
}

const FaqGrid: React.FC<FaqGridProps> = ({ activeCategory }) => {
  const faqs: FaqItem[] = faqsData;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Filter the FAQs based on the activeCategory prop
  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory === 'Alle') {
      return true; // Show all FAQs if 'Alle' is selected
    }
    return faq.category === activeCategory; // Only show FAQs matching the active category
  });

  // Reset openFaqIndex when category changes to prevent an FAQ from being open
  // if it's no longer in the filtered list.
  React.useEffect(() => {
    setOpenFaqIndex(null);
  }, [activeCategory]);


  return (
    <div id='faqGrid' className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 bg-gradient-hero dark:bg-dark-gradient-hero">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={faq.question} // Use question as key if it's unique, or a UUID from data.
                                // If categories allow same questions, use a combination.
              className="bg-trust-grey dark:bg-dark-trust-grey p-6 rounded-xl shadow-primary-light/20 dark:shadow-dark-primary-light/20 border border-primary-light/20 dark:border-dark-primary-light/20 flex flex-col justify-between hover:shadow-primary-light/30 dark:hover:shadow-dark-primary-light/30 transition-shadow duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4 cursor-pointer" onClick={() => toggleFaq(index)}>
                <p className="text-primary-dark dark:text-dark-primary-dark text-lg font-medium pr-4">{faq.question}</p>
                <button
                  className={`text-primary-light dark:text-dark-primary-light hover:text-primary-accent dark:hover:text-dark-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light rounded-full p-1 transform transition-transform duration-300 ${
                    openFaqIndex === index ? 'rotate-0' : 'rotate-180'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              {openFaqIndex === index && (
                <p className="text-secondary-base dark:text-dark-secondary-base mt-2 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-600 dark:text-gray-400">
            Keine FAQs für diese Kategorie gefunden.
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqGrid;