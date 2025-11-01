import { useTheme } from "../contexts/ThemeContext";

export default function Header2() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const handleScroll = (e, targetId) => {
        e.preventDefault(); // Prevent the default anchor link behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Scrolls to the top of the target element
                behavior: 'smooth', // This is what makes it scroll smoothly
            });
        }
    };
    return (
            <header className="sticky top-0 z-50">
                <nav className={`flex flex-col sm:flex-row justify-between items-center ${
              isDark
                ? "bg-primary-dark"
                : "bg-primary-dark"
            } p-4 rounded-lg shadow-md backdrop-blur-sm`}>
                    <div className="hidden sm:flex space-x-4">
                        <a href="#CourseOverview" onClick={(e) => handleScroll(e, 'CourseOverview')} className="text-trust-grey hover:underline font-semibold hover:text-primary-accent transition-colors duration-200">Für Wen</a>
                        <a href="#HeroSection2" onClick={(e) => handleScroll(e, 'HeroSection2')} className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Lehrplan</a>
                        <a href="#AboutSection" onClick={(e) => handleScroll(e, 'AboutSection')} className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Finanzierung</a>
                        <a href="#PhasesSection" onClick={(e) => handleScroll(e, 'PhasesSection')} className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Nächste Kurse</a>
                        <a href="#MLEngineeringDashboard" onClick={(e) => handleScroll(e, 'MLEngineeringDashboard')} className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Warum Le Wagon?</a>
                        <a href="#BenefitsAndCareer" onClick={(e) => handleScroll(e, 'BenefitsAndCareer')} className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Unsere Alumni</a>
                        <a href="#faqGrid" onClick={(e) => handleScroll(e, 'faqGrid')} className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">FA</a>
                    </div>
                    <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-end">
                        <a href="/dummy.pdf">
                        <button className="text-primary-light px-4 py-2 rounded-lg font-semibold border-2 border-primary-light hover:bg-primary-accent hover:text-primary-dark hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] transition-all duration-200">
                            Lehrplan herunterladen
                        </button>
                        </a>
                        <button className="bg-primary-light text-secondary-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary-accent hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] focus:ring-2 focus:ring-primary-accent focus:outline-none transition-all duration-200 max-sm:bg-[#00C4EE]">
                            Bewerben
                        </button>
                    </div>
                </nav>
            </header>
        // <div className="min-h-screen bg-primary-dark p-4 sm:p-8">
        // </div>
    )
}