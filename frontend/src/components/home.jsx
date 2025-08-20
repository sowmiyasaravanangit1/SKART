import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import homeimg from "../assets/karthomepic.jpg";
import ProductCard from "./productcard";
import { FaHome } from "react-icons/fa"; 

function Home() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
    
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="flex flex-row justify-between items-center px-6 py-3 relative">
        
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaHome size={28} className="text-violet-900 hover:scale-110 transition" />
            </button>

            {menuOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg p-2 w-44 border border-violet-200">
                <button
                  onClick={() => navigate("/")}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-violet-100 transition"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-violet-100 transition"
                >
                  Cart
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-violet-100 transition"
                >
                  Your Orders
                </button>
              </div>
            )}
          </div>

          <h1
            className="text-3xl text-violet-900 font-extrabold cursor-pointer tracking-wide"
          >
            SKART
          </h1>

          <div className="flex items-center gap-4">
            <form>
              <input
                type="text"
                name="search"
                placeholder=" Search items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-violet-900 rounded-lg px-3 py-1 focus:ring-2 focus:ring-violet-900 outline-none"
              />
            </form>
            <div>
              <button
                onClick={() => navigate("/Login")}
                className="text-white bg-violet-900 px-4 py-2 rounded-lg shadow-md hover:bg-violet-700 hover:scale-105 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/Register")}
                className="text-white bg-violet-900 px-4 py-2 rounded-lg ml-2 shadow-md hover:bg-violet-700 hover:scale-105 transition"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <img src={homeimg} alt="home pic" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white px-4 text-center drop-shadow-lg">
            India’s <span className="text-violet-300">Fastest Delivery</span> <br /> to Your Doorstep
          </h1>
        </div>
      </div>

      {/* Products and Cart */}
      <div className="flex-1 px-6 py-8">
        <ProductCard />
        {/* <Cart /> */}
      </div>

      {/* Footer */}
       <div className=" flex flex-col  bg-violet-900 items-center justify-center p-3">
        <div> <h1 className=" text-white text-2xl font-bold p-2 "> SKART</h1></div>
        <div> <p className=" text-white text-xl font-bold " > QKart is your one stop solution to the buy the latest trending items with </p>
       
       </div>
       <p className=" text-white text-xl font-bold "> India's Fastest Delivery to your doorstep</p>
      </div>  

    </div>
  );
}

export default Home;
