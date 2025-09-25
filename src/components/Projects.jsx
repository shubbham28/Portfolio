import React, { useState, useCallback } from 'react'
import projectsData from '../data/projects.json'

const Modal = ({ open, onClose, children }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl rounded-lg bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
        <button aria-label="Close" onClick={onClose} className="absolute top-2 right-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="text-xl">×</span>
        </button>
        <div className="p-6 max-h-[75vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

const Projects = () => {
  const normalized = projectsData.map(p => ({
    ...p,
    linkedin: p.linkedin || p.LinkedIn || null,
  }))
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const items = normalized

  const clampIndex = useCallback((i) => {
    if (i < 0) return items.length - 1
    if (i >= items.length) return 0
    return i
  }, [items.length])

  const openModal = (i) => {
    setIndex(i)
    setOpen(true)
  }
  const next = () => setIndex(i => clampIndex(i + 1))
  const prev = () => setIndex(i => clampIndex(i - 1))

  const current = items[index]

  return (
    <div className="container-section py-32" id="projects">
      <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <button
            key={p.id || p.title + i}
            onClick={() => openModal(i)}
            className="group text-left rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:shadow-md transition relative overflow-hidden"
            aria-label={`Open project ${p.title}`}
          >
            <div className="font-semibold mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">{p.title}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-2">{p.description}</p>
            <div className="flex flex-wrap gap-1">
              {p.tech && p.tech.map(t => (
                <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">{t}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {current && (
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{current.title}</h3>
                {/* Removed top Repository link as requested */}
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed">{current.details || current.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {current.tech && current.tech.map(t => (
                <span key={t} className="text-[11px] px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button onClick={prev} className="px-3 py-2 text-sm rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Previous project">← Prev</button>
              <div className="flex items-center gap-4">
                {current.linkedin && <a href={current.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Open LinkedIn</a>}
                {current.repo && <a href={current.repo} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Open Repo</a>}
              </div>
              <button onClick={next} className="px-3 py-2 text-sm rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Next project">Next →</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Projects
