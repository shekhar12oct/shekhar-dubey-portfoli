import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? 'glass shadow-lg shadow-violet-900/20'
            : 'glass-light shadow-lg shadow-gray-200/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform">
            SD
          </div>
          <span className={`text-xl font-bold tracking-tight ${darkMode ? 'gradient-text' : 'gradient-text-light'}`}>
            Shekhar Dubey
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? darkMode ? 'text-violet-300 bg-violet-500/10' : 'text-violet-700 bg-violet-50'
                    : darkMode ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`ml-2 p-2.5 rounded-xl transition-all duration-300 ${
              darkMode
                ? 'bg-white/5 text-amber-400 hover:bg-amber-400/10 border border-white/10'
                : 'bg-gray-100 text-slate-600 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            darkMode ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden mx-4 mb-4 rounded-2xl overflow-hidden border ${
            darkMode ? 'glass border-white/10' : 'glass-light border-gray-200'
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? darkMode ? 'text-violet-300 bg-violet-500/10' : 'text-violet-700 bg-violet-50'
                      : darkMode ? 'text-gray-400 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`w-full mt-1 flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                darkMode ? 'bg-white/5 text-amber-400 border border-white/10' : 'bg-gray-100 text-slate-600'
              }`}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
