import Headline from "@/components/headline";
import Section from "@/components/section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/transitions";
import FacebookPosts from "@/modules/events/facebook-posts";

export default function Events() {
    return (
        <Section>
            <Headline
                title=" Latest events of the church"
                subtitle="We host various events throughout the year, from youth camps to community outreach programs. We invite you to join us and experience the love of God."
                primaryButton={{
                    href: "https://www.facebook.com/p/Smyrna-Christian-Church-100071896509804/",
                    text: "Visit our Facebook Page",
                    isExternal: true,
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
                <FacebookPosts />
            </AnimatedGroup>
        </Section>
    );
}
