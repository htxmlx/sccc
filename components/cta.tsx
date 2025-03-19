import { Button } from "@/components/ui/button";

interface CalltoActionProps {
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

export default function CalltoActionSection({
    heading = "Ready to Get Started?",
    description = "Join thousands of satisfied customers using our platform to build amazing websites.",
    buttons = {
        primary: {
            text: "Get Started",
            url: "https://www.shadcnblocks.com",
        },
        secondary: {
            text: "Learn More",
            url: "https://www.shadcnblocks.com",
        },
    },
}: CalltoActionProps) {
    return (
        <section className="py-32">
            <div className="container px-6 md:px-0">
<div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-primary text-primary-foreground max-w-7xl mx-auto p-6 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
                    <div className="flex-1">
                        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                            {heading}
                        </h3>
                        <p className="text-muted-foreground lg:text-lg">
                            {description}
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {buttons.secondary && (
                            <Button size="lg" variant="secondary" asChild>
                                <a href={buttons.secondary.url}>
                                    {buttons.secondary.text}
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
