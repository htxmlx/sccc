"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  MapPin,
  Info,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function GivePage() {
  return (
    <div className="bg-background min-h-screen pb-40">
      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium uppercase tracking-widest mb-8 border border-border/50">
            Generosity
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-8 leading-[0.9]">
            Support the <br />
            <span className="text-muted-foreground">movement.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Your contributions help us create a home for the community. We’ve
            kept it simple so you can focus on the impact.
          </p>
        </FadeIn>
      </section>

      {/* 2. GIVING METHODS (The "Wallet" Cards) */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DIGITAL: GCash Card */}
          <FadeIn delay={0.1}>
            <div className="group relative p-10 rounded-[2.5rem] bg-[#007dfe]/10 border border-[#007dfe]/20 h-full flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Smartphone className="text-[#007dfe]" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Give via GCash
                </h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Scan the code or use the account details below for instant
                  digital giving.
                </p>

                <div className="p-6 bg-background/50 backdrop-blur-md rounded-2xl border border-border/40 inline-block">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-bold">
                    Account Number
                  </div>
                  <div className="text-2xl font-mono font-bold tracking-tight text-foreground select-all cursor-pointer">
                    0912 345 6789
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">
                    Church Name Official
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#007dfe] group-hover:gap-4 transition-all">
                Copy Number <ArrowRight size={14} />
              </div>

              {/* Decorative Subtle Branding */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#007dfe]/5 rounded-full blur-[80px]" />
            </div>
          </FadeIn>

          {/* PHYSICAL: In-Person Card */}
          <FadeIn delay={0.2}>
            <div className="group p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-border/50">
                  <MapPin className="text-foreground" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  In-Person
                </h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Join us during our Sunday services to give via cash or check
                  at the giving boxes located at the entrance.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-medium">
                      Sunday 09:00 AM & 11:00 AM
                    </span>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <strong>123 Grace Avenue</strong>, San Francisco, CA
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-12 w-full rounded-full h-12 border-border/50 hover:bg-background"
              >
                Get Directions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. TRANSPARENCY NOTE */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <FadeIn delay={0.3}>
          <div className="inline-flex p-3 rounded-2xl bg-secondary/20 mb-6">
            <ShieldCheck className="text-muted-foreground" size={24} />
          </div>
          <h4 className="text-xl font-bold mb-4">Trusted stewardship.</h4>
          <p className="text-muted-foreground leading-relaxed">
            Every peso given to our church is used to support local ministries,
            community outreach, and global missions. We undergo annual financial
            audits to ensure complete transparency.
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
