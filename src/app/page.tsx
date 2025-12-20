"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, ChartLine, ChevronRight, Puzzle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pointer } from "@/components/ui/pointer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <main className="px-[20px]">
      <Hero />
      <section>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <small className="uppercase text-slate-600 dark:text-slate-400">
            People and teams I&apos;ve worked with
          </small>
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-10">
            <Image
              src="/assets/adnu.png"
              alt="Ateneo de Naga University | John Bicierro"
              width={700}
              height={700}
              className="h-[40px] w-[40px] object-contain"
            />

            <Image
              src="/assets/caceres.png"
              alt="Archdiocese of Caceres | John Bicierro"
              width={700}
              height={700}
              className="h-[40px] w-[40px] object-contain"
            />
            <Image
              src="/assets/biscast.png"
              alt="Biscat | John Bicierro"
              width={700}
              height={700}
              className="h-[40px] w-[40px] object-contain"
            />
            <Image
              src="/assets/codekada.png"
              alt="Codekada | John Bicierro"
              width={700}
              height={700}
              className="h-[40px] w-[40px] object-contain"
            />
            <Image
              src="/assets/csguild.png"
              alt="CS Guild | John Bicierro"
              width={700}
              height={700}
              className="h-[40px] w-[40px] object-contain"
            />

            {/* <div className="border-2 border-dotted rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
              <Plus size={16} className="text-slate-600 dark:text-slate-400" />
            </div> */}
          </div>
        </div>
      </section>

      <About />
      <Process />

      <Cases />

      <Insights />

      <Projects />

      {/* Contact */}
      <section className="py-[200px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-center">
              let&apos;s build something that{" "}
              <span className="font-pacifico tracking-wider text-blue-500">
                works
              </span>
            </h2>

            <div className="w-full max-w-[600px] space-y-5">
              <div>
                <Label htmlFor="email">
                  Email <span className="text-red-700">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="jkbicierro@gmail.com"
                  className="mt-2"
                />
              </div>
              <div className="flex gap-5">
                <div className="w-full">
                  <Label htmlFor="name">
                    Name <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="John Bicierro"
                    className="mt-2"
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="codekada"
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">
                  Project Description <span className="text-red-700">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="A web dashboard for real-time analytics and reporting, designed to help teams make data-driven decisions faster."
                  className="mt-2 min-h-[100px] resize-none"
                />
              </div>
              <Button className="mt-5 w-full">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Insights() {
  return (
    <section className="py-[200px] flex flex-col items-center">
      <h2>what building software continually teaches me</h2>

      <div className="mt-20">insights</div>
    </section>
  );
}

const casesCards = [
  {
    image: "/assets/liquid/1.png",
    alt: "Ateneo de Naga University | John Bicierro",
    title: "From chaotic stock to real-time clarity",
    type: "Case Study",
    date: "January 17, 2024",
  },
  {
    image: "/assets/liquid/2.png",
    alt: "Ateneo de Naga University | John Bicierro",
    title: "Turning data into actionable insights",
    type: "Case Study",
    date: "January 17, 2024",
  },
  {
    image: "/assets/liquid/3.png",
    alt: "Ateneo de Naga University | John Bicierro",
    title: "Secure login without friction",
    type: "Case Study",
    date: "January 17, 2024",
  },
];

function Cases() {
  return (
    <section className="py-[200px] flex flex-col items-center">
      <h2>from messy requirements to clear, scalable architectures</h2>

      <div className="mt-20 w-full lg:w-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {casesCards.map((card, idx) => (
            <div key={idx} className="w-full">
              <Image
                src={card.image}
                alt={card.alt}
                width={1200}
                height={1200}
                className="border rounded-xl h-[350px] w-full"
              />

              <h6 className="mt-4 truncate">{card.title}</h6>

              <div className="mt-2 flex items-center gap-2">
                <small>{card.type}</small>
                <small className="text-slate-400">{card.date}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button variant={"link"} className="mt-10" asChild>
        <Link href="/insights">
          Explore Case Studies <ChevronRight />
        </Link>
      </Button>
    </section>
  );
}

