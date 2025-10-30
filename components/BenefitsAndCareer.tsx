// components/BenefitsAndCareer.tsx
import React from 'react';

// Import the JSON data directly
import benefitsAndCareerDataJson from '../data/benefitsAndCareer.json';

// Define the TypeScript Interfaces directly in the component file
interface Item {
  title: string;
  description: string;
}

interface BenefitsAndCareerData {
  benefits: Item[];
  careerOpportunities: Item[];
}

// Individual Card Component
// Now explicitly typed with the Item interface and its own props
interface CardProps extends Item {
  isCareer: boolean;
}

const Card = ({ title, description, isCareer }: CardProps) => {
  const hoverClasses = isCareer ? 'hover:scale-105 hover:shadow-primary-light/20 dark:hover:shadow-dark-primary-light/20' : 'hover:scale-105 hover:shadow-primary-light/20 dark:hover:shadow-dark-primary-light/20';
  const titleColorClass = isCareer
    ? 'text-primary-dark dark:text-dark-primary-dark'
    : 'text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]';

  return (
    <div className={`bg-trust-grey dark:bg-dark-trust-grey p-6 rounded-lg transition-transform duration-300 ease-in-out transform ${hoverClasses} flex flex-col justify-between backdrop-blur-sm`}>
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${titleColorClass}`}>{title}</h3>
        <p className="text-secondary-base dark:text-dark-secondary-base text-sm">{description}</p>
      </div>
    </div>
  );
};

const BenefitsAndCareer = () => {
  // Use the imported data (with a type assertion for safety)
  const data: BenefitsAndCareerData = benefitsAndCareerDataJson;

  return (
    <div className="min-h-screen bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark p-8">
      <div className="max-w-7xl lg:mx-[10%] mx-auto">
        {/* Additional benefits section */}
        <h2 className="text-4xl font-bold mb-8 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">Additional benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {data.benefits.map((benefit, index) => (
            <Card key={index} title={benefit.title} description={benefit.description} isCareer={false} />
          ))}
        </div>

        {/* Career opportunities section */}
        <h2 className="text-4xl font-bold mb-8 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">Career opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.careerOpportunities.map((career, index) => (
            <Card key={index} title={career.title} description={career.description} isCareer={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsAndCareer;