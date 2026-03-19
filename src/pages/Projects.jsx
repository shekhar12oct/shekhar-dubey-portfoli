import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const projects = [
  {
    title: 'Shipment Tracking Dashboard',
    tech: ['React.js', 'REST APIs', 'Real-Time UI', 'Logistics Workflows'],
    description:
      'Built real-time shipment tracking interfaces for logistics workflows, giving operations teams a clearer view of shipment events, milestones, and delivery progress across large volumes of data.',
    details: [
      'Designed responsive dashboards and status-driven UI flows that made shipment activity easier to scan and act on for internal users.',
      'Integrated REST APIs and structured the frontend for scalable state handling, helping keep the interface reliable as business complexity grew.',
      'Focused on performance and usability so the experience remained smooth while rendering data-heavy logistics views used in day-to-day operations.',
    ],
    gradient: 'from-violet-600 to-purple-600',
    glow: 'rgba(124,58,237,0.25)',
  },
  {
    title: 'Contract Rate Management System',
    tech: ['React.js', 'Enterprise UI', 'Scalable Workflows', 'Business Rules'],
    description:
      'Developed scalable UI workflows for contract lifecycle management, helping internal teams manage complex pricing, routing, and operational business rules with greater clarity and speed.',
    details: [
      'Built maintainable frontend modules for contract creation, updates, approvals, and rule-driven validations across enterprise workflows.',
      'Simplified dense data-entry and review screens into reusable UI patterns that improved usability and reduced friction for internal stakeholders.',
      'Collaborated closely with product and backend teams to translate complex logistics requirements into intuitive and production-ready interfaces.',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.25)',
  },
  {
    title: 'Admin Dashboard',
    tech: ['React', 'Tailwind CSS', 'Redux Toolkit'],
    description:
      'Built a full-featured admin dashboard centered on reusable components, scalable state management, and a polished interface suitable for enterprise-style workflows.',
    details: [
      'Created a modular component structure with dashboards, cards, tables, filters, and navigation patterns that can be reused across multiple admin experiences.',
      'Used Redux Toolkit for predictable state handling and smoother data interactions across different dashboard modules.',
      'Added dark mode support and performance-focused UI patterns to keep the experience fast, consistent, and visually refined.',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    title: 'Personal Portfolio Website',
    tech: ['React', 'Vite', 'Redux', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Designed and built a modern portfolio experience to present frontend engineering skills, project storytelling, motion design, and strong visual execution in a single cohesive site.',
    details: [
      'Created a bold visual system with gradients, glassmorphism, motion, and responsive layouts to make the portfolio feel distinctive rather than template-based.',
      'Structured the app with reusable React sections and route-based pages so the content can evolve easily as new projects and experience are added.',
      'Focused on clarity, presentation, and performance so the site works both as a personal brand piece and as a demonstration of frontend craftsmanship.',
    ],
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.25)',
  },
];

const Projects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`py-24 px-6 ${darkMode ? '' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            My Work
          </p>
          <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured{' '}
            <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>Projects</span>
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of internal products and personal work highlighting frontend architecture,
            enterprise UI thinking, and performance-focused implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                style={{ background: project.glow }}
              />

              <div
                className={`relative h-full p-6 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'glass group-hover:border-white/20'
                    : 'bg-white border border-gray-100 shadow-lg group-hover:shadow-2xl'
                }`}
              >
                {/* Gradient top bar */}
                <div
                  className={`w-full h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-6 opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Code2 size={20} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-bold leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        darkMode
                          ? 'bg-white/5 text-gray-300 border border-white/10'
                          : 'bg-gray-50 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                          darkMode ? 'bg-violet-400' : 'bg-violet-500'
                        }`}
                      />
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
