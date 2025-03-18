"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";

const cacheKey = "facebook-posts";
const cacheTTL = 1000 * 60 * 60 * 24 * 7; // 1 week

export default function FacebookPosts() {
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;
    const initialRender = useRef(true);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            if (initialRender.current) {
                initialRender.current = false;
                return;
            }

            const cachedPosts = localStorage.getItem(cacheKey);

            if (cachedPosts) {
                setPosts(JSON.parse(cachedPosts));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://graph.facebook.com/v22.0/me/posts?fields=message,created_time,full_picture,permalink_url,attachments{media_type,media}&access_token=${ACCESS_TOKEN}`
                );

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const data = await response.json();
                setPosts(data.data || []);

                localStorage.setItem(cacheKey, JSON.stringify(data.data));
                localStorage.setItem(`${cacheKey}-ttl`, (Date.now() + cacheTTL).toString());
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [ACCESS_TOKEN]);

    useEffect(() => {
        const ttl = localStorage.getItem(`${cacheKey}-ttl`);

        if (ttl && parseInt(ttl, 10) < Date.now()) {
            localStorage.removeItem(cacheKey);
            localStorage.removeItem(`${cacheKey}-ttl`);
        }
    }, []);

    return (
        <section>
            <div className="relative pt-16 md:pt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center max-w-4xl sm:mx-auto lg:mr-auto lg:mt-0">
                        <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row min-h-screen">
                            {loading ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <Skeleton
                                            key={i}
                                            className="w-[400px] h-[400px]"
                                        />
                                    ))}
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
                                                            Smyrna Christian
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
                                                        src={post.full_picture}
                                                        alt="Post media"
                                                        className="w-full h-auto rounded-lg shadow"
                                                        width="400"
                                                        height="400"
                                                    />
                                                )}

                                                {/* View on Facebook Link */}
                                                {post.permalink_url && (
                                                    <a
                                                        href={post.permalink_url}
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


