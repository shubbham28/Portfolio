import React, { useEffect, useRef, useState } from 'react'

const EducationTimeline = ({ items = [] }) => {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState(new Set())
  const [expanded, setExpanded] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('data-id')
              setVisible(v => new Set(v).add(id))
              observer.unobserve(entry.target)
            }
        })
      },
      { threshold: 0.2 }
    )
    const nodes = containerRef.current?.querySelectorAll('[data-id]')
    nodes?.forEach(n => observer.observe(n))
    return () => observer.disconnect()
  }, [items])

  const toggle = (id) => {
    setExpanded(e => {
      const next = new Set(e)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Center line matches Experience */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/60 via-neutral-700 to-transparent -translate-x-1/2" aria-hidden="true" />
      <ul className="space-y-12">
        {items.map((edu, idx) => {
          const isLeft = idx % 2 === 0
          const isVisible = visible.has(edu.id)
          const isOpen = expanded.has(edu.id)
          return (
            <li
              key={edu.id}
              data-id={edu.id}
              className={`relative md:grid md:grid-cols-2 md:items-start transition-opacity duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {/* Content wrapper, mirrors Experience */}
              <div className={`${isLeft ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'} transition-all duration-700`}>
                <div className={`group inline-block max-w-xl text-left md:text-${isLeft ? 'right' : 'left'}`}>
                  <button
                    onClick={() => toggle(edu.id)}
                    aria-expanded={isOpen}
                    aria-controls={`edu-${edu.id}`}
                    type="button"
                    className={`w-full flex ${isLeft ? 'md:flex-row-reverse' : ''} items-start gap-4 md:gap-3 focus:outline-none`}
                  >
                    {/* Timeline node */}
                    <div className="relative shrink-0 h-4 w-4 mt-1 rounded-full bg-brand-400 shadow-[0_0_0_4px_rgba(21,159,255,0.25)] hidden md:block" />
                    <div>
                      <h3 className="font-semibold text-lg leading-snug text-neutral-800 dark:text-neutral-100">{edu.degree}</h3>
                      <div className="text-sm font-medium text-brand-600 dark:text-brand-400 mt-1">
                        {edu.institution}
                        <span className="text-neutral-500 dark:text-neutral-500"> · {edu.location}</span>
                      </div>
                      <div className="text-neutral-500 dark:text-neutral-500 text-sm mt-1">{edu.period}</div>
                    </div>
                    <span
                      className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs text-neutral-300 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      aria-hidden
                    >›</span>
                  </button>
                  <div
                    id={`edu-${edu.id}`}
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${isOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <ul className={`mt-4 list-disc ${isLeft ? 'md:pr-1 md:pl-8' : 'md:pl-1 md:pr-8'} ml-6 space-y-1.5 text-[13px] text-neutral-700 dark:text-neutral-300`}>
                      {edu.description.map((d,i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EducationTimeline
