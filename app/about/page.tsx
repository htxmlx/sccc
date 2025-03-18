import Section from "@/components/section";
import MissionVision from "@/modules/about/mission-vision";
import PastorsSection from "@/modules/about/pastors";
import WorshipTeam from "@/modules/about/worship-team";
import FAQs from "@/modules/about/faqs";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/transitions";
import Headline from "@/components/headline";

export default function AboutUs() {
    return (
        <Section>
            <Headline
                title="About Our Church"
                subtitle="Smyrna Christian Church is a community of believers who are passionate about serving Jesus Christ and sharing the love of God with our community."
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
                <PastorsSection />
                <WorshipTeam />
                <MissionVision />
                <FAQs />
            </AnimatedGroup>
        </Section>
    );
}
