import React from 'react'

const items = [
  { title: 'Finances & Stocks', text: 'Analyzing chaotic markets to extract patterns and data-driven insights.' },
//   { title: 'Healthcare', text: 'Curious about data-driven innovation in health and wellness tech.' },
  { title: 'Running', text: 'Half-marathons, a full marathon done, aiming for an ultra soon.' },
  { title: 'Cycling', text: 'Long-distance endurance rides like 50k, 100k, even 200k challenges.' },
  { title: 'Badminton', text: 'Active in a local club, competing in leagues and honing reflexes.' },
  { title: 'Hiking', text: 'Weekly nature treks whenever the Irish weather cooperates.' },
]

const Personal = () => {
  return (
    <section id="personal" className="container-section py-32">
      <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Personal</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
