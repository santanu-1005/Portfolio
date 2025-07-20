import React, { useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Lending Buddha",
    location: "India",
    duration: "Jun 2024 - Sept 2024",
    description:
      "Developed a Human Resource Management System for 200+ employees using Flask and bcrypt, improving data extraction and processing efficiency by 40%. Streamlined workflows by processing data from 10+ databases, reducing overall processing time by 35% and handling 1000+ records with enhanced efficiency.",
  },
  {
    role: "Data Analytics Intern",
    company: "Cloud Counselage Pvt. Ltd",
    location: "India",
    duration: "Feb 2024 - Apr 2024",
    description:
      "Analyzed data from 300+ student interns and found a strong positive correlation (r=0.75) between academic and career parameters. Built analytics pipelines using Pandas, NumPy, and Scikit-learn to boost GPA >3.5 interns by 30%. Revamped the mentorship program, cutting resource waste by 30% and improving mentee satisfaction by 40%.",
  },
];


const Experience = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemRefs = useRef([]);

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

    if (headingRef.current) observer.observe(headingRef.current);
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-950"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          ref={headingRef}
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-opacity duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-500 mx-auto mb-6"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative pl-8 pb-12 group opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute left-0 top-0 w-px h-full bg-primary-600/20 dark:bg-primary-500/20 group-last:h-[20px]" />
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 shadow-lg shadow-primary-600/50 dark:shadow-primary-500/50 animate-pulse" />

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg group-hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
