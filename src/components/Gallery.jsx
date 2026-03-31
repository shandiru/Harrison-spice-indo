import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { id: 1, title: "THE TERRACE", img: "https://framerusercontent.com/images/wBMCaawLDYedCXVDKjefoZvgk8.webp" },
  { id: 2, title: "CHEF'S TABLE", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" }, 
  { id: 3, title: "MAIN DINING", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "PRIVATE LOUNGE", img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1974&auto=format&fit=crop" },
  { id: 5, title: "THE BAR", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop" },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <section className="bg-brand-black py-24 px-4 md:px-10 overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Button  */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-2 z-30 transition-transform hover:scale-110 active:scale-95 outline-none"
            aria-label="Previous Slide"
          >
            <img 
              src="/left-arrow.svg" 
              alt="Left Arrow" 
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
            />
          </button>

          {/* Main Image Viewport [cite: 80, 82] */}
          <div className="w-full md:w-[85%] aspect-[16/9] md:aspect-[21/9] overflow-hidden relative border border-brand-gold/20 shadow-2xl rounded-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={galleryItems[currentIndex].img}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                alt={galleryItems[currentIndex].title}
              />
            </AnimatePresence>
            
            {/* Subtle Gradient Overlay [cite: 100] */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Arrow Button  */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-2 z-30 transition-transform hover:scale-110 active:scale-95 outline-none"
            aria-label="Next Slide"
          >
            <img 
              src="/right-arrow.svg" 
              alt="Right Arrow" 
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
            />
          </button>

        </div>

        {/* Caption & Counter Section [cite: 60-61] */}
        <div className="mt-12 flex items-center justify-start md:ml-[7.5%]">
          <div className="flex items-center gap-6">
            {/* Counter [cite: 64] */}
            <span className="font-label text-brand-gold text-xs md:text-sm tracking-[0.3em]">
              0{currentIndex + 1} / 0{galleryItems.length}
            </span>

            {/* Decorative Gold Line [cite: 27] */}
            <div className="w-12 md:w-24 h-[1px] bg-brand-gold/40"></div>

            {/* Title [cite: 58-59, 139] */}
            <AnimatePresence mode="wait">
              <motion.span 
                key={galleryItems[currentIndex].title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="font-display text-brand-cream text-sm md:text-2xl tracking-[0.4em] uppercase"
              >
                {galleryItems[currentIndex].title}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}