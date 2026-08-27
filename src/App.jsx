import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Animated background orbs — dark mode only */}
      {darkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
          />
          <div
            className="absolute top-1/2 -left-48 w-[550px] h-[550px] rounded-full blur-3xl opacity-25 animate-float"
            style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
          />
          <div
            className="absolute -bottom-48 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-float-delayed"
            style={{ background: 'radial-gradient(circle, #d946ef, transparent)' }}
          />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139,92,246,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.09) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
            }}
          />
        </div>
      )}

      <Navbar />
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
