import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("orderData");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const cancelOrder = () => {
    localStorage.removeItem("orderData");
    setOrder(null);
    alert("Your order has been cancelled.");
    navigate("/"); 
  };

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-violet-200">
        <h1 className="text-4xl font-bold text-violet-900 mb-6">No Orders Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-violet-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-700 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-violet-200">
        <h1 className="text-4xl font-extrabold text-violet-900 mb-8 text-center">
          Your Order
        </h1>

        <div className="mb-8 p-6 bg-violet-50 rounded-xl shadow-inner border border-violet-200">
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">SHIPPING INFO </h2>
          <p className="text-gray-700"><span className="font-bold text-violet-900">Name:</span> {order.name}</p>
          <p className="text-gray-700"><span className="font-bold text-violet-900">Phone:</span> {order.phone}</p>
          <p className="text-gray-700"><span className="font-bold text-violet-900">Address:</span> {order.address}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-violet-800 mb-4"> PRODUCTS</h2>
          <div className="space-y-4">
            {order.cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white border border-violet-200 shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <div>
                  <p className="text-xl font-bold text-violet-900">{item.name}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <p className="text-gray-700">Price: ₹{item.price * item.quantity}</p>
                </div>
                <div className="text-violet-900 font-bold text-lg">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-2xl font-extrabold text-violet-900 text-right">
            Total: ₹{order.subtotal}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={cancelOrder}
            className="bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-red-700 hover:scale-105 transition transform"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
