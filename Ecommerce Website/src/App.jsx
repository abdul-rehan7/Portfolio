import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import KidsWear from "./pages/KidsWear";
import MensWear from "./pages/MensWear";
import TopRated from "./pages/TopRated";
import Electronics from "./pages/Electronics";
import Trending from "./pages/Trending";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/KidsWear",
      element: (
        <>
          <Navbar /> <KidsWear/>
        </>
      ),
    },
    {
      path: "/MensWear",
      element: (
        <>
          <Navbar /> <MensWear/>
        </>
      ),
    },
    {
      path: "/TopRated",
      element: (
        <>
          <Navbar /> <TopRated/>
        </>
      ),
    },
    {
      path: "/Trending",
      element: (
        <>
          <Navbar /> <Trending/>
        </>
      ),
    },
    {
      path: "/Electronics",
      element: (
        <>
          <Navbar /> <Electronics/>
        </>
      ),
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
