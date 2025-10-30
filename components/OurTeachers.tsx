// components/OurTeachers.tsx
import React from 'react';
import Image from 'next/image';

// Import the JSON data directly
import teachersDataJson from '../data/ourTeachers.json';

// Define the TypeScript Interface for a single teacher item directly in the component file
interface Teacher {
  name: string;
  title: string;
  imageUrl: string;
}

// Individual Teacher Card Component
// Now explicitly typed with the Teacher interface
const TeacherCard = ({ name, title, imageUrl }: Teacher) => {
  return (
    <div className="bg-trust-grey dark:bg-dark-trust-grey rounded-lg p-4 flex items-center space-x-4 transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-primary-light/20 dark:hover:shadow-dark-primary-light/20 backdrop-blur-sm">
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-primary-dark dark:text-dark-primary-dark text-lg font-semibold">{name}</h3>
        <p className="text-secondary-base dark:text-dark-secondary-base text-sm">{title}</p>
      </div>
    </div>
  );
};

// Main component for the Professors section
const OurTeachers = () => {
  // Use the imported data (with a type assertion for safety)
  const teachers: Teacher[] = teachersDataJson;

  return (
    <div className="min-h-screen bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto lg:mx-[15%]">
        {/* Heading and Sentence */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">Nuestros Profesores</h1>
        <p className="text-xl md:text-2xl text-secondary-base dark:text-dark-secondary-base mb-12">
          Tus profesores dentro de la formación
        </p>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              title={teacher.title}
              imageUrl={teacher.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;