"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-primary">
              <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity">
              POČETNA
            </Link>
            <Link href="#o-nama" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity">
              O NAMA
            </Link>
            <Link href="#kaktusi" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity">
              KAKTUSI
            </Link>
            <Link href="#galerija" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity">
              GALERIJA
            </Link>
            <Link href="#kontakt" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity">
              KONTAKT
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm">
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">KOŠARICA</span>
              <span className="bg-primary-foreground text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-background/95 backdrop-blur-sm rounded-lg p-4 mb-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                POČETNA
              </Link>
              <Link href="#o-nama" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                O NAMA
              </Link>
              <Link href="#kaktusi" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                KAKTUSI
              </Link>
              <Link href="#galerija" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                GALERIJA
              </Link>
              <Link href="#kontakt" className="text-primary text-sm tracking-wide hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                KONTAKT
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
