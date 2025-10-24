"use client";
import React from "react";

const ScrollingLogos = () => {
  const logos = [
    { name: "n8n", icon: "∞" },
    { name: "LangChain", icon: "🔗" },
    { name: "Langflow", icon: "≋" },
    { name: "ElevenLabs", icon: "11" },
    { name: "botpress", icon: "🤖" },
    { name: "OpenAI", icon: "⚡" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Anthropic", icon: "A" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="bg-black py-16 overflow-hidden">
      <div className="w-[60%] mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-left mb-12">
          ¿Qué herramientas aprenderás?
        </h2>

        <div className="relative  overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-6 md:mx-8">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-2xl md:text-3xl">{logo.icon}</span>
                  <span className="text-lg md:text-xl font-semibold whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingLogos;
