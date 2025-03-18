import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
                <img
                    className="rounded-(--radius) w-full"
                    src="https://www.shutterstock.com/image-photo/christian-raise-hand-worship-praise-600nw-2486497837.jpg"
                    alt="church image"
                    height=""
                    width=""
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">
                        Discover the community and spirit at Smyrna Christian
                        Church.
                    </h2>
                    <div className="space-y-6">
                        <p>
                            Smyrna Christian Church is a welcoming place where
                            faith and community come together. Join us for
                            worship, fellowship, and outreach programs that
                            inspire and enrich lives.
                        </p>

                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5"
                        >
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
