import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black flex justify-center items-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5  ">
      <div className="max-w-7xl w-4">
        <Hero />
      </div>
    </main>
  );
}