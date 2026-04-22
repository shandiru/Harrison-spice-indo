const reviews = [
  {
    id: 1,
    quote:
      "I loved the harmony between textures and flavours in every dish. This place proves that luxury dining can still feel warm and welcoming.",
    name: "Lucas Meyer",
    img: "https://framerusercontent.com/images/ecAXGnfdTjghEuukyP1huZpZBI.jpg",
  },
  {
    id: 2,
    quote:
      "Harrison Spice offers an elegant atmosphere with flawless service and beautifully presented dishes. Every bite feels like a celebration.",
    name: "James Carter",
    img: "https://framerusercontent.com/images/dYNXvq6VlPEWBHHbmS2xzzbKP0Y.jpg",
  },
  {
    id: 3,
    quote:
      "The ambience is classy yet comfortable, and the weekly specials are full of surprising flavour combinations. A must-visit spot.",
    name: "Sophia Martinez",
    img: "https://framerusercontent.com/images/AqHxxQPZfnEcY6vLW7PDy4vnmds.jpg",
  },
  {
    id: 4,
    quote:
      "Everything was perfectly cooked, and the presentation elevated the entire experience. This restaurant truly understands luxury.",
    name: "Daniel Kim",
    img: "https://framerusercontent.com/images/j2i1P3titNU3ZhNU5N7IysaVH3k.jpg",
  },
];

export default function ReviewSlider() {
  return (
    <section className="overflow-hidden bg-brand-black py-24" id="reviews">
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <span className="mb-4 block border-l-2 border-brand-gold pl-4 font-label text-[11px] tracking-[0.35em] text-brand-gold uppercase">
          Testimonials
        </span>
        <h2 className="font-display text-3xl text-brand-cream md:text-4xl">
          What our <span className="text-brand-gold">clients</span> say
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <ul className="flex animate-infinite-scroll gap-6">
            {[...reviews, ...reviews].map((review, index) => (
              <li key={index} className="flex-shrink-0">
                <div
                  className="flex h-[320px] w-[85vw] flex-col justify-between border border-brand-gold/20 bg-soft-black p-8 transition-colors duration-500 hover:border-brand-gold md:w-[460px] md:p-10"
                  style={{ borderRadius: "8px" }}
                >
                  <div>
                    <span className="mb-4 block font-display text-5xl leading-none text-brand-gold opacity-40">"</span>
                    <p className="font-body text-[18px] leading-relaxed text-brand-cream italic md:text-[20px]">{review.quote}</p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-brand-gold/10 pt-6">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="h-12 w-12 border border-brand-gold/20 object-cover grayscale"
                      style={{ borderRadius: "0px" }}
                    />
                    <div>
                      <p className="font-label text-[12px] font-bold tracking-widest text-brand-gold uppercase">{review.name}</p>
                      <div className="mt-1 flex text-[10px] tracking-[0.2em] text-brand-gold">{"\u2605".repeat(5)}</div>
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
