import CalltoActionSection from "@/components/cta";
import Headline from "@/components/headline";
import Section from "@/components/section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/transitions";
import TeamSection from "@/modules/about/pastors";
import ServicesStatsSection from "@/modules/services/services-stats";
import SundayServiceSchedule from "@/modules/services/sunday-service-schedule";

export default function Services() {
    return (
        <Section>
            <Headline
                title="Services and Schedule"
                subtitle="Come and experience the presence of God with us."
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
                <SundayServiceSchedule />
                <ServicesStatsSection />
                <CalltoActionSection  />
            </AnimatedGroup>
        </Section>
    );
}
