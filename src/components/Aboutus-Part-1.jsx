import React from 'react';
import { motion } from 'framer-motion';

const BellevoireAbout = () => {
  // அனிமேஷன் செட்டிங்ஸ்
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#E6E1D8] px-4 py-20 overflow-hidden">
      
      {/* பின்னணி லோகோ வாட்டர்மார்க் (Design background) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[40vw] font-serif italic text-black">B</h1>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center"
      >
        
        {/* Main Heading - இமேஜில் உள்ளது போன்றே பிரிக்கப்பட்டுள்ளது */}
        <div className="flex flex-col items-center mb-8">
          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(40px,8vw,90px)] font-serif leading-[1.1] text-[#1a150e]"
          >
            Welcome to Bellevoire
          </motion.h2>
          
          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(40px,8vw,90px)] font-serif italic leading-[1.1] text-[#1a150e] -mt-1 md:-mt-4"
          >
            Your Elegant Retreat
          </motion.h2>

          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(40px,8vw,90px)] font-serif leading-[1.1] text-[#1a150e] md:self-end md:mr-20"
          >
            in the Heart of Paris
          </motion.h2>
        </div>

        {/* Description Text */}
        <motion.div 
          variants={itemVariants}
          className="max-w-[700px] mt-6"
        >
          <p className="text-[clamp(16px,2vw,18px)] leading-relaxed text-[#1a150e]/80 font-light tracking-wide">
            We provide an experience of refined comfort, timeless elegance, and heartfelt hospitality. 
            Nestled in the romantic city of Paris, France, our collection of three distinguished hotels 
            invites travelers from around the world to immerse themselves in the charm and culture 
            of the City of Light.
          </p>
        </motion.div>

        {/* Note: "More About Us" Link Removed as per image */}

      </motion.div>

      {/* Fonts Styling */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        h2 {
          font-family: 'Playfair Display', serif;
        }
        p {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default BellevoireAbout;