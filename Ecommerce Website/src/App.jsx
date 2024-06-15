import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import SignUp from "./pages/SignUp";
import Mens from "./pages/category/mens"
import Womens from "./pages/category/womens"
import Kids from "./pages/category/kids"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Mens title='Popular In Mens'/>} />
          <Route path="/kids" element={<Kids  title='Popular In Kids' />} />
          <Route path="/womens" element={<Womens title='Popular In Womens'/>} />
          <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
