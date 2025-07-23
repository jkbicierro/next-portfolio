"use client";

import { AtSign, FolderSearch, Home, Sparkles, CircleUser } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useScroll } from "motion/react";

const navigation = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "Research", href: "/research", icon: <FolderSearch size={16} /> },
    { name: "About", href: "/about", icon: <CircleUser size={16} /> },
    { name: "Contact", href: "/contact", icon: <AtSign size={16} /> },
];

export function NavBar() {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    return (
        <>
            <div className="hidden lg:block">
                <nav className="bg-background px-[30px] fixed h-[60px] w-full border-b flex items-center justify-around">
                    <div className="flex items-center gap-3">
                        <div className="absolute mt-[18px] ml-[18px] z-50 border-2 border-background bg-yellow-500 rounded-full h-[10px] w-[10px]"></div>
                        <Avatar className="w-[25px] h-[25px]">
                            <AvatarImage
                                src="https://github.com/jkbicierro.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <span className="text-sm">John Bicierro</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <ul className="text-zinc-400 flex gap-8 text-[12px] uppercase font-bold">
                            {navigation.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link key={index} href={item.href}>
                                        <li
                                            className={`${
                                                isActive
                                                    ? "text-blue-500 border-b-2 border-blue-500"
                                                    : "text-zinc-400"
                                            }`}
                                        >
                                            {item.name}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                        <Button>
                            <Sparkles />
                            Unlock Resources
                        </Button>
                    </div>
                </nav>
                <div className="h-[60px]"></div>
                <motion.div
                    id="scroll-indicator"
                    style={{
                        scaleX: scrollYProgress,
                        position: "fixed",
                        top: 60,
                        left: 0,
                        right: 0,
                        height: 2,
                        originX: 0,
                    }}
                    className="bg-blue-500 z-50"
                />
            </div>
            <div className="block lg:hidden">
                <nav className="bg-background h-[50px] fixed bottom-0 border-t w-full flex items-center justify-center">
                    <ul className="w-full flex justify-around">
                        {navigation.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link key={index} href={item.href}>
                                    <li
                                        className={`${
                                            isActive && "text-blue-500"
                                        } 
                                            flex flex-col text-[6px] gap-1 uppercase font-semibold items-center`}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
                <motion.div
                    id="scroll-indicator"
                    style={{
                        scaleX: scrollYProgress,
                        position: "fixed",
                        bottom: 50,
                        left: 0,
                        right: 0,
                        height: 2,
                        originX: 0,
                    }}
                    className="bg-blue-500 z-50"
                />
            </div>
        </>
    );
}
