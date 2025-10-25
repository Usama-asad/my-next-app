import React from 'react';

// Reusable Phase Card component for cleaner code
interface PhaseCardProps {
  phaseNumber: string;
  description?: string; // Optional for cards without a description in the image
  items?: string[];
  isLeftAligned?: boolean; // To determine text alignment and styling
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phaseNumber, description, items, isLeftAligned = true }) => (
  <div className={`flex-1 p-6 rounded-lg shadow-md bg-trust-grey dark:bg-dark-trust-grey text-secondary-base dark:text-dark-secondary-base backdrop-blur-sm ${isLeftAligned ? 'text-right' : 'text-left'}`}>
    <h3 className="text-xl md:text-2xl font-bold text-primary-dark dark:text-dark-primary-dark mb-2">
      {phaseNumber}
    </h3>
    {items && (
      <ul className="space-y-2 text-sm md:text-base text-secondary-base dark:text-dark-secondary-base">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-light dark:text-dark-primary-light mr-2 text-lg max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
              {isLeftAligned ? '★' : '➤'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
    {description && (
      <p dangerouslySetInnerHTML={{ __html: description}} className="text-sm md:text-base text-secondary-base dark:text-dark-secondary-base mb-4">
      </p>
    )}
  </div>
);

const PhasesSection: React.FC = () => {
  return (
    <section className="bg-gradient-hero dark:bg-dark-gradient-hero text-primary-dark dark:text-dark-primary-dark py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <p className="text-sm uppercase text-secondary-base dark:text-trust-grey font-semibold mb-2">
          ¿CÓMO FUNCIONA?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-light dark:text-dark-primary-light mb-12 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          Las Tres Fases
        </h2>

        {/* Phases Grid Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Background element */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary-light to-primary-accent dark:from-dark-primary-light dark:to-dark-primary-accent h-full hidden md:block z-0"></div>

          {/* Phase 1 */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center relative mb-12 md:mb-16 gap-0 md:gap-6">
            {/* Card Left (mobile: full width, desktop: 45%) */}
            <div className="w-full md:w-[calc(45%-1.5rem)] order-2 md:order-1 flex justify-end">
              <PhaseCard
                phaseNumber="fase 1"
                description="Domina la habilidad técnica más demandada ahora mismo y en la próxima década - el arte y la ciencia de crecer marcas online, y consigue ser “certificado por EGP” <br/><br/><br/><br/><br/><br/>"
                isLeftAligned={true}
              />
            </div>

            {/* Icon (pops out) */}
            <div className="absolute top-8 z-10 w-12 h-12 md:w-15 md:h-15 flex-shrink-0 mx-auto md:mx-0 -mt-8 md:mt-0 mb-4 md:mb-0 bg-trust-grey dark:bg-dark-trust-grey rounded-full flex items-center justify-center shadow-lg order-1 md:order-2 backdrop-blur-sm">
              <img src="https://www.ecomgrowthpartners.com/_next/image?url=%2Fcontent%2Fphase_1_logo_only.png&w=256&q=75" alt="Phase 1 Icon" className="w-10 h-10 md:w-14 md:h-14" />
            </div>

            {/* Card Right (mobile: full width, desktop: 45%) */}
            <div className="w-full md:w-[calc(45%-1.5rem)] order-3 flex justify-start">
              <PhaseCard
                phaseNumber=""
                description='<br/>'
                items={[
                  "Ofertas De Adquisición Ganadoras",
                  "Embudos De Venta 'Nueva-Era' De E-Commerce",
                  "Anuncios De Google Y Meta",
                  "Anuncios De Video Virales Y UGC",
                  "Dominio De Marketing Por Email",
                  "Asesoramiento Y Apoyo 1:1"
                ]}
                isLeftAligned={false}
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center relative mb-12 md:mb-16 gap-0 md:gap-6">
            {/* Card Left (mobile: full width, desktop: 45%) */}
            <div className="w-full md:w-[calc(45%-1.5rem)] order-2 md:order-1 flex justify-end">
              <PhaseCard
                phaseNumber=""
                description='<br/>'
                items={[
                  "Estrategia De Contenido Viral",
                  "Como Agendar 5-10 Llamadas Semanales Automatizadas",
                  "Scripts De Llamada De Venta De Alta Conversión",
                  "Formación En Ventas 1:1 En Vivo",
                  "Cliente Garantizado"
                ]}
                isLeftAligned={true}
              />
            </div>

            {/* Icon (pops out) */}
            <div className="absolute top-8 z-10 w-12 h-12 md:w-15 md:h-15 flex-shrink-0 mx-auto md:mx-0 -mt-8 md:mt-0 mb-4 md:mb-0 bg-trust-grey dark:bg-dark-trust-grey rounded-full flex items-center justify-center shadow-lg order-1 md:order-2 backdrop-blur-sm">
              <img src="https://www.ecomgrowthpartners.com/_next/image?url=%2Fcontent%2Fphase_2_logo_only.png&w=256&q=75" alt="Phase 2 Icon" className="w-10 h-10 md:w-14 md:h-14" />
            </div>

            {/* Card Right (mobile: full width, desktop: 45%) */}
            <div className="w-full md:w-[calc(45%-1.5rem)] order-3 flex justify-start">
              <PhaseCard
                phaseNumber="fase 2"
                description="Conviertete en un Growth Partner con un cliente garantizado, y asociate con algunas de las marcas de e-commerce más atractivas del mundo <br/><br/><br/><br/><br/>"
                isLeftAligned={false}
              />
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center relative gap-0 md:gap-6">
            {/* Card Left (mobile: full width, desktop: 45%) */}
            <div className="w-full md:w-[calc(45%-1.5rem)] order-2 md:order-1 flex justify-end">
              <PhaseCard
                phaseNumber="fase 3"
                description="Optimiza los resultados de tus clientes y tus ingresos como Growth Partner de forma personalizada con Jaime Higuera, que entra en tu negocio como si fuese tu Director de Marketing <br/><br/>"
                isLeftAligned={true}
              />
            </div>

            {/* Icon (pops out) */}
            <div className="absolute top-8 z-10 w-12 h-12 md:w-15 md:h-15 flex-shrink-0 mx-auto md:mx-0 -mt-8 md:mt-0 mb-4 md:mb-0 bg-trust-grey dark:bg-dark-trust-grey rounded-full flex items-center justify-center shadow-lg order-1 md:order-2 backdrop-blur-sm">
              <img src="https://www.ecomgrowthpartners.com/_next/image?url=%2Fcontent%2Fphase_3_logo_only.png&w=256&q=75" alt="Phase 3 Icon" className="w-10 h-10 md:w-14 md:h-14" />
            </div>

            {/* Card Right (mobile: full width, desktop: 45%) */}
            <div className="w-full md:w-[calc(45%-1.5rem)] order-3 flex justify-start">
              <PhaseCard
                phaseNumber=""
                description='<br/><br/>'
                items={[
                  "Coaching Y Apoyo 1:1 Para Maximizar Los Resultados De Tus Clientes",
                  "Estrategia Para Aumentar Tu Ingresos E Impacto Como Gorwth Partner"
                ]}
                isLeftAligned={false}
              />
            </div>
          </div>

        </div>

        {/* Button at bottom */}
        <div className="text-center mt-16">
          <button className="bg-primary-light dark:bg-dark-primary-light hover:bg-primary-accent dark:hover:bg-dark-primary-accent text-trust-grey dark:text-dark-trust-grey font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center mx-auto max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF]">
            <span className="text-2xl mr-3">💎</span>
            Reserva aquí tu llamada
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;