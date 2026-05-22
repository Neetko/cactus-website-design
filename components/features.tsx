import { Leaf, Heart, Recycle, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Prirodno uzgojeno",
    description: "Bez pesticida, bez umjetnih gnojiva. Samo sunce, zemlja i voda.",
  },
  {
    icon: Heart,
    title: "Obiteljski posao",
    description: "Generacije znanja i ljubavi prenose se na svaki naš kaktus.",
  },
  {
    icon: Recycle,
    title: "Održivo",
    description: "Brinemo o prirodi kako bismo i dalje mogli uzgajati s njom, ne protiv nje.",
  },
  {
    icon: Truck,
    title: "Sigurna dostava",
    description: "Pažljivo pakirano i brzo dostavljeno na vaša vrata.",
  },
];

export function Features() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Cactus */}
        <div className="flex justify-center mt-12">
          <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="text-primary-foreground/20">
            <path d="M30 10C30 10 22 20 22 40C22 60 30 75 30 75C30 75 38 60 38 40C38 20 30 10 30 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M15 25C15 25 12 35 15 50C18 65 22 70 22 70" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M45 25C45 25 48 35 45 50C42 65 38 70 38 70" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M30 75V90" stroke="currentColor" strokeWidth="2"/>
            <path d="M22 90H38" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
