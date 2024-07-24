"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Loader from "@/components/Loader"
import Grid from "@/components/Grid"


export default function Home() {
  return (
    <main>
      <Loader/>
      <div className="flex flex-col justify-center max-w-[100vw] ">
        <FloatingNav navItems={[{name: "Home", link: ""},{name: "Projects", link: ""},{name: "About", link: ""},{name: "Contact", link: ""}]}/>
        <Hero />
        <Grid/>

        
      </div>
    </main>
  );
}
