import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function SundayServiceSchedule() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Sunday Service Schedule</h1>
                    <p>Join us for Sunday service at 10:30am</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">Sunday Service</h2>
                                <span className="my-3 block text-2xl font-semibold">10:30am</span>
                                <p className="text-muted-foreground text-sm">In person and online</p>
                            </div>

                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Watch Live</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Worship Service', 'Children\'s Church', 'Nursery Available', 'Prayer Meeting'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">Prayer Meeting</h2>
                                    <span className="my-3 block text-2xl font-semibold">7:00pm</span>
                                    <p className="text-muted-foreground text-sm">In person</p>
                                </div>

                                <Button asChild className="w-full">
                                    <Link href="">Learn More</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium">Join us for prayer meeting :</div>

                                <ul className="mt-4 list-outside space-y-3 text-sm">
                                    {['Prayer for the Church', 'Prayer for the Community', 'Prayer for the Nations'].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

