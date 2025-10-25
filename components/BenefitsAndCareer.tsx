import React from 'react';

const Card = ({ title, description, isCareer }) => {
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
  const benefits = [
    {
      title: 'Regular updates',
      description: 'Live classes to keep you up to date with the latest developments in AI.',
    },
    {
      title: 'Query system',
      description: 'Support to resolve your questions in less than 24 hours.',
    },
    {
      title: 'Lifetime access',
      description: 'Access the course and all future updates at no additional cost.',
    },
  ];

  const careerOpportunities = [
    {
      title: 'Process Automation Specialist',
      description: 'Optimize business tasks using generative tools and models.',
    },
    {
      title: 'Digital Transformation Consultant',
      description: 'Implement innovative AI-based strategies in companies and organizations.',
    },
    {
      title: 'Product Manager in AI',
      description: 'Leads product development projects that integrate generative artificial intelligence.',
    },
    {
      title: 'AI Instructor or Trainer',
      description: 'Teach AI concepts and applications to teams or students, preparing them to harness its potential in projects.',
    },
    {
      title: 'Technology Entrepreneur',
      description: 'Launch products or services that use generative AI as a competitive advantage, driving differentiation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark p-8">
      <div className="max-w-7xl lg:mx-[10%] mx-auto">
        {/* Additional benefits section */}
        <h2 className="text-4xl font-bold mb-8 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">Additional benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} title={benefit.title} description={benefit.description} isCareer={false} />
          ))}
        </div>

        {/* Career opportunities section */}
        <h2 className="text-4xl font-bold mb-8 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">Career opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {careerOpportunities.map((career, index) => (
            <Card key={index} title={career.title} description={career.description} isCareer={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsAndCareer;