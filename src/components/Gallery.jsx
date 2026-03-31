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
    <section className="bg-[#090909] py-20 px-4 md:px-10 overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          
          {/* ✅ Left Arrow Image Use Panniyachu */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-2 z-30 transition-transform hover:scale-110 active:scale-95 outline-none"
          >
            <img 
              src="https://framerusercontent.com/images/NqmZDwgXe6mmBy82yLJxmRWY5K8.svg" 
              alt="Left Arrow" 
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
            />
          </button>

          {/* Main Image Viewport */}
          <div className="w-full md:w-[85%] aspect-[16/9] md:aspect-[21/9] overflow-hidden relative border border-[#C9972B]/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={galleryItems[currentIndex].img}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                alt={galleryItems[currentIndex].title}
              />
            </AnimatePresence>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* ✅ Right Arrow Image Use Panniyachu */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-2 z-30 transition-transform hover:scale-110 active:scale-95 outline-none"
          >
            <img 
              src="https://framerusercontent.com/images/BrY2ssd9rJ0HVqWzbGfDrjKskxw.svg" 
              alt="Right Arrow" 
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
            />
          </button>

        </div>

        {/* Caption & Counter Section */}
        <div className="mt-10 flex items-center justify-start md:ml-[7.5%]">
          <div className="flex items-center gap-6">
            {/* Counter */}
            <span className="font-cinzel text-[#C9972B] text-sm md:text-base tracking-[0.3em]">
              0{currentIndex + 1} / 0{galleryItems.length}
            </span>

            {/* Decorative Gold Line */}
            <div className="w-16 md:w-32 h-[1px] bg-[#C9972B]/50"></div>

            {/* Title */}
            <motion.span 
              key={galleryItems[currentIndex].title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-cinzel text-[#F5EDD8] text-sm md:text-xl tracking-[0.4em] uppercase"
            >
              {galleryItems[currentIndex].title}
            </motion.span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
      `}</style>
    </section>
  );
}