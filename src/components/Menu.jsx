import React, { useState, useEffect } from "react";

const menuData = [
  {
    id: "appetizers",
    title: "Signature Appetizers",
    items: [
      {
        name: "Truffle Arancini",
        price: "£18.00",
        image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Ahi Tuna Tartare",
        price: "£24.00",
        image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Burrata & Heirloom",
        price: "£21.00",
        image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "pizza",
    title: "Artisan Pizza",
    items: [
      {
        name: "Black Truffle Pizza",
        price: "£32.00",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Diavola Infernal",
        price: "£28.00",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "main-dishes",
    title: "Main Dishes",
    items: [
      {
        name: "Wagyu Ribeye",
        price: "£85.00",
        image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Pan-Seared Scallops",
        price: "£42.00",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Osso Buco",
        price: "£54.00",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "desserts",
    title: "Decadent Desserts",
    items: [
      {
        name: "Gold Leaf Fondant",
        price: "£16.00",
        image: "https://images.unsplash.com/photo-1624353339193-2f03939a15d8?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Pistachio Baklava",
        price: "£14.00",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "drinks",
    title: "Crafted Drinks",
    items: [
      {
        name: "Smoked Old Fashioned",
        price: "£19.00",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Midnight Espresso",
        price: "£18.00",
        image: "https://images.unsplash.com/photo-1541301606028-31416356390b?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];

// FIX: Item names use font-display (Cinzel Decorative) as sub-headings per style guide
const MenuCard = ({ item }) => (
  <div className="group border-b border-brand-gold/10 pb-6">
    <div className="overflow-hidden rounded-none bg-rich-black border border-brand-gold/5">
      <img
        src={item.image}
        alt={item.name}
        className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 sm:h-[260px] lg:h-[290px]"
      />
    </div>
    <div className="pt-5">
      {/* FIX: font-display for item name (sub-heading level), 18-22px per spec */}
      <h3 className="font-display text-[18px] md:text-[20px] leading-tight text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
        {item.name}
      </h3>
      <p className="mt-2 font-label text-[11px] tracking-[0.2em] text-brand-gold uppercase">
        {item.price}
      </p>
    </div>
  </div>
);

const MenuSection = () => {
  const [activeSection, setActiveSection] = useState(menuData[0].id);

  useEffect(() => {
    const observerOptions = {
      root: null,
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
    menuData.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Helper: split title, highlight last word in gold
  const renderHeadingWithGold = (title) => {
    const words = title.split(" ");
    if (words.length === 1) {
      return <span className="text-brand-gold">{title}</span>;
    }
    const last = words[words.length - 1];
    const rest = words.slice(0, -1).join(" ");
    return (
      <>
        {rest}{" "}
        <span className="text-brand-gold">{last}</span>
      </>
    );
  };

  return (
    <section className="bg-brand-black px-4 py-16 text-brand-cream sm:px-6 lg:px-10 lg:py-24" id="Menus">
      <div className="mx-auto max-w-[1600px]">

        {/* Section Eyebrow — leading rule + font-label + gold + uppercase */}
        <div className="mb-16 border-l-2 border-brand-gold pl-6">
          <span className="font-label text-[11px] tracking-[0.3em] text-brand-gold uppercase block mb-2">
            The Selection
          </span>
          {/* FIX: One word in gold in section heading */}
          <h2 className="font-display text-4xl md:text-6xl text-brand-cream">
            Our <span className="text-brand-gold">Menu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">

          {/* STICKY SIDEBAR NAVIGATION */}
          <aside className="lg:sticky lg:top-24 lg:h-fit border-r border-brand-gold/10 pr-8 hidden lg:block">
            <nav className="flex flex-col gap-8">
              {menuData.map((category) => {
                const isActive = activeSection === category.id;
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className={`flex items-center gap-4 transition-all duration-500 group ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <div className={`h-[1px] bg-brand-gold transition-all duration-500 ${isActive ? "w-10" : "w-0 group-hover:w-4"}`} />
                    <span className={`font-label text-[14px] tracking-[0.25em] uppercase ${isActive ? "text-brand-gold" : "text-brand-cream"}`}>
                      {category.title}
                    </span>
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* SCROLLABLE CONTENT */}
          <div className="space-y-32">
            {menuData.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">

                {/* FIX: Category heading — one word in gold per style guide */}
                <h2 className="mb-12 font-display text-[32px] md:text-[48px] leading-none  pb-6">
                  {renderHeadingWithGold(section.title)}
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
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
