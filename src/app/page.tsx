//import Image from "next/image";

import { Input } from "@/components/ui/input";
import { ModeToggle } from "./client";
import {
    CircleChevronDown,
    Download,
    Folder,
    Github,
    Send,
    User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Aurora from "@/components/reactbits/aurora";
import { WordRotate } from "@/components/magicui/word-rotate";

export default function HomePage() {
    return (
        <main>
            <Sidebar />
            <Navbar />
            <div className="ml-[350px] pt-[60px] h-[5000px]">
                <Content />
            </div>
        </main>
    );
}

function Content() {
    return (
        <div className="p-10">
            <div className="h-[350px] w-full bg-stone-500"></div>

            <h1>Billang</h1>
            <div className="text-sm flex gap-2">
                <p>Text</p>
                <span>Feb 2, 2025</span>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="w-[350px] p-10 h-full fixed bg-zinc-100 dark:bg-zinc-900 flex flex-col gap-10">
            <ModeToggle />

            {/* Projects */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">Latest Research</div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3 pb-2 border-b hover:border-b-zinc-300 dark:hover:border-b-zinc-700">
                        <div className="w-[60px] h-[60px] rounded-2xl bg-blue-300"></div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm">Billang</h2>
                            <p className="text-xs">
                                A gamification expense tracker
                            </p>
                            <span className="text-[10px]">Feb 2, 2024</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 pb-2 border-b hover:border-b-zinc-300 dark:hover:border-b-zinc-700">
                        <div className="w-[60px] h-[60px] rounded-2xl bg-stone-500"></div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm">Gupiro</h2>
                            <p className="text-xs">
                                A reservation web platform
                            </p>
                            <span className="text-[10px]">Feb 2, 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Navbar() {
    return (
        <div className="border-b bg-zinc-50 dark:bg-zinc-950 ml-[350px] h-[60px] w-screen fixed flex items-center pl-10">
            <div className="flex items-center gap-3">
                Billang
                <div className="bg-green-200 rounded-full py-1 px-3 text-green-800 text-xs">
                    react-native
                </div>
                <div className="bg-green-200 rounded-full py-1 px-3 text-green-800 text-xs">
                    react-native
                </div>
                <div className="bg-green-200 rounded-full py-1 px-3 text-green-800 text-xs">
                    react-native
                </div>
            </div>
        </div>
    );
}
