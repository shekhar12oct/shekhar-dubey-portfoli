import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import profile from '../images/profile_pic.jpg';
import resume from '../files/resume.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const socials = [
  { icon: Github, href: 'https://github.com/shekhar12oct?tab=repositories', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shekhar-dubey-690547143', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dubeyshekhar1997@gmail.com', label: 'Email' },
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '10k+', label: 'Rows Virtualized' },
  { value: '80%+', label: 'Test Coverage' },
];

const HeroSection = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${
        !darkMode ? 'bg-gradient-to-b from-slate-50 to-white' : ''
      }`}
    >
      {/* Light mode decorative background */}
      {!darkMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, #ede9fe, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #cffafe, transparent)' }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* ── Left content ── */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                    : 'bg-violet-50 text-violet-700 border border-violet-200'
                }`}
              >
                <Code2 size={14} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p
                className={`text-lg font-medium ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Hi there, I&apos;m
              </p>
              <h1
                className={`text-5xl md:text-7xl font-black leading-tight ${
                  darkMode ? 'gradient-text' : 'gradient-text-light'
                }`}
              >
                Shekhar
                <br />
                Dubey
              </h1>
            </motion.div>

            {/* Role pill */}
            <motion.div variants={itemVariants}>
              <div
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-base font-semibold ${
                  darkMode
                    ? 'bg-white/5 text-gray-200 border border-white/10'
                    : 'bg-white text-gray-700 border border-gray-200 shadow-sm'
                }`}
              >
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                Senior Frontend Engineer
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Crafting modern, high-performance web applications with{' '}
              <span
                className={`font-semibold ${
                  darkMode ? 'text-violet-300' : 'text-violet-600'
                }`}
              >
                React
              </span>
              ,{' '}
              <span
                className={`font-semibold ${
                  darkMode ? 'text-cyan-300' : 'text-cyan-600'
                }`}
              >
                TypeScript
              </span>
              , Redux, and performance-first UI architecture. 6+ years building scalable,
              enterprise-grade interfaces with code splitting, Core Web Vitals optimization,
              testing automation, and modern frontend architecture.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <Link
                to="/contact"
                className={`group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  darkMode
                    ? 'bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/25'
                    : 'bg-white text-gray-800 border border-gray-200 hover:border-violet-300 shadow-sm hover:shadow-md'
                }`}
              >
                Contact Me
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-white/5 text-gray-400 hover:text-violet-300 hover:bg-violet-500/10 border border-white/10 hover:border-violet-500/30'
                      : 'bg-white text-gray-500 hover:text-violet-600 hover:bg-violet-50 border border-gray-200 hover:border-violet-200 shadow-sm'
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile image ── */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 blur-2xl opacity-25 scale-110 animate-pulse" />

              {/* Gradient border ring */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 shadow-2xl shadow-violet-500/30 animate-pulse-glow">
                <div
                  className={`w-full h-full rounded-full overflow-hidden border-4 ${
                    darkMode ? 'border-slate-950' : 'border-white'
                  }`}
                >
                  <img
                    src={profile}
                    alt="Shekhar Dubey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge — experience */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -bottom-5 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl ${
                  darkMode
                    ? 'glass border border-white/15'
                    : 'bg-white border border-gray-100 shadow-lg'
                }`}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-base">
                  6+
                </div>
                <div>
                  <p
                    className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Years of
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Experience
                  </p>
                </div>
              </motion.div>

              {/* Floating badge — React */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-5 -right-6 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl ${
                  darkMode
                    ? 'glass border border-white/15'
                    : 'bg-white border border-gray-100 shadow-lg'
                }`}
              >
                <span className="text-cyan-400 text-2xl leading-none">⚛</span>
                <div>
                  <p
                    className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Specialized in
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    React + TS
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className={`mt-20 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-8 ${
            darkMode ? 'border-white/10' : 'border-gray-200'
          }`}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className={`text-3xl md:text-4xl font-black ${
                  darkMode ? 'gradient-text' : 'gradient-text-light'
                }`}
              >
                {value}
              </p>
              <p
                className={`mt-1 text-sm ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;