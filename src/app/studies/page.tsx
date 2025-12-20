import React from "react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies - John Bicierro",
  description:
    "A collection of detailed case studies showcasing John Bicierro's projects and design processes.",
};

export default function Page() {
  return (
    <main className="px-[20px]">
      <section className="py-[200px] flex flex-col items-center">
        <h2>see how i solve real problems and deliver results</h2>

        <div className="mt-20 w-full lg:w-[1000px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cards */}
            <div className="w-full">
              <Image
                src={"/assets/liquid/1.png"}
                height={800}
                width={800}
                alt="Liquid project"
                className="border rounded-xl h-[200px] w-full"
              />

              <h6 className="mt-4 truncate">Title</h6>

              <div className="mt-2 flex items-center gap-2">
                <small>Case Study</small>
                <small className="text-slate-400">January 24, 2025</small>
              </div>
            </div>

            {/* Cards */}
            <div className="w-full">
              <Image
                src={"/assets/liquid/1.png"}
                height={800}
                width={800}
                alt="Liquid project"
                className="border rounded-xl h-[200px] w-full"
              />

              <h6 className="mt-4 truncate">Title</h6>

              <div className="mt-2 flex items-center gap-2">
                <small>Case Study</small>
                <small className="text-slate-400">January 24, 2025</small>
              </div>
            </div>

            {/* Cards */}
            <div className="w-full">
              <Image
                src={"/assets/liquid/1.png"}
                height={800}
                width={800}
                alt="Liquid project"
                className="border rounded-xl h-[200px] w-full"
              />

              <h6 className="mt-4 truncate">Title</h6>

              <div className="mt-2 flex items-center gap-2">
                <small>Case Study</small>
                <small className="text-slate-400">January 24, 2025</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
