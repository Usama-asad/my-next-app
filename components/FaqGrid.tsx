'use client'; // This component will run on the client-side

import React, { useState } from 'react';

// 1. Define the TypeScript Interface directly in this file
interface FaqItem {
  question: string;
  answer: string;
}

// 2. Import the JSON data directly
// Assuming your JSON data is in 'src/data/faqs.json'
// You might need to adjust this path based on where you put it.
// For this to work, ensure your tsconfig.json has "resolveJsonModule": true
import faqsData from '../data/faqs.json';

const FaqGrid = () => {
  // 3. Use the imported data (with a type assertion for safety)
  // The 'faqsData' variable now holds your array of FAQ objects.
  const faqs: FaqItem[] = faqsData;

  // State to keep track of the currently open FAQ index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null); // Type 'number | null'

  // Function to toggle the FAQ answer visibility
  const toggleFaq = (index: number) => { // Type 'index' as number
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 bg-gradient-hero dark:bg-dark-gradient-hero">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index} // Using index as key is okay if items are static and never reordered/deleted
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
        ))}
      </div>
    </div>
  );
};

export default FaqGrid;