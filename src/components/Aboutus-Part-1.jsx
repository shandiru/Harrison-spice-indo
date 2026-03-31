import React from 'react';
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
    <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-black px-4 py-24 overflow-hidden">
      
      {/* Background Watermark (Design background) */}
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
            className="text-[clamp(40px,7vw,85px)] font-display leading-[1.1] text-brand-cream"
          >
            Experience <span className="text-brand-gold">Harison</span>
          </motion.h2>
          
          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(40px,7vw,85px)] font-display italic leading-[1.1] text-brand-cream -mt-2 md:-mt-4"
          >
            Spice Coalville
          </motion.h2>

          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(40px,7vw,85px)] font-display leading-[1.1] text-brand-cream md:self-end md:mr-16"
          >
            Indochinese Buffet
          </motion.h2>
        </div>

        {/* Description Text */}
        <motion.div 
          variants={itemVariants}
          className="max-w-[750px] mt-8"
        >
          <p className="text-[clamp(17px,2vw,20px)] leading-relaxed text-brand-cream/90 font-body italic tracking-wide">
            Where tradition meets a new world of flavour every single week. 
            We provide an experience of refined comfort, timeless luxury, and authentic Indochinese 
            hospitality. Immerse yourself in the rich culture and diverse tastes 
            of our curated weekly rotating menus.
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