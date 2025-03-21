import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the path if needed

const Projects = () => {
  const projects = [
    {
      title: 'Scale in',
      description: 'Well-structured Project with React.js and Tailwind css',
      image: '/images/project1.png', // Replace with your image path
      url: 'https://scale-in.com/', // Replace with your project URL
    },
    // {
    //   title: 'Project Title 2',
    //   description: 'Another project with a different tech stack, solving a unique problem.',
    //   image: '/images/project2.png', // Replace with your image path
    //   url: 'https://example.com/project2', // Replace with your project URL
    // },
    // {
    //   title: 'Project Title 3',
    //   description: 'A third project showcasing my skills in a specific area.',
    //   image: '/images/project3.png', // Replace with your image path
    //   url: 'https://example.com/project3', // Replace with your project URL
    // },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 opacity-80">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;