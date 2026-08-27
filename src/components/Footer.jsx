import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, ArrowUpRight, Download, ArrowRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import resume from '../files/resume.pdf';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/shekhar12oct?tab=repositories' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/shekhar-dubey-690547143' },
  { icon: Mail, label: 'dubeyshekhar1997@gmail.com', href: 'mailto:dubeyshekhar1997@gmail.com' },
];

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <footer
      className={`relative z-10 border-t ${
        darkMode ? 'border-white/10' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Prominent CTA banner */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 mb-14 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 shadow-2xl shadow-violet-500/25"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to new opportunities
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Let&apos;s build something great together
              </h3>
              <p className="text-white/80 max-w-md">
                Hiring a Senior Frontend Engineer? I&apos;d love to hear about your team and what you&apos;re building.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-violet-700 bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm">
                SD
              </div>
              <span
                className={`font-bold text-lg ${
                  darkMode ? 'gradient-text' : 'gradient-text-light'
                }`}
              >
                Shekhar Dubey
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              Senior Front-End Developer specializing in React.js and modern,
              high-performance web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm transition-colors ${
                    darkMode
                      ? 'text-gray-500 hover:text-violet-400'
                      : 'text-gray-500 hover:text-violet-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-2 text-sm transition-colors ${
                    darkMode
                      ? 'text-gray-500 hover:text-violet-400'
                      : 'text-gray-500 hover:text-violet-600'
                  }`}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-sm ${
            darkMode ? 'border-white/10 text-gray-600' : 'border-gray-100 text-gray-400'
          }`}
        >
          <p>
            Made with{' '}
            <Heart size={13} className="inline text-red-400 mx-0.5" />{' '}by{' '}
            <span className={darkMode ? 'text-violet-400' : 'text-violet-600'}>
              Shekhar Dubey
            </span>
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;