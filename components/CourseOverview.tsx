// components/CourseOverview.tsx
import React from 'react';

// Import the JSON data directly
import courseOverviewDataJson from '../data/courseOverview.json';

// Define the TypeScript Interfaces directly in the component file
interface CardItem {
  iconPath: string; // SVG path for the icon
  title: string;
  description: string;
}

interface CourseOverviewData {
  heading: string;
  description: string;
  cards: CardItem[];
}

export default function CourseOverview() {
  // Use the imported data (with a type assertion for safety)
  const data: CourseOverviewData = courseOverviewDataJson;

  return (
    <div id='CourseOverview' className="min-h-screen bg-primary-dark p-4 sm:p-8">

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-trust-grey mb-4">{data.heading}</h1>
        <p className="text-base sm:text-lg text-trust-grey mb-8 sm:mb-12 max-w-3xl mx-auto">
          {data.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {data.cards.map((card, index) => (
            <div key={index} className="bg-trust-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    d={card.iconPath}
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">{card.title}</h2>
              <p className="text-secondary-base text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}