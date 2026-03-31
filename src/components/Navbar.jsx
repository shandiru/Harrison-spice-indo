import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-transparent border-b border-white/10">
        <div className="max-w-full mx-auto flex items-center justify-between px-6 py-4">
          
          {/* LEFT - OPEN TIMES */}
          <div className="flex items-center gap-4 text-white">
            <span className="bg-[#b58c67] px-3 py-1 text-[10px] font-bold tracking-widest rounded-sm">
              OPEN TIMES
            </span>
            <span className="text-xs font-light tracking-wide hidden sm:block">
              Mon-Fri: 10am-9pm
            </span>
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* The Gold Brush Stroke behind logo */}
              <div className="absolute w-16 h-8 bg-[#b58c67] opacity-60 blur-[2px] -rotate-12 rounded-full"></div>
              <h1 className="relative text-white font-serif font-bold text-2xl tracking-[0.2em] whitespace-nowrap">
                NEW WAVE
              </h1>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-white text-[10px] tracking-[0.2em] hover:opacity-70 transition">
              {/* Cloche Icon */}
              <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 11V7" strokeLinecap="round"/>
              </svg>
              RESERVATION
            </button>

            {/* HAMBURGER */}
            <button onClick={() => setOpen(true)} className="flex flex-col gap-1.5">
              <span className="w-6 h-[1px] bg-white"></span>
              <span className="w-4 h-[1px] bg-white self-end"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULLSCREEN OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-50 flex transition-all duration-500 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* LEFT SIDE: MENU LINKS */}
        <div className="relative w-full md:w-[60%] h-full bg-neutral-900/90 flex flex-col justify-center px-12 md:px-24">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 left-8 text-white text-2xl hover:scale-110 transition"
          >
            ✕
          </button>

          <div className="flex flex-col space-y-4 md:space-y-6">
            {["Home", "The Menus", "About", "Gift Voucher", "News & Events", "Contact"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white font-serif text-4xl md:text-6xl hover:pl-4 transition-all duration-300 tracking-tight"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: INFO & SOCIAL */}
        <div className="hidden md:flex w-[40%] bg-[#b58c67] flex-col justify-center items-center text-white text-center px-10">
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-white/20 blur-xl scale-150 rotate-12 rounded-full"></div>
            <h2 className="relative font-serif font-bold text-3xl tracking-widest">
              NEW <br /> WAVE
            </h2>
          </div>

          <div className="space-y-3 text-xs tracking-widest opacity-90 font-light leading-relaxed">
            <p>44 Blue Spring Ave. Petersburg, VA 23803</p>
            <p>+212 (0)6 61 95 62 46</p>
            <p className="lowercase">reception@newwave.com</p>
          </div>

          {/* SOCIALS WITH LINES */}
          <div className="mt-20 flex items-center gap-4">
            <span className="cursor-pointer opacity-80 hover:opacity-100">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
            </span>
            <div className="w-12 h-[1px] bg-white/40"></div>
            <span className="cursor-pointer opacity-80 hover:opacity-100">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </span>
            <div className="w-12 h-[1px] bg-white/40"></div>
            <span className="cursor-pointer opacity-80 hover:opacity-100">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}