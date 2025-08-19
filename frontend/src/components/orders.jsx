import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  // Load order from localStorage
  useEffect(() => {
    const savedOrder = localStorage.getItem("orderData");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  // Cancel Order
  const cancelOrder = () => {
    localStorage.removeItem("orderData");
    setOrder(null);
    alert("Your order has been cancelled.");
    navigate("/"); // redirect back home
  };

  if (!order) {
    return (
      <div className="p-8 text-violet-900">
        <h1 className="text-3xl font-bold mb-4">No Orders Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-violet-900 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-violet-900 mb-6">Your Order</h1>

      {/* Shipping Info */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-violet-900">Shipping Info</h2>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        <p><strong>Address:</strong> {order.address}</p>
      </div>

      {/* Ordered Products */}
      <div>
        <h2 className="text-2xl font-semibold text-violet-900 mb-2">Products</h2>
        {order.cart.map((item) => (
          <div key={item.id} className="mb-4 border-b pb-2">
            <p className="text-xl text-violet-900">{item.name}</p>
            <p className="text-violet-900">Quantity: {item.quantity}</p>
            <p className="text-violet-900">
              Price: ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
        <div className="mt-4 text-xl font-bold text-violet-900">
          Total: ₹{order.subtotal}
        </div>
      </div>

      {/* Cancel Button */}
      <div className="mt-6">
        <button
          onClick={cancelOrder}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default Order;
