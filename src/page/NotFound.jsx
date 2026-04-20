import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-brand-gold text-8xl md:text-9xl font-black">404</h1>
      <p className="font-body text-brand-cream text-xl md:text-2xl mt-4 italic">Page not found</p>
      <Link
        to="/"
        className="mt-8 font-label text-[11px] tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/30 px-8 py-3 hover:bg-brand-gold/10 transition-all duration-500"
      >
        Return Home
      </Link>
    </div>
  );
}
