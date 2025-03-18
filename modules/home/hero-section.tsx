import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { transitionVariants } from "@/lib/transitions";
import Link from "next/link";
import ContentSection from "./content-3";
import StatsSection from "./stats";
import WallOfLoveSection from "./testimonials";

export default function HeroSection() {
    return (
        <main className="overflow-hidden">
            <Section>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center max-w-4xl sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 font-black text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                        >
                            Welcome to Smyrna Christian Church
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                        >
                            A place to connect with God, grow in faith, and
                            serve the community.
                        </TextEffect>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                        >
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base"
                                >
                                    <Link href="#link">
                                        <span className="text-nowrap">
                                            Join Us
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-10.5 rounded-xl px-5"
                            >
                                <Link href="#link">
                                    <span className="text-nowrap">
                                        Learn More
                                    </span>
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>

                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                >
                    <ContentSection />
                    <StatsSection />
                    <WallOfLoveSection />
                </AnimatedGroup>
            </Section>
        </main>
    );
}
