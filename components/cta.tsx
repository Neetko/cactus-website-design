import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-primary rounded-3xl p-8 lg:p-12">
              <div className="relative aspect-square max-w-sm mx-auto">
                <Image
                  src="/images/cactus-terracotta.jpg"
                  alt="Kaktus u terakota posudi"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-primary leading-tight mb-6 text-balance">
              Kaktus je više od biljke.
              <br />
              To je stav.
            </h2>
            <p className="text-primary/80 leading-relaxed mb-8 max-w-lg">
              Minimalan, snažan i poseban – baš kao i vi. Pronađite svog zelenog saveznika.
            </p>
            <button className="inline-flex items-center gap-3 text-primary text-sm font-medium hover:opacity-70 transition-opacity group">
              ISTRAŽI PONUDU
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
