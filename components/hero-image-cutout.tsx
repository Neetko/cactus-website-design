export function HeroImageCutout() {
  const blobPath =
    "M47.7,-47.8C57.7,-37.7,59,-18.8,60.8,1.8C62.6,22.5,65,45,55,53.6C45,62.2,22.5,56.9,1.8,55.1C-18.9,53.3,-37.7,54.9,-52.6,46.3C-67.5,37.7,-78.5,18.9,-73.6,4.9C-68.7,-9,-47.9,-18,-33,-28.1C-18,-38.2,-9,-49.4,4.9,-54.3C18.8,-59.2,37.7,-57.9,47.7,-47.8Z";

  return (
    <div className="relative w-full max-w-2xl overflow-visible">
      <div className="absolute inset-x-14 top-12 -z-20 h-[74%] rounded-full bg-[#d7b794]/24 blur-3xl" />
      <div className="absolute -right-6 top-8 -z-10 h-28 w-28 rounded-full bg-white/20 blur-2xl sm:h-36 sm:w-36" />
      <div className="absolute -left-6 bottom-8 -z-10 h-24 w-24 rounded-full bg-[#36513a]/10 blur-2xl sm:h-32 sm:w-32" />

      <svg
        viewBox="0 0 173 220"
        className="relative aspect-square origin-center scale-[3.1] overflow-visible drop-shadow-[0_40px_100px_rgba(40,57,39,0.4)]"
        role="img"
        aria-label="Kaktusi Macan u rasadniku"
      >
        <defs>
          <mask id="hero-blob7-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
            <rect x="0" y="0" width="200" height="200" fill="black" />
            <path
              d={blobPath}
              fill="white"
              transform="translate(100 100)"
            />
          </mask>
        </defs>

        <image
          href="/images/hero-whatsapp-2026-05-19-174417.jpeg"
          x="10"
          y="10"
          width="125"
          height="120"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#hero-blob7-mask)"
        />
      </svg>
    </div>
  );
}
