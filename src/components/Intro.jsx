import React from 'react';

const Intro = () => {
  const avatarSrc = '/avatar.png'; // transparent PNG/WebP/GIF
  return (
    <section id="introduction" className="min-h-[90vh] flex flex-col justify-center container-section pt-24">
      <div className="flex flex-col items-center text-center">
        {/* Gradient ring + inner circle */}
        <div className="mb-8">
          <div className="p-[4px] rounded-full bg-gradient-to-tr from-brand-400 to-violet-500 shadow-[0_0_50px_-12px_rgba(21,159,255,0.65)]">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-neutral-950 border border-white/10 overflow-hidden">
              <img
                src={avatarSrc}
                alt="Avatar"
                className="w-full h-full object-contain"
                onError={(e)=>{e.currentTarget.src='/avatar.png'}}
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
          <span className="heading-gradient">Data Scientist</span> that builds AI agents turning ideas into reality
        </h1>
        <p className="mt-6 text-neutral-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Passionate about machine learning, AI agent development, experimentation platforms, and delivering production impact across data-intensive systems.
        </p>
        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/shubbham28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shubbhamgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
