"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart, Users, Globe, BookOpen, Anchor } from "lucide-react";
import Image from "next/image";

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

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="bg-background min-h-screen pb-20 overflow-hidden"
    >
      {/* 1. HERO: Smyrna Identity */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center md:text-left">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium uppercase tracking-widest mb-8 border border-border/50">
            Our Story
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-foreground mb-8">
            Rooted in Faith. <br className="hidden md:block" />
            <span className="text-muted-foreground">Strengthened by Love.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Smyrna Christian Church is a faith-filled community in Carles
            welcoming all. Worship, fellowship, and love unite us as we journey
            together in the heart of Iloilo.
          </p>
        </FadeIn>
      </section>

      {/* 2. CORE VALUES (The Smyrna Way) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Value 1: Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-500">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Fellowship & Unity.</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                In Poblacion and beyond, we believe we are stronger together.
                Love unites our journey.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Value 2: The Gospel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 p-10 rounded-[2.5rem] bg-background border border-border relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                <Anchor size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Unchanging Truth.</h3>
              <p className="text-muted-foreground">
                Founded on the Word of God, providing a steady anchor for every
                family in Carles.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="text-4xl font-bold text-foreground">780+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium mt-1">
                Faithful Followers
              </div>
            </div>
          </motion.div>

          {/* Value 3: Truth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50"
          >
            <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm text-green-500">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Biblical Growth.</h3>
            <p className="text-muted-foreground">
              Learning and growing together.
            </p>
          </motion.div>

          {/* Value 4: Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50"
          >
            <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm text-red-500">
              <Heart size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Active Love.</h3>
            <p className="text-muted-foreground">
              Serving our neighbors in Iloilo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE TIMELINE (History of Smyrna) */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-[50px_1fr] gap-8">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-border" />
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-blue-500"
            />
          </div>

          <div className="space-y-24 py-10">
            {[
              {
                year: "Our Foundation",
                title: "A Call to Carles",
                desc: "Smyrna Christian Church was established with a vision to create a welcoming, faith-filled community in Poblacion.",
              },
              {
                year: "Growth",
                title: "Worship & Fellowship",
                desc: "As our family grew, so did our commitment to uniting the community through the love of Christ.",
              },
              {
                year: "Today",
                title: "Strengthened by Love",
                desc: "Now a vibrant home for hundreds, we continue to reach out and grow more every single day.",
              },
            ].map((item, i) => (
              <FadeIn key={i} className="relative">
                <span className="absolute -left-[59px] top-1 w-4 h-4 rounded-full bg-background border-[3px] border-blue-500 z-10" />
                <span className="text-blue-500 font-bold tracking-widest text-sm block mb-2 uppercase">
                  {item.year}
                </span>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Our Leadership</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-secondary">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      i === 0
                        ? "1507003211169-0a1dd7228f2d"
                        : i === 1
                          ? "1554151228-14d9def656e4"
                          : "1500648767791-00dcc994a43e"
                    }?q=80&w=800&auto=format&fit=crop`}
                    alt="Leadership"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-bold text-lg text-foreground">
                  Leadership Name
                </h4>
                <p className="text-sm text-muted-foreground">
                  Smyrna Christian Church
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
