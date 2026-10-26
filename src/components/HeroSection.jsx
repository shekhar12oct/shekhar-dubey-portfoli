import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Code2, Calendar, Building2, Rows3, ShieldCheck, GitBranch, CheckCircle2, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import resume from '../files/resume.pdf';

const codeLines = [
  [{ t: 'const ', c: 'kw' }, { t: 'engineer', c: 'var' }, { t: ': ', c: 'punc' }, { t: 'Developer', c: 'type' }, { t: ' = {', c: 'punc' }],
  [{ t: '  name', c: 'prop' }, { t: ': ', c: 'punc' }, { t: "'Shekhar Dubey'", c: 'str' }, { t: ',', c: 'punc' }],
  [{ t: '  role', c: 'prop' }, { t: ': ', c: 'punc' }, { t: "'Frontend Engineering Lead'", c: 'str' }, { t: ',', c: 'punc' }],
  [{ t: '  growingInto', c: 'prop' }, { t: ': ', c: 'punc' }, { t: "'Product & AI-Native Engineering'", c: 'str' }, { t: ',', c: 'punc' }],
  [{ t: '  stack', c: 'prop' }, { t: ': [', c: 'punc' }, { t: "'React'", c: 'str' }, { t: ', ', c: 'punc' }, { t: "'Next.js'", c: 'str' }, { t: ', ', c: 'punc' }, { t: "'TypeScript'", c: 'str' }, { t: '],', c: 'punc' }],
  [{ t: '  experience', c: 'prop' }, { t: ': ', c: 'punc' }, { t: "'7+ years'", c: 'str' }, { t: ',', c: 'punc' }],
  [{ t: '  exploringNext', c: 'prop' }, { t: ': [', c: 'punc' }, { t: "'RAG'", c: 'str' }, { t: ', ', c: 'punc' }, { t: "'LLM Systems'", c: 'str' }, { t: '],', c: 'punc' }],
  [{ t: '  status', c: 'prop' }, { t: ': ', c: 'punc' }, { t: "'available_for_hire'", c: 'str' }, { t: ',', c: 'punc' }],
  [{ t: '};', c: 'punc' }],
  [],
  [{ t: 'export default ', c: 'kw' }, { t: 'engineer', c: 'var' }, { t: ';', c: 'punc' }],
];

const tokenColorsDark = {
  kw: 'text-fuchsia-400',
  var: 'text-cyan-300',
  type: 'text-amber-300',
  prop: 'text-violet-300',
  str: 'text-emerald-400',
  punc: 'text-gray-500',
};

const tokenColorsLight = {
  kw: 'text-fuchsia-600',
  var: 'text-cyan-700',
  type: 'text-amber-600',
  prop: 'text-violet-600',
  str: 'text-emerald-600',
  punc: 'text-gray-400',
};

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
  {
    value: '7+',
    label: 'Years Experience',
    detail: 'Frontend → Product & AI',
    icon: Calendar,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(124,58,237,0.25)',
  },
  {
    value: '4',
    label: 'Companies',
    detail: 'Startups to enterprise',
    icon: Building2,
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.25)',
  },
  {
    value: '40%',
    label: 'Load Time Reduced',
    detail: 'Code splitting & virtualization',
    icon: Zap,
    gradient: 'from-rose-500 to-pink-600',
    glow: 'rgba(244,63,94,0.25)',
  },
  {
    value: '10k+',
    label: 'Rows Virtualized',
    detail: 'Without UI jank',
    icon: Rows3,
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    value: '80%+',
    label: 'Test Coverage',
    detail: 'Jest, RTL & Playwright',
    icon: ShieldCheck,
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    value: '3',
    label: 'Engineers Led',
    detail: 'Reviews, standards & roadmap',
    icon: Users,
    gradient: 'from-indigo-500 to-violet-600',
    glow: 'rgba(99,102,241,0.25)',
  },
];

