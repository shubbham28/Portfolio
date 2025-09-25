import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-40 border-t border-white/10 py-10 text-center text-xs text-neutral-500">
      <div className="space-y-2">
        <div className="tracking-wide">© Shubbham Gupta {year}</div>
        {/* <div className="italic text-neutral-600">Visitor count: <span id="visitor-counter">--</span></div> */}
      </div>
    </footer>
  );
};

export default Footer;
