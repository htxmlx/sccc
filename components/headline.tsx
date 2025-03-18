import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedGroup } from "./ui/animated-group";
import { transitionVariants } from "@/lib/transitions";

export interface HeadlineProps {
    title: string;
    subtitle: string;
    primaryButton?: {
        text: string;
        href: string;
        isExternal?: boolean;
    };
    secondaryButton?: {
        text: string;
        href: string;
        isExternal?: boolean;
    };
}

export default function Headline({
    title,
    subtitle,
    primaryButton,
    secondaryButton,
}: HeadlineProps) {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-4xl sm:mx-auto lg:mr-auto lg:mt-0">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h1"
                        className="mt-8 font-black text-4xl md:text-5xl lg:mt-16"
                    >
                        {title}
                    </TextEffect>
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                    >
                        {subtitle}
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
                        {primaryButton && (
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base"
                                >
                                    <Link
                                        href={primaryButton.href}
                                        target={
                                            primaryButton.isExternal
                                                ? "_blank"
                                                : undefined
                                        }
                                    >
                                        <span className="text-nowrap">
                                            {primaryButton.text}
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        )}
                        {secondaryButton && (
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-10.5 rounded-xl px-5"
                            >
                                <Link
                                    href={secondaryButton.href}
                                    target={
                                        secondaryButton.isExternal
                                            ? "_blank"
                                            : undefined
                                    }
                                >
                                    <span className="text-nowrap">
                                        {secondaryButton.text}
                                    </span>
                                </Link>
                            </Button>
                        )}
                    </AnimatedGroup>
                </div>
            </div>
        </div>
    );
}
