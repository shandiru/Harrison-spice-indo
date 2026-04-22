import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionImg = motion.img;
const MotionSpan = motion.span;

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
    <section className="flex min-h-[600px] items-center overflow-hidden bg-brand-black px-4 py-24 md:px-10" id="gallery">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-30 outline-none transition-transform hover:scale-110 active:scale-95 md:left-2"
            aria-label="Previous Slide"
          >
            <img src="/left-arrow.svg" alt="Left Arrow" className="h-[50px] w-[50px] object-contain md:h-[60px] md:w-[60px]" />
          </button>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none border border-brand-gold/20 shadow-2xl md:w-[85%] md:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <MotionImg
                key={currentIndex}
                src={galleryItems[currentIndex].img}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                alt={galleryItems[currentIndex].title}
              />
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-30 outline-none transition-transform hover:scale-110 active:scale-95 md:right-2"
            aria-label="Next Slide"
          >
            <img src="/right-arrow.svg" alt="Right Arrow" className="h-[50px] w-[50px] object-contain md:h-[60px] md:w-[60px]" />
          </button>
        </div>

        <div className="mt-12 flex items-center justify-start md:ml-[7.5%]">
          <div className="flex items-center gap-6">
            <span className="font-label text-xs tracking-[0.3em] text-brand-gold md:text-sm">
              0{currentIndex + 1} / 0{galleryItems.length}
            </span>

            <div className="h-[1px] w-12 bg-brand-gold/40 md:w-24" />

            <AnimatePresence mode="wait">
              <MotionSpan
                key={galleryItems[currentIndex].title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="font-display text-sm tracking-[0.4em] text-brand-cream uppercase md:text-2xl"
              >
                {galleryItems[currentIndex].title}
              </MotionSpan>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
