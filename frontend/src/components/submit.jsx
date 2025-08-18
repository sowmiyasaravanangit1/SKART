import { useNavigate } from "react-router-dom";
import "../App.css";
import {useNavigate } from "react-router-dom";

function Submit({ onClose }) {
  const Navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px] text-center">
        <p className="text-violet-900 p-4 text-xl">
          Yay! It's ordered <br />
          You will receive an invoice for your order shortly. <br />
          Your order will arrive in 7 business days.
        </p>
        <button
          onClick={Navigate ("/")}
          className="bg-violet-900 text-white rounded font-bold px-8 py-2 mt-4"
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
}

export default Submit;
