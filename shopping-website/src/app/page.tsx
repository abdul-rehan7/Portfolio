import Bar from "./components/Bar";
import BottomSection from "./components/BottomSection";
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
        <BottomSection/>
        <Bar/>
      </main>
    </>
  );
}
