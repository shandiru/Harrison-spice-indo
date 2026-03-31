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
    <section className="bg-[#E6E6E6] py-20 px-4 md:px-10 overflow-hidden">
      {/* Gap-0 removes space between columns. 
          Border color set to light gray to match the thin line */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-gray-300">
        {achievements.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            // Added border-r to create the vertical line between cards
            className={`group relative overflow-hidden aspect-[3.5/5] flex flex-col justify-between p-12 cursor-pointer 
              ${index !== 2 ? 'md:border-r border-gray-300' : ''} border-b md:border-b-0`}
          >
            {/* Background Layer (Solid color) */}
            <div className="absolute inset-0 bg-[#F2F2F2] group-hover:bg-transparent transition-all duration-700 z-0" />

            {/* Hover Background Image */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src={item.bgImage} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col">
              <div className="flex items-baseline">
                <h2 className="text-8xl font-serif font-light text-black group-hover:text-[#c19d68] transition-colors duration-500 tracking-tighter">
                  {item.value}
                </h2>
                <span className="text-4xl font-serif text-black group-hover:text-[#c19d68] ml-1">
                  {item.suffix}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-serif text-black group-hover:text-white transition-colors duration-500 mb-6">
                  {item.title}
                </h3>
              </div>

              <div className="mt-auto">
                <p className="text-[15px] text-gray-700 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}