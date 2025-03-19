import Headline from "@/components/headline";
import Section from "@/components/section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/transitions";

export default function Home() {
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
               <GenerateSermonsSection/>
            </AnimatedGroup>
        </Section>
    );
}
