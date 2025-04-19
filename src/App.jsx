// import React, { useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   // Smooth scroll for anchor links
//   useEffect(() => {
//     const handleAnchorClick = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
//         e.preventDefault();
//         const targetId = target.getAttribute('href')?.substring(1);
//         const targetElement = document.getElementById(targetId || '');
//         if (targetElement) {
//           window.scrollTo({
//             top: targetElement.offsetTop - 80, // Offset for header
//             behavior: 'smooth',
//           });
//         }
//       }
//     };

//     document.addEventListener('click', handleAnchorClick);
//     return () => document.removeEventListener('click', handleAnchorClick);
//   }, []);

//   return (
//     <div className="bg-white dark:bg-gray-950 min-h-screen">
//       <Header />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
