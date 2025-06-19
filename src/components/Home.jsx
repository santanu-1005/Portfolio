import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

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
            Software Engineer
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
            I build beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://bit.ly/44oGAfC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Resume
            </a>
            <a
              href="https://leetcode.com/u/maitysantanu/"
              target='_blank'
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              LeetCode
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
