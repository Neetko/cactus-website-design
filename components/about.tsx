import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="o-nama" className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Square with rounded corners */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-primary/10">
              <Image
                src="/images/cactus-closeup.jpg"
                alt="Kaktus izbliza"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Top Right - Pill shape */}
            <div className="relative aspect-[3/4] rounded-full overflow-hidden bg-primary/10">
              <Image
                src="/images/gardener-man.jpg"
                alt="Čovjek s kaktusima"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bottom Left - Oval */}
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-primary/10">
              <Image
                src="/images/cactus-collection.jpg"
                alt="Razni kaktusi"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bottom Right - Circle */}
            <div className="relative aspect-square rounded-full overflow-hidden bg-primary/10">
              <Image
                src="/images/gardener-woman.jpg"
                alt="Žena s biljkama"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-primary rounded-3xl p-8 lg:p-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground leading-tight mb-6">
              Mi smo obitelj.
              <br />
              Mi smo priroda.
              <br />
              Mi smo OPG Kaktusi.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Naš posao je ujedno i naš način života. Svaki kaktus uzgajamo s puno truda, znanja i strpljenja – bez prečica, uz poštovanje prema prirodi.
            </p>
            <button className="inline-flex items-center gap-3 text-primary-foreground text-sm font-medium hover:opacity-70 transition-opacity group">
              UPOZNAJTE NAS
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
