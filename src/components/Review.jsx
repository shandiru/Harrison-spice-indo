import React from 'react';

const reviews = [
  { id: 1, quote: "I loved the harmony between textures and flavours in every dish. This place proves that luxury dining can still feel warm and welcoming.", name: "Lucas Meyer", img: "https://framerusercontent.com/images/ecAXGnfdTjghEuukyP1huZpZBI.jpg" },
  { id: 2, quote: "Harison Spice offers an elegant atmosphere with flawless service and beautifully presented dishes. Every bite feels like a celebration.", name: "James Carter", img: "https://framerusercontent.com/images/dYNXvq6VlPEWBHHbmS2xzzbKP0Y.jpg" },
  { id: 3, quote: "The ambience is classy yet comfortable, and the weekly specials are full of surprising flavour combinations. A must-visit spot.", name: "Sophia Martinez", img: "https://framerusercontent.com/images/AqHxxQPZfnEcY6vLW7PDy4vnmds.jpg" },
  { id: 4, quote: "Everything was perfectly cooked, and the presentation elevated the entire experience. This restaurant truly understands luxury.", name: "Daniel Kim", img: "https://framerusercontent.com/images/j2i1P3titNU3ZhNU5N7IysaVH3k.jpg" },
];

export default function ReviewSlider() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden">
      {/* Title Section */}
      <div className="mb-12 px-6 max-w-7xl mx-auto">
        <span className="font-label text-[11px] tracking-[0.35em] text-brand-gold uppercase block mb-4 border-l-2 border-brand-gold pl-4">
          Testimonials
        </span>
        {/* One word in gold */}
        <h2 className="font-display text-3xl md:text-4xl text-brand-cream">
          What our <span className="text-brand-gold">clients</span> say
        </h2>
      </div>

      {/* Slider Area */}
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <ul className="flex animate-infinite-scroll gap-6">
            {[...reviews, ...reviews].map((review, index) => (
              <li key={index} className="flex-shrink-0">
                {/* FIX: border-radius 8px on cards per style guide (was missing) */}
                <div
                  className="w-[85vw] md:w-[460px] h-[320px] p-8 md:p-10 bg-soft-black border border-brand-gold/20 flex flex-col justify-between hover:border-brand-gold transition-colors duration-500"
                  style={{ borderRadius: '8px' }}
                >
                  <div>
                    <span className="text-brand-gold text-5xl font-display leading-none block mb-4 opacity-40">"</span>
                    {/* FIX: body text capped at 20px max — text-[18px] md:text-[20px] */}
                    <p className="font-body italic text-brand-cream text-[18px] md:text-[20px] leading-relaxed">
                      {review.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-brand-gold/10">
                    {/* Sharp corners on reviewer image — posh */}
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-12 h-12 object-cover grayscale border border-brand-gold/20"
                      style={{ borderRadius: '0px' }}
                    />
                    <div>
                      <p className="font-label text-[12px] font-bold tracking-widest text-brand-gold uppercase">
                        {review.name}
                      </p>
                      <div className="flex text-brand-gold text-[10px] mt-1 tracking-[0.2em]">
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

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-484px * 4)); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
