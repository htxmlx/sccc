"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Baby,
  User,
  Users,
  Heart,
  Coffee,
  Music,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- HELPERS ---
function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = ["Overview", "Next Gen", "Groups", "Outreach"];

export default function MinistriesPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-background min-h-screen pb-40">
      {/* 1. HERO: "Life Together" */}
      <section className="pt-40 pb-12 px-6 max-w-7xl mx-auto text-center md:text-left">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium uppercase tracking-widest mb-8 border border-border/50">
            Ministries
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-foreground mb-8">
            Life is better <br />
            <span className="text-muted-foreground">together.</span>
          </h1>
        </FadeIn>
      </section>

      {/* 2. STICKY SEGMENTED CONTROL (iOS Style) */}
      <div className="sticky top-20 z-30 px-6 mb-20">
        {/* This container ensures the pill is centered and has a fixed maximum width */}
        <div className="flex justify-center w-full">
          <div className="inline-flex p-1.5 rounded-full bg-secondary/80 backdrop-blur-2xl border border-border/50 shadow-lg">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 md:px-8 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center justify-center min-w-[100px]"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-background shadow-sm rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-200",
                    activeTab === tab
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* SECTION: NEXT GEN (Kids & Youth) */}
        <section id="next-gen" className="scroll-mt-40">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl font-bold tracking-tight">Next Gen.</h2>
              <p className="text-muted-foreground hidden md:block">
                Birth through High School
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* KIDS CARD: Playful & Colorful */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="group relative h-[600px] rounded-[2.5rem] bg-blue-50 overflow-hidden border border-blue-100 dark:bg-blue-950/30 dark:border-blue-900/50"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2638&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

              <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm">
                  <Baby size={28} />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    Kids.
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-lg mb-8 max-w-sm">
                    A safe, fun environment where kids can discover how much God
                    loves them.
                  </p>
                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none">
                    Check-in Info
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* YOUTH CARD: Edgy & Dark */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="group relative h-[600px] rounded-[2.5rem] bg-zinc-950 overflow-hidden text-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop"
                alt="Youth"
                fill
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
                <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center text-white shadow-sm border border-white/10">
                  <Music size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-4xl font-bold">Youth.</h3>
                    <span className="px-3 py-1 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest">
                      Wed 7PM
                    </span>
                  </div>
                  <p className="text-zinc-400 text-lg mb-8 max-w-sm">
                    Middle and High School students finding their identity and
                    purpose.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/30 text-white hover:bg-white hover:text-black"
                  >
                    Events Calendar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION: GROUPS (Community) */}
        <section id="groups" className="scroll-mt-40">
          <FadeIn>
            <div className="p-12 md:p-20 rounded-[3rem] bg-secondary/30 border border-border/50 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-orange-500 shadow-sm mb-8">
                  <Coffee size={32} />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Find your people.
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  We weren't meant to do life alone. Join a Community Group to
                  grow in your faith and build lasting friendships.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-base"
                  >
                    Browse Groups
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="rounded-full h-14 px-8 text-base"
                  >
                    Start a Group <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* DECORATIVE: Map / Locations Abstract */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] opacity-10 md:opacity-100 pointer-events-none">
                <div className="relative w-full h-full">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      className="absolute p-4 bg-background rounded-2xl shadow-xl flex items-center gap-3"
                      style={{
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 60}%`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <MapPin size={18} />
                      </div>
                      <div className="text-xs font-bold pr-2">
                        {
                          [
                            "Downtown",
                            "North Hills",
                            "Westside",
                            "Uptown",
                            "Suburbs",
                          ][i]
                        }
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION: OUTREACH (Serve) */}
        <section id="outreach" className="scroll-mt-40 pb-20">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight mb-12">
              Make a difference.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "First Impressions",
                icon: Heart,
                desc: "Greeters, Ushers, Parking",
              },
              {
                title: "Production",
                icon: Music,
                desc: "Audio, Video, Lighting",
              },
              { title: "Next Gen", icon: Baby, desc: "Kids & Youth Leaders" },
            ].map((team, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <team.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{team.title}</h3>
                    <p className="text-muted-foreground">{team.desc}</p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-border/50 flex items-center text-primary font-medium">
                    Join Team{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
