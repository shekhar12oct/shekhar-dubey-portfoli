import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import profile from '../images/profile_pic.jpg';

const About = () => {
  return (
    <section
      id='about'
      className='py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-colors'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <h2 className='text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100'>
          About <span className='text-blue-500'>Me</span>
        </h2>

        {/* Top Profile Section */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 mb-16'>
          {/* Profile Image */}
          <img
            src={profile}
            alt='Shekhar Dubey'
            className='w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg'
          />

          {/* Info */}
          <div>
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
              Shekhar Dubey
            </h3>
            <p className='text-blue-500 font-medium mb-2'>
              Senior Front-End Developer (React) | UI/UX & Performance
              Optimization
            </p>

            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-600 dark:text-gray-400 mb-4'>
              <p className='flex items-center gap-2'>
                <Phone size={16} className='text-blue-500' /> +91 7310300648
              </p>
              <p className='flex items-center gap-2'>
                <Mail size={16} className='text-blue-500' />{' '}
                dubeyshekhar1997@gmail.com
              </p>
              <p className='flex items-center gap-2'>
                <MapPin size={16} className='text-blue-500' /> Gurugram, India
              </p>
            </div>

            <div className='flex gap-6 mb-6'>
              <a
                href='https://linkedin.com/in/shekhar-dubey-690547143'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-500 transition-colors'
              >
                <Linkedin size={22} />
              </a>
              <a
                href='https://github.com/shekhar12oct'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-500 transition-colors'
              >
                <Github size={22} />
              </a>
            </div>

            {/* Summary */}
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              Results-driven <strong>Senior Front-End Developer</strong> with
              over <strong>6 years of experience</strong>
              delivering responsive, high-performance web applications using{' '}
              <strong>React.js</strong>,<strong> JavaScript (ES6+)</strong>, and
              modern UI frameworks. Skilled in transforming complex business
              requirements into intuitive, scalable interfaces. Expertise in{' '}
              <strong>UI/UX design</strong>,{' '}
              <strong>performance optimization</strong>, and
              <strong> reusable component architecture</strong>. Proven
              experience in <strong>logistics technology</strong>, improving
              shipment visibility, contract management, and route optimization.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all'>
            <h4 className='text-xl font-semibold mb-4 text-blue-500'>
              Frontend
            </h4>
            <p className='text-gray-700 dark:text-gray-300'>
              HTML5, CSS3, SASS, Bootstrap, Tailwind CSS, JavaScript (ES6+),
              React.js, Redux
            </p>
          </div>

          <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all'>
            <h4 className='text-xl font-semibold mb-4 text-blue-500'>
              Testing
            </h4>
            <p className='text-gray-700 dark:text-gray-300'>
              Jest, React Testing Library (RTL)
            </p>
          </div>

          <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all'>
            <h4 className='text-xl font-semibold mb-4 text-blue-500'>
              Build & Version Control
            </h4>
            <p className='text-gray-700 dark:text-gray-300'>
              Webpack, Babel, NPM, Git, GitHub
            </p>
          </div>

          <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all'>
            <h4 className='text-xl font-semibold mb-4 text-blue-500'>
              Methodologies
            </h4>
            <p className='text-gray-700 dark:text-gray-300'>
              Agile, Scrum, SDLC
            </p>
          </div>

          <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all'>
            <h4 className='text-xl font-semibold mb-4 text-blue-500'>Tools</h4>
            <p className='text-gray-700 dark:text-gray-300'>
              Figma, Chrome DevTools, Postman
            </p>
          </div>

          <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all'>
            <h4 className='text-xl font-semibold mb-4 text-blue-500'>
              Education
            </h4>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong>B.Tech</strong> — Madan Mohan Malaviya University of
              Technology, Gorakhpur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
