export function HeroImageBlob() {
  const heroBlobPath =
    "M306.9 29.2C382.7 18.4 472.8 36.9 528.5 90.4C584.7 144.4 607.8 229.7 595.4 308.1C583.6 382.7 536.1 445.7 489.7 505.8C440.5 569.7 386.4 644.9 309.4 669.6C227.7 695.8 132 677.1 74 614C16.8 551.8 -0.3 460 11.4 375.5C22.1 298.5 63.9 231 104 164.2C149.4 88.6 218.7 41.7 306.9 29.2Z";

  return (
    <div className="relative mx-auto w-full max-w-152">
      <div className="absolute inset-x-10 top-8 -z-20 h-96 rounded-full bg-[#d7b794]/35 blur-3xl" />
      <div className="absolute -left-3 top-16 -z-10 h-28 w-28 rounded-full border border-white/60 bg-white/45 backdrop-blur sm:h-36 sm:w-36" />
      <div className="absolute -right-4 bottom-14 -z-10 h-24 w-24 rounded-full bg-[#36513a]/10 blur-2xl sm:h-32 sm:w-32" />

      <div className="relative translate-y-2">
        <svg
          viewBox="0 0 620 700"
          className="absolute inset-0 h-full w-full translate-x-4 translate-y-6 scale-[0.97] text-[#d9c6b1]/85"
          aria-hidden="true"
        >
          <path d={heroBlobPath} fill="currentColor" />
        </svg>

        <svg
          viewBox="0 0 620 700"
          className="relative z-10 h-auto w-full drop-shadow-[0_38px_90px_rgba(46,64,43,0.24)]"
          role="img"
          aria-label="Fotografija iz obiteljskog rasadnika Kaktusi Macan"
        >
          <defs>
            <clipPath id="hero-blob-clip">
              <path d={heroBlobPath} />
            </clipPath>
          </defs>
          <path d={heroBlobPath} fill="#f4eadf" />
          <image
            href="/images/hero-macan-blob.jpeg"
            width="620"
            height="700"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hero-blob-clip)"
          />
          <path d={heroBlobPath} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="10" />
        </svg>
      </div>
    </div>
  );
}
