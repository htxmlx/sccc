"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  Shirt,
  Baby,
  Coffee,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function VisitPage() {
  return (
    <div className="bg-background min-h-screen pb-32">
      {/* 1. HERO: Minimalist Invitation */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-foreground mb-8">
            See you <br />
            <span className="text-muted-foreground font-medium italic">
              this Sunday.
            </span>
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Location & Times Card */}
          <FadeIn delay={0.1}>
            <div className="p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-primary mb-6">
                  <MapPin size={24} />
                  <span className="font-bold tracking-widest text-xs uppercase">
                    Main Campus
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-2">123 Grace Avenue</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  San Francisco, CA 94103
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b border-border/50">
                    <span className="font-medium">Sunday Morning</span>
                    <span className="text-muted-foreground font-mono">
                      09:00 AM
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-border/50">
                    <span className="font-medium">Sunday Midday</span>
                    <span className="text-muted-foreground font-mono">
                      11:00 AM
                    </span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full mt-10 rounded-full h-14 text-base font-semibold group"
              >
                Get Directions{" "}
                <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100" />
              </Button>
            </div>
          </FadeIn>

          {/* Map Preview */}
          <FadeIn delay={0.2}>
            <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-700 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE "BENTO" OF EXPECTATIONS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            What to expect.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: Car,
              title: "Parking",
              desc: "Dedicated guest parking is available right at the front entrance.",
            },
            {
              icon: Shirt,
              title: "Dress Code",
              desc: "Come as you are. Whether it's a suit or sneakers, you'll fit right in.",
            },
            {
              icon: Baby,
              title: "Kids",
              desc: "A safe, fun experience for kids (birth-5th grade) during every service.",
            },
            {
              icon: Coffee,
              title: "Coffee",
              desc: "Hot coffee and local pastries are on us. Arrive early to grab some.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-secondary/20 border border-border/40 hover:bg-secondary/40 transition-colors h-full">
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. FAQ SECTION: Apple Support Style */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before your first visit.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-border/50 py-2"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                How long is the service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Our services typically last about 70 minutes. We start with live
                worship music, followed by a 35-minute message from one of our
                pastors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-border/50 py-2"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                Do I need to sign up before I come?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                No sign-up is required! However, if you have kids, you can "Plan
                Your Visit" below to pre-register them and save time at
                check-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-border/50 py-2"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                Where do I go when I arrive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Look for the "First Time Guest" flags in the parking lot. Our
                greeters will be at the front doors to show you around and help
                you find a seat.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>
      </section>

      {/* 4. THE CONCIERGE DOCK (Bottom Call to Action) */}
      <div className="fixed bottom-8 inset-x-0 px-6 z-40 pointer-events-none">
        <FadeIn delay={0.5}>
          <div className="max-w-fit mx-auto bg-background/80 backdrop-blur-2xl border border-border/50 rounded-full p-2 pr-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 pointer-events-auto">
            <Button className="rounded-full h-12 px-8 font-bold tracking-tight shadow-xl">
              I'm Coming This Sunday
            </Button>
            <span className="hidden md:block text-sm font-medium text-muted-foreground">
              Let us know and we'll have a gift waiting for you.
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
