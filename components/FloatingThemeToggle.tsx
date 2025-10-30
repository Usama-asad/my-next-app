import React, { useState, useEffect } from "react";

interface FloatingThemeToggleProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const FloatingThemeToggle: React.FC<FloatingThemeToggleProps> = ({
  toggleTheme,
  isDark,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Show immediately if already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed right-6 bottom-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 ease-out transform group ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-20 opacity-0 scale-75 pointer-events-none"
      } ${
        isDark
          ? "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-300 hover:via-orange-400 hover:to-pink-400"
          : "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
      }`}
      style={{
        boxShadow: isDark
          ? "0 10px 40px rgba(251, 146, 60, 0.4), 0 0 20px rgba(251, 146, 60, 0.3)"
          : "0 10px 40px rgba(124, 58, 237, 0.4), 0 0 20px rgba(124, 58, 237, 0.3)",
      }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Animated Ring Effect */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isHovered ? "scale-125 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
        }}
      ></div>

      {/* Icon Container */}
      <div className="relative w-7 h-7 flex items-center justify-center">
        {/* Sun Icon */}
        <svg
          className={`absolute w-7 h-7 text-white transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute w-7 h-7 text-white transition-all duration-500 transform ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Pulse Animation */}
      <div
        className={`absolute inset-0 rounded-full animate-ping ${
          isDark ? "bg-orange-400" : "bg-purple-400"
        } opacity-20`}
      ></div>

      {/* Tooltip */}
      <span
        className={`absolute right-full mr-3 px-3 py-1.5 rounded-lg whitespace-nowrap text-sm font-gaming font-semibold transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        } ${
          isDark
            ? "bg-gray-800 text-gray-200 shadow-lg"
            : "bg-white text-gray-800 shadow-lg"
        }`}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default FloatingThemeToggle;