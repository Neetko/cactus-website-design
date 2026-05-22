import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Flower2,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  SunMedium,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { AnimatedCountUp } from "@/components/animated-count-up";
import { CactusSaleCarousel } from "@/components/cactus-sale-carousel";
import { HeroImageCutout } from "@/components/hero-image-cutout";

const highlights: Array<{
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  featured?: boolean;
}> = [
  {
    id: "grown",
    icon: Leaf,
    title: "Uzgojeno iz vlastitog sjemena",
    description: "Svi kaktusi na prodaju rastu iz našeg vlastitog sjemena, uz dug i pažljiv uzgoj.",
  },
  {
    id: "collection",
    icon: SunMedium,
    title: "Preko 1000 vrsta i sorti",
    description: "Kolekciju gradimo više od 15 godina, pa preporuku možemo prilagoditi prostoru, svjetlu i dojmu koji želite postići.",
    stat: "1000+",
    statLabel: "u kolekciji",
    featured: true,
  },
  {
    id: "visits",
    icon: Clock3,
    title: "Više od 15 godina uzgoja",
    description: "Kaktusi Macan kaktuse uzgaja već više od 15 godina, strpljivo gradeći kolekciju i iskustvo koje dijelimo pri svakom odabiru.",
  },
];

const processSteps: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Flower2,
    title: "Od hobija do SOPG-a",
    description: "Priča je počela od nekoliko dobivenih biljaka i prerasla u obiteljski posao koji donosi mir, radost i puno strpljenja.",
  },
  {
    icon: Phone,
    title: "Kolekcija koja broji više od 1000 vrsta",
    description: "Obilazak sajmova, literatura i dugogodišnje učenje pomogli su nam oblikovati zavidnu zbirku kaktusa i sukulenata.",
  },
  {
    icon: Truck,
    title: "Sjeme, mladice i zimsko mirovanje",
    description: "Uzgajamo iz vlastitog sjemena i mladica, u prozračnom supstratu koji sami pripremamo, uz mirovanje od listopada do ožujka.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="top" className="relative isolate overflow-hidden pb-18 pt-5 sm:pb-24 lg:pb-32">
        <div className="absolute inset-x-0 top-0 -z-20 h-168 bg-[radial-gradient(circle_at_top_left,rgba(215,183,148,0.42),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(74,110,82,0.14),transparent_22%),linear-gradient(180deg,#f8f1e7_0%,#f5ecdf_100%)]" />
        <div className="absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full bg-[#d7b794]/30 blur-3xl" />
        <div className="absolute -left-20 top-44 -z-10 h-64 w-64 rounded-full bg-[#9ab39a]/20 blur-3xl" />

        <div className="shell">
          <header className="rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-[0_20px_60px_-28px_rgba(45,66,44,0.35)] backdrop-blur md:px-6">
            <div className="flex items-center justify-between gap-4">
              <Link href="#top" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo-nogb.png"
                    alt="Kaktusi Macan logo"
                    width={52}
                    height={52}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-foreground/55">
                    family grown
                  </p>
                  <p className="font-display text-xl leading-none text-primary">Kaktusi Macan</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 text-base font-semibold text-primary lg:flex">
                <Link href="#kolekcija" className="transition hover:text-primary/75">Kolekcija</Link>
                <Link href="#proces" className="transition hover:text-primary/75">Kako radimo</Link>
                <Link href="#kontakt" className="transition hover:text-primary/75">Kontakt</Link>
              </nav>

              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Posjeti nas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </header>

          <div className="grid items-center gap-14 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:pt-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-primary/80 backdrop-blur">
                lokalni uzgoj • obiteljski posao
              </div>
              <h1 className="mt-6 font-display text-[3.2rem] leading-[0.96] tracking-[-0.04em] text-primary sm:text-[4.4rem] lg:text-[5.8rem]">
                Kaktusi koji
                <br />
                prostoru daju
                <br />
                mir i karakter.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-foreground/74 sm:text-lg">
                U našem obiteljskom rasadniku kaktuse uzgajamo iz vlastitog sjemena, pažljivo i strpljivo,
                kako bi svaki primjerak imao stvarnu vrijednost, zdrav razvoj i autentičan karakter.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#kolekcija"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Istraži kolekciju
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#proces"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/18 bg-white/65 px-6 py-3 text-sm font-medium text-primary transition hover:border-primary/28 hover:bg-white"
                >
                  Pogledaj kako radimo
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -right-40 -bottom-44 -z-20 hidden w-xl lg:block xl:-right-24 2xl:right-0 2xl:w-2xl"
          style={{ transform: "translateX(-100px)" }}
        >
          <HeroImageCutout />
        </div>

        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 -z-10 h-24 w-full text-[#36513a] sm:h-32 lg:h-40">
          <path
            d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,101.3C672,107,768,117,864,122.7C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
          />
        </svg>
      </section>

      <section className="relative -mt-px bg-[#36513a] pb-18 pt-6 text-white sm:pb-22">
        <div className="shell grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.id}
              className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/12 bg-white/6 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
            >
              {item.featured ? (
                <>
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#d7b794]/10 blur-2xl" />
                  <div className="relative mb-6 min-h-36 rounded-[1.7rem] border border-white/10 bg-white/7 px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Image
                      src="/images/minicactus1.svg"
                      alt=""
                      width={150}
                      height={133}
                      className="pointer-events-none absolute -left-3 bottom-0 h-auto w-18 rotate-[-8deg] opacity-85 sm:w-20"
                      aria-hidden="true"
                    />
                    <Image
                      src="/images/minicactus2.svg"
                      alt=""
                      width={150}
                      height={150}
                      className="pointer-events-none absolute left-1/2 top-23 h-auto w-18 -translate-x-1/2 opacity-60 sm:w-20"
                      aria-hidden="true"
                    />
                    <Image
                      src="/images/minicactus3.svg"
                      alt=""
                      width={150}
                      height={150}
                      className="pointer-events-none absolute -right-3 bottom-1 h-18.5 w-18.5 rotate-[8deg] opacity-80 sm:h-20.5 sm:w-20.5"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex min-h-20 flex-col items-center justify-center text-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b794]/25 bg-[#d7b794]/12 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-[#f3d8bf]">
                        <item.icon className="h-3.5 w-3.5" />
                        {item.statLabel}
                      </div>
                      <p className="mt-3 font-display text-[2.6rem] leading-none tracking-[-0.04em] text-white sm:text-[3rem]">
                        {item.stat}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {item.id !== "visits" ? <item.icon className="h-7 w-7 text-[#d7b794]" /> : null}
                  {item.id === "visits" ? (
                    <div className="relative mb-6 min-h-36 overflow-hidden rounded-[1.7rem] border border-white/10 bg-linear-to-br from-white/10 via-white/7 to-transparent px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#d7b794]/12 blur-2xl" />
                      <div className="relative z-10 flex min-h-20 flex-col items-center justify-center text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b794]/25 bg-[#d7b794]/12 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-[#f3d8bf]">
                          <item.icon className="h-3.5 w-3.5" />
                          godina uzgoja
                        </div>
                        <div className="mt-3 flex items-end justify-center gap-3">
                          <AnimatedCountUp
                            from={1}
                            to={15}
                            durationMs={2000}
                            finalSuffix="+"
                            className="font-display text-[3.5rem] leading-none tracking-[-0.06em] text-white sm:text-[4rem]"
                          />
                          <span className="pb-2 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-white/62">
                            godina
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              )}
              <h2 className="mt-4 font-display text-2xl text-white">{item.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kolekcija" className="section-space bg-[#f1e7db]">
        <div className="shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-primary/62">izdvojene sorte</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.03em] text-primary sm:text-5xl">
                Kolekcija koja spaja skulpturalnu formu i jednostavnu svakodnevnu njegu.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-foreground/68">
              Za prodaju izdvajamo rodove koji dobro izgledaju samostalno, ali i skladno sjedaju u manju kućnu kolekciju kada želite graditi izbor postupno.
            </p>
          </div>

          <CactusSaleCarousel />
        </div>
      </section>

      <section id="proces" className="relative overflow-hidden section-space bg-primary text-primary-foreground">
        <div className="shell relative grid gap-12 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:pb-8">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-primary-foreground/60">kako uzgajamo</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-primary-foreground sm:text-5xl">
              Iz nekoliko prvih biljaka razvila se obiteljska kolekcija koja raste strpljivo i s puno pažnje.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/74 sm:text-lg">
              SOPG Kaktusi Macan nastao je iz želje da viškove iz naših plastenika u južnoj Istri, u Muntiću,
              ponudimo ljubiteljima bodljikavih i mesnatih biljaka. Danas uzgajamo kaktuse i sukulente iz vlastitog
              sjemena, mladica i pažljivo pripremljenih supstrata.
            </p>

            <div className="mt-8 rounded-[2.4rem] border border-white/12 bg-white/7 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="font-display text-3xl text-[#f2d3b7]">
                “Ljepota oblika i boja ovih biljaka neiscrpna je i nepredvidiva — svaki novi cvijet donosi novu radost.”
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/55">predstavljanje sopg kaktusi macan</p>
            </div>
          </div>

          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="flex flex-col gap-4 rounded-4xl border border-white/12 bg-white/6 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7b794] text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/45">0{index + 1}</p>
                  <h3 className="mt-2 font-display text-2xl text-primary-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-primary-foreground/72">{step.description}</p>
                </div>
              </article>
            ))}

            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-4xl border border-white/12 bg-white/6 p-3">
                <div className="relative aspect-5/4 overflow-hidden rounded-[1.45rem]">
                  <Image
                    src="/andi%20sent/WhatsApp%20Unknown%202026-05-20%20at%2012.18.21/WhatsApp%20Image%202026-05-19%20at%2017.38.18%20(1).jpeg"
                    alt="Kolekcija kaktusa u rasadniku"
                    fill
                    className="scale-110 object-cover"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-4xl border border-white/12 bg-white/6 p-3">
                <div className="relative aspect-5/4 overflow-hidden rounded-[1.45rem]">
                  <Image
                    src="/andi%20sent/WhatsApp%20Unknown%202026-05-20%20at%2012.18.21/WhatsApp%20Image%202026-05-19%20at%2022.15.17.jpeg"
                    alt="Detalj kaktusa spremnog za odabir"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1 top-130 hidden translate-y-12 opacity-100 sm:left-10 sm:block sm:translate-y-14 lg:left-30 lg:translate-y-16">
            <Image
              src="/images/minibigcactus2.svg"
              alt=""
              width={150}
              height={150}
              className="h-75 w-50 sm:h-75 sm:w-55 lg:h-135 lg:w-80"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-space bg-background">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="flex h-full flex-col rounded-[2.7rem] bg-[#efe3d3] p-8 sm:p-10 lg:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-primary/62">posjet i narudžbe</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-primary sm:text-5xl">
                Trebate jedan poseban komad ili želite složiti malu kolekciju?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg lg:mt-7">
                Javite nam se za preporuku, dogovor oko posjeta ili pomoć pri odabiru sorti koje će najbolje izgledati u vašem prostoru.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12">
                <div className="rounded-[1.8rem] bg-white/80 p-6 shadow-[0_18px_45px_-34px_rgba(56,73,57,0.45)]">
                  <MapPin className="h-5 w-5 text-[#ba8563]" />
                  <p className="mt-5 text-sm uppercase tracking-[0.28em] text-primary/52">lokacija</p>
                  <p className="mt-3 font-display text-2xl text-primary">Montić 52, Pula</p>
                  <p className="mt-3 text-sm leading-7 text-foreground/72">Posjetite nas! Nudimo vođeni obilazak naše kolekcije.</p>
                </div>
                <div className="rounded-[1.8rem] bg-white/80 p-6 shadow-[0_18px_45px_-34px_rgba(56,73,57,0.45)]">
                  <Clock3 className="h-5 w-5 text-[#ba8563]" />
                  <p className="mt-5 text-sm uppercase tracking-[0.28em] text-primary/52">Kontakt broj</p>
                  <p className="mt-3 font-display text-2xl text-primary">+385 91 123 4567</p>
                  <p className="mt-3 text-sm leading-7 text-foreground/72">Za upite, dogovore posjeta, pakiranja i aranžmana.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.7rem] border border-primary/10 bg-white p-3 shadow-[0_28px_80px_-45px_rgba(52,66,51,0.45)] lg:self-stretch">
              <div className="relative aspect-4/5 overflow-hidden rounded-[2.1rem]">
                <Image
                  src="/andi%20sent/WhatsApp%20Unknown%202026-05-20%20at%2012.18.21/WhatsApp%20Image%202026-05-19%20at%2017.38.17.jpeg"
                  alt="Obitelj Kaktusi Macan u svom rasadniku"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 rounded-[1.8rem] border border-primary/10 bg-[#fbf7f1] p-5 sm:hidden">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary/58">osobni odabir u rasadniku</p>
                <p className="mt-3 font-display text-xl text-primary">Razgledajte i odaberite biljku uživo.</p>
                <p className="mt-2 text-sm leading-7 text-foreground/72">
                  Odaberite sorte koje najbolje odgovaraju vašem prostoru.
                </p>
              </div>
              <div className="absolute inset-x-7 bottom-7 hidden rounded-[1.8rem] border border-white/55 bg-white/78 p-6 backdrop-blur sm:block">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary/58">osobni odabir u rasadniku</p>
                <p className="mt-4 font-display text-2xl text-primary">Razgledajte i odaberite biljku uživo.</p>
                <p className="mt-3 text-sm leading-7 text-foreground/72">
                  Odaberite sorte koje najbolje odgovaraju vašem prostoru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/8 bg-[#fbf7f1] py-8">
        <div className="shell flex flex-col gap-4 text-sm text-foreground/62 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Kaktusi Macan · Montić 52, Pula · Posjeti, pakiranje i aranžmani po dogovoru.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="#kolekcija" className="transition hover:text-primary">Kolekcija</Link>
            <Link href="#kontakt" className="transition hover:text-primary">Kontakt</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
