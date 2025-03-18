import Headline from "@/components/headline";
import Section from "@/components/section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/transitions";
import ContactSection from "@/modules/contact/contact";

export default function Contact() {
    return (
        <Section>
            <Headline
                title="Get in Touch"
                subtitle="We'd love to hear from you, and chat about how we can help you on your spiritual journey."
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
                <ContactSection />
            </AnimatedGroup>
        </Section>
    );
}
