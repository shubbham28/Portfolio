import React, { useEffect, useState, useCallback } from 'react'
import publicationsData from '../data/publications.json'

const Modal = ({ open, onClose, children }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-lg bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
        <button aria-label="Close" onClick={onClose} className="absolute top-2 right-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="text-xl">×</span>
        </button>
        <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

const Publications = () => {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const items = publicationsData

  const clampIndex = useCallback((i) => {
    if (i < 0) return items.length - 1
    if (i >= items.length) return 0
    return i
  }, [items.length])

  const openModal = (i) => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => setIndex((i) => clampIndex(i + 1))
  const prev = () => setIndex((i) => clampIndex(i - 1))

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, next, prev])

  const current = items[index]

  return (
    <div className="container-section py-32" id="publications">
      <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Publications</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <button
            key={p.id}
            onClick={() => openModal(i)}
            className="group text-left rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:shadow-md transition relative overflow-hidden"
            aria-label={`Open publication ${p.title}`}
          >
            <div className="font-semibold mb-1 line-clamp-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">{p.title}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <span>{p.venue}</span>
              <span>•</span>
              <span>{p.year}</span>
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
                <p className="text-sm text-gray-500 dark:text-gray-400">{current.authors.join(', ')} · {current.venue} ({current.year})</p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-justify">{current.abstract}</p>
            <div className="text-xs p-3 rounded bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4">
              <div className="font-semibold mb-1">Citation</div>
              <code className="whitespace-pre-wrap break-words text-[11px]">{current.citation}</code>
            </div>
            <div className="flex items-center justify-between">
              <button onClick={prev} className="px-3 py-2 text-sm rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Previous publication">← Prev</button>
              {current.link && <a href={current.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Open Link</a>}
              <button onClick={next} className="px-3 py-2 text-sm rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Next publication">Next →</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Publications
