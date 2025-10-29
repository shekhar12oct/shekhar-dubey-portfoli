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
      className={`${
        darkMode && 'bg-gray-900'
      } min-h-screen flex flex-col transition-colors duration-300`}
    >
      <Navbar />
      <main className='flex-grow container mx-auto px-4'>
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
