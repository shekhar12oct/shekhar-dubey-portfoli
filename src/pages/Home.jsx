import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profile from '../images/profile_pic.jpg';
import resume from '../files/resume.pdf';

const Home = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 px-4 md:px-8'>
      {/* Left Section */}
      <div className='text-center md:text-left md:w-1/2 space-y-6'>
        <h1 className='text-4xl md:text-6xl font-extrabold'>
          Hi, I’m <span className='text-blue-500'>Shekhar Dubey</span>
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300'>
          Senior Front-End Developer
        </h2>
        <p className='text-gray-700 dark:text-gray-400 leading-relaxed'>
          I specialize in crafting modern, scalable, and visually stunning web
          applications using
          <span className='font-semibold text-blue-500'>
            {' '}
            React, JavaScript, Redux,
          </span>{' '}
          and the latest front-end technologies.
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all'
          >
            Download Resume
          </a>
          <a
            href='/contact'
            className='px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all'
          >
            Contact Me <ArrowRight size={18} />
          </a>
        </div>

        {/* Social Links */}
        <div className='flex justify-center md:justify-start gap-6 pt-4'>
          <a
            href='https://github.com/shekhar12oct?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-500 transition-colors'
          >
            <Github size={24} />
          </a>
          <a
            href='https://linkedin.com/in/shekhar-dubey-690547143'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-500 transition-colors'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='mailto:dubeyshekhar1997@gmail.com'
            className='hover:text-blue-500 transition-colors'
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className='md:w-1/2 flex justify-center mb-10 md:mb-0'>
        <img
          src={profile}
          alt='Shekhar Dubey'
          className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-500'
        />
      </div>
    </section>
  );
};

export default Home;
