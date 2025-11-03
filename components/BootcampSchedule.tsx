// components/BootcampSchedule.tsx
import React, { useState } from 'react';

// Import the JSON data directly
import scheduleDataJson from '../data/bootcampSchedule.json';

// Define the TypeScript Interfaces directly in the component file
interface BootcampDate {
  month: string;
  dateRange: string;
  type: string;
  location: string;
  language: string;
}

interface TabContent {
  id: string;
  label: string;
  dates: BootcampDate[];
  emptyMessage: string | null;
}

interface BootcampScheduleData {
  headingPrefix: string;
  heading: string;
  introParagraph: string;
  tabs: TabContent[];
}

// Individual Bootcamp Card Component
const BootcampCard = ({ month, dateRange, type, location, language }: BootcampDate) => (
  <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-trust-grey dark:bg-dark-trust-grey rounded-xl shadow-primary-light/20 dark:shadow-dark-primary-light/20 border border-primary-light/20 dark:border-dark-primary-light/20 mb-4 backdrop-blur-sm transition-all duration-300 hover:shadow-primary-light/30 dark:hover:shadow-dark-primary-light/30">
    <div className="flex items-center mb-3 md:mb-0">
      <div className="bg-primary-light dark:bg-dark-primary-light text-trust-grey dark:text-dark-trust-grey rounded-full h-12 w-12 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-md">
        {month}
      </div>
      <div className="text-primary-dark dark:text-dark-primary-dark text-lg font-medium">{dateRange}</div>
    </div>
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-secondary-base dark:text-dark-secondary-base text-sm">
      <span>{type}</span>
      <span>{location}</span>
      <span>{language}</span>
      <button className="bg-primary-light dark:bg-dark-primary-light hover:bg-primary-accent dark:hover:bg-dark-primary-accent text-trust-grey dark:text-dark-trust-grey font-bold py-2 px-4 rounded-md w-full md:w-auto mt-3 md:mt-0 transition duration-300 shadow-md hover:shadow-lg max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]">
        Platz sichern
      </button>
    </div>
  </div>
);

const BootcampSchedule = () => {
  // Use the imported data (with a type assertion for safety)
  const data: BootcampScheduleData = scheduleDataJson;

  const [activeTab, setActiveTab] = useState(data.tabs[0].id); // Initialize with the first tab's ID

  const currentTabContent = data.tabs.find(tab => tab.id === activeTab);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 bg-gradient-hero dark:bg-dark-gradient-hero">
      <p className="text-secondary-base dark:text-dark-secondary-base text-sm mb-1">{data.headingPrefix}</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-light dark:text-dark-primary-light mb-6 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
        {data.heading}
      </h1>
      <p className="text-secondary-base dark:text-dark-secondary-base mb-8 max-w-3xl">
        {data.introParagraph}
      </p>

      {/* Tabs */}
      <div className="flex border-b border-primary-light/20 dark:border-dark-primary-light/20 mb-6">
        {data.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-primary-light dark:text-dark-primary-light border-b-2 border-primary-light dark:border-dark-primary-light'
                : 'text-secondary-base dark:text-dark-secondary-base hover:text-primary-light/70 dark:hover:text-dark-primary-light/70'
            } ${tab.id !== data.tabs[0].id ? 'ml-6' : ''}`} /* Apply ml-6 only if not the first tab */
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {currentTabContent && currentTabContent.dates.length > 0 ? (
          <div>
            {currentTabContent.dates.map((date, index) => (
              <BootcampCard key={index} {...date} />
            ))}
          </div>
        ) : (
          <div className="text-secondary-base dark:text-dark-secondary-base p-6 text-center italic">
            {currentTabContent?.emptyMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default BootcampSchedule;