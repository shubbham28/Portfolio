import React, { useEffect, useState } from 'react';
import skillsData from '../data/skills.json';

const colorMap = {
  Expert: 'bg-green-100 text-green-700 border-green-300 dark:bg-green-600/20 dark:text-green-300 dark:border-green-600/40',
  Intermediate: 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-600/20 dark:text-blue-300 dark:border-blue-600/40',
  Beginner: 'bg-neutral-200 text-neutral-800 border-neutral-300 dark:bg-neutral-600/20 dark:text-neutral-300 dark:border-neutral-600/40'
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section id="skills" className="container-section py-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 heading-gradient">Skills</h2>
        <div className="flex flex-wrap gap-3 mb-10 text-[11px] md:text-xs items-center justify-center text-neutral-500 dark:text-neutral-400">
          <span className={`px-2 py-0.5 rounded border ${colorMap.Expert}`}>Expert</span>
          <span className={`px-2 py-0.5 rounded border ${colorMap.Intermediate}`}>Intermediate</span>
          <span className={`px-2 py-0.5 rounded border ${colorMap.Beginner}`}>Beginner</span>
        </div>
        <div className="grid md:grid-cols-2 gap-10 justify-center">
          {skills.map(cat => (
            <div key={cat.category} className="glass rounded-xl p-5 text-left bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10">
              <h3 className="font-semibold tracking-wide text-sm text-neutral-700 dark:text-neutral-200 mb-4 uppercase text-center md:text-left">{cat.category}</h3>
              <div className="flex flex-wrap gap-2 justify-start">
                {cat.items.map(item => (
                  <span key={item.name} data-skill-level={item.level} className={`text-xs px-2.5 py-1 rounded-full border ${colorMap[item.level] || ''}`}>{item.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
