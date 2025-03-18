import Headline from "@/components/headline";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Section from "@/components/section";
import { transitionVariants } from "@/lib/transitions";
import ContentSection from "./content-3";
import StatsSection from "./stats";
import WallOfLoveSection from "./testimonials";

export default function HeroSection() {
    return (
        <Section>
            <Headline
                title="Welcome to Smyrna Christian Church"
                subtitle="A place to connect with God, grow in faith, and
                            serve the community."
                primaryButton={{
                    href: "#link",
                    text: "Join Us",
                }}
                secondaryButton={{
                    href: "#link",
                    text: "Learn More",
                }}
            />

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
    );
}
