import { useTheme } from "../contexts/ThemeContext";

export default function Header2() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
            <header className="sticky top-0 z-50">
                <nav className={`flex flex-col sm:flex-row justify-between items-center ${
              isDark
                ? "bg-primary-dark"
                : "bg-primary-dark"
            } p-4 rounded-lg shadow-md backdrop-blur-sm`}>
                    <div className="hidden sm:flex space-x-4">
                        <a href="#" className="text-trust-grey hover:underline font-semibold hover:text-primary-accent transition-colors duration-200">Für Wen</a>
                        <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Lehrplan</a>
                        <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Finanzierung</a>
                        <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Nächste Kurse</a>
                        <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Warum Le Wagon?</a>
                        <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">Unsere Alumni</a>
                        <a href="#" className="text-trust-grey hover:underline hover:text-primary-accent transition-colors duration-200">FA</a>
                    </div>
                    <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-end">
                        <button className="text-primary-light px-4 py-2 rounded-lg font-semibold border-2 border-primary-light hover:bg-primary-accent hover:text-primary-dark hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] transition-all duration-200">
                            Lehrplan herunterladen
                        </button>
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