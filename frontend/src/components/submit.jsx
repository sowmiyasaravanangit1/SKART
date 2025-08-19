import { useNavigate } from "react-router-dom";
import {useCart} from "./cartcontext";

function Submit({ onClose }) {
  const navigate = useNavigate();
  const { clearCart } = useCart(); 

  const PlaceOrder = () => {
    // Navigate to home
    clearCart();
    navigate("/");
    // Close popup after navigation
    if (onClose)
      clearCart();
      onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <p className="text-violet-900 text-2xl font-bold mb-4">
         Yay! Your order is placed successfully

        </p>

        <button
          onClick={PlaceOrder}
          className="bg-violet-900 text-white rounded px-4 py-2 mx-2"
        >
          Go to Home
        </button>

        <button
          onClick={onClose}
          className="border border-violet-900 text-violet-900 rounded px-4 py-2 mx-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Submit;
