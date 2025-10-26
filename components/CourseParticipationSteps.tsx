import React from 'react';

const CourseParticipationSteps = () => {
  const steps = [
    {
      number: 'Schritt 1',
      title: 'Melde dich frühzeitig arbeitssuchend',
      description:
        'Um deinen Bildungsgutschein für deine Umschulung von der Agentur für Arbeit, dem JobCenter oder dem Arbeitsamt zu bekommen, solltest du dich frühzeitig arbeitssuchend melden. Daher ist es sehr wichtig, dass du zuallererst einen Termin bei deinem zuständigen Amt vereinbarst. Mach es am besten direkt jetzt!',
    },
    {
      number: 'Schritt 2',
      title: 'Hol dir dein Bildungsangebot bei uns',
      description:
        'Der nächste Schritt auf dem Weg zu deinem IT-Bildungsgutschein geht easy und fix: Melde dich bei uns! Wir erstellen dir ein offizielles Bildungsangebot, dass du dann bei der Agentur für Arbeit, dem Jobcenter oder dem Arbeitsamt einreichen kannst.',
    },
    {
      number: 'Schritt 3',
      title: 'Beantrage den Bildungsgutschein',
      description:
        "Jetzt geht's ans Eingemachte: Mit dem von uns erstellten Bildungsangebot gehst du nun zurück zu deiner zuständigen Stelle und beantragst deinen Bildungsgutschein. Sobald dieser bewilligt ist, kannst du bei uns in deine neue Karriere durchstarten. Wir freuen uns auf dich!",
    },
  ];

  return (
    <div className="bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 leading-tight text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          Diese Schritte sind für deine <br className="hidden sm:inline" /> Kursteilnahme wichtig
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-secondary-base dark:text-trust-grey text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Egal, ob du z. B. dein Studium abgebrochen hast, in Kurzarbeit bist, von Arbeitslosigkeit bedroht bist
          oder deinen Job verloren hast – deine Zeit ist gut genutzt, wenn du dich digitaler aufstellst. Beachte
          bitte, dass der Prozess, um von der Agentur für Arbeit den Bildungsgutschein zu bekommen, relativ viel
          Zeit in Anspruch nehmen kann. Wir raten dir daher zu folgendem Ablauf.
        </p>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-trust-grey dark:bg-dark-trust-grey rounded-lg p-6 flex flex-col items-start shadow-primary-light/20 dark:shadow-dark-primary-light/20 backdrop-blur-sm">
              <span className="bg-primary-light dark:bg-dark-primary-light text-trust-grey dark:text-dark-trust-grey text-sm font-semibold px-3 py-1 rounded-full mb-4 max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-primary-dark dark:text-dark-primary-dark mb-3">{step.title}</h3>
              <p className="text-secondary-base dark:text-dark-secondary-base text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseParticipationSteps;