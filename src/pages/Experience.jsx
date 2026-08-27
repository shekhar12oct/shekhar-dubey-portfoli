import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Ailytics',
    period: 'July 2026 \u2013 August 2026',
    badge: 'Remote',
    badgeColor: 'text-rose-400',
    gradient: 'from-rose-500 to-pink-600',
    accent: 'text-rose-400',
    highlights: [
      'Developed a real-time security compliance dashboard to monitor, analyze, and visualize camera-generated alerts.',
      'Designed and implemented end-to-end use case logic flows for zone-based camera monitoring, including geofenced area definitions for automated threat detection.',
      'Built automated alert-triggering flows that reduced manual surveillance overhead and improved incident response time.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'WiseTech Global',
    period: 'April 2024 \u2013 May 2026',
    badge: '2 Years',
    badgeColor: 'text-cyan-400',
    gradient: 'from-violet-500 to-purple-600',
    accent: 'text-violet-400',
    highlights: [
      'Architect and develop scalable frontend solutions for logistics and enterprise platforms using React.js, JavaScript, and modern UI engineering practices.',
      'Integrated AI-assisted workflows with GitHub Copilot and Claude for architecture exploration, edge-case test generation, and performance refactoring.',
      'Improved UI performance by 30% and reduced application load times by 40% through code splitting, lazy loading, and rendering optimization.',
      'Built real-time dashboards for contract management and shipment tracking, improving user productivity by 25%.',
      'Implemented micro-frontend architecture with Module Federation to enable independent team deployments and better scalability.',
      'Optimized Core Web Vitals and virtualized datasets with 10,000+ rows without compromising responsiveness.',
      'Developed automated test suites with Jest, React Testing Library, and Playwright, achieving 80%+ test coverage.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Blume Global',
    period: 'May 2021 \u2013 March 2024',
    badge: '3 Years',
    badgeColor: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-400',
    highlights: [
      'Designed and developed scalable React-based frontend architectures for enterprise shipment visibility and logistics platforms.',
      'Built reusable and maintainable UI components to improve development speed, consistency, and long-term scalability.',
      'Integrated frontend applications with backend services and improved API integration patterns to reduce UI defects and improve data reliability.',
      'Improved application performance through lazy loading, efficient state management, and code splitting.',
      'Worked closely with product and engineering teams to deliver high-quality features in Agile and Scrum environments.',
      'Contributed to debugging, performance tuning, and frontend maintainability across multiple business-critical modules.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Limited',
    period: 'June 2019 \u2013 May 2021',
    badge: '2 Years',
    badgeColor: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-400',
    highlights: [
      'Migrated legacy frontend applications to React.js, improving maintainability, scalability, and developer productivity.',
      'Collaborated with backend teams to integrate REST APIs and improve frontend data flow across applications.',
      'Supported UI modernization efforts and standardized frontend patterns across project modules.',
    ],
  },
];

const Experience = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`py-24 px-6 ${darkMode ? '' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            Career Journey
          </p>
          <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional{' '}
            <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className={`absolute left-5 top-6 bottom-6 w-px ${
              darkMode
                ? 'bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent'
                : 'bg-gradient-to-b from-violet-200 via-cyan-200 to-transparent'
            }`}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 top-5 w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} -translate-x-1/2 shadow-lg`}
                  style={{ boxShadow: '0 0 16px rgba(124,58,237,0.5)' }}
                />

                <motion.div
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    darkMode
                      ? 'glass hover:border-violet-500/30'
                      : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Period badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        darkMode ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span className={`text-xs font-semibold ${exp.badgeColor}`}>{exp.badge}</span>
                  </div>

                  {/* Role header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Briefcase size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.role}
                      </h3>
                      <p className={`font-semibold text-sm ${exp.accent}`}>{exp.company}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((point, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 flex-shrink-0 ${darkMode ? 'text-violet-400' : 'text-violet-500'}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
