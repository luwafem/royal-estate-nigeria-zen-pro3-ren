import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSliders, FiArrowUpRight } from 'react-icons/fi';
import PropertyCard from './PropertyCard';

const FeaturedProperties = ({ properties }) => {
  // Curated limit for the "Sovereign" look
  const featuredProperties = properties?.filter(p => p.featured).slice(0, 3) || [];

  return (
    <section className="relative py-32 md:py-48 bg-[#fafafa] overflow-hidden">
      {/* Subtle Background Typography */}
      <div className="absolute top-10 right-[-5%] pointer-events-none select-none">
        <span className="text-[15vw] font-black text-black/[0.02] leading-none uppercase">
          Curated
        </span>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* HEADER: Editorial Layout */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400">
                  Vol. 01 — 2026 Edition
                </span>
              </div>
              <h2 className="text-5xl md:text-8xl font-light tracking-tight text-neutral-900 leading-[0.9]">
                The Portfolio of <br />
                <span className="font-serif italic text-neutral-400">Excellence.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
              <p className="max-w-sm text-base md:text-lg text-neutral-500 font-light leading-relaxed lg:text-right mb-10">
                A rigorous selection of architectural marvels, defined by their 
                unrivaled location and design.
              </p>
              
              <Link
                to="/properties"
                className="group flex items-center gap-6 bg-black text-white pl-8 pr-2 py-2 rounded-full transition-all duration-500 hover:bg-emerald-500"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest">Explore All</span>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <FiArrowUpRight className="text-white" />
                </div>
              </Link>
            </div>
            
          </div>
        </div>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {featuredProperties.length > 0 ? (
            featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className={`transition-all duration-1000 ease-out ${
                  index === 1 ? 'lg:translate-y-24' : '' // The Staggered Effect
                }`}
              >
                {/* Reference Numbering for Editorial fel */}
                <div className="flex items-center gap-4 mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold">0{index + 1}</span>
                    <div className="h-px w-8 bg-black" />
                </div>
                <PropertyCard property={property} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-40 flex flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-neutral-200">
              <FiSliders className="text-neutral-200 mb-6 animate-pulse" size={48} />
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                Curating New Assets
              </p>
            </div>
          )}
        </div>

        {/* BOTTOM NAVIGATION CTA */}
        <div className="mt-48 lg:mt-72 flex flex-col items-center text-center">
            <div className="h-24 w-px bg-gradient-to-b from-emerald-500 to-transparent mb-12" />
            <h3 className="text-sm font-bold uppercase tracking-[0.5em] text-neutral-300 mb-4">
              Seeking something specific?
            </h3>
            <button className="text-2xl font-serif italic text-neutral-900 hover:text-emerald-500 transition-colors">
                Request a Private Briefing
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;