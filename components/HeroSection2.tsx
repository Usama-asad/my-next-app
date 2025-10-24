import React from 'react';

const HeroSection2 = () => {
  return (
    <section className="bg-gradient-hero dark:bg-dark-gradient-hero text-trust-grey dark:text-dark-trust-grey py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headings and Sentences */}
        <h1 className="dark:text-trust-grey text-primary-dark text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Ergebnisse wie diese klingen komplett <br />
          <span className="text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">unglaubwürdig</span>, richtig?
        </h1>
        <p className="text-lg sm:text-xl mb-2">Weißt du was? Das verstehen wir.</p>
        <p className="dark:text-trust-grey text-primary-dark sm:text-lg text-secondary-base dark:text-trust-grey mb-8 sm:mb-12 max-w-3xl mx-auto">
          Du hast solche Versprechen schon 1.000-mal gehört. 1.000-mal steckte nichts dahinter. Und ja, du hast Recht:
          Stand 2025 gibt es für Coaches, die gerne viel Umsatz machen wollen, aber weder Lust auf Büro noch auf ein
          großes Team & Dauer-Hustle haben, eigentlich keine richtige Lösung.
        </p>

        {/* Crowd Photo (background) and Team Photo (foreground) */}
        <div className="relative mb-8 sm:mb-12">
          {/* Crowd Photo - as a background element */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
            style={{ backgroundImage: 'url("/crowd.jpeg")',height:"70%" }}
          ></div>

          {/* Options and Team Photo - Side by side in desktop */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6 sm:gap-8 items-center">
            {/* Option 1 Card */}
            <div className="bg-secondary-dark dark:bg-dark-secondary-dark p-6 sm:p-8 rounded-lg shadow-lg flex-1 md:max-w-sm backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary-light dark:text-dark-primary-light mb-4 sm:mb-6 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                Option 1:
              </h2>
              <div className="mb-4 sm:mb-6">
                <div className="w-16 h-16 bg-primary-light/20 dark:bg-dark-primary-light/20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-primary-light dark:text-dark-primary-light max-sm:bg-[#00C4EE]/20 max-sm:dark:bg-[#00D4FF]/20 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                  👤
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-dark dark:text-primary-light mb-4">Du versuchst es erstmal alleine.</h3>
              <p className="text-sm sm:text-base text-trust-grey dark:text-dark-trust-grey">
                Das ist verdammt schwer: Du postest Beiträge. Du drehst Videos. Oder du schreibst bedürftig zig
                1.000 Leute an, aber: Nichts davon funktioniert (wirklich) gut. Und auf YouTube gibt es nur Free-
                Content, der nicht wirklich hilft.
              </p>
            </div>

            {/* Team Photo - Centered between cards in desktop */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md z-20">
              <img
                src="/team-photo-2.png"
                alt="Team members"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Option 2 Card */}
            <div className="bg-secondary-dark dark:bg-dark-secondary-dark p-6 sm:p-8 rounded-lg shadow-lg flex-1 md:max-w-sm backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary-light dark:text-dark-primary-light mb-4 sm:mb-6 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                Option 2:
              </h2>
              <div className="mb-4 sm:mb-6">
                <div className="w-16 h-16 bg-primary-light/20 dark:bg-dark-primary-light/20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-primary-light dark:text-dark-primary-light max-sm:bg-[#00C4EE]/20 max-sm:dark:bg-[#00D4FF]/20 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                  💼
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-dark dark:text-primary-light mb-4">Du gehst zu einem Business-Coach.</h3>
              <p className="text-sm sm:text-base text-trust-grey dark:text-dark-trust-grey">
                Das Problem: 99% dieser Coaches sind entweder erst seit ein paar Monaten am Markt, haben selbst
                kein erfolgreiches Business ODER passen einfach nicht zu deinen Werten und deiner Philosophie.
              </p>
              <br/>
            </div>
          </div>
        </div>

        {/* Last Sentence */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-light dark:text-dark-primary-light mt-8 sm:mt-12 mb-4 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF] hover:underline hover:text-primary-accent dark:hover:text-dark-primary-accent">
          Was wäre, wenn es eine dritte Option gibt?
        </p>
      </div>
    </section>
  );
};

export default HeroSection2;