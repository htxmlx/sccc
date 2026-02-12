"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Beliefs", href: "/beliefs" },
      { name: "Leadership", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Small Groups", href: "/groups" },
      { name: "Kids & Youth", href: "/kids" },
      { name: "Events", href: "/events" },
      { name: "Volunteer", href: "/serve" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Sermons", href: "/sermons" },
      { name: "Podcast", href: "/podcast" },
      { name: "Worship Music", href: "/music" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Visit",
    links: [
      { name: "Plan a Visit", href: "/visit" },
      { name: "Service Times", href: "/times" },
      { name: "Directions", href: "/directions" },
      { name: "Online Campus", href: "/online" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border relative z-10">
      {/* 1. THE BIG "CALL TO ACTION" (Apple Style Billboard) */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 border-b border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6"
            >
              Everyone is welcome. <br />
              <span className="text-muted-foreground">
                See you this Sunday.
              </span>
            </motion.h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 text-base h-14 shadow-lg hover:scale-105 transition-transform"
              >
                Plan Your Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base h-14 hover:bg-secondary"
              >
                Service Times
              </Button>
            </div>
          </div>

          {/* Map / Location Badge */}
          <div className="p-6 rounded-3xl bg-secondary/30 border border-border/50 backdrop-blur-sm w-full md:w-auto min-w-[300px]">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-background rounded-full shadow-sm">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Main Campus</h4>
                <p className="text-sm text-muted-foreground">
                  123 Grace Blvd, City
                </p>
              </div>
            </div>
            <div className="h-24 w-full bg-muted rounded-xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
              {/* Placeholder Map Image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE GRID & NEWSLETTER */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Newsletter Column (Span 2) */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-2">
                Stay in the loop.
              </h4>
              <p className="text-muted-foreground text-sm">
                Get the latest updates on events, sermons, and community news
                delivered to your inbox.
              </p>
            </div>

            <div className="relative">
              <Input
                type="email"
                placeholder="Email address"
                className="h-12 rounded-full bg-secondary/50 border-transparent focus:border-primary focus:bg-background transition-all pr-12"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 rounded-full"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Links Grid (Span 4) */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((column, colIndex) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h4 className="font-semibold text-foreground text-sm">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: colIndex * 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-muted-foreground text-center md:text-left">
            <span>
              &copy; {new Date().getFullYear()} Church Name. All rights
              reserved.
            </span>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="p-2 rounded-full bg-background border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
