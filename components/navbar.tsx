"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Ministries", href: "/ministries" },
  { name: "Give", href: "/give" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const { setTheme, theme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const wasScrolled = latest > 20;
    if (wasScrolled !== isScrolled) setIsScrolled(wasScrolled);
  });

  const height = useTransform(scrollY, [0, 100], [80, 64]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  return (
    <>
      <motion.header
        style={{ height }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 border-b",
          isScrolled
            ? "bg-background/70 border-border/40 backdrop-blur-xl saturate-150 shadow-sm"
            : "bg-transparent border-transparent",
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <motion.div
              style={{ scale: logoScale }}
              className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center text-background shadow-lg group-hover:rotate-3 transition-transform duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M4 12H20"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <motion.span
              style={{ scale: logoScale, originX: 0 }}
              className="text-lg font-bold tracking-tight text-foreground hidden sm:block"
            >
              Church.
            </motion.span>
          </Link>

          <nav
            className="hidden md:flex items-center bg-secondary/50 rounded-full px-2 py-1.5 border border-transparent hover:border-border/40 transition-colors backdrop-blur-sm"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-5 py-2 text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-background shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 mix-blend-multiply dark:mix-blend-normal">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full text-muted-foreground hover:bg-secondary transition-colors relative overflow-hidden"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </button>

            {/* Desktop CTA Linked to /visit */}
            <Button
              asChild
              size="lg"
              className="hidden md:flex rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/visit">Plan a Visit</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground z-50 hover:bg-secondary rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-32 px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-5 border-b border-border/50 text-2xl font-bold tracking-tight text-foreground/80 hover:text-foreground hover:pl-2 transition-all"
                  >
                    {link.name}
                    <ChevronRight
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={20}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full h-14 text-lg rounded-2xl"
                >
                  <Link href="/give" onClick={() => setIsMobileMenuOpen(false)}>
                    Give
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full h-14 text-lg rounded-2xl shadow-lg"
                >
                  <Link
                    href="/visit"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Visit
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
