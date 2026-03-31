import React from 'react';

const reviews = [
  { id: 1, quote: "I loved the harmony between textures and flavors in every dish. This place proves that luxury dining can still feel warm and welcoming.", name: "Lucas Meyer", img: "https://framerusercontent.com/images/ecAXGnfdTjghEuukyP1huZpZBI.jpg" },
  { id: 2, quote: "Fine Dining Club 54 offers an elegant atmosphere with flawless service and beautifully presented dishes. Every bite feels like a celebration.", name: "James Carter", img: "https://framerusercontent.com/images/dYNXvq6VlPEWBHHbmS2xzzbKP0Y.jpg" },
  { id: 3, quote: "The ambience is classy yet comfortable, and the tasting menu is full of surprising flavor combinations. A must-visit spot for anyone.", name: "Sophia Martinez", img: "https://framerusercontent.com/images/AqHxxQPZfnEcY6vLW7PDy4vnmds.jpg" },
  { id: 4, quote: "My steak was perfectly cooked, and the sommelier’s wine pairing elevated the entire experience. This restaurant truly understands fine dining.", name: "Daniel Kim", img: "https://framerusercontent.com/images/j2i1P3titNU3ZhNU5N7IysaVH3k.jpg" },
];

export default function FixedUltraCompactSlider() {
  return (
    <section className="py-12 bg-white dark:bg-black overflow-hidden">
      {/* Title with alignment padding */}
      <div className="mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white tracking-tight">
          What our clients say
        </h2>
      </div>

      {/* Slider area - Side padding is 0 to allow cards to hit edges */}
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          
          <ul className="flex animate-scroll gap-[6px]"> {/* Ultra low gap between cards */}
            {[...reviews, ...reviews].map((review, index) => (
              <li key={index} className="flex-shrink-0">
                <div className="w-[88vw] md:w-[460px] h-[300px] p-6 md:p-8 bg-[#F5F5F5] dark:bg-[#0D0D0D] flex flex-col justify-between">
                  
                  <div>
                    {/* Minimal Quote Icon */}
                    <span className="text-zinc-300 dark:text-zinc-700 text-3xl font-serif">"</span>
                    <p className="text-[15px] md:text-[17px] text-zinc-800 dark:text-zinc-300 leading-snug font-light -mt-1">
                      {review.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="w-10 h-10 rounded-sm object-cover grayscale"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black dark:text-white leading-none">
                        {review.name}
                      </p>
                      <div className="flex text-black dark:text-white text-[10px] mt-1">
                        ★★★★★
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-466px * 4)); } /* (Card width + gap) * total items */
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        @media (max-width: 768px) {
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-88vw - 6px)); }
          }
        }
      `}</style>
    </section>
  );
}