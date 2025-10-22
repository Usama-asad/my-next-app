// src/app/page.tsx

// You might need to import React if you're not using the new 'use client' or direct server component structure,
// but for a typical client component, React is usually implicitly available.
// If you want to use client-side features like useState, useEffect, etc., add 'use client' at the top.
// 'use client';

export default function CourseOverview() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header/Navigation Placeholder */}
      <header className="mb-12">
        <nav className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <div className="flex space-x-4">
            <a href="#" className="text-indigo-600 font-semibold">Für Wen</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Lehrplan</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Finanzierung</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Nächste Kurse</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Warum Le Wagon?</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Unsere Alumni</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">FA</a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-200">
              Lehrplan herunterladen
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700">
              Bewerben
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ist dieser Kurs das Richtige für dich?</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Der Data Science & AI Kurs von Le Wagon richtet sich an alle, die schon Programmier- und Mathematikkenntnisse
          haben und sich auf Data Science, Machine Learning und KI spezialisieren wollen. Für komplette
          Einsteiger:innen empfehlen wir stattdessen unser Data Analytics Bootcamp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
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
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ich will ein konkretes datenbasiertes Projekt umsetzen</h2>
            <p className="text-gray-600">
              Hast Du ein Machine Learning- oder Forschungsprojekt, das von tiefliegender Data Science Expertise profitieren
              würde? Der Data Science & AI Kurs von Le Wagon hilft dir, dein Projekt Realität werden zu lassen
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
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
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ich bin KI-Enthusiast:in</h2>
            <p className="text-gray-600">
              Wenn Dich die Welt der KI fasziniert und du deine Neugier vertiefen oder einfach im sich ständig wandelnden Tech-Bereich
              vorne bleiben willst – ist der Data Science Kurs von Le Wagon genau richtig für dich.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
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
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ich will besser in meinem Job werden</h2>
            <p className="text-gray-600">
              Der Kurs eignet sich ideal, wenn du schon mit Daten arbeitest und deine Skills verbessern, eine Beförderung anstreben
              oder besser mit Data Teams zusammenarbeiten möchtest.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
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
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ich will meine Karriere wechseln</h2>
            <p className="text-gray-600">
              Je nach Erfahrung kannst du Data Scientist, Data Analyst oder Machine Learning Expert:in werden. Unsere erstklassigen
              Career Services haben viele Absolvent:innen dabei unterstützt, ihren Traumjob zu finden.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}