"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Share2,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Worship", "Community", "Next Gen", "Outreach"];

const events = [
  {
    id: 1,
    title: "Worship Night: Presence",
    category: "Worship",
    date: { day: "24", month: "FEB" },
    time: "7:00 PM",
    location: "Main Auditorium",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2670&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Young Adults Coffee Social",
    category: "Community",
    date: { day: "28", month: "FEB" },
    time: "6:30 PM",
    location: "The Commons",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Kids Camp Volunteer Briefing",
    category: "Next Gen",
    date: { day: "02", month: "MAR" },
    time: "10:00 AM",
    location: "Room 204",
  },
  {
    id: 4,
    title: "City Outreach: Food Drive",
    category: "Outreach",
    date: { day: "05", month: "MAR" },
    time: "08:00 AM",
    location: "Downtown Plaza",
  },
];

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

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredEvents =
    activeTab === "All"
      ? events
      : events.filter((e) => e.category === activeTab);

  return (
    <div className="bg-background min-h-screen pb-40">
      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium uppercase tracking-widest mb-8 border border-border/50">
            What's Happening
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-foreground mb-8 leading-[0.9]">
            Save the <br />
            <span className="text-muted-foreground font-medium">dates.</span>
          </h1>
        </FadeIn>
      </section>

      {/* 2. CENTERED FILTERS (Apple Pill Style) */}
      <div className="sticky top-20 z-30 px-6 mb-16">
        <div className="flex justify-center w-full">
          <div className="inline-flex p-1.5 rounded-full bg-secondary/80 backdrop-blur-2xl border border-border/50 shadow-lg">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 md:px-8 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center justify-center min-w-[80px]"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="event-pill"
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

      {/* 3. EVENTS GRID */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col justify-between p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-foreground text-background shadow-lg">
                      <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                        {event.date.month}
                      </span>
                      <span className="text-2xl font-bold tracking-tighter">
                        {event.date.day}
                      </span>
                    </div>

                    <button className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                      <Plus size={20} />
                    </button>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
                    {event.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} /> {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} /> {event.location}
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Event Details <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground text-lg">
              No events found in this category.
            </p>
            <Button variant="link" onClick={() => setActiveTab("All")}>
              View all events
            </Button>
          </div>
        )}
      </section>

      {/* 4. CALENDAR INTEGRATION (Footer Note) */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="w-16 h-16 bg-secondary rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
            <Calendar className="text-foreground" size={28} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Sync with your life.</h2>
          <p className="text-muted-foreground mb-10">
            Subscribe to our digital calendar to stay updated with every
            community gathering and service automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="rounded-full px-8">
              Apple Calendar
            </Button>
            <Button variant="secondary" className="rounded-full px-8">
              Google Calendar
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
