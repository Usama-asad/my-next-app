export default function CourseOverview() {
  return (
    <div className="min-h-screen bg-primary-dark p-4 sm:p-8">
      {/* Header/Navigation */}
      <header className="mb-8 sm:mb-12">
        <nav className="flex flex-col sm:flex-row justify-between items-center bg-primary-dark/95 p-4 rounded-lg shadow-md backdrop-blur-sm">
          <div className="hidden sm:flex space-x-4">
            <a href="#" className="text-trust-grey hover:underline font-semibold hover:text-primary-accent transition-colors duration-200">Für Wen</a>
            <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Lehrplan</a>
            <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Finanzierung</a>
            <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Nächste Kurse</a>
            <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Warum Le Wagon?</a>
            <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Unsere Alumni</a>
            <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">FA</a>
          </div>
          <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-end">
            <button className="text-primary-light px-4 py-2 rounded-lg font-semibold border-2 border-primary-light hover:bg-primary-accent hover:text-primary-dark hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] transition-all duration-200 max-sm:bg-[#00C4EE]">
              Lehrplan herunterladen
            </button>
            <button className="bg-primary-light text-secondary-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary-accent hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] focus:ring-2 focus:ring-primary-accent focus:outline-none transition-all duration-200 max-sm:bg-[#00C4EE]">
              Bewerben
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-trust-grey mb-4">Ist dieser Kurs das Richtige für dich?</h1>
        <p className="text-base sm:text-lg text-trust-grey mb-8 sm:mb-12 max-w-3xl mx-auto">
          Der Data Science & AI Kurs von Le Wagon richtet sich an alle, die schon Programmier- und Mathematikkenntnisse
          haben und sich auf Data Science, Machine Learning und KI spezialisieren wollen. Für komplette
          Einsteiger:innen empfehlen wir stattdessen unser Data Analytics Bootcamp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-trust-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-light/20 p-3 rounded-full inline-block mb-4 max-sm:bg-[#00C4EE]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-light max-sm:text-[#00C4EE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">Ich will ein konkretes datenbasiertes Projekt umsetzen</h2>
            <p className="text-secondary-base text-sm sm:text-base">
              Hast Du ein Machine Learning- oder Forschungsprojekt, das von tiefliegender Data Science Expertise profitieren
              würde? Der Data Science & AI Kurs von Le Wagon hilft dir, dein Projekt Realität werden zu lassen
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-trust-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-light/20 p-3 rounded-full inline-block mb-4 max-sm:bg-[#00C4EE]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-light max-sm:text-[#00C4EE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">Ich bin KI-Enthusiast:in</h2>
            <p className="text-secondary-base text-sm sm:text-base">
              Wenn Dich die Welt der KI fasziniert und du deine Neugier vertiefen oder einfach im sich ständig wandelnden Tech-Bereich
              vorne bleiben willst – ist der Data Science Kurs von Le Wagon genau richtig für dich.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-trust-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-light/20 p-3 rounded-full inline-block mb-4 max-sm:bg-[#00C4EE]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-light max-sm:text-[#00C4EE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">Ich will besser in meinem Job werden</h2>
            <p className="text-secondary-base text-sm sm:text-base">
              Der Kurs eignet sich ideal, wenn du schon mit Daten arbeitest und deine Skills verbessern, eine Beförderung anstreben
              oder besser mit Data Teams zusammenarbeiten möchtest.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-trust-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-light/20 p-3 rounded-full inline-block mb-4 max-sm:bg-[#00C4EE]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-light max-sm:text-[#00C4EE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">Ich will meine Karriere wechseln</h2>
            <p className="text-secondary-base text-sm sm:text-base">
              Je nach Erfahrung kannst du Data Scientist, Data Analyst oder Machine Learning Expert:in werden. Unsere erstklassigen
              Career Services haben viele Absolvent:innen dabei unterstützt, ihren Traumjob zu finden.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}