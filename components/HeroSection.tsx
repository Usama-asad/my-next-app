'use client'; // Required for client-side interactivity, useRef, useEffect, useState

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react'; // Ensure useState is imported

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Form State Management
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false); // State for terms checkbox
  const [message, setMessage] = useState(''); // Feedback message for the user
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  // Video Autoplay Effect
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented. User might need to interact.", error);
      });
    }
  }, []);

  // Handler for terms checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // console.log('Checkbox is now:', event.target.checked); // Can remove this if no longer needed
  };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default browser form submission (page reload)
    setMessage(''); // Clear previous messages
    setIsLoading(true); // Set loading state

    // Client-side Validation
    if (!name.trim() || !email.trim()) { // .trim() to handle whitespace
      setMessage('Name and Email are required.');
      setIsLoading(false);
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setMessage('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
    if (!isChecked) {
      setMessage('You must accept the Terms and Conditions.');
      setIsLoading(false);
      return;
    }

    try {
      // Send data to your Next.js API route
      const response = await fetch('/api/send-email', { // Adjust endpoint if different
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Thank you for your interest! We will be in touch.');
        // Optionally clear form fields after successful submission
        setName('');
        setEmail('');
        setIsChecked(false);
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('An unexpected error occurred during submission.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-trust-grey dark:text-trust-grey overflow-hidden bg-gradient-hero dark:bg-dark-gradient-hero mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        loop // Added loop for continuous playback
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-dark dark:bg-dark-primary-dark opacity-70 z-10 backdrop-blur-sm"></div>

      {/* Main Content Area - Centered and width-constrained */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        {/* Heading - Centered, comes first in desktop */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center max-w-7xl mx-auto">
          Skaliere auf 100K/Monat mit 1 Mitarbeiter in unter 12 Monaten mit SPEEDSCALING
        </h1>

        {/* Content Grid for Desktop (2 columns) and Mobile (stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Sentence, List, Form, Button */}
          <div className="flex flex-col text-center lg:text-left order-2 lg:order-1">
            <p className="text-base sm:text-lg text-trust-gray  dark:text-dark-secondary-base mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Finde als Coach, Berater & Creator endlich mal eine 1:1 Begleitung auf Augenhöhe und einen Prozess, den schon 2.000+ Coaches nutzen, um entspannt ohne Team auf 100k zu wachsen.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-left mx-auto max-w-lg lg:mx-0 mb-6 sm:mb-8">
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-2 mt-1">✓</span>
                Erhalte deine individuelle 100K-Roadmap direkt von zwei 7-stelligen Marketern
              </li>
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-2 mt-1">✓</span>
                Nutze 2.000-fach erprobte Vorlagen aus 25 Mio. € Launch-Umsatz
              </li>
              <li className="flex items-start">
                <span className="text-success-green dark:text-dark-success-green mr-2 mt-1">✓</span>
                Sichere dir 40 %+ Profit mit 0-1 Teammitgliedern
              </li>
            </ul>

            {/* Form Section - Encapsulated */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto lg:mx-0">
              <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='bg-secondary-base placeholder-trust-grey py-2 px-4 mb-4 rounded-md opacity-80 w-full'
                disabled={isLoading}
              />
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-secondary-base placeholder-trust-grey py-2 px-4 mb-4 rounded-md opacity-80 w-full'
                disabled={isLoading}
              />
              <div className='flex items-center mb-6'> {/* Increased mb for message below */}
                <input
                  type="checkbox"
                  name='terms'
                  id='acceptTerms'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className='appearance-none h-5 w-5 border border-2 rounded
                             checked:bg-trust-grey checked:border-transparent
                             focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2
                             cursor-pointer transition-all duration-150 ease-in-out
                             border-gray-400'
                  disabled={isLoading}
                />
                <label htmlFor="acceptTerms" className='ml-2 text-trust-grey cursor-pointer px-3'>Accept Terms and Conditions.</label>
              </div>

              {/* Feedback Message */}
              {message && (
                <p className={`text-sm mb-4 text-center
                  ${message.includes('successfully') || message.includes('Thank you') ? 'text-success-green' : 'text-alert-orange'}`}>
                  {message}
                </p>
              )}

              <button
                type="submit" // Important: set type="submit" for the form to trigger handleSubmit
                className={`bg-primary-light dark:bg-primary-light text-primary-dark dark:text-primary-dark font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-primary-accent dark:hover:bg-dark-primary-accent hover:shadow-[0_4px_20px_rgba(0,212,255,0.3)] focus:ring-2 focus:ring-primary-accent dark:focus:ring-dark-primary-accent focus:outline-none w-2/3 max-sm:bg-[#00C4EE] max-sm:dark:bg-[#00D4FF] mx-auto lg:mx-0
                           ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? 'Sending...' : 'JETZT ERSTGESPRÄCH BUCHEN'}
                <br />
                <span className="text-sm font-normal">Such Dir einen freien Termin aus!</span>
              </button>
            </form>
          </div>

          {/* Right Column: Team Photo - Full width on mobile */}
          <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl mx-auto lg:mx-0 order-1 lg:order-2">
            {/* <Image
              src="/team-photo.jpg"
              alt="Team discussing project"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            /> */}
            <iframe
              id="JotFormIFrame-253032834558055"
              title="Bildungsgutschein-Check Quiz"
              onload="window.parent.scrollTo(0,0)"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/253032834558055"
              frameborder="0"
              className="min-width:100%;max-width:100%;height:539px;border:none;"
              scrolling="no"
            >
            </iframe>
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-253032834558055']"
              ,
              "https://form.jotform.com/")</script>
          </div>
        </div>
      </div>
    </section>
  );
}