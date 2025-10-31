import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Rate and Route Optimization Dashboard',
    tech: 'React, Kendo UI, Tailwind CSS',
    description:
      'Built an interactive dashboard for comparing rates across carriers. Integrated data visualizations to help logistics teams identify optimal shipping routes.',
    link: 'https://rate-lookup-dashboard.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    tech: 'React, Tailwind CSS, React Router',
    description:
      'Created a responsive and performant portfolio site showcasing experience, projects, and contact details — optimized for accessibility and modern UX.',
    link: 'https://shekhar-dubey-portfoli.vercel.app/',
  },
  {
    title: 'Admin Dashboard (ReactJS)',
    tech: 'React, Tailwind CSS, Redux Toolkit',
    description:
      'Developed a full-featured admin dashboard with React and Tailwind CSS. Included reusable components, dark mode, state management with Redux Toolkit, and optimized UI performance for enterprise usage.',
    link: 'https://admin-dashboard-reactjs-kappa.vercel.app/',
  },
  {
    title: 'Full-Stack E-Commerce Web App',
    tech: 'React, Node.js, Express, MongoDB, Tailwind CSS',
    description:
      'A complete e-commerce platform with product listings, authentication, cart management, and REST APIs. Built using MERN stack and deployed with Vercel (frontend) and Render (backend).',
    link: 'https://ecommerce-app-beta-fawn.vercel.app/', // 🔹 Replace with your actual frontend link
    backend: 'https://ecommerce-app-w2ql.onrender.com/api/products', // 🔹 Optional backend API link
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white'>
          <span className='text-blue-600 dark:text-blue-400'>Featured</span>{' '}
          Projects
        </h2>

        <div className='grid md:grid-cols-2 gap-10'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
            >
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-900 dark:text-white'>
                  {project.title}
                </h3>
                <p className='text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium'>
                  {project.tech}
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-5'>
                  {project.description}
                </p>

                <div className='flex flex-col gap-2'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline'
                  >
                    View Frontend <ExternalLink size={16} />
                  </a>

                  {project.backend && (
                    <a
                      href={project.backend}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline'
                    >
                      View Backend API <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
