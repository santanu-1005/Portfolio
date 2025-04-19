import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { gsap, SteppedEase } from 'gsap';

const Home = () => {
  const textRef = useRef(null);
  const roleRef = useRef(null);
  const words = ['Full Stack Developer', 'MERN Stack Developer', 'Software Engineer']; // Array of words
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // State to track the current word
  const wordChangeDelay = 50; // Short delay to change words after typing (500ms)
  const typingDuration = 3; // Typing duration (2 seconds)

  useEffect(() => {
    const tl = gsap.timeline();

    const animateWord = () => {
      const currentWord = words[currentWordIndex]; // Get current word to type

      // Reset roleRef to ensure new word starts fresh
      gsap.set(roleRef.current, {
        width: '0',
        opacity: 1,
      });

      // Animate the typing effect for the current word
      tl.fromTo(
        roleRef.current,
        typingDuration, // Typing duration
        { width: '0' },
        {
          width: '100%',
          ease: SteppedEase.config(24), // Typing effect
          onComplete: () => {
            // After typing, immediately switch to the next word (no wait for typing duration)
            gsap.to(roleRef.current, {
              opacity: 0,
              duration: 0.5, // Fade-out duration (0.5 seconds)
              onComplete: () => {
                // Change to the next word in the array
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
              },
            });
          },
        }
      );
    };

    // Trigger animation for the current word
    animateWord();

    // Make sure the observer triggers once the element enters the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [currentWordIndex]); // Re-run effect when currentWordIndex changes

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div
          className="text-center opacity-0 transform transition-all duration-1000 ease-out"
          ref={textRef}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block">Hello, I'm</span>
            <span className="block text-blue-600 dark:text-blue-400">Santanu Ajit Maity</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
            <span ref={roleRef} className="inline-block overflow-hidden whitespace-nowrap">
              {words[currentWordIndex]} {/* Display the current word */}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
            I build beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1Mr6oXUIZWkUJBq_nQiPo6GNxXrNw8VRg/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Home;
