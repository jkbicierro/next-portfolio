"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, ChartLine, Puzzle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Page() {
    return (
        <>
            <main>
                <Hero />
                <About />

                <section className="py-[200px] flex flex-col items-center">
                    <h1 className="">
                        how i turn business needs into{" "}
                        <span className="inline-block cursor-pointer transition-all hover:rotate-[-5deg] shadow-2xl shadow-blue-500 text-white bg-blue-500 border border-blue-500 px-2">
                            scalable
                        </span>{" "}
                        software
                    </h1>

                    <div className="mt-20 flex flex-col items-center gap-5">
                        <div className="-z-10 flex items-center justify-center">
                            <div className="absolute h-[15px] w-[15px] bg-blue-500 rounded-full animate-ping"></div>
                            <div className="absolute h-[15px] w-[15px] bg-blue-500 rounded-full"></div>
                            <div className="absolute h-[10px] w-[10px] bg-blue-400 rounded-full"></div>
                        </div>

                        <Separator
                            orientation="vertical"
                            className="w-[2px] h-[200px] bg-gradient-to-b from-blue-500 to-background"
                        />

                        {/* First Step: Card */}
                        <div className="border p-3 rounded-full">
                            <div className="border rounded-full p-5">
                                1. Understand the Business
                            </div>
                        </div>

                        <Separator
                            orientation="vertical"
                            className="w-[2px] h-[200px] bg-gradient-to-b from-background to-blue-500"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

function Hero() {
    return (
        <section className="py-[200px] flex items-center justify-center">
            <div className="w-[650px] flex flex-col items-center text-center justify-center gap-5">
                <h1 className="font-medium space-y-5 text-nowrap">
                    <div className="flex gap-2 items-center justify-center">
                        <span>designed to</span>{" "}
                        <span className="tracking-wider font-pacifico text-blue-500">
                            simplify,
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <span>engineered to</span>
                        <span className="shadow-2xl shadow-blue-500 cursor-pointer transition-all hover:rotate-[5deg] text-white bg-blue-500 border border-blue-500 px-2">
                            scale.
                        </span>
                    </div>
                </h1>
                <p>
                    Built to improve how businesses operate — not just how they
                    look.
                </p>
                <div className="flex gap-4">
                    <Button>View Case Studies</Button>
                    <Button variant="secondary">Explore the Process</Button>
                </div>
            </div>
        </section>
    );
}

const cardOrder = ["systems", "business", "alignment"];

function About() {
    const [selected, setSelected] = useState<string>("systems");

    const meanings = {
        systems: "Seeing the bigger picture in every decision.",
        business: "Every design choice impacts growth and outcomes.",
        alignment: "Connecting design and code for a seamless experience.",
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected((prev) => {
                const nextIndex =
                    (cardOrder.indexOf(prev) + 1) % cardOrder.length;
                return cardOrder[nextIndex];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleClick = (key: string) => {
        setSelected(key);
    };

    const getCardStyle = (key: string) => {
        const isActive = selected === key;
        return {
            outer: `-z-50 p-1 rounded-full shadow-2xl transition-all duration-300 ${
                isActive
                    ? "bg-blue-600 shadow-blue-500 scale-110"
                    : "bg-zinc-600"
            }`,
            inner: `p-2 rounded-full ${
                isActive ? "bg-blue-500" : "bg-zinc-500"
            }`,
            text: `${
                isActive ? "text-blue-500" : "text-zinc-300"
            } transition-colors duration-300`,
        };
    };

    return (
        <>
            <section className="py-[200px] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center">
                    clarity in every{" "}
                    <span className="font-pacifico tracking-wider text-blue-500">
                        solution.
                    </span>
                </h1>

                <p className="text-center max-w-[500px]">
                    {meanings[selected as keyof typeof meanings]}
                </p>

                <div className="flex gap-[80px] md:gap-[50px] mt-5 lg:mt-0 flex-wrap justify-center">
                    {/* Card 1 */}
                    <div
                        className="h-[100px] flex flex-col md:flex-row items-center gap-5 cursor-pointer"
                        onClick={() => handleClick("systems")}
                    >
                        <div className={getCardStyle("systems").outer}>
                            <div className={getCardStyle("systems").inner}>
                                <Brain />
                            </div>
                        </div>
                        <h5 className={getCardStyle("systems").text}>
                            Systems Thinking
                        </h5>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="h-[100px] flex flex-col md:flex-row items-center gap-5 cursor-pointer"
                        onClick={() => handleClick("business")}
                    >
                        <div className={getCardStyle("business").outer}>
                            <div className={getCardStyle("business").inner}>
                                <ChartLine />
                            </div>
                        </div>
                        <h5 className={getCardStyle("business").text}>
                            Business Impact
                        </h5>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="h-[100px] flex flex-col md:flex-row items-center gap-5 cursor-pointer"
                        onClick={() => handleClick("alignment")}
                    >
                        <div className={getCardStyle("alignment").outer}>
                            <div className={getCardStyle("alignment").inner}>
                                <Puzzle />
                            </div>
                        </div>
                        <h5 className={getCardStyle("alignment").text}>
                            Design + Dev Alignment
                        </h5>
                    </div>
                </div>
            </section>
        </>
    );
}
