import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black py-16 px-4 flex flex-col items-center">
      
      {/* 1. Logo Section with Two-Side Lines */}
      <div className="w-full flex items-center mb-16 max-w-[1400px]">
        
        {/* Left Side Line - Subtle divider */}
        <div className="flex-grow h-[1px] bg-gradient-to-l from-brand-gold/20 to-transparent" />

        {/* Center Logo Area */}
        <div className="px-8 md:px-12 text-center relative group">
          <h2 className="font-display leading-none">
            <span className="block text-3xl md:text-5xl font-normal text-brand-gold italic mb-1">Harison</span>
            <span className="block text-4xl md:text-6xl font-black text-brand-cream tracking-[0.2em]">SPICE</span>
          </h2>
          {/* Subtle Glow behind Logo */}
          <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full -z-10 group-hover:bg-brand-gold/10 transition-all duration-700" />
        </div>

        {/* Right Side Line */}
        <div className="flex-grow h-[1px] bg-gradient-to-r from-brand-gold/20 to-transparent" />
      </div>

      {/* 2. Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-10">
        {['HOME', 'THE MENU', 'ABOUT US', 'GIFT VOUCHER', 'WEEKLY SPECIALS', 'CONTACT'].map((item, index, array) => (
          <React.Fragment key={item}>
            <a 
              href="#" 
              className="font-label text-[10px] md:text-[12px] tracking-[0.2em] text-brand-cream hover:text-brand-gold transition-all duration-300 font-semibold"
            >
              {item}
            </a>
            {/* Dots between links using Dim Gold */}
            {index !== array.length - 1 && (
              <div className="w-[3px] h-[3px] bg-dim-gold rounded-full" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* 3. Address & Copyright */}
      <div className="text-center mb-12">
        <p className="font-body italic text-muted-gold text-sm md:text-base tracking-wide leading-relaxed">
          © Harison Spice Coalville. Tel: 001 23 456 789. <br className="md:hidden" />
          Where tradition meets a new world of flavour.
        </p>
      </div>

      {/* 4. Social Icons with Connectors */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-brand-cream/80 hover:text-brand-gold transition-all">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <div className="w-10 h-[1px] bg-dim-gold/30" />
        <a href="#" className="text-brand-cream/80 hover:text-brand-gold transition-all">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <div className="w-10 h-[1px] bg-dim-gold/30" />
        <a href="#" className="text-brand-cream/80 hover:text-brand-gold font-label font-bold text-lg">
          𝕏
        </a>
      </div>

    </footer>
  );
};

export default Footer;