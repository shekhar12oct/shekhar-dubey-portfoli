import React from 'react';

const projects = [
  {
    title: 'Carrier Contract Management System',
    tech: 'React, Redux, Jest, REST APIs',
    description:
      'Developed a UI module to manage carrier and shipper contracts with rate versioning and approval workflows. Improved rate lookup performance by caching results and optimizing API handling, leading to faster and more reliable contract management.',
  },
  {
    title: 'Rate and Route Optimization Dashboard',
    tech: 'React, Kendo UI, Tailwind CSS',
    description:
      'Built a dynamic dashboard for comparing rates across ocean and motor carriers. Integrated API-driven data visualizations to help logistics teams identify optimal shipping routes, improving route planning efficiency.',
  },
  {
    title: 'Shipment Visibility Platform',
    tech: 'React, Context API, WebSockets',
    description:
      'Implemented a real-time shipment tracking interface that displayed live updates across logistics partners. Designed modular UI components to streamline visibility workflows and reduce tracking delays.',
  },
  {
    title: 'Personal Portfolio Website',
    tech: 'React, Tailwind CSS, React Router',
    description:
      'Developed a fully responsive portfolio website to showcase experience, skills, and contact details. Focused on clean design, performance optimization, and accessibility.',
  },
];

const Projects = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold mb-12 text-gray-800 dark:text-white'>
          Projects
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all text-left'
            >
              <h3 className='text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2'>
                {project.title}
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                {project.tech}
              </p>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
