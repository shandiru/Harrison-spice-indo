import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Twitter, X as CloseIcon } from "lucide-react";
import {
  CONTACT_ACTIONS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  PRIMARY_RESERVATION_HREF,
} from "../siteConfig";

const MotionDiv = motion.div;

const navItems = [
  { label: "Menus", to: "/#menus" },
  { label: "About", to: "/#about" },
  { label: "Reviews", to: "/#reviews" },
  { label: "Gallery", to: "/#gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 w-full bg-transparent">
        <div className="mx-auto flex max-w-full items-center justify-between px-5 py-4 md:px-8 md:py-10">
          <div className="hidden items-center gap-6 text-brand-cream lg:flex">
            <span className="bg-brand-gold px-4 py-1.5 text-[10px] font-label font-bold tracking-[0.3em] text-black uppercase">
              Open Times
            </span>
            <span className="font-body text-[14px] tracking-wide italic opacity-90">Weekend: 9am-11pm</span>
          </div>

          <div className="flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-8 w-16 rounded-full bg-brand-gold/20 blur-2xl md:h-12 md:w-24" />
              <h1 className="relative whitespace-nowrap font-display text-xl font-black tracking-[0.15em] text-brand-cream uppercase md:text-3xl md:tracking-[0.25em]">
                Harrison <span className="text-brand-gold">Spice</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <a
              href={PRIMARY_RESERVATION_HREF}
              className="hidden items-center gap-2 font-label text-[11px] tracking-[0.2em] text-brand-cream uppercase transition-colors duration-500 hover:text-brand-gold sm:flex"
            >
              <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 11V7" strokeLinecap="round" />
              </svg>
              <span className="hidden md:inline">Reservation</span>
            </a>

            <button onClick={() => setOpen(true)} className="group flex cursor-pointer flex-col gap-1.5 p-2" aria-label="Menu">
              <span className="h-[1.5px] w-6 bg-brand-gold transition-all duration-500 md:w-8" />
              <span className="h-[1.5px] w-4 self-end bg-brand-cream transition-all duration-500 md:w-5" />
            </button>
          </div>
        </div>

        <div style={{ display: "none" }} aria-hidden="true">
          <a href="/">Home</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col lg:flex-row"
          >
            <div className="relative flex h-full w-full flex-col justify-center overflow-y-auto border-b border-brand-gold/10 bg-rich-black px-8 pt-20 lg:w-[65%] lg:border-r lg:border-b-0 lg:px-24 lg:pt-0">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 flex items-center gap-2 p-2 font-label text-xs tracking-[0.3em] text-brand-gold uppercase lg:top-10 lg:left-10"
              >
                <CloseIcon size={18} />
                <span className="hidden lg:inline">Close</span>
              </button>

              <div className="flex flex-col space-y-4 py-10 md:space-y-8">
                {navItems.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.to}
                    className="group relative flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="font-display text-3xl tracking-tighter text-brand-cream uppercase transition-all duration-500 hover:text-brand-gold hover:italic md:text-6xl"
                    >
                      {item.label}
                    </motion.span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col items-center justify-center bg-brand-gold p-8 text-center text-black lg:w-[35%] lg:p-10">
              <div className="mb-6 lg:mb-12">
                <h2 className="font-display text-2xl font-black leading-none tracking-widest uppercase md:text-4xl">
                  Harrison <br /> Spice
                </h2>
                <div className="mx-auto mt-3 h-[2px] w-10 bg-black" />
              </div>

              <div className="max-w-[250px] space-y-2 font-label text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px] lg:space-y-4">
                <p>Coalville, Leicestershire</p>
                <p>{CONTACT_PHONE_DISPLAY}</p>
                <p className="pt-4 font-body text-xs tracking-normal normal-case italic opacity-80 md:text-sm">{CONTACT_EMAIL}</p>
              </div>

              <div className="mt-8 flex items-center gap-4 lg:mt-20">
                <a
                  href={CONTACT_ACTIONS.instagram}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-brand-gold"
                  aria-label="Email Harrison Spice"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={CONTACT_ACTIONS.facebook}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-brand-gold"
                  aria-label="Call Harrison Spice"
                >
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={CONTACT_ACTIONS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-brand-gold"
                  aria-label="Open Harrison Spice location"
                >
                  <Twitter size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}
