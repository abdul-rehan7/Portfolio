"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main
      className="bg-black flex justify-center items-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5  "
    >
      <div className="flex flex-col justify-center max-w-7xl ">
        <FloatingNav navItems={[{name: "Home", link: ""},{name: "Projects", link: ""},{name: "About", link: ""},{name: "Contact", link: ""}]}/>
        <Hero />
      </div>
    </main>
  );
}
