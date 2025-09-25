import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const form = e.target

    // Honeypot: if filled, treat as spam and exit silently
    if (form['bot-field']?.value) {
      setStatus('success')
      form.reset()
      return
    }

    try {
      const data = new FormData(form)
      // Ensure Netlify knows which form this is
      if (!data.get('form-name')) data.append('form-name', 'contact')
      const encoded = new URLSearchParams(data).toString()

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        console.error('Netlify form submission failed', await res.text())
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container-section py-32">
      <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Contact</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:shubbham.gupta28@gmail.com">Email</a></li>
              <li><a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://github.com/shubbham28" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://linkedin.com/in/shubbhamgupta" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <p>I aim to respond within 2–3 business days. For urgent collaboration inquiries, include [URGENT] in the subject line.</p>
          </div>
        </div>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-recaptcha="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-live="polite"
        >
          {/* Honeypot field */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" type="text" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="name">Name *</label>
              <input required name="name" id="name" type="text" className="w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="email">Email *</label>
              <input required name="email" id="email" type="email" className="w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="subject">Subject *</label>
            <input required name="subject" id="subject" type="text" className="w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="message">Message *</label>
            <textarea required name="message" id="message" rows="5" className="w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
          </div>

          {/* Netlify reCAPTCHA widget */}
          <div data-netlify-recaptcha="true" className="my-2" />

          <div className="flex items-center gap-4">
            <button disabled={status==='submitting'} type="submit" className="px-5 py-2.5 rounded-md bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <span className="text-sm text-green-600 dark:text-green-400">Message sent! ✅</span>}
            {status === 'error' && <span className="text-sm text-red-600 dark:text-red-400">Something went wrong.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