const projectCards = [
  {
    small: "SHINRI",
    title: "Smart Health Information & Navigated Records Integration",
    year: "2025",
    description:
      "Built a real-time dashboard for tracking product movement and stock levels.",
    badges: [
      { label: "Language: PHP", variant: "secondary" },
      { label: "Framework: Laravel", variant: "secondary" },
      { label: "Database: Oracle", variant: "secondary" },
    ],
    image: "/assets/adnu.png",
    alt: "Ateneo de Naga University | John Bicierro",
  },
  {
    small: "Edge",
    title: "User Control Panel & Payment Gateway",
    year: "2025",
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
    alt: "Edge Roleplay | John Bicierro",
  },
  {
    small: "Biomemes",
    title: "Image Listing & Quiz System",
    year: "2025",
    description: "Not set",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
    ],
    image: "/assets/projects/biomemes.png",
    alt: "Biomemes | John Bicierro",
  },
  {
    small: "National Youth Day",
    title: "Information Portal & Announcement Hub",
    year: "2025",
    description: "Not set",
    badges: [
      { label: "Language: Javascript/Typescript", variant: "secondary" },
      { label: "Framework: Next.js", variant: "secondary" },
      { label: "Database: PostgreSQL", variant: "secondary" },
    ],
    image: "/assets/projects/nyd.png",
    alt: "National Youth Day | John Bicierro",
  },
];

function Projects() {
  return (
    <section className="py-[200px] flex flex-col items-center">
      <h2 className="text-center">
        a few things i&apos;ve{" "}
        <span className="font-pacifico tracking-wider text-blue-500">
          worked
        </span>{" "}
        on
      </h2>
      {/* Cards */}
      <div className="mt-20">
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
                  className="rounded-full h-[40px] w-[40px] object-contain"
                />
              ) : (
                <div className="rounded-full h-[40px] min-w-[40px] bg-zinc-800" />
              )}

              <div className="w-full space-y-2">
                <small className="text-slate-600 dark:text-slate-400 uppercase">
                  {card.small}
                </small>
                <div className="flex justify-between items-center gap-5">
                  <h5>{card.title}</h5>
                  <span className="text-slate-600 dark:text-slate-400">
                    {card.year}
                  </span>
                </div>

                <p className="max-w-[700px] text-slate-600 dark:text-slate-400">
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

      <Button variant={"link"} asChild>
        <Link href="/projects" className="mt-10">
          See more projects <ChevronRight />
        </Link>
      </Button>
    </section>
  );
}

function Process() {
  return (
    <section className="py-[200px] flex flex-col items-center ">
      <h2 className="text-center">
        how i turn business needs into{" "}
        <span className="inline-block transition-all hover:rotate-[-5deg] shadow-2xl shadow-blue-500 text-white bg-blue-500 border border-blue-500 px-2">
          scalable
        </span>{" "}
        software
      </h2>

      <div className="mt-20 flex flex-col items-center gap-5">
        <Separator
          orientation="vertical"
          className="w-[2px] h-[300px] bg-gradient-to-b from-background to-blue-500"
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
            <h3>
              understand the <span className="text-blue-500">problem</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              I start with the &quot;why&quot;, not just the feature list.
            </p>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="w-[2px] h-[300px] bg-blue-500"
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
            <h3>
              plan for <span className="text-blue-500">scale</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Architecture first, clean data flow, right tools, long-term
              thinking.
            </p>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="w-[2px] h-[300px] bg-blue-500"
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
            <h3>
              design with <span className="text-blue-500">intent</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Interfaces that reduce friction and enhance flow.
            </p>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="w-[2px] h-[300px] bg-blue-500"
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
            <h3>
              build <span className="text-blue-500">precisely</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Modular code, performance-focused, written to last.
            </p>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="w-[2px] h-[300px] bg-blue-500"
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
            <h3>
              deliver & <span className=" text-blue-500">improve</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              I ship fast, learn from feedback, and optimize continuously.
            </p>
            <Button variant={"link"} asChild>
              <Link href="/insights">
                Learn More <ChevronRight />
              </Link>
            </Button>
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
              scale
            </span>
          </div>
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Built to improve how businesses operate, not just how they look
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/research">View Case Studies</Link>
          </Button>
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
    systems: "Seeing the bigger picture in every decision",
    business: "Every design choice impacts growth and outcomes",
    alignment: "Connecting design and code for a seamless experience",
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
        isActive ? "text-blue-500 " : "text-slate-600 dark:text-slate-400"
      } transition-colors duration-300`,
    };
  };

  return (
    <>
      <section className="py-[200px] flex flex-col items-center justify-center gap-5">
        <h2 className="text-center">
          clarity in every{" "}
          <span className="font-pacifico tracking-wider text-blue-500">
            solution
          </span>
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-center max-w-[500px]">
          {meanings[selected as keyof typeof meanings]}
        </p>

        <div className="flex gap-[80px] md:gap-[50px] mt-5 lg:mt-0 flex-wrap justify-center">
          {/* Card 1 */}
          <div
            className="cursor-pointer h-[100px] flex flex-col md:flex-row items-center gap-5"
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
            className="cursor-pointer h-[100px] flex flex-col md:flex-row items-center gap-5"
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
            className="cursor-pointer h-[100px] flex flex-col md:flex-row items-center gap-5"
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
