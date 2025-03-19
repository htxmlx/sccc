import Headline from "@/components/headline";
import Section from "@/components/section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/transitions";
import GenerateSermonsSection from "@/modules/sermon/generate-sermon";

export default function Sermon() {
    return (
        <Section>
            <Headline
                title="AI Sermons Assistant"
                subtitle="Use our sermon outline generator to help you write a sermon that is relevant to your congregation."
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
                <GenerateSermonsSection />
            </AnimatedGroup>
        </Section>
    );
}
