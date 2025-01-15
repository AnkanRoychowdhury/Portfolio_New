import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../data/content';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const elements = timelineRef.current.querySelectorAll('.timeline-item');

    elements.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experience Timeline
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/20" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } gap-8 mb-12`}
            >
              <div className="w-full md:w-5/12">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-blue-500 mr-3" size={20} />
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
