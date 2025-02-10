//import Image from "next/image";

import { Input } from "@/components/ui/input";
import { ModeToggle } from "./client";
import { CircleChevronDown, Download, Github, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Aurora from "@/components/reactbits/aurora";
import { WordRotate } from "@/components/magicui/word-rotate";

export default function Home() {
    return (
        <main className="mx-5 2xl:mx-[220px]">
            {/* For fixed navbar */}
            <NavBar />
            <div className="h-[60px]"></div>

            <LatestResearch />

            <Project />

            <DownloadCV />
        </main>
    );
}

function DownloadCV() {
    return (
        <div className="py-[150px] flex flex-col gap-[50px]">
            <div className="rounded bg-gradient-to-r from-violet-200 to-pink-200 w-full h-[350px] flex flex-col items-center justify-center gap-5">
                <h2>There you go</h2>
                <div className="flex gap-2">
                    <Button>
                        <Send />
                        John Bicierro
                    </Button>
                    <Button>
                        <Download />
                        Download CV
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Project() {
    return (
        <div className="py-[150px] flex flex-col gap-[50px]">
            <h2>Recent Project</h2>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col flex-grow gap-10">
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="flex flex-col flex-grow gap-10">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

function ProjectCard() {
    return (
        <div className="flex flex-row items-start flex-grow gap-8">
            <div className="w-[200px] h-[200px] bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></div>

            <div className="flex flex-col items-start gap-1 h-full justify-center">
                <h3>Gupiro</h3>
                <p>A reservation app that can handles services</p>
                <div className="flex gap-2">
                    <Badge name="Next.js" />
                    <Badge name="Javascript/Typescript" />
                    <Badge name="OAuth" />
                </div>
            </div>
        </div>
    );
}

function LatestResearch() {
    return (
        <div className="py-[150px] flex flex-col gap-[50px]">
            <div className="flex justify-between items-center">
                <h2>Latest Research</h2>
                <span className="text-sm">View All</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                <LatestResearchCard />
                <LatestResearchCard />
                <LatestResearchCard />
            </div>
        </div>
    );
}

function LatestResearchCard() {
    return (
        <div className="flex flex-col items-start flex-grow gap-8">
            <div className="w-full rounded h-[350px] bg-gradient-to-r from-blue-200 to-cyan-200"></div>

            <div className="flex flex-col gap-1">
                <h3>BillAng</h3>
                <p>A expense tracker gamification</p>
                <span className="text-sm">Research</span>
            </div>
        </div>
    );
}

function NavBar() {
    return (
        <nav className="mx-5 2xl:mx-[220px] z-[20] fixed left-0 right-0 bg-white dark:bg-zinc-950 h-[60px] flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Avatar className="w-[24px] h-[24px]">
                    <AvatarImage src="https://github.com/jkbicierro.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm">@jkbicierro</span>
            </div>
            <ul className="flex gap-10 text-sm text-zinc-950 dark:text-zinc-50">
                <li>Research</li>
                <li>Projects</li>
                <li>Blogs</li>
            </ul>
            <div className="flex items-center gap-3">
                <ModeToggle />
            </div>
        </nav>
    );
}

interface Badge {
    name: string;
}

function Badge(props: Badge) {
    return (
        <div className="bg-green-200 text-green-800 py-1 px-3 text-xs rounded-full">
            {props.name}
        </div>
    );
}
