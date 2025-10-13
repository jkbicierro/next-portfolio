"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, ChartLine, Puzzle } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Pointer } from "@/components/ui/pointer";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="px-[20px]">
      <Hero />

      <section>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <small className="uppercase text-slate-400">
            People and teams I&apos;ve worked with
          </small>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Image
                src="/assets/adnu.png"
                alt="Edge Roleplay Logo"
                width={700}
                height={700}
                className="h-[50px] w-auto"
              />

              <small className="text-slate-400">4.8</small>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Image
                src="/assets/caceres.png"
                alt="Edge Roleplay Logo"
                width={700}
                height={700}
                className="h-[50px] w-auto"
              />
              <small className="text-slate-400">5.0</small>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Image
                src="/assets/biscast.png"
                alt="Edge Roleplay Logo"
                width={700}
                height={700}
                className="h-[50px] w-auto"
              />
              <small className="text-slate-400">4.7</small>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Image
                src="/assets/codekada.png"
                alt="Edge Roleplay Logo"
                width={700}
                height={700}
                className="h-[50px] w-auto"
              />
              <small className="text-slate-400">5.0</small>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Image
                src="/assets/csguild.png"
                alt="Edge Roleplay Logo"
                width={700}
                height={700}
                className="h-[50px] w-auto"
              />
              <small className="text-slate-400">4.8</small>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Process />

      <Projects />

      <section className="py-[200px]">
        <div className="flex flex-col items-center gap-5">
          <h1>let&apos;s build something that works</h1>
          <Input placeholder="Enter your email" className="w-[350px]" />
        </div>
      </section>
    </main>
  );
}

const projectCards = [
  {
    title: "SHINRI: Smart Health Information & Navigated Records Integration",
    year: "2025",
    description:
      "Built a real-time dashboard for tracking product movement and stock levels.",
    badges: [
      { label: "Language: PHP", variant: "secondary" },
      { label: "Framework: Laravel", variant: "secondary" },
      { label: "Database: Oracle", variant: "secondary" },
    ],
    image: "/assets/adnu.png",
    alt: "Ateneo de Naga University Logo",
  },
  {
    title: "Edge: User Control Panel & Payment Gateway",
    year: "2024",
    description:
      "A circulation of the game server economy through a web platform.",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Language: C/C++", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
      { label: "Database: MySQL", variant: "secondary" },
    ],
    image: "/assets/edgerp.png",
    alt: "Edge Roleplay Logo",
  },
  {
    title: "Biomemes: Image Listing & Quiz System",
    year: "2025",
    description: "Not set",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
    ],
    image: "/assets/edgerp.png",
    alt: "Edge Roleplay Logo",
  },
  {
    title: "NYD: Information Portal & Announcement Hub",
    year: "2025",
    description: "Not set",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
    ],
    image: "/assets/edgerp.png",
    alt: "Edge Roleplay Logo",
  },
  {
    title: "Auro: Ticketing & External Services Integration",
    year: "2025",
    description:
      "A ticketing system frontend and backend API designed to seamlessly fetch, manage, and integrate with external systems for efficient ticket handling.",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Framework: Express.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
    ],
    image: "/assets/edgerp.png",
    alt: "Edge Roleplay Logo",
  },
  {
    title: "Billang: Mobile Application Productivity Tool",
    year: "2025",
    description:
      "An expense and bills management tracker with a touch of gamification.",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Expo", variant: "secondary" },
      { label: "Database: SQLite", variant: "secondary" },
    ],
    image: "/assets/edgerp.png",
    alt: "Edge Roleplay Logo",
  },
  {
    title: "Gupiro: Listing & Appointment System",
    year: "2024",
    description:
      "A service business shop reservation system designed to streamline appointment bookings for businesses and their customers was built as a software service.",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
    ],
    image: "/assets/edgerp.png",
    alt: "Edge Roleplay Logo",
  },
  {
    title: "Grexn: Product Research",
    year: "2024",
    description:
      "A service business shop reservation system designed to streamline appointment bookings for businesses and their customers was built as a software service.",
    badges: [
      { label: "Software Documentation", variant: "secondary" },
      { label: "Diagram Design", variant: "secondary" },
      { label: "UI/UX Design", variant: "secondary" },
    ],
    image: "",
    alt: "Edge Roleplay Logo",
  },
];

