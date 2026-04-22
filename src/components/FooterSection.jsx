import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import {
  CONTACT_ACTIONS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "../siteConfig";

const footerLinks = [
  { label: "HOME", to: "/" },
  { label: "THE MENU", to: "/#menus" },
  { label: "ABOUT US", to: "/#about" },
  { label: "GIFT VOUCHER", href: CONTACT_PHONE_HREF },
  { label: "WEEKLY SPECIALS", to: "/#menus" },
  { label: "CONTACT", to: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-brand-black px-4 py-16" id="contact">
      <div className="mb-16 flex w-full max-w-[1400px] items-center">
        <div className="h-[1px] flex-grow bg-gradient-to-l from-brand-gold/20 to-transparent" />
        <div className="group relative px-8 text-center md:px-12">
          <h2 className="font-display leading-none">
            <span className="mb-1 block text-3xl font-black italic text-brand-gold md:text-5xl">Harrison</span>
            <span className="block text-4xl font-black tracking-[0.2em] text-brand-cream md:text-6xl">SPICE</span>
          </h2>
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-gold/5 blur-3xl transition-all duration-700 group-hover:bg-brand-gold/10" />
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-brand-gold/20 to-transparent" />
      </div>

      <nav className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {footerLinks.map((item, index) => (
          <div key={item.label} className="flex items-center gap-4 md:gap-8">
            {"to" in item ? (
              item.to.includes("#") ? (
                <a
                  href={item.to}
                  className="font-label text-[10px] font-semibold tracking-[0.2em] text-brand-cream transition-all duration-300 hover:text-brand-gold md:text-[12px]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  className="font-label text-[10px] font-semibold tracking-[0.2em] text-brand-cream transition-all duration-300 hover:text-brand-gold md:text-[12px]"
                >
                  {item.label}
                </Link>
              )
            ) : (
              <a
                href={item.href}
                className="font-label text-[10px] font-semibold tracking-[0.2em] text-brand-cream transition-all duration-300 hover:text-brand-gold md:text-[12px]"
              >
                {item.label}
              </a>
            )}
            {index !== footerLinks.length - 1 && <div className="h-[3px] w-[3px] rounded-full bg-dim-gold" />}
          </div>
        ))}
      </nav>

      <div className="mb-8 text-center">
        <p className="font-body text-muted-gold tracking-wide italic leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.55" }}>
          {"\u00A9"} Harrison Spice Coalville. Tel: {CONTACT_PHONE_DISPLAY}. <br className="md:hidden" />
          Where tradition meets a new world of flavour.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <Link to="/terms" className="text-[10px] tracking-widest text-muted-gold/60 uppercase transition-colors hover:text-brand-gold">
            Terms &amp; Conditions
          </Link>
          <Link to="/privacy" className="text-[10px] tracking-widest text-muted-gold/60 uppercase transition-colors hover:text-brand-gold">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="mb-12 flex items-center gap-4">
        <a href={CONTACT_ACTIONS.instagram} className="text-brand-cream/80 transition-all hover:text-brand-gold" aria-label="Email Harrison Spice">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <div className="h-[1px] w-10 bg-dim-gold/30" />
        <a href={CONTACT_ACTIONS.facebook} className="text-brand-cream/80 transition-all hover:text-brand-gold" aria-label="Call Harrison Spice">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <div className="h-[1px] w-10 bg-dim-gold/30" />
        <a
          href={CONTACT_ACTIONS.x}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-lg font-bold text-brand-cream/80 transition-all hover:text-brand-gold"
          aria-label="Open Harrison Spice location"
        >
          X
        </a>
      </div>

      <div className="w-full max-w-xs border-t border-brand-gold/10 pt-8 text-center">
        <a
          href="https://www.ansely.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-[10px] tracking-[0.3em] text-muted-gold/40 uppercase transition-all duration-500 hover:text-brand-gold"
        >
          Powered by <span className="font-bold">Ansely</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
