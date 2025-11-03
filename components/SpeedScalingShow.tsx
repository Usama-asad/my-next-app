import React from 'react';

const SpeedScalingShow = () => {
  return (
    <div className="relative bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Overlay with Glass Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-30 backdrop-blur-sm"
        style={{ backgroundImage: "url('your-background-image.jpg')" }} // Replace with your actual image
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
            Du glaubst immer noch nicht, dass all diese Ergebnisse AUCH{' '}
            <span className="text-primary-accent dark:text-dark-primary-accent">FÜR DICH</span> möglich sind?
          </h2>
          <p className="text-lg mb-6 text-secondary-base dark:text-dark-secondary-base">
            Dann komm doch einfach zur SPEEDSCALING Show
          </p>
          <p className="text-base mb-8 text-secondary-base dark:text-dark-secondary-base">
            Hier beraten wir dich jede Woche kostenlos & du kannst bequem reinfühlen, ob
            wir und unsere Methode zu dir passen!
          </p>

          <button className="bg-primary-light dark:bg-dark-primary-light hover:bg-primary-accent dark:hover:bg-dark-primary-accent text-trust-grey dark:text-dark-trust-grey font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide mb-4 w-full sm:w-auto self-start shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]">
            JETZT PLATZ IN DER KOSTENLOSEN SPEEDSCALING SHOW SICHERN
          </button>

          <p className="text-sm text-secondary-base/70 dark:text-dark-secondary-base/70 mb-8">
            100% verständlich & 0% Kaufäuptisch
          </p>

          {/* Avatars and Counter */}
          <div className="flex flex-col sm:flex-row items-center mt-6">
            <div className="flex -space-x-2 overflow-hidden mb-4 sm:mb-0 sm:mr-4">
              {[
                'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc',
                'https://images.unsplash.com/photo-1550525811-e5869dd03032',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
              ].map((src, i) => (
                <img
                  key={i}
                  className="inline-block h-10 w-10 rounded-full ring-4 ring-trust-grey dark:ring-dark-trust-grey object-cover shadow-md"
                  src={`${src}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt={`Teilnehmer ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-secondary-base dark:text-dark-secondary-base text-sm sm:text-base font-medium">
              Mehr als 150.000 + Webinar-Teilnehmer seit 2019
            </p>
          </div>
        </div>

        {/* Right Section - Glass Card */}
        <div className="bg-trust-grey/70 dark:bg-dark-trust-grey/70 p-6 sm:p-8 rounded-xl backdrop-blur-md border border-primary-light/20 dark:border-dark-primary-light/20 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary-light dark:text-dark-primary-light">
            Erfahre, wie du...
          </h3>
          <ul className="space-y-5 sm:space-y-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                text: "Unsere Learnings aus 25.000.000€ Coaching Umsatz direkt in deinem Business anwendest.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L19.795 4.5M12 14c-1.11 0-2.08-.402-2.592-1L4.205 19.5M18.062 20.5l1.378-2.61c1.533-.907 2.345-2.671 2.345-4.54a9 9 0 10-18 0c0 1.869.812 3.633 2.345 4.54l1.378 2.61M5.938 10.5l-1.378 2.61C3.027 13.842 2.215 15.606 2.215 17.47c0 1.868.812 3.633 2.345 4.54l1.378 2.61" />
                ),
                text: "Dein 1:1 Coaching in ein skalierbares Produkt mit passivem Einkommen verwandelst, ohne Qualitätsverlust.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                ),
                text: "Mit nur 1 Produkt und maximal 1 Teammitglied 6-stellige Monatsumsätze erreichst, ohne dich mit Funnels und massenhaft Content herumzuschlagen.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                text: "Kurse entwickelst, die auch bei steigenden Werbekosten profitabel bleiben und dir eine stabile Marge beim Skalieren sichern.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18v-8.040c0-.494.214-.991.603-1.332L14.7 7.5c.348-.309.83-.559 1.34-.559.51 0 1.01.25 1.34.56l2.05 1.83c.389.341.603.838.603 1.332V12m-8 0v8.040c0 .494.214.991.603 1.332L14.7 16.5c.348.309.83.559 1.34.559.51 0 1.01-.25 1.34-.56l2.05-1.83c.389-.341.603-.838.603-1.332V12" />
                ),
                text: "Deine organische Reichweite rund um dein Spezialthema in echtes Einkommen verwandelt, mit Angeboten, die deine Zielgruppe liebt und bucht.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 mr-4 text-primary-light dark:text-dark-primary-light">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </span>
                <p className="text-base text-secondary-base dark:text-dark-secondary-base leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeedScalingShow;