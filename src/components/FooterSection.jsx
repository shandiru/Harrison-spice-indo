import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#090909] py-16 px-4 flex flex-col items-center">
      
      {/* 1. Logo Section with Two-Side Lines */}
      <div className="w-full flex items-center mb-16 max-w-[1400px]">
        
        {/* Left Side Line */}
        <div className="flex-grow h-[1px] bg-gradient-to-l from-white/20 to-transparent" />

        {/* Center Logo Area */}
        <div className="px-8 md:px-12 text-center relative group">
          <h2 className="font-display text-white leading-none">
            <span className="block text-3xl md:text-5xl tracking-[-0.02em] font-normal italic mb-1">New</span>
            <span className="block text-4xl md:text-6xl tracking-[0.2em] font-bold">WAVE</span>
          </h2>
          {/* Subtle Glow behind Logo */}
          <div className="absolute inset-0 bg-[#C9972B]/5 blur-3xl rounded-full -z-10 group-hover:bg-[#C9972B]/10 transition-all duration-700" />
        </div>

        {/* Right Side Line */}
        <div className="flex-grow h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      {/* 2. Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-10">
        {['HOME', 'THE MENU', 'ABOUT', 'GIFT VOUCHER', 'NEWS & EVENTS', 'CONTACT'].map((item, index, array) => (
          <React.Fragment key={item}>
            <a 
              href="#" 
              className="font-display text-[10px] md:text-[12px] tracking-[0.25em] text-[#F5EDD8] hover:text-[#C9972B] transition-all duration-300"
            >
              {item}
            </a>
            {/* Dots between links */}
            {index !== array.length - 1 && (
              <div className="w-[3px] h-[3px] bg-white/20 rounded-full" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* 3. Address & Copyright */}
      <div className="text-center mb-12">
        <p className="font-serif italic text-[#8A7A5A] text-sm md:text-base opacity-70 tracking-wide leading-relaxed">
          © New Wave Restaurant. Tel: 001 23 456 789. <br className="md:hidden" />
          Rainbow Ridge Street, 35 New York, NY
        </p>
      </div>

      {/* 4. Social Icons with Connectors */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-white/80 hover:text-[#C9972B] transition-all">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <div className="w-10 h-[1px] bg-white/10" />
        <a href="#" className="text-white/80 hover:text-[#C9972B] transition-all">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <div className="w-10 h-[1px] bg-white/10" />
        <a href="#" className="text-white/80 hover:text-[#C9972B] font-display font-bold text-lg">
          X
        </a>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@1,400&display=swap');
        .font-display { font-family: 'Cinzel', serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>
    </footer>
  );
};

export default Footer;