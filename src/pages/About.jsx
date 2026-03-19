import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap } from 'lucide-react';
import { useSelector } from 'react-redux';
import profile from '../images/profile_pic.jpg';

const skills = [
  {
    category: 'Frontend',
    color: 'from-violet-500 to-purple-600',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Responsive UI'],
  },
  {
    category: 'State & Testing',
    color: 'from-cyan-500 to-blue-600',
    items: ['Redux', 'Context API', 'Jest', 'React Testing Library', 'Playwright', 'Unit Testing', 'Integration Testing', 'End-to-End Testing'],
  },
  {
    category: 'Architecture & Performance',
    color: 'from-emerald-500 to-teal-600',
    items: ['Micro Frontends', 'Module Federation', 'Scalable UI Architecture', 'Code Splitting', 'Lazy Loading', 'List Virtualization', 'Core Web Vitals'],
  },
  {
    category: 'Build, Platform & Practices',
    color: 'from-amber-500 to-orange-600',
    items: ['Webpack', 'Babel', 'Vite', 'NPM', 'Git', 'GitHub', 'REST APIs', 'Agile', 'Scrum', 'SDLC', 'Code Reviews', 'Debugging'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
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
            Who I Am
          </p>
          <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About{' '}
            <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>Me</span>
          </h2>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-12 p-8 rounded-3xl ${
            darkMode ? 'glass' : 'bg-white border border-gray-100 shadow-xl'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-36 h-36 rounded-2xl p-0.5 bg-gradient-to-br from-violet-500 to-cyan-500">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img src={profile} alt="Shekhar Dubey" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Shekhar Dubey
              </h3>
              <p className={`font-medium mb-5 ${darkMode ? 'text-violet-300' : 'text-violet-600'}`}>
                Senior Frontend Engineer &middot; React, JavaScript, UI Architecture &amp; Performance
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-sm">
                {[
                  { icon: Phone, text: '+91 73103 00648' },
                  { icon: Mail, text: 'dubeyshekhar1997@gmail.com' },
                  { icon: MapPin, text: 'Gurugram, India' },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className={`flex items-center gap-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Icon size={14} className={darkMode ? 'text-violet-400' : 'text-violet-500'} />
                    {text}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mb-6">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/in/shekhar-dubey-690547143', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/shekhar12oct', label: 'GitHub' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:scale-110 ${
                      darkMode
                        ? 'bg-white/5 text-gray-400 hover:text-violet-300 hover:bg-violet-500/10 border border-white/10'
                        : 'bg-gray-100 text-gray-500 hover:text-violet-600 hover:bg-violet-50'
                    }`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>

              <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Results-driven{' '}
                <strong className={darkMode ? 'text-white' : 'text-gray-900'}>
                  Senior Frontend Engineer
                </strong>{' '}
                with over{' '}
                <strong className={darkMode ? 'text-violet-300' : 'text-violet-600'}>
                  6 years of experience
                </strong>{' '}
                building scalable, high-performance web applications using React.js, JavaScript,
                Redux, and modern frontend architectures. Strong expertise in
                component-driven development, micro-frontend architecture, reusable UI systems,
                testing automation, REST API integration, Core Web Vitals optimization, and
                production-grade enterprise interfaces.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-12 flex items-center gap-4 p-6 rounded-2xl ${
            darkMode ? 'glass' : 'bg-white border border-gray-100 shadow-md'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={24} className="text-white" />
          </div>
          <div>
            <p className={`text-xs mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Education</p>
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              B.Tech &mdash; Madan Mohan Malaviya University of Technology, Gorakhpur
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical{' '}
            <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>Skills</span>
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map(({ category, items, color }) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'glass hover:border-violet-500/30'
                    : 'bg-white border border-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${color}`} />
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        darkMode
                          ? 'bg-white/5 text-gray-300 border border-white/10'
                          : 'bg-gray-50 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
