import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    value: "1",
    suffix: "",
    title: "Location",
    description: "One home. One kitchen. One incredible buffet experience right here in Coalville, Leicestershire.",
    bgImage: "https://framerusercontent.com/images/yMCEg1kiSqgtXmhWGrThVWKtKLw.jpg"
  },
  {
    id: 2,
    value: "52",
    suffix: "+",
    title: "Menus a Year",
    description: "A new country's cuisine inspiring our buffet every single week, no two visits ever the same.",
    bgImage: "https://framerusercontent.com/images/DZUxgOwl5wPGJPCwjWqaQxbXmQ.jpg"
  },
  {
    id: 3,
    value: "2",
    suffix: " hrs",
    title: "Per Table",
    description: "Generous, unhurried dining, all the time you need to savour every dish on the spread.",
    bgImage: "https://framerusercontent.com/images/l98uOpRtxmN52QoHItibSITsx0.jpg"
  }
];

export default function AboutUsPart2() {
  return (
    <section className="bg-brand-black py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-brand-gold/10">
        {achievements.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`group relative overflow-hidden aspect-[3.5/5] flex flex-col justify-between p-12 cursor-pointer 
              ${index !== 2 ? 'md:border-r border-brand-gold/10' : ''} border-b md:border-b-0 transition-all duration-500`}
          >
            {/* Default Background (Rich Black) */}
            <div className="absolute inset-0 bg-rich-black transition-all duration-700 z-0" />

            {/* Hover Background Image (Grayscale to Color effect) */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <img 
                src={item.bgImage} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[2000ms] group-hover:scale-110"
              />
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col">
              {/* Value & Suffix */}
              <div className="flex items-baseline">
                <h2 className="text-8xl font-display font-black text-brand-gold transition-colors duration-500 tracking-tighter">
                  {item.value}
                </h2>
                <span className="text-3xl font-display text-brand-gold ml-1 italic">
                  {item.suffix}
                </span>
              </div>

              {/* Title Section */}
              <div className="mt-8">
                <h3 className="font-label text-xl tracking-[0.25em] text-brand-cream uppercase group-hover:text-brand-gold transition-colors duration-500">
                  {item.title}
                </h3>
              </div>

              {/* Description Section */}
              <div className="mt-auto">
                <p className="font-body text-[17px] italic text-muted-gold group-hover:text-brand-cream transition-colors duration-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            
            {/* Subtle bottom border accent on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-700 z-30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}