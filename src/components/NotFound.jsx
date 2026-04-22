import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
    return () => {
      document.title = "Harrison Spice - Indochinese Buffet";
    };
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-brand-black px-6 py-24 text-center text-brand-cream">
      <div className="max-w-xl">
        <p className="mb-4 font-label text-[11px] tracking-[0.35em] text-brand-gold uppercase">404</p>
        <h1 className="mb-6 font-display text-4xl text-brand-cream md:text-6xl">
          Page Not <span className="text-brand-gold">Found</span>
        </h1>
        <p className="mb-8 text-brand-cream/80">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center border border-brand-gold px-6 py-3 font-label text-[11px] tracking-[0.25em] text-brand-gold uppercase transition-colors duration-300 hover:bg-brand-gold hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
