"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Play,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <div
      ref={containerRef}
      className="relative min-h-[200vh] bg-black selection:bg-blue-500/30"
    >
      {/* --- HERO SECTION --- */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-black">
        <motion.div
          style={{ y: smoothY }}
          className="absolute inset-0 z-0 opacity-60"
        >
          <motion.div
            animate={{
              x: [-20, 20, -20],
              y: [-10, 10, -10],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full will-change-transform"
            style={{
              background:
                "radial-gradient(circle at center, rgba(37,99,235,0.3) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
          <motion.div
            animate={{ x: [20, -20, 20], y: [10, -10, 10], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-20%] w-[90vw] h-[90vw] rounded-full will-change-transform"
            style={{
              background:
                "radial-gradient(circle at center, rgba(124,58,237,0.2) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center"
        >
          <FadeIn>
            <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2.5 shadow-2xl mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.2em] text-blue-100/80 uppercase">
                Service starts 09:00 AM
              </span>
            </div>
          </FadeIn>

          <motion.h1
            style={{ scale: textScale }}
            initial={{ opacity: 0, y: 40, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.08em" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[18vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-2xl select-none"
          >
            Smyrna.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 text-lg md:text-2xl font-medium text-white/50 tracking-wide max-w-lg"
          >
            Rooted in Faith. <br className="hidden md:block" />
            <span className="text-white/30">Strengthened by Love.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="absolute bottom-12 flex items-center gap-1.5 p-2 pr-6 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <Button
              asChild
              className="rounded-full h-12 px-8 bg-white text-black hover:bg-white/90 font-semibold tracking-tight transition-all hover:scale-105"
            >
              <Link href="/visit">Plan a Visit</Link>
            </Button>
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Button
              variant="ghost"
              className="rounded-full h-12 px-4 text-white hover:bg-white/5 hover:text-white transition-colors gap-2"
            >
              Learn More
              <ChevronRight size={16} className="opacity-50" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 mt-[100vh]">
        <div className="bg-background rounded-t-[3rem] shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-t border-white/10 pt-32 pb-32">
          <div className="max-w-5xl mx-auto px-6 mb-40 text-center md:text-left">
            <FadeIn>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter text-foreground leading-[0.95]">
                A faith-filled community <br />
                <span className="text-muted-foreground">welcoming all.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto px-6 mb-40">
            <div className="flex justify-between items-end mb-12">
              <h3 className="text-3xl font-bold tracking-tight text-foreground">
                Our Journey.
              </h3>
              <Button
                asChild
                variant="link"
                className="text-lg text-primary p-0"
              >
                <Link href="/ministries">
                  Grow more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              {/* FEATURE CARD: POBLACION CARLES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-secondary/50 border border-border/50"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
                  alt="Worship at Smyrna"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <h4 className="text-3xl font-bold text-white mb-2">
                    Carles, Iloilo.
                  </h4>
                  <p className="text-white/80 text-lg max-w-md">
                    Join our family in the heart of Poblacion as we worship and
                    walk together.
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 relative group overflow-hidden rounded-[2rem] bg-card border border-border p-8 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <ArrowRight size={24} className="-rotate-45" />
                    </div>
                    <h4 className="text-2xl font-bold text-card-foreground">
                      Fellowship
                    </h4>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-muted-foreground text-sm font-medium">
                      Unity in love.
                    </p>
                    <Button
                      asChild
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <Link href="/about">
                        <ChevronRight />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 relative group overflow-hidden rounded-[2rem] bg-secondary border border-border p-8 flex flex-col justify-between"
                >
                  <h4 className="text-2xl font-bold text-foreground">
                    Worship
                  </h4>
                  <p className="text-muted-foreground">
                    Sundays at Ariola Street
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-foreground/80 bg-background/50 p-2 rounded-xl">
                    <Calendar size={14} className="text-primary" />
                    <span>Sunday Service</span>
                    <span className="text-muted-foreground ml-auto font-mono text-xs">
                      09:00 AM
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* VISIT SECTION */}
          <section className="pt-20 px-6 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-12">
                Visit us this Sunday.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    Service Times
                  </h4>
                  <p className="text-muted-foreground">09:00 AM - 12:00 PM</p>
                </div>
                <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    Location
                  </h4>
                  <p className="text-muted-foreground">
                    Ariola Street, Poblacion, Carles
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
