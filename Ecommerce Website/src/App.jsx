import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Category category="mens" />} />
          <Route path="/kids" element={<Category category="kids" />} />
          <Route path="/womens" element={<Category category="womens" />} />
          <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
