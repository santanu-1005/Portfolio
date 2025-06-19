import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-all duration-700 opacity-0 translate-y-8"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block pb-3">
            About Me
            <span className="block h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mt-2 rounded"></span>
          </h2>
        </div>

        {/* Text Content */}
        <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6 text-justify">
          <p>
            I’m <strong>Santanu Ajit Maity</strong>, a passionate and
            results-driven <strong>Full Stack Developer</strong> with a solid
            foundation in <strong>JavaScript</strong>, <strong>React</strong>,{" "}
            <strong>Node.js</strong>, and <strong>MongoDB</strong>. I am
            enthusiastic about building scalable, efficient, and user-centric
            web applications that solve real-world problems and drive positive
            impact. Through academic projects and hands-on learning, I’ve gained
            experience in developing dynamic and interactive applications while
            continuously improving my technical skills.
          </p>
          <p>
            During my internship as a <strong>Python Developer</strong>, I
            worked on developing scalable backend solutions, primarily focusing
            on creating <strong>RESTful APIs</strong> and building{" "}
            <strong>Flask-based user interfaces</strong>. This experience
            sharpened my ability to design and implement efficient web services
            while collaborating on full-stack development tasks. Additionally,
            I’ve honed my problem-solving skills by solving over{" "}
            <strong>1000+ DSA problems</strong> on both platforms{" "}
            <strong>
              <a
                href="https://www.geeksforgeeks.org/user/santanumaity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400"
              >
                GeeksforGeeks
              </a>
            </strong>{" "}
            and{" "}
            <strong>
              <a
                href="https://leetcode.com/santanumaity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400"
              >
                LeetCode
              </a>
            </strong>
            , earning a <strong>3-star rating</strong> and a{" "}
            <strong>Campus Rank of 12</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
