import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-100 transition-opacity duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-500 mt-1 mr-4" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                    >
                      2002.maity.santanu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-600 dark:text-primary-500 mt-1 mr-4" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                    >
                      +91-9226376258
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-500 mt-1 mr-4" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                  Follow me
                </h4>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "github",
                      href: "https://github.com/santanu-1005",
                      icon: (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitHub"
                          className="h-4 w-4 object-contain"
                        />
                      ),
                    },
                    {
                      name: "linkedin",
                      href: "https://linkedin.com/in/santanu-maity-298365229",
                      icon: (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                          alt="LinkedIn"
                          className="h-4 w-4 object-contain"
                        />
                      ),
                    },
                    {
                      name: "leetcode",
                      href: "https://leetcode.com/u/maitysantanu/",
                      icon: (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                          alt="LeetCode"
                          className="h-4 w-4 object-contain"
                        />
                      ),
                    },
                    {
                      name: "gfg",
                      href: "https://www.geeksforgeeks.org/user/santanumaity/",
                      icon: (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                          alt="GFG"
                          className="h-4 w-4 object-contain"
                        />
                      ),
                    },
                  ].map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      aria-label={`Follow on ${name}`}
                    >
                      <span className="sr-only">{name}</span>
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>

              {formStatus.submitted ? (
                <div
                  className={`p-4 mb-6 rounded-md ${
                    formStatus.success
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {formStatus.message}
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
