import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Briefing Requested:', email);
    setEmail('');
  };

  return (
    <section className="py-32 md:py-56 bg-[#f9f9f9]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Section Label */}
          <span className="text-[10px] font-black uppercase tracking-[0.8em] text-neutral-400 mb-12">
            The Intelligence Brief
          </span>

          {/* Headline: Serif Focus */}
          <h2 className="text-5xl md:text-8xl font-serif italic text-neutral-900 leading-tight mb-8">
            Stay <span className="text-neutral-300 not-italic font-sans font-light tracking-tighter">Informed.</span>
          </h2>

          <p className="max-w-xl text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-20">
            A monthly dispatch of off-market acquisitions and architectural insights, 
            reserved for the discerning global investor.
          </p>

          {/* Minimalist Input: No Box, Just a Line */}
          <form onSubmit={handleSubmit} className="w-full max-w-2xl group">
            <div className="relative flex items-center border-b border-neutral-300 py-4 transition-all duration-700 group-focus-within:border-neutral-900">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent text-sm tracking-[0.2em] uppercase text-neutral-900 placeholder-neutral-300 outline-none font-medium"
                required
              />
              <button
                type="submit"
                className="ml-4 flex items-center gap-3 group/btn"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover/btn:text-neutral-900 transition-colors">
                  Submit
                </span>
                <div className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover/btn:bg-neutral-900 group-hover/btn:text-white transition-all duration-500">
                  <FiArrowRight size={16} />
                </div>
              </button>
            </div>
            
            {/* Privacy Disclaimer */}
            <div className="mt-12 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-400">
              <p>Strictly Confidential</p>
              <div className="h-[1px] w-12 bg-neutral-200" />
              <p>No Third Party Sharing</p>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;