import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { CONTACT_ACTIONS, CONTACT_MAP_HREF, PRIMARY_RESERVATION_HREF } from "../siteConfig";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionSpan = motion.span;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const letterAni = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const renderAnimatedWord = (word, extraClassName = "") => (
  <span className={`inline-block whitespace-nowrap ${extraClassName}`.trim()}>
    {word.split("").map((char, index) => (
      <MotionSpan key={`${word}-${index}`} variants={letterAni} className="inline-block">
        {char}
      </MotionSpan>
    ))}
  </span>
);

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-brand-black">
      <div className="absolute inset-0 z-0">
        <video src="/hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      </div>

      <div className="absolute top-1/2 left-8 z-20 hidden -translate-y-1/2 flex-col items-center gap-8 md:flex">
        <p className="mb-14 rotate-90 whitespace-nowrap font-label text-[10px] tracking-[0.4em] text-brand-gold uppercase">
          Follow Us
        </p>
        <div className="mb-4 h-24 w-[1px] bg-brand-gold/20" />
        <a
          href={CONTACT_ACTIONS.instagram}
          className="text-brand-cream transition-colors duration-500 hover:text-brand-gold"
          aria-label="Email Harrison Spice"
        >
          <Instagram size={18} />
        </a>
        <a
          href={CONTACT_ACTIONS.facebook}
          className="text-brand-cream transition-colors duration-500 hover:text-brand-gold"
          aria-label="Call Harrison Spice"
        >
          <Facebook size={18} />
        </a>
        <a
          href={CONTACT_ACTIONS.x}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-sm tracking-tighter text-brand-cream transition-colors duration-500 hover:text-brand-gold"
          aria-label="Open Harrison Spice location"
        >
          X
        </a>
      </div>

      <div className="relative z-10 max-w-6xl px-4 text-center">
        <MotionP
          {...fadeInUp}
          className="mb-6 flex items-center justify-center gap-3 font-label text-[10px] tracking-[0.32em] text-brand-gold uppercase"
        >
          <span className="inline-block h-[1px] w-8 bg-brand-gold/70" />
          Spice you&apos;ll savour, in an atmosphere you&apos;ll adore
          <span className="inline-block h-[1px] w-8 bg-brand-gold/70" />
        </MotionP>

        <MotionH1
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-12 font-display text-4xl font-black leading-[1.1] tracking-tight text-brand-cream uppercase md:text-[80px]"
        >
          <div className="block">
            {renderAnimatedWord("Unlimited")}
            <span className="mr-4" />
            {renderAnimatedWord("Plates.")}
          </div>

          <div className="mt-2 block">
            {renderAnimatedWord("Unforgettable")}
            <span className="mr-4" />
            {renderAnimatedWord("Evenings.", "text-brand-gold italic")}
          </div>
        </MotionH1>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex flex-row flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          <a
            href="https://www.tripadvisor.com/TravelersChoice-Restaurants"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 grayscale brightness-200 transition-all duration-500 hover:grayscale-0 hover:brightness-100"
          >
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tc-badge-2023-15378-2.png"
              alt="Tripadvisor"
              className="h-16 w-auto object-contain"
            />
          </a>

          <a
            href="https://guide.michelin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="text-2xl text-brand-gold transition-transform duration-500 group-hover:scale-110">*</div>
            <p className="border-b border-transparent font-label text-[10px] tracking-[0.2em] text-brand-cream uppercase transition-all group-hover:border-brand-gold">
              Michelin Guide 2023
            </p>
          </a>

          <a
            href={CONTACT_MAP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg"
              alt="Google"
              className="h-8 w-auto"
            />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-label text-xl font-bold leading-none text-brand-cream">4.8</span>
                <div className="text-[12px] tracking-tighter text-brand-gold">{"\u2605".repeat(5)}</div>
              </div>
              <p className="text-[9px] tracking-[0.1em] text-brand-gold/60 uppercase">Google Reviews</p>
            </div>
          </a>
        </MotionDiv>
      </div>

      <div className="absolute right-12 bottom-12 z-20 flex items-center justify-center">
        <MotionDiv
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="pointer-events-none absolute flex h-40 w-40 items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full opacity-90">
            <path
              id="circlePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="transparent"
            />
            <text className="fill-brand-gold font-label text-[7.5px] font-medium tracking-[0.2em] uppercase">
              <textPath href="#circlePath">RESERVE YOUR TABLE * CALL FOR BOOKING *</textPath>
            </text>
          </svg>
        </MotionDiv>

        <a
          href={PRIMARY_RESERVATION_HREF}
          className="group relative z-10 flex items-center justify-center rounded-full border border-white/10 bg-brand-gold p-4 shadow-xl transition-all duration-500 hover:bg-light-gold"
          aria-label="Call to reserve a table"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WA"
            className="h-6 w-6 transition-all duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
