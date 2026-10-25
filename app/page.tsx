import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import Hero from "@/components/Hero";
import ProcessTimeline from "@/components/ProcessTimeline";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { ContactTrigger } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { eyebrowClass, sectionTitleClass } from "@/components/ui/typography";
import { processSteps, services } from "@/lib/data";

const serviceImages = [
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=85&fit=crop",
    alt: "Contemporary residential construction in Chennai",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=85&fit=crop",
    alt: "Commercial construction site",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=85&fit=crop",
    alt: "Construction planning and consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85&fit=crop",
    alt: "Renovated modern home",
  },
];

const promises = [
  "A clear plan before work begins",
  "Thoughtful material and cost choices",
  "Regular updates, no guesswork",
  "Care in every finish and detail",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="about"
        className="scroll-mt-24 bg-paper px-6 py-24 md:px-15 md:py-36"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-20">
          <div>
            <Reveal as="p" className={eyebrowClass}>
              A better way to build · Chennai
            </Reveal>
            <Reveal
              as="h2"
              className="mt-8 max-w-[750px] font-display text-[clamp(3.2rem,7vw,7rem)] font-light leading-[0.92] tracking-[-0.045em] text-ink"
              delay={1}
            >
              Thoughtfully built.
              <br />
              <em className="text-terracotta">Made to last.</em>
            </Reveal>
          </div>
          <div className="max-w-[520px] pb-2 md:justify-self-end">
            <Reveal
              as="p"
              className="text-base leading-8 text-ash md:text-lg md:leading-9"
              delay={2}
            >
              A home or workplace is one of life&apos;s biggest investments. We
              bring planning, construction, and renovation together with care,
              clear communication, and respect for the people who will use the
              space.
            </Reveal>
            <Reveal as="div" className="mt-8" delay={3}>
              <Link
                href="#services"
                className="group inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Discover what we do
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1440px] gap-5 md:mt-24 md:grid-cols-[1.45fr_0.75fr] md:items-end md:gap-8">
          <Reveal
            as="div"
            className="group relative aspect-[1.28] overflow-hidden bg-stone md:aspect-[1.35]"
            delay={2}
          >
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=85&fit=crop"
              alt="A contemporary home designed around everyday life"
              fill
              sizes="(max-width: 768px) 100vw, 62vw"
              className="object-cover transition-transform duration-1000 ease-forma group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-paper md:inset-x-8 md:bottom-8">
              <div>
                <span className="mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-terracotta-light">
                  Residential · Chennai
                </span>
                <p className="font-display text-2xl font-light md:text-4xl">
                  Made for the life inside.
                </p>
              </div>
              <span className="hidden font-display text-5xl font-light text-paper/70 sm:block">
                01
              </span>
            </div>
          </Reveal>
          <div className="flex flex-col gap-5 md:pb-2">
            <Reveal
              as="div"
              className="group relative aspect-[1.85] overflow-hidden bg-stone md:aspect-[1.5]"
              delay={3}
            >
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=85&fit=crop"
                alt="Commercial construction project in Chennai"
                fill
                sizes="(max-width: 768px) 100vw, 32vw"
                className="object-cover transition-transform duration-1000 ease-forma group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-[0.62rem] uppercase tracking-[0.18em] text-paper">
                Commercial · Chennai
              </span>
            </Reveal>
            <Reveal
              as="div"
              className="flex items-center justify-between border-t border-fog pt-5"
              delay={3}
            >
              <p className="max-w-[300px] text-sm leading-6 text-ash">
                From the first site visit to the final finish, we keep quality
                and communication in focus.
              </p>
              <span className="ml-4 font-display text-5xl font-light text-terracotta">
                02
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-6 py-20 text-paper md:px-15 md:py-24">
        <div className="pointer-events-none absolute -right-40 -top-56 size-[620px] rounded-full border border-paper/10" />
        <div className="pointer-events-none absolute -right-20 -top-36 size-[460px] rounded-full border border-paper/10" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">
          <div>
            <Reveal
              as="p"
              className="mb-5 text-[0.65rem] uppercase tracking-[0.22em] text-terracotta-light"
            >
              The AK Builders standard
            </Reveal>
            <Reveal
              as="h2"
              className="max-w-[450px] font-display text-[clamp(2.8rem,5vw,5rem)] font-light leading-[0.95]"
              delay={1}
            >
              Confidence at every stage.
            </Reveal>
            <Reveal
              as="p"
              className="mt-5 max-w-[380px] text-sm leading-7 text-paper/65"
              delay={2}
            >
              A building journey should feel exciting, not uncertain. We bring
              clarity to the decisions and care to the details.
            </Reveal>
          </div>
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {promises.map((promise, index) => (
              <Reveal
                key={promise}
                as="article"
                delay={((index % 2) + 1) as 1 | 2}
                className="border-t border-paper/20 pt-4"
              >
                <span className="mb-4 block font-display text-3xl font-light text-terracotta-light">
                  0{index + 1}
                </span>
                <h3 className="text-sm text-paper/90">{promise}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 bg-mist px-6 py-24 md:px-15 md:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <Reveal as="p" className={eyebrowClass}>
                How we can help
              </Reveal>
              <Reveal as="h2" className={sectionTitleClass} delay={1}>
                Built around
                <br />
                what matters.
              </Reveal>
            </div>
            <Reveal
              as="p"
              className="max-w-[440px] pb-2 text-sm leading-7 text-ash md:justify-self-end md:text-base"
              delay={2}
            >
              One trusted team for new builds and thoughtful transformations —
              with the right expertise at every stage.
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-20">
            {services.map((service, index) => {
              const image = serviceImages[index];
              return (
                <Reveal
                  key={service.num}
                  as="article"
                  delay={((index % 2) + 1) as 1 | 2}
                  className="group overflow-hidden bg-paper"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-forma group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-5 top-5 flex size-10 items-center justify-center bg-terracotta font-sans text-[0.65rem] tracking-[0.12em] text-ink">
                      {service.num}
                    </span>
                    <span className="absolute bottom-5 right-5 flex size-11 items-center justify-center bg-ink text-paper transition-colors duration-300 group-hover:bg-terracotta group-hover:text-ink">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <div className="flex min-h-[170px] flex-col justify-between gap-5 px-6 py-6 md:flex-row md:items-end md:px-8 md:py-8">
                    <div>
                      <h3 className="font-display text-[1.8rem] font-normal leading-tight text-ink md:text-[2.1rem]">
                        {service.name}
                      </h3>
                      <p className="mt-3 max-w-[480px] text-sm leading-6 text-ash">
                        {service.description}
                      </p>
                    </div>
                    <ContactTrigger>
                      <button
                        type="button"
                        aria-label={`Enquire about ${service.name}`}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-fog text-ink transition-all hover:border-terracotta hover:bg-terracotta hover:text-paper"
                      >
                        <ArrowRight className="size-4" />
                      </button>
                    </ContactTrigger>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-24 bg-paper px-6 py-24 md:px-15 md:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="p" className={eyebrowClass}>
            From first conversation to handover
          </Reveal>
          <Reveal as="h2" className={sectionTitleClass} delay={1}>
            Our Process
          </Reveal>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:px-15 md:py-32">
        <div className="pointer-events-none absolute -right-16 -top-28 size-[420px] rounded-full border border-paper/15 md:size-[680px]" />
        <div className="pointer-events-none absolute -right-2 -top-14 size-[300px] rounded-full border border-paper/15 md:size-[550px]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal as="p"             className="text-eyebrow uppercase tracking-[0.24em] text-terracotta-light">
              Your next chapter starts here
            </Reveal>
            <Reveal
              as="h2"
              className="mt-7 max-w-[900px] font-display text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.04em]"
              delay={1}
            >
              Let&apos;s build something
              <br />
              <em>worth coming home to.</em>
            </Reveal>
          </div>
          <Reveal as="div" delay={2}>
            <ContactTrigger>
              <Button
                variant="dark"
                className="group border border-terracotta bg-terracotta text-ink hover:bg-paper hover:text-ink"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </ContactTrigger>
          </Reveal>
        </div>
      </section>

      <div id="contact" className="scroll-mt-24">
        <Footer />
      </div>
    </>
  );
}
