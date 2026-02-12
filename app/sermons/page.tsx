"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Clock,
  Calendar,
  Search,
  Filter,
  ChevronRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- FADE IN HELPER ---
function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const filters = ["All", "Series", "Topic", "Speaker", "Book of Bible", "Date"];
const series = [
  {
    title: "The Art of Stillness",
    date: "Oct 2025",
    episodes: 4,
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Ancient Future",
    date: "Sep 2025",
    episodes: 6,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Generic Faith",
    date: "Aug 2025",
    episodes: 3,
    image:
      "https://images.unsplash.com/photo-1507692049790-de58293a469d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "The Way Home",
    date: "Jul 2025",
    episodes: 5,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2674&auto=format&fit=crop",
  },
];

export default function SermonsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* 1. FEATURED HERO (Netflix Style) */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-end pb-20 px-6 md:px-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
            alt="Latest Sermon"
            fill
            className="object-cover"
          />
          {/* Heavy Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-6">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                New Series
              </span>
              <span className="text-white/60 text-sm font-medium flex items-center gap-1">
                <Calendar size={14} /> Oct 12, 2025
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              The Practice <br /> of Presence.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              In Part 1 of our new series, we explore what it means to be truly
              present in a distracted age.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base bg-white text-black hover:bg-white/90"
              >
                <Play fill="currentColor" className="mr-2 w-4 h-4" /> Watch
                Latest
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 backdrop-blur-md"
              >
                <Download className="mr-2 w-4 h-4" /> Audio Only
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. STICKY FILTER BAR */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Scrollable Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeFilter === filter
                    ? "bg-foreground text-background"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search sermons..."
              className="pl-9 h-10 rounded-full bg-secondary/30 border-transparent focus:bg-background transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 3. RECENT EPISODES GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Recent Series</h2>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
          >
            View Archive <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {series.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group cursor-pointer space-y-3">
                {/* Thumbnail */}
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <Play fill="white" className="ml-1 w-5 h-5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
                    {item.date}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.episodes} Episodes &bull; Pastor John Doe
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. POPULAR TOPICS (Pill Grid) */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Browse by Topic
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Anxiety",
            "Marriage",
            "Purpose",
            "Finances",
            "Prayer",
            "Holy Spirit",
            "Community",
            "Work",
            "Parenting",
            "Doubt",
          ].map((topic, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="px-6 py-3 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-secondary/60 transition-all cursor-pointer">
                <span className="text-sm font-medium text-foreground">
                  #{topic}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
