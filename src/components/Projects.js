import React from 'react';

const Projects = () => (
  <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 opacity-90">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project Card */}
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <h3 className="text-xl font-semibold text-white mb-4">Project Title</h3>
          <p className="text-white mb-4">A brief description of the project, the tech stack used, and the problem it solves.</p>
          <a href="#" className="text-blue-600 hover:underline">View Project</a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </div>
  </section>
);

export default Projects;