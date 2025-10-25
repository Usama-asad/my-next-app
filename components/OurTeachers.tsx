import React from 'react';
import Image from 'next/image';

// Individual Teacher Card Component
const TeacherCard = ({ name, title, imageUrl }) => {
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
  const teachers = [
    {
      name: 'Anas Andalussi',
      title: 'Fundador de Escribelo & QuickTok',
      imageUrl: '/teacher1.png',
    },
    {
      name: 'Fran Conejos',
      title: 'Fundador de LandBot',
      imageUrl: '/teacher2.png',
    },
    {
      name: 'Laura Migallón',
      title: 'Divulgadora de IA',
      imageUrl: '/teacher3.png',
    },
    {
      name: 'Damián Gil',
      title: 'Experto en IA Aplicada a Empresas',
      imageUrl: '/teacher4.png',
    },
    {
      name: 'Salvador Ramos',
      title: 'Microsoft MVP y Experto en Power BI',
      imageUrl: '/teacher5.png',
    },
    {
      name: 'Jon Hernández',
      title: 'Experto en Fotografía con IA',
      imageUrl: '/teacher6.png',
    },
    {
      name: 'Nicolás Cort',
      title: 'Experto en IA aplicada a negocios',
      imageUrl: '/teacher7.png',
    },
    {
      name: 'Jorge Branger',
      title: 'Experto en LinkedIn',
      imageUrl: '/teacher8.png',
    },
    {
      name: 'Damián Tuset',
      title: 'Experto en Derecho de la IA',
      imageUrl: '/teacher9.png',
    },
    {
      name: 'Andrés Sáenz Mag...',
      title: 'Experto en Marketing Digital en el Sector TIC',
      imageUrl: '/teacher10.png',
    },
    {
      name: 'Bosco López García',
      title: 'Experto en Marketing Digital',
      imageUrl: '/teacher11.png',
    },
    {
      name: 'Ivan Fresneda Carr...',
      title: 'CEO de MyContent',
      imageUrl: '/teacher12.png',
    },
  ];

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