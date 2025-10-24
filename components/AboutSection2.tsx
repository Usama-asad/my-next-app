import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="bg-gradient-hero dark:bg-dark-gradient-hero text-trust-grey dark:text-dark-trust-grey py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
      <div className="max-w-6xl mx-auto flex justify-start">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 w-full md:w-3/4 items-end">
          {/* Left Container: Image - First in mobile */}
          <div className="flex-1 md:w-1/2 flex justify-center md:justify-start items-end mt-6 sm:mt-8 md:mt-0 order-1">
            <div className="relative w-full max-w-md sm:max-w-lg h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl backdrop-blur-sm">
              <img
                src="/main-achievement.png"
                alt="Team achievement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-primary-dark dark:from-dark-primary-dark via-primary-dark/80 dark:via-dark-primary-dark/80 to-transparent"></div>
            </div>
          </div>

          {/* Right Container: Heading, Sentence, Logos - After image in mobile */}
          <div className="flex-1 md:w-1/2 flex flex-col justify-end text-center md:text-left order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-primary-dark dark:text-trust-grey">
              Bei <span className="text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">SPEEDSCALING</span> <br />
              bekommst du DAS, was du <br />
              wirklich brauchst:
            </h2>
            <p className="text-base sm:text-lg text-secondary-base dark:text-trust-grey mb-4 max-w-lg sm:max-w-none mx-auto md:mx-0">
              1:1 Begleitung auf Augenhöhe und einen Prozess, der wirklich funktioniert.
            </p>
            <p className="text-base sm:text-lg text-secondary-base dark:text-trust-grey mb-4 max-w-lg sm:max-w-none mx-auto md:mx-0">
              Und weißt du was?
            </p>
            <p className="text-base sm:text-lg text-secondary-base dark:text-trust-grey mb-8 max-w-lg sm:max-w-none mx-auto md:mx-0">
              Wir sind sogar bereit, dir das live zu BEWEISEN!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
              <img src="https://onecdn.io/media/8c68c42b-8a19-4a29-9fbd-c78cbdbae0c6/preview" alt="2 Comma Club Logo" className="h-8 sm:h-10 object-contain" />
              <img src="https://onecdn.io/media/75a2c51e-427f-459a-ae16-de842c17c37a/preview" alt="Badge Logo" className="h-8 sm:h-10 object-contain" />
              <img src="https://onecdn.io/media/59d04fb2-eff2-4c74-a3d9-ef16fd33ba24/preview" alt="This is Marketing Logo" className="h-8 sm:h-10 object-contain" />
              <img src="https://onecdn.io/media/621b5f84-671e-46b8-acbe-861011716801/preview" alt="Contra Logo" className="h-8 sm:h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;