"use client";

import { Mail, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl text-primary mb-4">
                Budite u toku
              </h2>
              <p className="text-primary/70 mb-6 max-w-md">
                Savjeti, noviteti i posebne ponude – pravo u vaš inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Vaš e-mail"
                  className="flex-1 bg-input border border-border rounded-full px-5 py-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground rounded-full p-3 hover:opacity-90 transition-opacity"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
              
              <p className="text-primary/50 text-sm mt-4">
                Ne šaljemo često.
                <br />
                Samo kad imamo nešto vrijedno.
              </p>
            </div>

            {/* Right - Heart Icon */}
            <div className="flex items-center justify-center lg:justify-end">
              <Heart className="w-12 h-12 text-primary/30" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
