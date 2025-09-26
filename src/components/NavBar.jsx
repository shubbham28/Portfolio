import React, { useRef, useCallback } from 'react';

function NavBar() {
  const navRef = useRef(null);

  // Easing-based smooth scroll that compensates for fixed header height
  const smoothScrollTo = useCallback((targetY, duration = 900) => {
    let rafId;
    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    // Ensure native CSS smooth scrolling doesn't fight our JS animation
    root.style.scrollBehavior = 'auto';

    const startY = window.scrollY || window.pageYOffset;
    const diff = targetY - startY;
    const start = performance.now();
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    const step = now => {
      const t = Math.min(1, (now - start) / duration);
      const y = startY + diff * easeOutCubic(t);
      window.scrollTo({ top: y, left: 0, behavior: 'auto' });
      if (t < 1) rafId = requestAnimationFrame(step);
      else root.style.scrollBehavior = prevBehavior;
    };
    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      root.style.scrollBehavior = prevBehavior;
    };
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const header = navRef.current?.offsetHeight ?? 56;
      const rect = el.getBoundingClientRect();
      const y = rect.top + window.scrollY - (header + 8);
      smoothScrollTo(y, 900);
    }
  }, [smoothScrollTo]);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'personal', label: 'Personal' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center h-14 gap-6 overflow-x-auto no-scrollbar">
          <button onClick={() => scrollTo('introduction')} className="text-sm font-semibold tracking-wide text-brand-400 hover:text-brand-300">
            Shubbham Gupta
          </button>
          <ul className="flex gap-2 text-xs sm:text-sm font-medium">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="px-3 py-1.5 rounded-md text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center gap-2">
            <a href="/Shubbham_Gupta_CV.pdf" download className="px-3 py-1.5 rounded-md bg-brand-600 hover:bg-brand-500 text-white text-xs font-medium">Download CV</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
