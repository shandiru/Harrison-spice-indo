import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const HeroSection = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const letterAni = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#090909] flex items-center justify-center">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://framerusercontent.com/assets/peXdiIMmvI0yamPKFqGonj73Fo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Social Media - Left Side */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-8">
        <p className="text-[#F5EDD8] text-[10px] tracking-[0.35em] uppercase rotate-90 mb-12 font-cinzel">
          Follow Us
        </p>
        <div className="w-[1px] h-20 bg-white/20 mb-4" />
        <a href="#" className="text-white hover:text-[#C9972B] transition-colors"><Instagram size={20} /></a>
        <a href="#" className="text-white hover:text-[#C9972B] transition-colors"><Facebook size={20} /></a>
        <a href="#" className="text-white hover:text-[#C9972B] transition-colors">
            <span className="font-bold text-lg leading-none">X</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h5 
          {...fadeInUp}
          className="font-cormorant italic text-[#F5EDD8] text-lg md:text-2xl mb-4 tracking-wide"
        >
          Cuisine you'll crave, in a ambiance you'll admire
        </motion.h5>

        <motion.h1 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="font-cinzel-dec font-[900] text-4xl md:text-8xl text-white leading-tight mb-12"
        >
          {"Good Times, Great Tastes".split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-4 whitespace-nowrap">
              {word.split("").map((char, j) => (
                <motion.span key={j} variants={letterAni} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Awards Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8"
        >
          <div className="flex flex-col items-center gap-2">
            <img src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tc-badge-2023-15378-2.png" alt="Tripadvisor" className="h-16 invert" />
          </div>
          
          <div className="flex flex-col items-center">
             <div className="text-[#C9972B] text-3xl mb-1">✽</div>
             <p className="font-cormorant text-[#F5EDD8] text-sm tracking-widest uppercase">Michelin Guide 2023</p>
          </div>

          <div className="flex items-center gap-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" alt="Google" className="h-6" />
             <div className="text-left">
                <p className="text-white font-bold leading-none">4.8</p>
                <div className="text-[#F0C060] text-xs">★★★★★</div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="absolute bottom-10 right-10 z-20 flex flex-col items-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 w-32 h-32 -m-8 pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="fill-[#F5EDD8] text-[8px] font-cinzel tracking-[0.1em] uppercase">
              <textPath href="#circlePath">CALL US FOR BOOKING A TABLE QUICKLY • </textPath>
            </text>
          </svg>
        </motion.div>
        
        <a 
          href="https://wa.me/your-number" 
          target="_blank"
          className="relative bg-[#C9972B] p-4 rounded-full hover:bg-[#F0C060] transition-colors shadow-xl"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-8 h-8" />
        </a>
      </div>

      {/* Styling with Tailwind custom font support */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        
        .font-cinzel-dec { font-family: 'Cinzel Decorative', serif; }
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
      `}</style>
    </section>
  );
};

export default HeroSection;