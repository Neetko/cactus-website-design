import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Pattern - Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#2b3d2b"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-20">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary leading-tight text-balance">
              Kaktusi
              <br />
              s puno ljubavi,
              <br />
              iz srca Dalmacije.
            </h1>
            <p className="mt-6 text-primary/80 text-lg max-w-md leading-relaxed">
              Uzgojeni s pažnjom, prirodno i održivo – direktno iz našeg OPG-a u vaš dom.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 bg-background border-2 border-primary text-primary rounded-full px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group">
              ISTRAŽI PONUDU
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative z-20">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/images/hero-couple.jpg"
                alt="Obiteljski OPG Kaktusi Dalmacija - par u stakleniku s kaktusima"
                fill
                className="object-cover object-[center_15%]"
                priority
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-28 h-28 flex items-center justify-center z-30">
              <div className="text-center text-[10px] leading-tight">
                <div className="border border-primary-foreground/30 rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="px-2">UZGOJENO S LJUBAVLJU I PRIRODOM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
