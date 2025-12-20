import React from "react";
import { Metadata } from "next";
import { getAllInsights } from "@/lib/insights";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights - John Bicierro",
  description:
    "A collection of insightful articles and blog posts by John Bicierro, sharing knowledge and experiences.",
};

export default function Page() {
  const insights = getAllInsights();

  console.log(insights);
  return (
    <>
      <section className="py-[200px] flex flex-col items-center">
        <h2>I share my strategies, learnings, and practical approaches</h2>

        <div className="mt-20 flex flex-col gap-10">
          {insights.map((insight) => (
            <Link key={insight.slug} href={`/insights/${insight.slug}`}>
              <div className="flex flex-row gap-5">
                <small className="w-[150px] text-slate-600 dark:text-slate-400">
                  {insight.date ? format(parseISO(insight.date), "MMMM d, yyyy") : ""}
                </small>
                <div className="flex flex-col gap-2">
                  <h5>{insight.title}</h5>
                  <small className="text-slate-600 dark:text-slate-400">
                    {insight.description}
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
