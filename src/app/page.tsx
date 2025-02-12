//import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, SquareMenu } from "lucide-react";
import { ModeToggle } from "./client";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className="mx-[0px] xl:mx-[150px] 2xl:mx-[300px]">test</main>
        </>
    );
}

export function Navbar() {
    return (
        <>
            <div className="w-full h-[80px] fixed flex items-center justify-center">
                <div className="mx-[20px] xl:mx-[150px] 2xl:mx-[300px] px-5 w-full h-[50px] flex items-center justify-between bg-zinc-100 dark:bg-zinc-900 backdrop-blur-md bg-opacity-60 rounded-full">
                    <span className="text-sm">@jkbicierro</span>
                    <div className="flex gap-5 items-center">
                        <ul className="flex gap-5 text-sm">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/research"}>Research</Link>
                            </li>
                        </ul>
                        <div className="flex gap-2">
                            <Button
                                variant={"outline"}
                                size="icon"
                                className="rounded-full"
                                asChild
                            >
                                <Link
                                    href={
                                        "https://github.com/jkbicierro/next-portfolio"
                                    }
                                    target="_blank"
                                >
                                    <Github className="absolute h-[1.2rem] w-[1.2rem]" />
                                </Link>
                            </Button>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed box */}
            <div className="h-[80px]"></div>
        </>
    );
}
