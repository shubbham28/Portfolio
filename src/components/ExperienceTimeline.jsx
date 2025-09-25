import React, { useEffect, useRef, useState } from 'react';

/* Props: experiences: [{ id, company, role, period, description (array of bullet strings) }] */
const ExperienceTimeline = ({ experiences = [] }) => {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/60 via-neutral-700 to-transparent -translate-x-1/2" aria-hidden />
      <ul className="space-y-14 md:space-y-20">
        {experiences.map((exp, idx) => (
          <TimelineItem key={exp.id || idx} exp={exp} index={idx} />
        ))}
      </ul>
    </div>
  );
};

const TimelineItem = ({ exp, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false); // start collapsed

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            // no auto expand
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={`relative md:grid md:grid-cols-2 md:items-start`}
    >
      {/* Content wrapper */}
      <div className={`${isLeft ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className={`group inline-block max-w-xl text-left md:text-${isLeft ? 'right' : 'left'}`}>          
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            className={`w-full flex ${isLeft ? 'md:flex-row-reverse' : ''} items-start gap-4 md:gap-3 focus:outline-none`}
            aria-expanded={expanded}
            aria-controls={`details-${exp.id}`}
          >
            <div className={`relative shrink-0 h-4 w-4 mt-1 rounded-full bg-brand-400 shadow-[0_0_0_4px_rgba(21,159,255,0.25)] after:content-[''] hidden md:block`} />
            <div>
              <h3 className="font-semibold text-lg leading-snug text-neutral-800 dark:text-neutral-100">
                {exp.role}
              </h3>
              <div className="text-sm font-medium text-brand-600 dark:text-brand-400 mt-1">
                {exp.company}
                <span className="text-neutral-500 dark:text-neutral-500"> · {exp.period}</span>
              </div>
            </div>
            <span
              className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs text-neutral-300 transition-transform ${expanded ? 'rotate-90' : ''}`}
              aria-hidden
            >›</span>
          </button>
          <div
            id={`details-${exp.id}`}
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${expanded ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <ul className={`mt-4 list-disc ${isLeft ? 'md:pr-1 md:pl-8' : 'md:pl-1 md:pr-8'} ml-6 space-y-1.5 text-[13px] text-neutral-700 dark:text-neutral-300`}>              
              {exp.description.map((d,i)=>(
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExperienceTimeline;