const CountUp = ({ value, duration = 1.4 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(value.replace(/[\d.]+/, '0'));

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isInt = Number.isInteger(target);
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(`${isInt ? Math.round(current) : current.toFixed(1)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
};

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Redux Toolkit',
  'TanStack Query', 'Tailwind CSS', 'Module Federation', 'Jest', 'Playwright',
  'Storybook', 'GitHub Actions', 'Webpack', 'Vite', 'AI-Native SDLC', 'Product Engineering',
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
                Frontend Engineering Lead &middot; Growing into Product &amp; AI-Native Engineering
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
                React &amp; Next.js
              </span>
              ,{' '}
              <span
                className={`font-semibold ${
                  darkMode ? 'text-cyan-300' : 'text-cyan-600'
                }`}
              >
                TypeScript
              </span>
              , and performance-first UI architecture. 7+ years building scalable,
              enterprise-grade interfaces &mdash; now extending that frontend foundation into
              product and AI-native engineering, piloting AI-assisted workflows across the SDLC,
              with a growing interest in exploring deeper AI/ML systems such as RAG and LLM-powered
              applications down the line.
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
                      ? 'bg-white/10 text-gray-300 hover:text-violet-300 hover:bg-violet-500/15 border border-white/15 hover:border-violet-500/40'
                      : 'bg-white text-gray-500 hover:text-violet-600 hover:bg-violet-50 border border-gray-200 hover:border-violet-200 shadow-sm'
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Code editor mockup ── */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] md:max-w-[480px]">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-2xl opacity-25 scale-105 animate-pulse" />

              {/* Editor window */}
              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/20 ${
                  darkMode ? 'glass border border-white/15' : 'bg-white border border-gray-200'
                }`}
              >
                {/* Title bar */}
                <div
                  className={`flex items-center justify-between px-4 py-3 border-b ${
                    darkMode ? 'border-white/10' : 'border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Code2 size={13} className={darkMode ? 'text-violet-400' : 'text-violet-500'} />
                      portfolio.tsx
                    </span>
                  </div>
                </div>

                {/* Code body */}
                <div className="flex px-2 py-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
                  <div className={`select-none pr-4 text-right ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                    {codeLines.map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <div className="flex-1">
                    {codeLines.map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        {line.length === 0 ? (
                          ' '
                        ) : (
                          line.map((tok, j) => (
                            <span key={j} className={darkMode ? tokenColorsDark[tok.c] : tokenColorsLight[tok.c]}>
                              {tok.t}
                            </span>
                          ))
                        )}
                        {i === codeLines.length - 1 && (
                          <motion.span
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                            className={`inline-block w-[7px] h-[14px] ml-0.5 align-middle ${darkMode ? 'bg-cyan-400' : 'bg-violet-500'}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status bar */}
                <div
                  className={`flex items-center justify-between px-4 py-2 border-t text-[11px] ${
                    darkMode ? 'border-white/10 text-gray-500' : 'border-gray-100 text-gray-400'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <GitBranch size={12} />
                    main
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 size={12} />
                    No problems
                  </span>
                </div>
              </div>

              {/* Floating badge — experience */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -bottom-6 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl ${
                  darkMode
                    ? 'glass border border-white/15'
                    : 'bg-white border border-gray-100 shadow-lg'
                }`}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-base">
                  7+
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
                className={`absolute -top-6 -right-6 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl ${
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
                    React + Next.js
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
          className="mt-20"
        >
          <p
            className={`text-center text-xs font-semibold uppercase tracking-widest mb-6 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            By the numbers
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map(({ value, label, detail, icon: Icon, gradient, glow }) => (
              <div key={label} className="group relative">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: glow }}
                />
                <div
                  className={`relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group-hover:-translate-y-1 ${
                    darkMode
                      ? 'glass group-hover:border-white/20'
                      : 'bg-white border border-gray-100 shadow-md group-hover:shadow-xl'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p
                      className={`text-2xl md:text-3xl font-black leading-tight ${
                        darkMode ? 'gradient-text' : 'gradient-text-light'
                      }`}
                    >
                      <CountUp value={value} />
                    </p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {label}
                    </p>
                    <p className={`text-xs truncate ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative mt-16"
        >
          <p
            className={`text-center text-xs font-semibold uppercase tracking-widest mb-6 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            Technologies &amp; practices I work with
          </p>
          <div
            className="pause-on-hover relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            }}
          >
            <div className="flex w-max gap-4 animate-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium ${
                    darkMode
                      ? 'bg-white/5 text-gray-300 border border-white/10'
                      : 'bg-white text-gray-600 border border-gray-200 shadow-sm'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;