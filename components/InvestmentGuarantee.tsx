import React from 'react';
import Image from 'next/image';

const InvestmentGuarantee = () => {
  const customerLogos = [
    '/customer-logo1.png',
    '/customer-logo2.png',
    '/customer-logo3.png',
    '/customer-logo4.jpeg',
    '/customer-logo5.jpeg',
  ];

  return (
    <div className="relative bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark min-h-screen flex items-center justify-center p-4">
      <Image
        src="/background-pattern.svg"
        alt="Background Pattern"
        layout="fill"
        objectFit="cover"
        className="opacity-20 z-0"
      />

      <div className="relative z-10 bg-trust-grey dark:bg-dark-trust-grey rounded-lg shadow-xl flex flex-col lg:flex-row max-w-6xl mx-auto overflow-hidden backdrop-blur-sm">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
            UNSER <br /> VERSPRECHEN:
          </h2>
          <p className="text-lg md:text-xl text-secondary-base dark:text-dark-secondary-base mb-8">
            Du ver-4-fachst innerhalb der ersten 6 Monate dein
            Investment. Falls nicht, darfst du die Zusammenarbeit
            sofort beenden.
          </p>
          <button className="bg-primary-light dark:bg-dark-primary-light hover:bg-primary-accent dark:hover:bg-dark-primary-accent text-trust-grey dark:text-dark-trust-grey font-bold py-3 px-6 rounded-md text-lg transition duration-300 w-fit max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]">
            JETZT ERSTGESPRÄCH BUCHEN
          </button>

          <div className="mt-12 flex items-center">
            <div className="flex -space-x-4">
              {customerLogos.map((logoSrc, index) => (
                <div key={index} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-light/20 dark:bg-dark-primary-light/20 border-2 border-primary-dark dark:border-dark-primary-dark overflow-hidden flex items-center justify-center relative" style={{ zIndex: customerLogos.length + index }}>
                  <Image
                    src={logoSrc}
                    alt={`Customer Logo ${index + 1}`}
                    width={48}
                    height={48}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <p className="ml-4 text-secondary-base dark:text-dark-secondary-base text-sm md:text-base">
              Mehr als 2.000+ Kunden mit Frontend- <br className="lg:hidden"/> Produkten allein in 2024
            </p>
          </div>
        </div>

        {/* Right Section: Investment Graph PNG */}
        <div className="lg:w-1/2 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg lg:max-w-none h-auto">
            <Image
              src="/investment.svg"
              alt="Investment Growth Graph"
              width={700}
              height={500}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentGuarantee;