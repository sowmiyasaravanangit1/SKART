import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cartcontext"; 


function CheckOut() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { cart, subtotal } = useCart(); 
  
  
  const HandleCSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", address);
    localStorage.setItem("order", JSON.stringify(cart));

    navigate("/submited");
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-2 border-2 border-violet-100 shadow-md">
        <div>
          <h1 className="text-3xl text-violet-900 font-bold">SKART</h1>
        </div>
        <div>
          <button
            onClick={() => navigate("/Home")}
            className="text-violet-900 p-4 text-xl"
          >
            Back to Explore
          </button>
        </div>
      </div>

      <div className="px-16 flex flex-row gap-20 py-16">
        <div className="text-left">
          <form onSubmit={HandleCSubmit}>
            <div>
              <h1 className="py-2 font-bold text-2xl text-violet-900">
                SHIPPING ADDRESS
              </h1>
              <textarea
                className="h-[100px] w-[450px] border-violet-400 border-2 p-2"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <button className="border-violet-900 border-2 bg-violet-900 text-white rounded px-4 py-2">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
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
        <div>
          <h1 className="text-white text-2xl font-bold p-2">SKART</h1>
        </div>
        <div>
          <p className="text-white text-xl font-bold">
            QKart is your one stop solution to buy the latest trending items
            with
          </p>
        </div>
        <p className="text-white text-xl font-bold">
          India's Fastest Delivery to your doorstep
        </p>
      </div>
    </div>
  );
}

export default CheckOut;
