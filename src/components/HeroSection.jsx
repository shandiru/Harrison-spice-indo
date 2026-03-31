import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const letterAni = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Social Media - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-8">
        <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase rotate-90 mb-14 font-label whitespace-nowrap">
          Follow Us
        </p>
        <div className="w-[1px] h-24 bg-brand-gold/20 mb-4" />
        <a href="#" className="text-brand-cream hover:text-brand-gold transition-colors duration-500"><Instagram size={18} /></a>
        <a href="#" className="text-brand-cream hover:text-brand-gold transition-colors duration-500"><Facebook size={18} /></a>
        <a href="#" className="text-brand-cream hover:text-brand-gold transition-colors duration-500 font-label text-sm tracking-tighter">X</a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl">
        
        {/* Eyebrow Content */}
        <motion.p
          {...fadeInUp}
          className="font-label text-brand-gold text-[10px] tracking-[0.32em] uppercase mb-6 flex items-center justify-center gap-3"
        >
          <span className="inline-block w-8 h-[1px] bg-brand-gold/70" />
          Spice you'll savour, in an atmosphere you'll adore
          <span className="inline-block w-8 h-[1px] bg-brand-gold/70" />
        </motion.p>

        {/* Main Heading Content */}
        <motion.h1
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="font-display font-black text-4xl md:text-[80px] text-brand-cream leading-[1.1] mb-12 uppercase tracking-tight"
        >
          <div className="block">
            {"Unlimited Plates.".split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4 whitespace-nowrap">
                {word.split("").map((char, j) => (
                  <motion.span key={j} variants={letterAni} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
          
          <div className="block mt-2">
            {"Unforgettable".split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4 whitespace-nowrap">
                {word.split("").map((char, j) => (
                  <motion.span key={j} variants={letterAni} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <span className="inline-block whitespace-nowrap text-brand-gold italic">
              {"Evenings.".split("").map((char, j) => (
                <motion.span key={j} variants={letterAni} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          </div>
        </motion.h1>

        {/* UPDATED AWARDS SECTION - Framer Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-row flex-wrap justify-center items-center gap-10 md:gap-16 mt-12"
        >
          {/* TripAdvisor */}
          <a 
            href="https://www.tripadvisor.com/TravelersChoice-Restaurants" 
            target="_blank" 
            rel="noopener" 
            className="flex-shrink-0 grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
          >
             <img src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tc-badge-2023-15378-2.png" alt="Tripadvisor" className="h-16 w-auto object-contain" />
          </a>

          {/* Michelin */}
          <a 
            href="https://guide.michelin.com" 
            target="_blank" 
            rel="noopener" 
            className="flex flex-col items-center gap-2 group"
          >
            <div className="text-brand-gold text-2xl group-hover:scale-110 transition-transform duration-500">✽</div>
            <p className="font-label text-brand-cream text-[10px] tracking-[0.2em] uppercase border-b border-transparent group-hover:border-brand-gold transition-all">
              Michelin Guide 2023
            </p>
          </a>

          {/* Google Review */}
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener" 
            className="flex items-center gap-4 group"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" alt="Google" className="h-8 w-auto" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="text-brand-cream font-label font-bold text-xl leading-none">4.8</span>
                <div className="text-brand-gold text-[12px] tracking-tighter">★★★★★</div>
              </div>
              <p className="text-brand-gold/60 text-[9px] uppercase tracking-[0.1em]">Google Reviews</p>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Floating Booking Button */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute w-40 h-40 pointer-events-none flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
            <path 
              id="circlePath" 
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" 
              fill="transparent" 
            />
            <text className="fill-brand-gold text-[7.5px] font-label font-medium tracking-[0.2em] uppercase">
              <textPath href="#circlePath">
                RESERVE YOUR TABLE • CALL FOR BOOKING • 
              </textPath>
            </text>
          </svg>
        </motion.div>

        <a
          href="https://wa.me/your-number"
          target="_blank"
          className="relative z-10 bg-brand-gold p-4 rounded-full border border-white/10 hover:bg-light-gold transition-all duration-500 shadow-xl group flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WA"
            className="w-6 h-6 transition-all duration-300" 
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;