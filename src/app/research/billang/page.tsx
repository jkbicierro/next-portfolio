import Image from "next/image";
import { Navbar } from "@/app/page";
import { Sidebar } from "../page";

export default function ResearchPage() {
    return (
        <>
            <Navbar />
            <main className="mx-[20px] xl:mx-[150px] 2xl:mx-[300px]">
                <Sidebar />
                <Content />
            </main>
        </>
    );
}

function Content() {
    return (
        <div className="mt-10 lg:ml-[350px] h-[2000px]">
            <Image
                src="https://cdn.dribbble.com/userupload/25167422/file/original-a5ba643e3f5aa3f22877cab9b7478b94.png?resize=1024x768&vertical=center"
                width={1920}
                height={1080}
                alt="hello"
                className="h-[350px] w-full rounded-lg object-cover"
            />
            <div className="mt-5">
                <span>Gupiro</span>
                <h1>
                    A Reservation Web Application for Barbershops in Naga City,
                    August 2024
                </h1>
                <div className="text-sm flex gap-2">
                    <span>August 2024</span>
                </div>
            </div>
        </div>
    );
}
