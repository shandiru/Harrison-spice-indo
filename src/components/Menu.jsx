import React, { useState, useEffect, useRef } from "react";

const menuData = [
  { id: "appetizers", title: "Appetizers", items: [ /* your item data */ ] },
  { id: "salads", title: "Salads", items: [ /* your item data */ ] },
  { id: "pizza", title: "Pizza", items: [ /* your item data */ ] },
  { id: "main-dishes", title: "Main Dishes", items: [ /* your item data */ ] },
  { id: "desserts", title: "Desserts", items: [ /* your item data */ ] },
  { id: "drinks", title: "Drinks", items: [ /* your item data */ ] },
];

const MenuCard = ({ item }) => (
  <div className="group">
    <div className="overflow-hidden rounded-[6px] bg-neutral-900">
      <img
        src={item.image}
        alt={item.name}
        className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px] lg:h-[290px]"
      />
    </div>
    <div className="pt-3">
      <h3 className="text-[20px] font-medium leading-tight text-[#f2f0e9]">{item.name}</h3>
      <p className="mt-2 text-[18px] text-zinc-400">{item.price}</p>
    </div>
  </div>
);

const MenuSection = () => {
  const [activeSection, setActiveSection] = useState(menuData[0].id);

  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin adjusts when the "active" switch happens. 
      // -20% from top means it triggers when the section is near the top of the viewport.
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all category sections
    menuData.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black px-4 py-10 text-white sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          
          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-20 lg:h-fit">
            <nav className="flex flex-col gap-6">
              {menuData.map((category) => {
                const isActive = activeSection === category.id;
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className={`flex items-center gap-3 text-[22px] leading-none transition-all duration-300 hover:opacity-100 ${
                      isActive ? "text-[#f2f0e9] opacity-100 font-medium" : "text-zinc-500 opacity-60 font-normal"
                    }`}
                  >
                    {/* The dash appears only when active */}
                    <span className={`block h-[2px] bg-[#f2f0e9] transition-all duration-300 ${isActive ? "w-8" : "w-0"}`} />
                    <span>{category.title}</span>
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* SCROLLABLE CONTENT */}
          <div className="space-y-24">
            {menuData.map((section) => (
              <div 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-24" // Ensures header doesn't hide under top bar
              >
                <h2 className="mb-10 text-[42px] leading-none text-[#f2f0e9] sm:text-[52px] lg:text-[60px]">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item, idx) => (
                    <MenuCard key={`${section.id}-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuSection;