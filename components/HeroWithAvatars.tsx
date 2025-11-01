// components/HeroWithAvatars.jsx

const avatars = [
  { src: 'https://randomuser.me/api/portraits/women/1.jpg', alt: 'Avatar 1' },
  { src: 'https://randomuser.me/api/portraits/men/1.jpg', alt: 'Avatar 2' },
  { src: 'https://randomuser.me/api/portraits/women/2.jpg', alt: 'Avatar 3' },
  { src: 'https://randomuser.me/api/portraits/men/2.jpg', alt: 'Avatar 4' },
  { src: 'https://randomuser.me/api/portraits/women/3.jpg', alt: 'Avatar 5' },
];

function HeroWithAvatars() {
  const SvgBackground = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 893 899"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
      className="absolute inset-0 z-0 text-primary-light/10 dark:text-dark-primary-light/10"
      style={{
        filter: 'blur(30px) opacity(0.8)',
        transform: 'scale(1.2)',
      }}
    >
      <path d="M453.413 899C539.609 899.001 672.694 834.552 784.044 689.909C842.101 614.493 869.48 553.286 881.453 515.937C896.42 469.251 911.386 333.384 825.778 307.647C717.593 275.122 694.273 202.105 671.324 162.203C652.566 120.704 601.76 32.5599 548.599 11.9702C482.148 -13.7668 390.898 -2.79936 287.757 92.5702C206.868 167.364 81.2198 347.546 16.3922 480.624C-22.1552 559.754 6.69399 666.05 109.184 670.359C211.675 674.669 289.58 761.536 315.721 804.431C326.896 826.777 369.174 898.999 453.413 899Z"></path>
    </svg>
  );

  return (
    <section className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] overflow-hidden bg-gradient-hero dark:bg-dark-gradient-hero py-12 sm:py-16 px-4">
      {/* Background SVG with theme-aware subtle glow */}
      <SvgBackground />

      {/* Content */}
      <div className="relative z-10 text-center mx-auto">
        {/* Avatars */}
        <div className="flex justify-center items-center -space-x-3 mb-8">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt={avatar.alt}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-trust-grey dark:border-dark-trust-grey object-cover shadow-md"
            />
          ))}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-light dark:bg-dark-primary-light flex items-center justify-center text-trust-grey dark:text-dark-trust-grey font-bold text-sm md:text-base border-4 border-trust-grey dark:border-dark-trust-grey z-10 shadow-lg backdrop-blur-sm">
            +435
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-primary-light dark:text-dark-primary-light max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          Data Scientist*in werden, heißt gut bezahlt werden:
          Berufseinsteiger*innen verdienen oft mehr als 56.000€ pro Jahr.
        </h2>
      </div>
    </section>
  );
}

export default HeroWithAvatars;