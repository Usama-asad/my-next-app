import React from 'react';

const FaqHeader = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 text-center bg-gradient-hero dark:bg-dark-gradient-hero">
      <p className="text-primary-light dark:text-dark-primary-light text-xs sm:text-sm font-semibold mb-1 sm:mb-2 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
        FAQ
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-light dark:text-dark-primary-light mb-6 sm:mb-8 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
        Deine Fragen von uns beantwortet
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4">
        <button className="px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-primary-dark dark:text-trust-grey rounded-lg font-medium hover:bg-primary-light/30 dark:hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light focus:ring-opacity-50 transition duration-300 backdrop-blur-sm">
          Alle
        </button>
        <button className="px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-secondary-base dark:text-trust-grey rounded-lg font-medium hover:bg-primary-light/10 dark:hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light focus:ring-opacity-50 transition duration-300 backdrop-blur-sm">
          Anmeldung
        </button>
        <button className="px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-secondary-base dark:text-trust-grey rounded-lg font-medium hover:bg-primary-light/10 dark:hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light focus:ring-opacity-50 transition duration-300 backdrop-blur-sm">
          Finanzierungsmöglichkeiten
        </button>
        <button className="px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-secondary-base dark:text-trust-grey rounded-lg font-medium hover:bg-primary-light/10 dark:hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light focus:ring-opacity-50 transition duration-300 backdrop-blur-sm">
          Karriere
        </button>
        <button className="px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-secondary-base dark:text-trust-grey rounded-lg font-medium hover:bg-primary-light/10 dark:hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light focus:ring-opacity-50 transition duration-300 backdrop-blur-sm">
          Lehrplan
        </button>
      </div>
    </div>
  );
};

export default FaqHeader;