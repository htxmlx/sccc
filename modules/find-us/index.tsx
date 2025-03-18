"use client";

import { Header } from "@/components/header";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";
import { transitionVariants } from "@/lib/transitions";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MapboxExample = dynamic(() => import("@/modules/find-us/map"), {
    ssr: false,
    loading: () => <p>Loading satellite map...</p>,
});

const FindUsPage = () => {
    return (
        <>
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
                >
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            className="absolute inset-0 -z-20"
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center max-w-4xl sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    className="mt-8 font-black text-4xl md:text-5xl lg:mt-16"
                                    as="h1"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                >
                                    Visit us @ Ariola Street, Carles, Iloilo
                                </TextEffect>
                                <TextEffect
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                                    delay={0.5}
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                >
                                    A place to connect with God, grow in faith,
                                    and serve the community.
                                </TextEffect>
                                <AnimatedGroup
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
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
                                    <div
                                        key="1"
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                                    >
                                        <Button
                                            asChild
                                            className="rounded-xl px-5 text-base"
                                            size="lg"
                                        >
                                            <Link
                                                target="_blank"
                                                href="https://www.google.com/maps/place/Smyrna+Christian+Church+Carles/data=!4m2!3m1!1s0x0:0xc7935d09941f4e42?sa=X&ved=1t:2428&ictx=111"
                                            >
                                                <span className="text-nowrap">
                                                    View on Google Maps
                                                </span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        asChild
                                        className="h-10.5 rounded-xl px-5"
                                        key="2"
                                        size="lg"
                                        variant="ghost"
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

                        <AnimatedGroup variants={{ ...transitionVariants }}>
                            <div className="aspect-video mx-auto max-w-7xl px-6 mt-20">
                                <MapboxExample />
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    );
};

export default FindUsPage;
