import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionSpan = motion.span;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutUsSection = () => {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-brand-black px-4 py-24"
      id="about"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <h1 className="text-[40vw] font-display text-brand-gold">H</h1>
      </div>

      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center"
      >
        <div className="mb-10 flex flex-col items-center">
          <MotionSpan
            variants={itemVariants}
            className="mb-6 border-b border-brand-gold/30 pb-2 font-label text-[11px] tracking-[0.4em] text-brand-gold uppercase"
          >
            Since 2024
          </MotionSpan>

          <MotionH2
            variants={itemVariants}
            className="text-[clamp(32px,6vw,75px)] leading-[1.1] text-brand-cream"
          >
            Coalville&apos;s <span className="text-brand-gold">Finest</span>
          </MotionH2>

          <MotionH2
            variants={itemVariants}
            className="mt-[-4px] text-[clamp(32px,6vw,75px)] italic leading-[1.1] text-brand-cream md:mt-[-12px]"
          >
            Indo-Chinese Buffet
          </MotionH2>

          <MotionH2
            variants={itemVariants}
            className="text-[clamp(32px,6vw,75px)] leading-[1.1] text-brand-cream md:self-end md:mr-12"
          >
            Eat Without Limits
          </MotionH2>
        </div>

        <MotionDiv variants={itemVariants} className="mt-8 max-w-[850px]">
          <p className="font-body text-[clamp(16px,1.8vw,19px)] leading-relaxed tracking-wide text-brand-cream/90">
            We bring together the{" "}
            <span className="text-brand-gold italic">bold spices of India</span>
            {" "}and the{" "}
            <span className="text-brand-gold italic">rich traditions of Chinese cooking</span>
            {", reimagined each week through the lens of a new country&apos;s cuisine. Located in the heart of "}
            <span className="font-bold text-brand-cream">Coalville, Leicestershire</span>
            {", Harrison Spice invites food lovers from across the East Midlands to sit back, explore, and discover flavours that know no boundaries."}
          </p>
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="mt-16 h-[1px] w-24 bg-brand-gold/50" />
      </MotionDiv>
    </section>
  );
};

export default AboutUsSection;
