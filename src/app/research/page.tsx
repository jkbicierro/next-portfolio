import Image from "next/image";
import { ModeToggle } from "../client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Navbar } from "../page";
import Link from "next/link";

export default function ResearchPage() {
    return (
        <>
            <Navbar />
            <main className="mx-[20px] xl:mx-[150px] 2xl:mx-[300px] mb-[100px]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col md:flex-row gap-5">
                        <Link href="/research/billang">
                            <Image
                                src="https://cdn.dribbble.com/userupload/25167422/file/original-a5ba643e3f5aa3f22877cab9b7478b94.png?resize=1024x768&vertical=center"
                                width={1920}
                                height={1080}
                                alt="hello"
                                className="min-w-[100px] object-scale-down rounded-lg"
                            />
                        </Link>
                        <Image
                            src="https://cdn.dribbble.com/userupload/22219226/file/original-20390e67b8c1f1c88d621390d2bba7f3.jpg?resize=1024x768&vertical=center"
                            width={1920}
                            height={1080}
                            alt="hello"
                            className="min-w-[100px] object-scale-down rounded-lg"
                        />
                    </div>
                </div>
            </main>
            {/* 

            <main className="mx-[20px] xl:mx-[150px] 2xl:mx-[300px]">
                <Sidebar />

                <div className="lg:ml-[370px] h-[5000px]">
                    <Content />
                </div>
            </main> */}
        </>
    );
}

export function Sidebar() {
    return (
        <div className="hidden lg:block">
            <div className="w-[300px] fixed flex flex-col gap-10 ">
                {/* Projects */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        Latest Research
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3 pb-5 border-b hover:border-b-zinc-300 dark:hover:border-b-zinc-700 cursor-pointer">
                            <div className="w-[60px] h-[60px] rounded-xl bg-blue-300"></div>

                            <div className="flex flex-col gap-1">
                                <h2 className="text-sm">Billang</h2>
                                <p className="text-xs">
                                    A gamification expense tracker
                                </p>
                                <span className="text-[10px]">Feb 2, 2024</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3 pb-5 border-b hover:border-b-zinc-300 dark:hover:border-b-zinc-700 cursor-pointer">
                            <div className="w-[60px] h-[60px] rounded-xl bg-stone-500"></div>

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
        </div>
    );
}
