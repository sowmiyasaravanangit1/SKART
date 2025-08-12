import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import homeimg from "../assets/karthomepic.jpg";
import ProductCard from "./productcard";
import Cart from "./cart";


function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div>
    <div className="flex flex-row justify-between items-center p-4">
      <div>
        <h1 className="text-3xl text-violet-900 font-bold">SKART</h1>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search for items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border  border-violet-900  rounded px-2 py-1"
          />
        </form>
      </div>
      <div>
        <button onClick = {()=> navigate("/Login")}
        className="text-white bg-violet-900 px-4 py-1 ">
          Login 
        </button>
        <button onClick={()=> navigate("/Register")} 
        className="text-white bg-violet-900 px-4 py-1">
          Register
        </button>
      </div>
    </div>
    <div className = " relative" >
     <img src={homeimg } alt = "home pic"  className = " w-full h-[500px] " />
     <div className = "absolute inset-0 flex items-center justify-center text-violet-900 text-6xl">
      <h1 className = "bg-white text-violet-900">
         India's fastest delivery to your door step </h1> </div>
      </div>
    <div className = "flex flex-row">
        <div> <ProductCard /></div>
        <div> <Cart/></div>
    </div>
     <div className=" flex flex-col  bg-violet-900 items-center justify-center p-4">
        <div> <h1 className=" text-white text-2xl font-bold p-2 "> SKART</h1></div>
        <div> <p className=" text-white text-xl font-bold " > QKart is your one stop solution to the buy the latest trending items with </p>
       
       </div>
       <p className=" text-white text-xl font-bold "> India's Fastest Delivery to your doorstep</p>
      </div>       
    </div>
  );
}

export default Home;
