export default function MissionVision() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Our Mission and Vision
                    </h2>
                    <p>
                        At Smyrna Christian Church, our mission is to make
                        disciples of all nations, baptizing them in the name of
                        the Father, Son, and Holy Spirit, and teaching them to
                        obey everything that Jesus has commanded us.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>
                            Our vision is to be a community of believers who are
                            passionate about serving Jesus Christ and sharing
                            the love of God with our community.
                        </p>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>
                                Therefore go and make disciples of all nations,
                                baptizing them in the name of the Father and of
                                the Son and of the Holy Spirit, and teaching
                                them to obey everything I have commanded you.
                                And surely I am with you always, to the very end
                                of the age. - Matthew 28:19-20
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
