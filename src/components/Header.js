import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinks = [
    { name: 'Portfolios', path: '/properties' },
    { name: 'Advisory', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-[110] w-full transition-all duration-1000 ${
          isScrolled ? 'bg-black/20 backdrop-blur-md py-6' : 'bg-transparent py-10'
        }`}
      >
        <div className="mx-auto max-w-[1800px] px-8 md:px-16 flex justify-between items-center">
          
          {/* Logo - Minimal Serif */}
          <Link to="/" className="z-[120]">
            <h1 className="text-xl font-sans not-italic tracking-tighter text-white">11TH HAVEN HOMES.</h1>
          </Link>

          {/* Desktop Nav - Ultrasmall tracking */}
          <nav className="hidden lg:flex gap-12">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-[9px] font-black uppercase tracking-[0.5em] text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group z-[120] flex items-center gap-4 text-white"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-50 group-hover:opacity-100 transition-opacity">
              {isMenuOpen ? 'Close' : 'Index'}
            </span>
            <div className="flex flex-col gap-1 w-6">
              <div className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-[2px] w-6' : 'w-6'}`} />
              <div className={`h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-[3px] w-6' : 'w-4'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay - Solid Black */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-8 md:px-24 w-full grid md:grid-cols-2 items-center">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="group flex items-center gap-6"
              >
                <span className="text-[10px] font-serif italic text-neutral-700">0{i+1}</span>
                <span className="text-6xl md:text-9xl font-light tracking-tighter text-white transition-all duration-700 group-hover:pl-8 group-hover:italic">
                  {link.name}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex flex-col items-end text-right space-y-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 mb-4">Location</p>
              <p className="text-xl text-neutral-400 font-light">Eko Atlantic, VI<br/>Lagos, Nigeria</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 mb-4">Inquiry</p>
              <p className="text-xl text-neutral-400 font-light">concierge@11THHAVENHOMES.com</p>
            </div>
            <Link to="/contact" className="group flex items-center gap-4 text-white pt-8">
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Start Consultation</span>
               <div className="p-4 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                <FiArrowRight />
               </div>
            </Link>
          </div>
        </div>
        
        {/* Corner Detail */}
        <div className="absolute bottom-12 left-8 md:left-24 text-[9px] font-black uppercase tracking-[0.5em] text-neutral-800">
          11TH HAVEN HOMES 
        </div>
      </div>
    </>
  );
};

export default Header;