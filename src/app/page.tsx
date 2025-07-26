"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, ChartLine, Puzzle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Page() {
    return (
        <main>
            <Hero />
            <About />
            <Process />
        </main>
    );
}

function Process() {
    return (
        <section className="py-[200px] flex flex-col items-center">
            <h1 className="text-center">
                how i turn business needs into{" "}
                <span className="inline-block cursor-pointer transition-all hover:rotate-[-5deg] shadow-2xl shadow-blue-500 text-white bg-blue-500 border border-blue-500 px-2">
                    scalable
                </span>{" "}
                software
            </h1>

            <div className="mt-20 flex flex-col items-center gap-5">
                <Separator
                    orientation="vertical"
                    className="w-[2px] h-[450px] bg-gradient-to-b from-background to-blue-500"
                />

                {/* First Step: Card */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                            1
                        </h5>
                        <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
                    </div>

                    <div className="text-center p-5 space-y-5">
                        <h1>
                            understand the{" "}
                            <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                                problem
                            </span>
                        </h1>
                        <p className="text-slate-500">
                            I start with the &quot;why&quot;, not just the
                            feature list.
                        </p>
                        <Button variant={"link"}>Learn More</Button>
                    </div>
                </div>

                <Separator
                    orientation="vertical"
                    className="w-[2px] h-[450px] bg-blue-500"
                />

                {/* Second Step: Card */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                            2
                        </h5>
                        <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
                    </div>

                    <div className="p-5 space-y-5 text-center">
                        <h1>
                            plan for{" "}
                            <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                                scale
                            </span>
                        </h1>
                        <p className="text-slate-500">
                            Architecture first — clean data flow, right tools,
                            long-term thinking.
                        </p>
                        <Button variant={"link"}>Learn More</Button>
                    </div>
                </div>

                <Separator
                    orientation="vertical"
                    className="w-[2px] h-[450px] bg-blue-500"
                />

                {/* Third Step: Card */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                            3
                        </h5>
                        <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
                    </div>
                    <div className="p-5 space-y-5 text-center">
                        <h1>
                            design with{" "}
                            <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                                intent
                            </span>
                        </h1>
                        <p className="text-slate-500">
                            Interfaces that reduce friction and enhance flow.
                        </p>
                        <Button variant={"link"}>Learn More</Button>
                    </div>
                </div>

                <Separator
                    orientation="vertical"
                    className="w-[2px] h-[450px] bg-blue-500"
                />

                {/* Fourth Step: Card */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                            4
                        </h5>
                        <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
                    </div>

                    <div className="p-5 space-y-5 text-center">
                        <h1>
                            build{" "}
                            <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                                precisely
                            </span>
                        </h1>
                        <p className="text-slate-500">
                            Modular code, performance-focused, written to last.
                        </p>
                        <Button variant={"link"}>Learn More</Button>
                    </div>
                </div>

                <Separator
                    orientation="vertical"
                    className="w-[2px] h-[450px] bg-blue-500"
                />

                {/* Last Step: Card */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                            5
                        </h5>
                        <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
                    </div>

                    <div className="p-5 space-y-5 text-center">
                        <h1>
                            deliver &{" "}
                            <span className=" text-blue-500 font-pacifico font-normal tracking-wider">
                                improve
                            </span>
                        </h1>
                        <p className="text-slate-500">
                            I ship fast, learn from feedback, and optimize
                            continuously.
                        </p>
                        <Button variant={"link"}>Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
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
                <p className="text-slate-400">
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
                    : "bg-slate-300 dark:bg-slate-500"
            }`,
            inner: `p-2 rounded-full ${
                isActive ? "bg-blue-500" : "bg-slate-400"
            }`,
            text: `${
                isActive ? "text-blue-500 " : "text-slate-400"
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

                <p className="text-slate-400 text-center max-w-[500px]">
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
                                <Brain className="text-white" />
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
                                <ChartLine className="text-white" />
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
                                <Puzzle className="text-white" />
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
