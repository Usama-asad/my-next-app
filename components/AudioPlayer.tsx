// components/AudioPlayer.jsx
import React, { useRef, useState } from 'react';

const AudioPlayer = ({ src, title = 'Audio playback' }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Optional: Handle when audio ends to reset the button
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg">
      <audio
        ref={audioRef}
        src={src}
        onEnded={handleAudioEnded}
        preload="none" // 'none', 'metadata', 'auto'
        aria-label={title}
      >
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={togglePlayPause}
        className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150"
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
      >
        {isPlaying ? (
          // Pause icon (SVG)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Play icon (SVG)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Optional: Add a text label or progress bar here if desired */}
      <span className="text-sm text-gray-700">
        {title.length > 20 ? title.substring(0, 17) + '...' : title}
      </span>
    </div>
  );
};

export default AudioPlayer;