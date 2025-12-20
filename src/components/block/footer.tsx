import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { getAllStudies } from "@/lib/studies";
import { getAllProjects } from "@/lib/projects";
import { BookOpen, Folder, Lightbulb } from "lucide-react";

export default function Footer() {
  const contentLimit = 5;
  const insights = getAllInsights().slice(0, contentLimit);
  const studies = getAllStudies().slice(0, contentLimit);
  const projects = getAllProjects().slice(0, contentLimit);

  return (
    <footer className="px-[20px] py-[50px] mb-[25px] w-full flex justify-center">
      <div className="w-[1000px]">
        <span className="block mb-5">Latest Work</span>
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row text-center lg:text-start justify-between gap-10">
          {/* Case Studies */}
          <div className="flex flex-col gap-2">
            <small className="flex gap-2 items-center">
              <BookOpen size={14} /> Case Studies ({studies.length})
            </small>
            {studies.map((study) => (
              <Link key={study.slug} href={`/studies/${study.slug}`}>
                <div className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate text-xs ">
                  {study.title}
                </div>
              </Link>
            ))}
          </div>
          {/* Insights */}
          <div className="flex flex-col gap-2">
            <small className="flex gap-2 items-center">
              <Lightbulb size={14} />
              Insights ({insights.length})
            </small>
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`}>
                <div className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate text-xs ">
                  {insight.title}
                </div>
              </Link>
            ))}
          </div>
          {/* Projects */}
          <div className="flex flex-col gap-2">
            <small className="flex gap-2 items-center">
              <Folder size={14} />
              Projects ({projects.length})
            </small>
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate text-xs">
                  {project.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-5 flex items-center justify-between border-t pt-5">
          <div className="flex gap-5">
            <Avatar className="w-[25px] h-[25px]">
              <AvatarImage src="https://github.com/jkbicierro.png" alt="John Bicierro" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>

            <div className="flex gap-5">
              <Link href="#">
                <small className="text-slate-600 dark:text-slate-400">Resume</small>
              </Link>
              <Link href="#">
                <small className="text-slate-600 dark:text-slate-400">
                  Curriculum Vitae
                </small>
              </Link>
              <Link href="/sitemap.xml">
                <small className="text-slate-600 dark:text-slate-400">Sitemap</small>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://www.linkedin.com/in/jkbicierro/" target="_blank">
              <FaLinkedin size={25} />
            </Link>
            <Link href="https://github.com/jkbicierro" target="_blank">
              <FaGithubSquare size={25} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
