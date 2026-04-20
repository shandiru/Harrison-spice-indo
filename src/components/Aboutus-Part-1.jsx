import { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  // Animation Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-black px-4 py-24 overflow-hidden" id="About">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <h1 className="text-[40vw] font-display text-brand-gold">H</h1>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center"
      >
        
        {/* Main Heading Section */}
        <div className="flex flex-col items-center mb-10">
          <motion.span 
            variants={itemVariants}
            className="font-label text-[11px] tracking-[0.4em] text-brand-gold uppercase mb-6 border-b border-brand-gold/30 pb-2"
          >
            Since 2024
          </motion.span>

          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(32px,6vw,75px)] font-display leading-[1.1] text-brand-cream"
          >
            Coalville's <span className="text-brand-gold">Finest</span>
          </motion.h2>
          
          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(32px,6vw,75px)] font-display italic leading-[1.1] text-brand-cream -mt-1 md:-mt-3"
          >
            Indo-Chinese Buffet
          </motion.h2>

          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(32px,6vw,75px)] font-display leading-[1.1] text-brand-cream md:self-end md:mr-12"
          >
            Eat Without Limits
          </motion.h2>
        </div>

        {/* Updated Description Text */}
        <motion.div 
          variants={itemVariants}
          className="max-w-[850px] mt-8"
        >
          <p className="text-[clamp(16px,1.8vw,19px)] leading-relaxed text-brand-cream/90 font-body tracking-wide">
            We bring together the <span className="text-brand-gold italic">bold spices of India</span> and the 
            <span className="text-brand-gold italic"> rich traditions of Chinese cooking</span>, reimagined each week 
            through the lens of a new country's cuisine. Located in the heart of 
            <span className="text-brand-cream font-bold"> Coalville, Leicestershire</span>, 
            Harrison Spice invites food lovers from across the East Midlands to sit back, explore, and discover 
            flavours that know no boundaries.
          </p>
        </motion.div>

        {/* Decorative Gold Divider */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 w-24 h-[1px] bg-brand-gold/50"
        />

      </motion.div>
    </section>
  );
};

export default AboutUsSection;