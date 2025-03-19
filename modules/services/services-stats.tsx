export default function ServicesStatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Church Services
                    </h2>
                    <p>
                        Join us for inspiring worship services designed to
                        uplift your spirit and strengthen your faith.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>
                            Our dedicated team is here to guide you through your
                            spiritual journey and provide support.
                        </p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                                    +300
                                </div>
                                <p>Weekly Attendees</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                                    +50
                                </div>
                                <p>Community Events</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>
                                The community at our church has been a source of
                                immense support and encouragement. It's a place
                                where we grow together in faith.
                            </p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">
                                    Jane Doe, Member
                                </cite>
                                <img
                                    className="h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Community Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