function Projects() {
  return (
    <section className="py-[200px] flex flex-col items-center">
      <h1 className="text-center">a few things i&apos;ve worked on</h1>

      {/* Cards */}
      <div className="mt-10">
        {[...projectCards]
          .sort((a, b) => Number(b.year) - Number(a.year))
          .map((card, idx) => (
            <div
              key={idx}
              className="mt-5 pb-5 border-b hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-row items-center gap-5 cursor-pointer"
            >
              {card.image ? (
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={600}
                  height={600}
                  className="h-[40px] w-[40px]"
                />
              ) : (
                <div className="h-[40px] w-[40px] bg-blue-500 rounded-sm" />
              )}

              <div className="w-full space-y-2">
                <div className="flex justify-between items-center gap-5">
                  <h5>{card.title}</h5>
                  <span className="text-slate-500">{card.year}</span>
                </div>

                <p className="max-w-[700px] text-slate-500">
                  {card.description}
                </p>

                <div className="flex text-nowrap gap-1 flex-wrap">
                  {card.badges.map((badge, i) => (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    <Badge key={i} variant={badge.variant as any}>
                      {badge.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
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
            <h2>
              understand the{" "}
              <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                problem
              </span>
            </h2>
            <p className="text-slate-500">
              I start with the &quot;why&quot;, not just the feature list.
            </p>
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
            <h2>
              plan for{" "}
              <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                scale
              </span>
            </h2>
            <p className="text-slate-500">
              Architecture first — clean data flow, right tools, long-term
              thinking.
            </p>
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
            <h2>
              design with{" "}
              <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                intent
              </span>
            </h2>
            <p className="text-slate-500">
              Interfaces that reduce friction and enhance flow.
            </p>
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
            <h2>
              build{" "}
              <span className="text-blue-500 font-pacifico font-normal tracking-wider">
                precisely
              </span>
            </h2>
            <p className="text-slate-500">
              Modular code, performance-focused, written to last.
            </p>
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
            <h2>
              deliver &{" "}
              <span className=" text-blue-500 font-pacifico font-normal tracking-wider">
                improve
              </span>
            </h2>
            <p className="text-slate-500">
              I ship fast, learn from feedback, and optimize continuously.
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
          Built to improve how businesses operate — not just how they look.
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
        const nextIndex = (cardOrder.indexOf(prev) + 1) % cardOrder.length;
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
      inner: `p-2 rounded-full ${isActive ? "bg-blue-500" : "bg-slate-400"}`,
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
            className="h-[100px] flex flex-col md:flex-row items-center gap-5"
            onClick={() => handleClick("systems")}
          >
            <div className={getCardStyle("systems").outer}>
              <div className={getCardStyle("systems").inner}>
                <Brain className="text-white" />
              </div>
            </div>
            <h5 className={getCardStyle("systems").text}>Systems Thinking</h5>
          </div>

          {/* Card 2 */}
          <div
            className="h-[100px] flex flex-col md:flex-row items-center gap-5"
            onClick={() => handleClick("business")}
          >
            <div className={getCardStyle("business").outer}>
              <div className={getCardStyle("business").inner}>
                <ChartLine className="text-white" />
              </div>
            </div>
            <h5 className={getCardStyle("business").text}>Business Impact</h5>
          </div>

          {/* Card 3 */}
          <div
            className="h-[100px] flex flex-col md:flex-row items-center gap-5"
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

          <Pointer className="fill-blue-500" />
        </div>
      </section>
    </>
  );
}
