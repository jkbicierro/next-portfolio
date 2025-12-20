import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[20px] py-[50px] w-full flex justify-center">
      <div className="w-[1000px]">
        <div className="flex justify-between">
          <Avatar className="w-[25px] h-[25px]">
            <AvatarImage src="https://github.com/jkbicierro.png" alt="John Bicierro" />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <span>John Bicierro</span>
            <Link href="#">
              <small className="text-slate-600 dark:text-slate-400">Home</small>
            </Link>
            <Link href="#">
              <small className="text-slate-600 dark:text-slate-400">Research</small>
            </Link>
            <Link href="#">
              <small className="text-slate-600 dark:text-slate-400">Sitemap</small>
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <span>Resources</span>
            <Link href="#">
              <small className="text-slate-600 dark:text-slate-400">Resume</small>
            </Link>
            <Link href="#">
              <small className="text-slate-600 dark:text-slate-400">
                Curriculum Vitae
              </small>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="https://www.linkedin.com/in/jkbicierro/" target="_blank">
              <FaLinkedin size={25} />
            </Link>
            <Link href="https://github.com/jkbicierro" target="_blank">
              <FaGithubSquare size={25} />
            </Link>
            <a href="mailto:jkbicierro@gmail.com">
              <MdEmail size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
