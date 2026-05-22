'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

type CactusShowcaseItem = {
  slug: string
  title: string
  latin: string
  badge: string
  description: string
  light: string
  fit: string
  accent: string
}

const cactusShowcase: CactusShowcaseItem[] = [
  {
    slug: 'agava',
    title: 'Agava',
    latin: 'Agave',
    badge: 'skulpturalna sukulenta',
    description:
      'Iako nije kaktus, agava se prirodno uklapa uz pustinjske forme. Čvrsta rozeta i snažni listovi daju prostoru miran, arhitektonski naglasak.',
    light: 'puno sunca i prozračan kut',
    fit: 'za terase, ulaze i veće posude',
    accent: 'from-[#e3d3be] via-[#f6ede3] to-white',
  },
  {
    slug: 'astrophytum',
    title: 'Astrophytum',
    latin: 'Astrophytum',
    badge: 'mirna geometrija',
    description:
      'Prepoznatljiv po urednim rebrima i sitnim točkicama, djeluje profinjeno i sabrano. Lijepo pristaje manjim policama i pažljivo složenim kolekcijama.',
    light: 'vrlo svijetlo mjesto uz suho tlo',
    fit: 'za kolekcionarske kompozicije',
    accent: 'from-[#d7ddcf] via-[#f4f1ea] to-white',
  },
  {
    slug: 'copiapoa',
    title: 'Copiapoa',
    latin: 'Copiapoa',
    badge: 'kolekcionarski karakter',
    description:
      'Suzučen ton boje, snažna tekstura i gotovo kameni dojam čine je tihim favoritom ozbiljnijih ljubitelja pustinjskih biljaka.',
    light: 'mnogo svjetla, vrlo umjereno zalijevanje',
    fit: 'za mirne, neutralne interijere',
    accent: 'from-[#d8d0c7] via-[#f3eee7] to-white',
  },
  {
    slug: 'echinocactus',
    title: 'Echinocactus',
    latin: 'Echinocactus',
    badge: 'izrazita silueta',
    description:
      'Pun, zaobljen volumen i ritam bodlji daju mu odmah prepoznatljiv karakter. Odličan je kada želite jedan upečatljiv komad na sunčanom mjestu.',
    light: 'izravno sunce i suha podloga',
    fit: 'za jedan dominantan akcent u prostoru',
    accent: 'from-[#d7d7be] via-[#f2efe7] to-white',
  },
  {
    slug: 'echinocereus',
    title: 'Echinocereus',
    latin: 'Echinocereus',
    badge: 'cvatući naglasak',
    description:
      'Vitkija forma i jasna rebra unose življi ritam u kolekciju, a rod je omiljen i zbog spremnosti na cvatnju kad dobije dovoljno svjetla.',
    light: 'svijetla pozicija uz dobru drenažu',
    fit: 'za manje kolekcije koje traže dinamiku',
    accent: 'from-[#e0ccb9] via-[#f7efe8] to-white',
  },
  {
    slug: 'ferocactus',
    title: 'Ferocactus',
    latin: 'Ferocactus',
    badge: 'snažan karakter',
    description:
      'Duboka rebra i izražene bodlje toplih tonova čine ga dojmljivim, ali i vrlo zahvalnim za održavanje kada ima dovoljno sunca i prostora.',
    light: 'puno svjetla, rijetko zalijevanje',
    fit: 'za sunčane prozore i terase',
    accent: 'from-[#d8c1aa] via-[#f5ece3] to-white',
  },
  {
    slug: 'gymnocalycium',
    title: 'Gymnocalycium',
    latin: 'Gymnocalycium',
    badge: 'za manju policu',
    description:
      'Zaobljene forme i uredan rast čine ga toplim, pristupačnim izborom za manje interijere, radne stolove i prve pažljivo birane zbirke.',
    light: 'mnogo difuznog svjetla bez žurbe',
    fit: 'za početne kolekcije i manje stanove',
    accent: 'from-[#d4d2c7] via-[#f2eee8] to-white',
  },
  {
    slug: 'mammillaria',
    title: 'Mammillaria',
    latin: 'Mammillaria',
    badge: 'nježni detalji',
    description:
      'Sitnija forma, fini raspored bodlji i česti vjenčići cvata daju joj posebnu mekoću. Lijepo izgleda sama, ali i u manjoj grupi biljaka.',
    light: 'svijetao prozor i lagan ritam zalijevanja',
    fit: 'za police, stolove i poklon-aranžmane',
    accent: 'from-[#d8d2c8] via-[#f5f1ea] to-white',
  },
  {
    slug: 'notocactus',
    title: 'Notocactus',
    latin: 'Notocactus',
    badge: 'topliji volumen',
    description:
      'Punija silueta i vedriji ton cijelog roda donose meksi dojam u kolekciju. Posebno je lijep kad želite nešto izražajno, ali ne previše strogo.',
    light: 'svijetlo mjesto uz umjereno zalijevanje',
    fit: 'za domove koji traže topliji zeleni akcent',
    accent: 'from-[#e2cfbf] via-[#f6efe7] to-white',
  },
  {
    slug: 'thelocactus',
    title: 'Thelocactus',
    latin: 'Thelocactus',
    badge: 'tihi kolekcionar',
    description:
      'Reljefna tekstura i sporiji, kompaktan rast daju mu smiren kolekcionarski šarm. Dobar je odabir kad želite suptilniji, ali vrlo poseban primjerak.',
    light: 'obilje sunca i izrazito propusna zemlja',
    fit: 'za kolekcionare i pažljiv odabir na licu mjesta',
    accent: 'from-[#d3cabd] via-[#f1ece5] to-white',
  },
]

