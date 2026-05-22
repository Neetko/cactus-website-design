import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    name: "Lophophora",
    subtitle: "PEYOTE",
    image: "/images/lophophora.jpg",
  },
  {
    name: "Echinocactus",
    subtitle: "ZLATNE BAČVE",
    image: "/images/echinocactus.jpg",
  },
  {
    name: "Opuntia",
    subtitle: "KAKTUSI ZA VAN",
    image: "/images/opuntia.jpg",
  },
  {
    name: "Mammillaria",
    subtitle: "SITNI I NJEŽNI",
    image: "/images/mammillaria.jpg",
  },
];

export function Collections() {
  return (
    <section id="kaktusi" className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-12">
          Naše kolekcije
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-primary/5 mb-4">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-primary">
                {collection.name}
              </h3>
              <p className="text-primary/60 text-xs tracking-wider mt-1">
                {collection.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="inline-flex items-center gap-3 text-primary text-sm font-medium hover:opacity-70 transition-opacity group">
            PREGLEDAJ SVE KAKTUSE
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
