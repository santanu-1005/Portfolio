import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "CI/CD", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "UX/UI Design", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Agile", level: 75, logo: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png" },
];

function generatePositions(W, H) {
  const padding = 16;
  const out = [];
  for (let i = 0; i < skills.length; i++) {
    const size = Math.min(70 + skills[i].level * 0.6, 110);
    let x, y, tries = 0, collision;
    do {
      x = Math.random() * (W - size);
      y = Math.random() * (H - size);
      collision = out.some((p) => {
        const dx = x - p.x, dy = y - p.y;
        return Math.hypot(dx, dy) < (size + p.size) / 2 + padding;
      });
      tries++;
    } while (collision && tries < 200);
    out.push({ x, y, size });
  }
  return out;
}

const floatVariants = {
  float: (speed) => {
    const xAmp = 3 + Math.random() * 3;
    const yAmp = 3 + Math.random() * 3;
    return {
      x: [0, xAmp, -xAmp, 0],
      y: [0, -yAmp, yAmp, 0],
      transition: {
        duration: 10 / speed + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    };
  },
};

export default function Skills() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [hover, setHover] = useState(false);
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setPositions(generatePositions(width, height));

    const obs = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setPositions(generatePositions(width, height));
  };

  const bubbleBg =
    theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.6)";
  const bubbleBd =
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.15)"
      : "1px solid rgba(0,0,0,0.1)";
  const bubbleSh =
    theme === "dark"
      ? "0 6px 24px rgba(255,255,255,0.08)"
      : "0 6px 24px rgba(0,0,0,0.08)";

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950 hover:shadow-lg transition-colors duration-300"
    >
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-500 mx-auto"></div>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        className="relative mx-auto w-full max-w-6xl h-[600px] bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden cursor-pointer transition-colors duration-300"
      >
        {positions.map((p, i) => (
          <motion.div
            key={skills[i].name}
            layout
            layoutTransition={{
              type: "tween",
              duration: 500000,
              ease: "easeInOut",
            }}
            variants={floatVariants}
            custom={hover ? 2.5 : 1}
            initial={false}
            animate="float"
            whileHover={{ scale: 1.1 }}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              backgroundColor: bubbleBg,
              border: bubbleBd,
              boxShadow: bubbleSh,
              backdropFilter: "blur(6px)",
              borderRadius: "50%",
              backgroundImage: `url(${skills[i].logo})`,
              backgroundSize: "55%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
    </section>
  );
}
