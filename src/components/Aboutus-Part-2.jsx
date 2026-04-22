import { motion } from "framer-motion";

const MotionDiv = motion.div;

const achievements = [
  {
    id: 1,
    value: "1",
    suffix: "",
    title: "Location",
    description: "One home. One kitchen. One incredible buffet experience right here in Coalville, Leicestershire.",
    bgImage: "https://framerusercontent.com/images/yMCEg1kiSqgtXmhWGrThVWKtKLw.jpg",
  },
  {
    id: 2,
    value: "52",
    suffix: "+",
    title: "Menus a Year",
    description: "A new country's cuisine inspiring our buffet every single week, no two visits ever the same.",
    bgImage: "https://framerusercontent.com/images/DZUxgOwl5wPGJPCwjWqaQxbXmQ.jpg",
  },
  {
    id: 3,
    value: "2",
    suffix: " hrs",
    title: "Per Table",
    description: "Generous, unhurried dining, all the time you need to savour every dish on the spread.",
    bgImage: "https://framerusercontent.com/images/l98uOpRtxmN52QoHItibSITsx0.jpg",
  },
];

export default function AboutUsPart2() {
  return (
    <section className="overflow-hidden bg-brand-black px-4 py-24 md:px-10">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-0 border-x border-brand-gold/10 md:grid-cols-3">
        {achievements.map((item, index) => (
          <MotionDiv
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`group relative flex aspect-[3.5/5] cursor-pointer flex-col justify-between overflow-hidden p-12 transition-all duration-500 ${
              index !== 2 ? "border-b border-brand-gold/10 md:border-r md:border-b-0" : ""
            }`}
          >
            <div className="absolute inset-0 z-0 bg-rich-black transition-all duration-700" />

            <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              <img
                src={item.bgImage}
                alt={item.title}
                className="h-full w-full object-cover grayscale transition-transform duration-[2000ms] group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-20 flex h-full flex-col">
              <div className="flex items-baseline">
                <h2 className="font-label text-8xl font-black tracking-tighter text-brand-gold transition-colors duration-500">
                  {item.value}
                </h2>
                <span className="ml-1 font-label text-3xl italic text-brand-gold">{item.suffix}</span>
              </div>

              <div className="mt-8">
                <h3 className="font-label text-xl tracking-[0.25em] text-brand-cream uppercase transition-colors duration-500 group-hover:text-brand-gold">
                  {item.title}
                </h3>
              </div>

              <div className="mt-auto">
                <p className="font-body text-[17px] leading-relaxed text-muted-gold italic transition-colors duration-500 group-hover:text-brand-cream">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-30 h-[2px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
