import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Cactus */}
        <div className="flex justify-center mb-12">
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="text-primary/20">
            <path d="M20 5C20 5 14 15 14 30C14 45 20 55 20 55C20 55 26 45 26 30C26 15 20 5 20 5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M10 15C10 15 8 22 10 35C12 48 15 52 15 52" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M30 15C30 15 32 22 30 35C28 48 25 52 25 52" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M20 55V70" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 70H26" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-primary">
                <svg width="30" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C20 5 15 10 15 20C15 30 20 35 20 35C20 35 25 30 25 20C25 10 20 5 20 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 15C10 15 8 20 10 28C12 36 15 38 15 38" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M30 15C30 15 32 20 30 28C28 36 25 38 25 38" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M20 35V45" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 45H25" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="text-primary">
                <div className="text-xs font-semibold tracking-wider">OPG</div>
                <div className="text-sm font-serif font-bold leading-tight">KAKTUSI</div>
                <div className="text-[10px] tracking-widest">DALMACIJA</div>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-primary font-medium mb-4">LINKOVI</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary/70 text-sm hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="#o-nama" className="text-primary/70 text-sm hover:text-primary transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="#kaktusi" className="text-primary/70 text-sm hover:text-primary transition-colors">
                  Kaktusi
                </Link>
              </li>
              <li>
                <Link href="#galerija" className="text-primary/70 text-sm hover:text-primary transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-primary/70 text-sm hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-primary font-medium mb-4">INFO</h3>
            <ul className="space-y-2 text-primary/70 text-sm">
              <li>OPG Kaktusi Dalmacija</li>
              <li>Put kaktusa 12, 21220 Trogir</li>
              <li>Hrvatska</li>
              <li className="pt-2">+385 91 123 4567</li>
              <li>info@opgkaktusi.hr</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-primary font-medium mb-4">PRATITE NAS</h3>
            <div className="flex items-center gap-4">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-primary/50 text-sm">
            © 2024 OPG Kaktusi Dalmacija. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
