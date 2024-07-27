"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center max-w-[100vw] ">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients/>
      </div>
    </main>
  );
}
