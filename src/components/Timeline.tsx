import React from "react";

const experienceData = [
  {
    id: 1,
    position: "Senior Backend Developer",
    company: "Tech Giant Corp",
    duration: "2021 - Present",
    current: true,
    description: "Led backend development for high-scale distributed systems serving millions of users.",
    responsibilities: [
      "Architected and implemented microservices handling 1M+ daily transactions",
      "Reduced system latency by 40% through optimization and caching strategies",
      "Led team of 5 backend developers and implemented CI/CD pipelines",
    ],
    skills: ["Java", "Spring Boot", "Kubernetes", "AWS"],
    color: "bg-green-100 text-green-600",  
  },
  {
    id: 2,
    position: "Backend Developer",
    company: "Innovation Studios",
    duration: "2019 - 2021",
    current: false,
    description: "Developed and maintained scalable backend services for e-commerce platforms.",
    responsibilities: [
      "Built RESTful APIs serving 500K+ daily active users",
      "Implemented real-time inventory management system",
      "Optimized database queries resulting in 50% faster response times",
    ],
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
    color: "bg-blue-100 text-blue-600",  
  },
  {
    id: 3,
    position: "Junior Backend Developer",
    company: "Tech Startups Inc",
    duration: "2018 - 2019",
    current: false,
    description: "Contributed to development of backend services for SaaS products.",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js",
      "Implemented authentication and authorization systems",
      "Wrote comprehensive API documentation and unit tests",
    ],
    skills: ["Node.js", "Express", "MongoDB", "Docker"],
    color: "bg-purple-100 text-purple-600",  
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-6 py-12 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Building and scaling backend systems across various industries
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((job) => (
            <div
              key={job.id}
              className="border border-neutral-200/30 rounded-xl p-6 bg-white dark:bg-neutral-800 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{job.position}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-semibold text-lg">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-neutral-500 dark:text-neutral-400">{job.duration}</span>
                  {job.current && (
                    <span className="ml-2 px-3 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-300 rounded-full text-sm">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400">{job.description}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-neutral-800 dark:text-neutral-300 mr-2">•</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full text-sm ${
                        index % 4 === 0
                          ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-600"
                          : index % 4 === 1
                          ? "bg-blue-100 dark:bg-blue-700 text-blue-600"
                          : index % 4 === 2
                          ? "bg-purple-100 dark:bg-purple-700 text-purple-600"
                          : "bg-orange-100 dark:bg-orange-700 text-orange-600"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
