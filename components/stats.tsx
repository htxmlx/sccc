export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Smyrna Christian Church in numbers
                    </h2>
                    <p>
                        Celebrating faith and community, Smyrna Christian Church
                        is where hearts and hands come together to serve and
                        uplift.
                    </p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+300</div>
                        <p>Members strong</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">50+</div>
                        <p>Weekly Services</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">100+</div>
                        <p>Community Events</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
