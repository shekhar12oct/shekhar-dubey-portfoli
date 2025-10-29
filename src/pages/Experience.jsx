import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'WiseTech Global',
    period: 'April 2024 - Present',
    highlights: [
      'Developed rating and routing UI for Ocean and Motor carriers, improving operational efficiency by 30%.',
      'Managed contract workflows for carriers and shippers, streamlining rate management and optimizing shipment routes.',
      'Implemented micro front-end architecture, enhancing modularity and deployment flexibility.',
      'Built automated testing frameworks using Jest and RTL, increasing test coverage by 45%.',
      'Collaborated with cross-functional teams to improve shipment visibility and reduce manual errors.',
      'Optimized large-scale data rendering using React performance patterns like memoization and virtualization.',
      'Contributed to CI/CD pipelines, ensuring smooth and consistent deployments across environments.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Blume Global',
    period: '2021 - 2024',
    highlights: [
      'Designed and deployed scalable React architectures, reducing page load times by 40%.',
      'Built reusable components and optimized API integrations, improving shipment visibility by 99%.',
      'Enhanced UI/UX for logistics tools, reducing user errors by 20% and increasing adoption.',
      'Mentored junior developers on React best practices and testing strategies.',
      'Worked closely with backend teams to define efficient API contracts and reduce data redundancy.',
      'Improved accessibility and SEO metrics across logistics dashboards using semantic HTML and ARIA standards.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Limited',
    period: '2019 - 2021',
    highlights: [
      'Migrated legacy front-end applications to React.js, improving maintainability and user experience.',
      'Built automated monitoring tools, reducing manual workflow tracking by 40%.',
      'Led UI optimizations, reducing load times by 25% through lazy loading and asset management.',
      'Collaborated with QA and product teams to deliver consistent and reliable user interfaces.',
      'Developed reusable hooks and utilities to standardize application state management.',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-colors'
    >
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100'>
          Professional <span className='text-blue-500'>Experience</span>
        </h2>

        <div className='space-y-10'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all'
            >
              <div className='flex items-center gap-3 mb-4'>
                <Briefcase className='text-blue-500' size={24} />
                <div>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                    {exp.role}
                  </h3>
                  <p className='text-blue-500 font-medium'>{exp.company}</p>
                  <p className='text-gray-500 dark:text-gray-400 text-sm'>
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300'>
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
