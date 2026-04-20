import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-transparent">
        <div className="max-w-full mx-auto flex items-center justify-between px-5 md:px-8 py-4 md:py-10">
          
          {/* LEFT - OPEN TIMES */}
          <div className="hidden lg:flex items-center gap-6 text-brand-cream">
            <span className="bg-brand-gold px-4 py-1.5 text-[10px] font-label font-bold tracking-[0.3em] uppercase text-black">
              Open Times
            </span>
            <span className="font-body italic text-[14px] tracking-wide opacity-90">
              Weekend: 9am-11pm
            </span>
          </div>

          {/* CENTER LOGO */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-8 md:w-24 md:h-12 bg-brand-gold/20 blur-2xl rounded-full"></div>
              <h1 className="relative text-brand-cream font-display font-black text-xl md:text-3xl tracking-[0.15em] md:tracking-[0.25em] uppercase whitespace-nowrap">
                Harrison <span className="text-brand-gold">Spice</span>
              </h1>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 md:gap-8">
            <button className="hidden sm:flex items-center gap-2 text-brand-cream font-label text-[11px] tracking-[0.2em] hover:text-brand-gold transition-colors duration-500 uppercase">
              <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 11V7" strokeLinecap="round"/>
              </svg>
              <span className="hidden md:inline">Reservation</span>
            </button>

            <button 
              onClick={() => setOpen(true)} 
              className="flex flex-col gap-1.5 group cursor-pointer p-2"
              aria-label="Menu"
            >
              <span className="w-6 md:w-8 h-[1.5px] bg-brand-gold transition-all duration-500"></span>
              <span className="w-4 md:w-5 h-[1.5px] bg-brand-cream self-end transition-all duration-500"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULLSCREEN OVERLAY --- */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col lg:flex-row"
          >
            {/* MENU LINKS PANEL */}
            <div className="relative w-full lg:w-[65%] h-full bg-rich-black flex flex-col justify-center px-8 md:px-24 border-b lg:border-b-0 lg:border-r border-brand-gold/10 overflow-y-auto pt-20 lg:pt-0">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 lg:top-10 lg:left-10 text-brand-gold font-label text-xs tracking-[0.3em] uppercase flex items-center gap-2 p-2"
              >
                <span className="text-xl">✕</span> <span className="hidden lg:inline">Close</span>
              </button>

              <div className="flex flex-col space-y-4 md:space-y-8 py-10">
                {[ "Menus", "About", "Reviews", "Gallery"].map((item, idx) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="group relative flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-brand-cream font-display text-3xl md:text-6xl hover:text-brand-gold hover:italic transition-all duration-500 tracking-tighter uppercase">
                      {item}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* INFO & SOCIAL PANEL */}
            <div className="w-full lg:w-[35%] bg-brand-gold flex flex-col justify-center items-center text-black text-center p-8 md:p-10 shrink-0">
              <div className="mb-6 lg:mb-12">
                <h2 className="font-display font-black text-2xl md:text-4xl tracking-widest leading-none uppercase">
                  Harrison <br /> Spice
                </h2>
                <div className="w-10 h-[2px] bg-black mx-auto mt-3"></div>
              </div>

              <div className="space-y-2 lg:space-y-4 font-label text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold max-w-[250px]">
                <p>Coalville, Leicestershire</p>
                <p>0116 2395 644</p>
                <p className="lowercase italic font-body text-xs md:text-sm normal-case tracking-normal pt-4 opacity-80">info@Harrisonspice.com</p>
              </div>

              {/* UPDATED SOCIAL ICONS */}
              <div className="mt-8 lg:mt-20 flex items-center gap-4">
                 <a href="#" className="w-10 h-10 flex items-center justify-center border border-black/20 text-black hover:bg-black hover:text-brand-gold transition-all duration-300 rounded-full">
                    <Instagram size={18} strokeWidth={1.5} />
                 </a>
                 <a href="#" className="w-10 h-10 flex items-center justify-center border border-black/20 text-black hover:bg-black hover:text-brand-gold transition-all duration-300 rounded-full">
                    <Facebook size={18} strokeWidth={1.5} />
                 </a>
                 <a href="#" className="w-10 h-10 flex items-center justify-center border border-black/20 text-black hover:bg-black hover:text-brand-gold transition-all duration-300 rounded-full">
                    <Twitter size={18} strokeWidth={1.5} />
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}