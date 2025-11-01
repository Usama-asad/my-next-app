// components/MLEngineeringDashboard.tsx
"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Import the JSON data directly
import dashboardDataJson from '../data/mlEngineeringDashboard.json';

// Define the TypeScript Interfaces directly in the component file
interface SidebarItem {
  id: string;
  label: string;
}

interface Technology {
  name: string;
  logo: string;
}

interface ContentSection {
  title: string;
  duration: string;
  description: string;
  practices: string[];
  technologies: Technology[];
}

interface DashboardData {
  sidebarItems: SidebarItem[];
  contentData: {
    [key: string]: ContentSection;
  };
}

const MLEngineeringDashboard = () => {
  // Use the imported data (with a type assertion for safety)
  const data: DashboardData = dashboardDataJson;
  const { sidebarItems, contentData } = data;

  const [activeSection, setActiveSection] = useState("machine-learning");

  // Fallback if activeSection is not found in contentData (e.g., initial state)
  const currentContent =
    contentData[activeSection] || contentData["machine-learning"];

  return (
    <div id="MLEngineeringDashboard" className="min-h-screen bg-gradient-hero dark:bg-dark-gradient-hero">
      <div className="sm:w-[80%] w-[90%] mx-auto flex flex-col lg:flex-row gap-8 py-8 justify-center">
        {/* Left Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="bg-trust-grey dark:bg-dark-trust-grey rounded-lg backdrop-blur-sm">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {sidebarItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-3 text-left text-base transition-all whitespace-nowrap lg:whitespace-normal w-full ${
                      isActive
                        ? "bg-primary-light/10 dark:bg-dark-primary-light/10 text-primary-light dark:text-dark-primary-light font-medium rounded max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]"
                        : "text-secondary-base dark:text-dark-secondary-base hover:bg-primary-light/5 dark:hover:bg-dark-primary-light/5"
                    }`}
                  >
                    {item.label}
                    {isActive && <span className="ml-2">→</span>}
                  </button>
                );
              })}
            </nav>

            <button className="text-left mt-6 px-4 text-md py-3 border-2 border-primary-light dark:border-dark-primary-light text-primary-light dark:text-dark-primary-light rounded-lg text-base hover:bg-primary-light dark:hover:bg-dark-primary-light hover:text-trust-grey dark:hover:text-dark-trust-grey transition-all hidden lg:flex items-center gap-2 max-sm:border-[#00C4EE] max-sm:dark:border-[#00D4FF] max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
              Request syllabus <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </aside>

        {/* Right Content */}
        <main className="flex-1 max-w-4xl">
          {/* Header - Outside box on mobile */}
          <div className="mb-6 lg:mb-0">
            <div className="flex items-start gap-3 mb-4">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary-dark dark:text-trust-grey mb-4">
                {currentContent.title}
              </h1>
              <span className="px-1 py-1 my-auto bg-primary-light/20 dark:bg-dark-primary-light/20 text-primary-light dark:text-dark-primary-light rounded text-xs font-bold max-sm:bg-[#00C4EE]/20 max-sm:dark:bg-[#00D4FF]/20 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                {currentContent.duration}
              </span>
            </div>

            <p className="text-secondary-base dark:text-trust-grey text-base lg:text-lg leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Content Box */}
          <div className="bg-trust-grey dark:bg-dark-trust-grey rounded-lg p-6 lg:p-8 mt-6 border-1 border-secondary-base dark:border-dark-secondary-base backdrop-blur-sm">
            {/* Practice Section */}
            <div className="mb-8">
              <h3 className="text-lg lg:text-xl font-semibold text-primary-dark dark:text-dark-primary-dark mb-6">
                What you will build in practice:
              </h3>
              <ul className="space-y-4">
                {currentContent.practices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-success-green dark:text-dark-success-green mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-secondary-base dark:text-dark-secondary-base text-sm lg:text-base">
                      {practice}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Section */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold text-primary-dark dark:text-dark-primary-dark mb-6">
                Software and languages you will learn:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentContent.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-primary-light/10 dark:bg-dark-primary-light/10 rounded-xl hover:bg-primary-light/20 dark:hover:bg-dark-primary-light/20 transition-colors max-sm:bg-[#00C4EE]/10 max-sm:dark:bg-[#00D4FF]/10 max-sm:hover:bg-[#00C4EE]/20 max-sm:dark:hover:bg-[#00D4FF]/20"
                  >
                    <span className="text-2xl">{tech.logo}</span>
                    <span className="text-sm font-medium text-secondary-base dark:text-dark-secondary-base">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Request Button */}
          <button className="w-full mt-6 px-4 py-3 bg-primary-light dark:bg-dark-primary-light text-trust-grey dark:text-dark-trust-grey rounded-lg text-base font-medium hover:bg-primary-accent dark:hover:bg-dark-primary-accent transition-all lg:hidden flex items-center justify-center gap-2 max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]">
            Request syllabus <ArrowRight className="w-4 h-4" />
          </button>
        </main>
      </div>
    </div>
  );
};

export default MLEngineeringDashboard;