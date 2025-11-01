import React from 'react';

const AboutSection = () => {
  return (
    <section id='AboutSection' className="bg-gradient-hero dark:bg-dark-gradient-hero text-trust-grey dark:text-dark-trust-grey py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
      <div className="max-w-6xl mx-auto flex justify-end">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 w-full md:w-3/4 items-end">
          {/* Left Container: Heading, Sentence, List - First in mobile */}
          <div className="flex-1 md:w-1/2 flex flex-col justify-end text-left order-1 max-w-md sm:max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-primary-dark dark:text-trust-grey">
              Willkommen bei <span className="text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">SPEEDSCALING</span>
            </h2>
            <p className="text-base sm:text-lg text-secondary-base dark:text-trust-grey mb-6 max-w-md sm:max-w-lg">
              Es klingt zu gut, um wahr zu sein. Aber wir sind vermutlich die
              ersten seriösen Business-Sparringspartner, die:
            </p>
            <ul className="space-y-3 text-base sm:text-lg max-w-md sm:max-w-lg">
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-3 text-xl mt-0.5">✓</span>
                <span className='text-secondary-base dark:text-trust-grey'>sich persönlich und wirklich Zeit für dich nehmen</span>
              </li>
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-3 text-xl mt-0.5">✓</span>
                <span className='text-secondary-base dark:text-trust-grey'>gute Werte vertreten, dich nicht von oben herab behandeln</span>
              </li>
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-3 text-xl mt-0.5">✓</span>
                <span className='text-secondary-base dark:text-trust-grey'>UND einen Track Record aus über 2.000 skalierten Businesses haben!</span>
              </li>
            </ul>
          </div>

          {/* Right Container: Image - After content in mobile */}
          <div className="flex-1 md:w-1/2 flex justify-center md:justify-start mt-6 sm:mt-8 md:mt-0 order-2 md:order-2">
            <div className="relative w-full max-w-md sm:max-w-lg h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl backdrop-blur-sm">
              <img
                src="/full-team.png"
                alt="Full team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-primary-dark dark:from-dark-primary-dark via-primary-dark/80 dark:via-dark-primary-dark/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;