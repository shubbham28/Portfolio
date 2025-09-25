import React from 'react'

const items = [
  { title: 'Coffee Metric', text: 'Avg 2.3 cups powering focused deep work sessions.' },
  { title: 'Keyboard', text: 'Firm believer in mechanical tactile switches for flow.' },
  { title: 'Reading Stack', text: 'Systems design, cognitive science, and sci‑fi rotation.' },
  { title: 'Music Loop', text: 'Lo-fi + orchestral hybrid playlists for coding.' },
]

const Personal = () => {
  return (
    <section id="personal" className="container-section py-32">
      <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Personal</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(i => (
          <div key={i.title} className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-5 shadow-subtle hover:shadow transition">
            <h3 className="font-semibold mb-2 text-sm tracking-wide text-brand-600 dark:text-brand-400">{i.title}</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Personal
