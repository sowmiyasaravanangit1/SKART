import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cartcontext"; 
import Submit from "./submit";   

function CheckOut() {
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { cart, subtotal } = useCart(); 
  
  const HandleCSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", address);
    setShowPopup(true); 
  };

  return (
    <div>
      
      <div className="flex flex-row justify-between items-center p-2 border-2 border-violet-100 shadow-md">
        <h1 className="text-3xl text-violet-900 font-bold">SKART</h1>
        <button
          onClick={() => navigate("/Home")}
          className="text-violet-900 p-4 text-xl"
        >
          Back to Explore
        </button>
      </div>

     
      <div className="px-16 flex flex-row gap-96 py-16">
        {/* SHIPPING FORM */}
        <div className="text-left">
          <form onSubmit={HandleCSubmit}>
            <h1 className="font-bold text-2xl text-violet-900">
              SHIPPING ADDRESS
            </h1>
            <label className="text-violet-900"> Name </label> <br />
            <input type="text" placeholder="Enter your Name"
              className="border-2 border-violet-900 pb-2 mb-2 w-[300px]" /> <br />

            <label className="text-violet-900"> Phone Number </label> <br />
            <input type="text" placeholder="Enter your Phone Number"
              className="border-2 border-violet-900 pb-2 mb-2 w-[300px]" /> <br />

            <label className="text-violet-900"> Address </label> <br />
            <textarea
              className="h-[100px] w-[450px] border-violet-900 border-2 p-2"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <br />
            <button className="border-violet-900 border-2 bg-violet-900 text-white rounded px-4 py-2 mt-4">
              SUBMIT
            </button>
          </form>
        </div>

        {/* ORDER DETAILS */}
        <div>
          <h1 className="py-2 font-bold text-xl text-violet-900">
            ORDER DETAILS
          </h1>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="mb-4 border-b pb-2">
                  <p className="text-xl text-violet-900">{item.name}</p>
                  <p className="text-violet-900">
                    Quantity: {item.quantity || 1}
                  </p>
                  <p className="text-violet-900">
                    Price: ₹{item.price * (item.quantity || 1)}
                  </p>
                </div>
              ))}
              <div className="mt-4 text-xl font-bold text-violet-900">
                Total: ₹{subtotal}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col bg-violet-900 items-center justify-center p-12">
        <h1 className="text-white text-2xl font-bold p-2">SKART</h1>
        <p className="text-white text-xl font-bold">
          QKart is your one stop solution to buy the latest trending items
        </p>
        <p className="text-white text-xl font-bold">
          India's Fastest Delivery to your doorstep
        </p>
      </div>

      {showPopup && <Submit onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default CheckOut;
