import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-6 py-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Let's discuss how I can contribute to your backend development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start space-x-4 hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Email</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">john.doe@example.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Location</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">San Francisco, CA</p>
                  </div>
                </div>

                {/* Resume */}
                <div className="flex items-start space-x-4 hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Resume</h4>
                    <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-6">
                <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-4">Professional Profiles</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-neutral-200 dark:border-neutral-700/30 rounded-xl p-6 bg-white dark:bg-neutral-800">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 ">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-neutral-800"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-neutral-800 text-white dark:bg-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
