import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Pastor David C. Simpson",
        role: "Senior Pastor",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "At Smyrna Christian Church, we are passionate about helping people find their purpose and place in the family of God.",
    },
    {
        name: "Pastor Brian D. Johnson",
        role: "Youth Pastor",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "At Smyrna Christian Church, we believe that every person is important to God and deserves to hear the message of salvation.",
    },
    {
        name: "Pastor Rachel M. Rodriguez",
        role: "Children's Pastor",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        quote: "At Smyrna Christian Church, we are committed to helping children develop a strong foundation in their faith.",
    },
    {
        name: "Pastor John D. Smith",
        role: "Pastor of Outreach",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        quote: "At Smyrna Christian Church, we are passionate about reaching out to our community and sharing the love of Christ.",
    },
    {
        name: "Sister Janet K. Doe",
        role: "Deaconess",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        quote: "At Smyrna Christian Church, we are committed to serving others and demonstrating the love of Christ.",
    },
    {
        name: "Brother James T. Doe",
        role: "Deacon",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "At Smyrna Christian Church, we are passionate about serving others and being the hands and feet of Jesus.",
    },
];

const chunkArray = (
    array: Testimonial[],
    chunkSize: number
): Testimonial[][] => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const testimonialChunks = chunkArray(
    testimonials,
    Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-0">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">
                            Meet the Team at Smyrna Christian Church
                        </h2>
                        <p className="text-body mt-6">
                            At Smyrna Christian Church, we are a community of
                            believers who are passionate about serving others
                            and sharing the love of Christ.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3">
                                {chunk.map(
                                    ({ name, role, quote, image }, index) => (
                                        <Card key={index}>
                                            <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                                <Avatar className="size-9">
                                                    <AvatarImage
                                                        alt={name}
                                                        src={image}
                                                        loading="lazy"
                                                        width="120"
                                                        height="120"
                                                    />
                                                    <AvatarFallback>
                                                        ST
                                                    </AvatarFallback>
                                                </Avatar>

                                                <div>
                                                    <h3 className="font-medium">
                                                        {name}
                                                    </h3>

                                                    <span className="text-muted-foreground block text-sm tracking-wide">
                                                        {role}
                                                    </span>

                                                    <blockquote className="mt-3">
                                                        <p className="text-gray-700 dark:text-gray-300">
                                                            {quote}
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
