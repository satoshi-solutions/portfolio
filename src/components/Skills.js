import React from 'react';

const Skills = () => (
  <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 text-center opacity-90">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Skills Icons */}
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">JavaScript</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Next.js</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Vue.js</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Node.js</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Tailwind CSS</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">MongoDB</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">PostgreSQL</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Python</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Solidity</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Go</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">Rust</div>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">DevOps</div>
        {/* Repeat for other skills */}
      </div>
    </div>
  </section>
);

export default Skills;