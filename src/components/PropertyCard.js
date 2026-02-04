import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiHeart, FiMaximize2, FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineBed, MdOutlineBathtub } from 'react-icons/md';
import { toast } from 'react-toastify';

const formatPrice = (amount) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    location,
    price,
    type,
    bedrooms,
    bathrooms,
    squareFootage,
    images,
    featured,
    status,
  } = property;

  return (
    <Link to={`/property/${id}`} className="group block relative">
      {/* Article Container: Bone background for that gallery feel */}
      <article className="relative bg-[#F5F5F3] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
        
        {/* IMAGE SECTION - High Contrast / Cinematic */}
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
          <img
            src={images?.[0] || 'https://placehold.co/600x800?text=Premium+Listing'}
            alt={title}
            className="h-full w-full object-cover brightness-[0.9] contrast-[1.05] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:brightness-100"
          />
          
          {/* Top Metadata Overlay */}
          <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-start z-10">
            <div className="flex flex-col gap-2">
              <div className="bg-black text-white px-3 py-1 self-start shadow-2xl">
                <span className="text-[8px] font-black uppercase tracking-[0.4em]">
                  {status}
                </span>
              </div>
              {featured && (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 self-start">
                 
                </div>
              )}
            </div>
            
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                toast.dark('Added to Private Collection'); 
              }}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-500"
            >
              <FiHeart size={16} />
            </button>
          </div>

          {/* Hover Action Center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/10">
             <div className="bg-white text-black px-8 py-4 flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">View Dossier</span>
                <FiArrowUpRight size={14} />
             </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-8 md:p-10">
          <div className="flex flex-col gap-6">
            
            {/* Title & Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black/20" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40 italic">
                   {type}
                </span>
              </div>
              
              <h3 className="text-4xl font-serif italic tracking-tighter text-black leading-none group-hover:not-italic transition-all duration-700">
                {title}
              </h3>
              
              <div className="flex items-center text-[10px] uppercase tracking-[0.3em] text-black/60 font-bold">
                <FiMapPin className="mr-2 text-black" />
                {location}
              </div>
            </div>

            {/* Stats Bar - Minimalist black borders */}
            <div className="grid grid-cols-3 gap-2 py-8 border-y border-black/5">
              <IconStat value={bedrooms} label="Beds" />
              <IconStat value={bathrooms} label="Baths" />
              <IconStat value={`${(squareFootage / 10).toFixed(0)}m²`} label="Index" />
            </div>
            
            {/* Bottom Row: Price & Grade */}
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                 <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30">Valuation</p>
                 <p className="text-2xl font-light tracking-tighter text-black">
                   {formatPrice(price)}
                 </p>
              </div>
              <div className="pb-1">
                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-black border-b border-black pb-1">
                   Institutional Grade
                 </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Grain Overlay */}
        <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </article>
    </Link>
  );
};

const IconStat = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <span className="text-lg font-light text-black mb-1">{value}</span>
    <span className="text-[8px] uppercase tracking-[0.3em] text-black/40 font-black">{label}</span>
  </div>
);

export default PropertyCard;