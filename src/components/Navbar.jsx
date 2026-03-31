import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/20 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-full mx-auto flex items-center justify-between px-8 py-5">
          
          {/* LEFT - OPEN TIMES */}
          <div className="hidden md:flex items-center gap-4 text-white">
            <span className="bg-[#b58c67] px-3 py-1 text-[10px] font-bold tracking-widest rounded-sm">
              OPEN TIMES
            </span>
            <span className="text-sm font-light tracking-wide">
              Weekend: 9am–11pm
            </span>
          </div>

          {/* CENTER LOGO */}
          <div className="flex flex-col items-center">
            <div className="relative group cursor-pointer">
              {/* Brush stroke background effect */}
              <div className="absolute -inset-1 bg-[#b58c67] opacity-30 blur-sm rotate-3 rounded-full"></div>
              <h1 className="relative text-white font-serif font-bold text-2xl tracking-[0.2em]">
                NEW <br /> WAVE
              </h1>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-10">
            {/* RESERVATION */}
            <button className="hidden md:flex items-center gap-3 text-white text-xs tracking-[0.15em] hover:opacity-70 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              RESERVATION
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[6px] group"
            >
              <span className="w-8 h-[1px] bg-white transition-all group-hover:w-6"></span>
              <span className="w-8 h-[1px] bg-white"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULLSCREEN OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-50 flex transition-transform duration-700 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* LEFT SIDE: BACKGROUND IMAGE & NAV LINKS */}
        <div className="relative w-full md:w-[60%] h-full bg-neutral-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant view"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          
          {/* CLOSE BUTTON (On top of image) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-10 left-10 text-white text-3xl hover:rotate-90 transition-transform duration-300 z-10"
          >
            ✕
          </button>

          {/* NAV LINKS */}
          <div className="relative h-full flex flex-col justify-center items-center text-white space-y-4 md:space-y-6">
            {["Home", "The Menus", "About", "Gift Voucher", "News & Events", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-serif text-4xl md:text-6xl hover:italic transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT INFO */}
        <div className="hidden md:flex w-[40%] bg-[#b58c67] flex-col justify-center items-center text-white px-12 text-center">
          <div className="mb-12">
             <h2 className="font-serif font-bold text-4xl tracking-widest mb-2 leading-tight">
              NEW <br /> WAVE
            </h2>
          </div>

          <div className="space-y-4 font-light tracking-wide text-sm opacity-90">
            <p>44 Blue Spring Ave. Petersburg, VA 23803</p>
            <p>+212 (0)6 61 95 62 46</p>
            <p className="underline underline-offset-4 font-normal">reception@newwave.com</p>
          </div>

          {/* SOCIAL ICONS (Mockup style) */}
          <div className="mt-16 flex items-center gap-6">
             <div className="w-[1px] h-10 bg-white/30"></div>
             <div className="flex gap-8 text-sm tracking-widest uppercase">
                <span className="cursor-pointer hover:opacity-50">IG</span>
                <span className="cursor-pointer hover:opacity-50">FB</span>
                <span className="cursor-pointer hover:opacity-50">X</span>
             </div>
             <div className="w-[1px] h-10 bg-white/30"></div>
          </div>
        </div>
      </div>
    </>
  );
}