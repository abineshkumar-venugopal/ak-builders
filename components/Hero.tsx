import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import MagnetLines from "@/components/MagnetLines";
import TechText from "@/components/TechText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(980px,100svh)] min-h-screen items-center overflow-hidden bg-[#181715] text-paper"
    >
      <Image
        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=85&fit=crop"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(18_17_15/88%)_0%,rgb(18_17_15/65%)_48%,rgb(18_17_15/22%)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(18_17_15/65%)_0%,transparent_36%)]" />

      <div className="relative z-[2] mx-auto flex min-h-[min(980px,100svh)] w-full max-w-[1600px] flex-col justify-between px-6 pb-8 pt-40 md:px-15 md:pb-10 md:pt-44">
        <div>
          <div className="mb-8 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-paper/75 md:mb-10">
            <span className="size-2 rotate-45 bg-terracotta-light" />
            <span>Built with intention · Chennai</span>
          </div>

          <TechText
            lines={["Built with care.", "Made for life."]}
            className="mb-8 max-w-[1100px] font-display text-[clamp(4.1rem,10.5vw,10rem)] font-light leading-[0.82] tracking-[-0.055em] text-paper"
          />

          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <p className="max-w-[420px] text-sm leading-7 text-paper/75 md:text-base md:leading-8">
              Residential and commercial construction, planned with care and
              delivered with the details that make a place feel like yours.
            </p>
            <Link
              href="/projects"
              className="group inline-flex w-fit items-center gap-4 bg-terracotta px-6 py-4 text-[0.68rem] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-paper"
            >
              Explore our work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between border-t border-paper/30 pt-5 text-[0.6rem] uppercase tracking-[0.2em] text-paper/75 md:mt-28">
          <div className="flex flex-col gap-1">
            <span className="text-paper/50">Featured project</span>
            <span>Guru Nagar Residence · Chennai</span>
          </div>
          <Link
            href="#about"
            aria-label="Scroll to learn about AK Builders"
            className="inline-flex items-center gap-2 transition-colors hover:text-terracotta-light"
          >
            Discover
            <ArrowDownRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
