"use client";

import { Header } from "@/components/header";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import { Card } from "@/components/ui/card";
import { transitionVariants } from "@/lib/transitions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function FacebookPosts() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `https://graph.facebook.com/v22.0/me/posts?fields=message,created_time,full_picture,permalink_url,attachments{media_type,media},event&access_token=${ACCESS_TOKEN}`
                );

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const data = await response.json();
                setPosts(data.data || []);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
                >
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section>
                    <div className="relative pt-16 md:pt-24">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20"
                        >
                            <Image
                                src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center max-w-4xl sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 font-black text-4xl md:text-5xl lg:mt-16"
                                >
                                    Latest events of the church
                                </TextEffect>

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
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row min-h-screen"
                                >
                                    {loading ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {Array.from({ length: 6 }).map(
                                                (_, i) => (
                                                    <Skeleton
                                                        key={i}
                                                        className="w-[400px] h-[400px]"
                                                    />
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {posts.length === 0 ? (
                                                <p className="col-span-full text-center text-gray-500">
                                                    No posts available.
                                                </p>
                                            ) : (
                                                posts.map((post) => (
                                                    <Card
                                                        key={post.id}
                                                        className="p-5 border rounded-xl shadow-md bg-white"
                                                    >
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <img
                                                                src={
                                                                    post.full_picture ||
                                                                    "https://via.placeholder.com/50"
                                                                }
                                                                alt="Profile"
                                                                className="w-12 h-12 rounded-full object-cover"
                                                            />
                                                            <div>
                                                                <p className="font-semibold text-lg">
                                                                    Smyrna
                                                                    Christian
                                                                    Church
                                                                </p>
                                                                <p className="text-gray-500 text-sm">
                                                                    {new Date(
                                                                        post.created_time
                                                                    ).toLocaleString()}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Post Message */}
                                                        {post.message && (
                                                            <p className="text-gray-800 mb-3">
                                                                {post.message}
                                                            </p>
                                                        )}

                                                        {/* Post Image */}
                                                        {post.full_picture && (
                                                            <img
                                                                src={
                                                                    post.full_picture
                                                                }
                                                                alt="Post media"
                                                                className="w-full h-auto rounded-lg shadow"
                                                                width="400"
                                                                height="400"
                                                            />
                                                        )}

                                                        {/* View on Facebook Link */}
                                                        {post.permalink_url && (
                                                            <a
                                                                href={
                                                                    post.permalink_url
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:underline mt-2 block"
                                                            >
                                                                View on Facebook
                                                            </a>
                                                        )}
                                                    </Card>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