export function CactusSaleCarousel() {
  return (
    <div className="mt-12">
      <Carousel opts={{ align: 'start' }} className="w-full">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-foreground/62 sm:text-base">
            U ovoj rotaciji izdvajamo rodove koje najčešće preporučujemo za sunčane interijere,
            terase i početne kolekcije — svaki s vlastitim ritmom, teksturom i dojmom u prostoru.
          </p>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <CarouselPrevious
              variant="outline"
              className="static top-auto left-auto size-11 translate-y-0 rounded-full border-primary/12 bg-white text-primary shadow-[0_16px_45px_-28px_rgba(47,70,51,0.42)] hover:bg-white disabled:opacity-45"
            />
            <CarouselNext
              variant="outline"
              className="static top-auto right-auto size-11 translate-y-0 rounded-full border-primary/12 bg-white text-primary shadow-[0_16px_45px_-28px_rgba(47,70,51,0.42)] hover:bg-white disabled:opacity-45"
            />
          </div>
        </div>

        <CarouselContent className="pb-2">
          {cactusShowcase.map((item) => (
            <CarouselItem
              key={item.slug}
              className="basis-[97%] sm:basis-[78%] lg:basis-[45%] xl:basis-[33.2%]"
            >
              <Card className="h-full overflow-hidden rounded-[2.3rem] border-white/70 bg-white py-0 shadow-[0_28px_80px_-48px_rgba(44,61,45,0.45)]">
                <div className={`relative aspect-4/5 overflow-hidden bg-linear-to-br ${item.accent}`}>
                  <Image
                    src={`/images/carousel/${item.slug}.jpeg`}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 640px) 97vw, (max-width: 1024px) 78vw, (max-width: 1280px) 45vw, 33.2vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/20 via-black/0 to-transparent" />
                  <Badge className="absolute left-5 top-5 rounded-full border border-white/55 bg-white/86 px-3 py-1 text-[0.68rem] uppercase tracking-[0.26em] text-primary shadow-none">
                    {item.badge}
                  </Badge>
                </div>

                <CardContent className="px-6 pb-6 pt-6">
                  <div>
                    <h3 className="font-display text-[1.9rem] leading-none text-primary">{item.title}</h3>
                    <p className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.3em] text-primary/50">
                      {item.latin}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-foreground/72">{item.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.35rem] bg-[#f5ede2] px-4 py-3">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-primary/52">
                        svjetlo i njega
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/72">{item.light}</p>
                    </div>
                    <div className="rounded-[1.35rem] bg-[#edf0e8] px-4 py-3">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-primary/52">
                        gdje najbolje pristaje
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/72">{item.fit}</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-primary/8 px-6 pb-6 pt-5">
                  <Link
                    href="#kontakt"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
                  >
                    Zatraži preporuku za ovu sortu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}