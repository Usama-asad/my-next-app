import React from 'react';
import Image from 'next/image';

const QualityCommitment = () => {
  return (
    <div className="bg-gradient-hero dark:bg-dark-gradient-hero py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section: Heading and Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-light dark:text-dark-primary-light mb-6 leading-tight max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
            Verpflichtet zur Qualität
          </h2>
          <p className="text-lg text-secondary-base dark:text-trust-grey leading-relaxed max-w-xl lg:max-w-none mx-auto">
            Erhalten Sie eine vertrauenswürdige Ausbildung. Wir aktualisieren
            ständig unseren Lehrplan, um sicherzustellen, dass Sie nur lernen, was
            echte Technikprofis tun. Mit einer Bewertung von 4.8/5 von über 2300
            Alumni auf SwitchUp und Course Report können Sie zuversichtlich in Ihrer
            Entscheidung sein, ein Ironhacker zu werden.
          </p>
        </div>

        {/* Right Section: Single Image containing all badges */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start p-6 bg-trust-grey dark:bg-dark-trust-grey rounded-lg shadow-primary-light/20 dark:shadow-dark-primary-light/20 backdrop-blur-sm">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto aspect-[1.5/1]">
            <Image
              src="/achievments.jpg"
              alt="Quality Badges: SwitchUp, Course Report, Bildungsgutschein"
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

export default QualityCommitment;