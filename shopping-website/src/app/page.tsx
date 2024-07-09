import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero/>
        <NewProducts/>
        <Testimonial/>
      </main>
    </>
  );
}
