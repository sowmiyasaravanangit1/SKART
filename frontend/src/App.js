import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Cart from "./components/cart";
import { CartProvider } from "./components/cartcontext";
import ProductDetails from "./components/description";
import CheckOut from "./components/checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path = "/checkout"  element ={ <CheckOut />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
