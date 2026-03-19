import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import { useSelector } from 'react-redux';

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