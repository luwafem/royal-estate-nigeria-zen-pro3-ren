import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-neutral-900 text-white selection:bg-neutral-800">
      
      {/* Background: Full Cinematic Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Architecture"
          className="h-full w-full object-cover brightness-[0.6] contrast-[1.1]"
        />
        {/* Subtle vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col justify-between min-h-[100dvh] px-6 md:px-16 py-12 md:py-20">
        
        {/* Top: Metadata */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-white/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70">
               —  — 
            </span>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50 mb-1">Current Inventory</p>
            <p className="text-xl font-light tracking-tighter">--</p>
          </div>
        </div>

        {/* Center/Bottom: Headline & CTA */}
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 items-end gap-12">
            <div>
              <h1 className="text-[15vw] md:text-[10vw] font-serif italic leading-[0.8] tracking-tighter text-white mb-10">
                Rare <br />
                <span className="font-sans not-italic font-light text-white/40">Portfolios.</span>
              </h1>
              
              <p className="max-w-md text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12">
                Strategic architectural acquisitions reserved for the global vanguard.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                to="/properties"
                >
                <button className="group flex items-center justify-center gap-4 bg-white text-black px-10 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all">
                  VIew properties <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
              </div>
            </div>

            {/* Bottom Right: Status Indicator */}
            <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center gap-6 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Market Status: Open</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="h-px w-32 bg-white/10" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Geographic Coordinates */}
        <div className="flex justify-between items-center border-t border-white/10 pt-8">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">©2026 11TH HAVEN HOMES</span>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">6.4654° N, 3.4064° E</span>
        </div>
      </div>

      {/* Background Grain Overlay for texture */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default HeroSection;