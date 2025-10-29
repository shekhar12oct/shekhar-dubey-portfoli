import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`w-full shadow-md sticky top-0 z-50 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } transition-colors`}
    >
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Logo */}
        <Link
          to='/'
          className='text-2xl font-bold tracking-wide text-blue-600 dark:text-blue-400'
        >
          Shekhar Dubey
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6'>
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(
            (page) => (
              <NavLink
                key={page}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-medium hover:text-blue-500 ${
                    darkMode && !isActive && 'text-white'
                  } ${isActive && 'text-blue-600'}`
                }
              >
                {page}
              </NavLink>
            )
          )}
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform'
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col gap-3 p-4 border-t ${
            darkMode
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(
            (page) => (
              <NavLink
                key={page}
                onClick={() => setMenuOpen(false)}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                className={({ isActive }) =>
                  `block py-1 text-lg hover:text-blue-500 ${
                    darkMode && !isActive && 'text-white'
                  } ${isActive && 'text-blue-600'}`
                }
              >
                {page}
              </NavLink>
            )
          )}
          <button
            onClick={() => dispatch(toggleTheme())}
            className='flex items-center gap-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700'
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
