import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: 'Adebayo Ogunlesi',
      role: 'Private Equity Investor',
      content: 'The level of discretion and market intelligence provided is unmatched. They didn’t just find a property; they secured a generational asset.',
      location: 'Lagos'
    },
    {
      name: 'Chinwe Okonkwo',
      role: 'Philanthropist',
      content: 'Finding a home that matches a specific architectural vision is difficult. They curated a private viewing that exceeded every expectation.',
      location: 'Abuja'
    },
    {
      name: 'Tunde Adebayo',
      role: 'Managing Director',
      content: 'Their advisory team understands real estate as a wealth preservation tool. A seamless, truly world-class experience.',
      location: 'London'
    }
  ];

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: The Narrative Label */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-black" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                Client Perspectives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
              Endorsements of <br />
              <span className="italic font-light text-neutral-400">Trust.</span>
            </h2>
            
            {/* Custom Navigation Controls */}
            <div className="mt-12 flex gap-4">
              <button 
                onClick={prev}
                className="h-12 w-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <FiArrowLeft size={18} />
              </button>
              <button 
                onClick={next}
                className="h-12 w-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side: The Main Focus Card */}
          <div className="lg:w-2/3 relative min-h-[400px] flex items-center">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
                  idx === active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`}
              >
                <p className="text-2xl md:text-4xl font-serif text-neutral-800 leading-snug mb-12 italic">
                  "{item.content}"
                </p>
                
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                      {item.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Subtle Indicator bar */}
        <div className="mt-24 h-px w-full bg-neutral-100 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-black transition-all duration-700" 
              style={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
            />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;