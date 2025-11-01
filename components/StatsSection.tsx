// components/StatsSection.jsx

// This will be a Client Component if you add any interactive features,
// but for static display, it can remain a Server Component.
// For now, let's assume it's a Server Component as it's static.

const stats = [
  { value: '#1', label: 'ranked bootcamp' },
  { value: '31,000', label: 'graduates worldwide' },
  { value: '7000+', label: 'hiring companies' },
];

function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-hero dark:bg-dark-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-light dark:text-dark-primary-light mb-2 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
                {stat.value}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-secondary-base dark:text-dark-secondary-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;