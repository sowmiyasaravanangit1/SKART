import "../App.css";
import homeimg from "../assets/karthomepic.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  // popup states
  const [popupmessage, setpopupmessage] = useState("");
  const [popupType, setpopupType] = useState("");
  const [popup, setpopup] = useState(false);

  function HandleRegister(e) {
    e.preventDefault();

    if (password !== confirmpassword) {
      setpopupmessage("Password and Confirm Password do not match!");
      setpopupType("error");
      setpopup(true);

      setTimeout(() => setpopup(false), 1500);
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("userlogedin", "true"); 

      setpopupmessage("Registration Successful! Redirecting...");
      setpopupType("success");
      setpopup(true);

      setTimeout(() => {
        setpopup(false);
        navigate("/Login");
      }, 1500);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex flex-row justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl text-violet-900 font-extrabold">SKART</h1>
        <button
          onClick={() => navigate("/Home")}
          className="text-violet-900 px-4 py-2 font-semibold hover:text-violet-700 transition"
        >
          ⬅ Back to Explore
        </button>
      </div>

      {/* Hero + Form */}
      <div className="relative flex-1">
        <img
          src={homeimg}
          alt="home pic"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <form
            className="bg-white shadow-xl rounded-2xl px-10 py-8 w-[350px]"
            onSubmit={HandleRegister}
          >
            <h1 className="text-2xl font-bold text-violet-900 mb-6 text-center">
              Create Your Account
            </h1>

            {/* Username */}
            <label className="block text-sm font-semibold text-violet-900 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
              className="border-2 border-violet-900 rounded-lg w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Password */}
            <label className="block text-sm font-semibold text-violet-900 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="border-2 border-violet-900 rounded-lg w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Confirm Password */}
            <label className="block text-sm font-semibold text-violet-900 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              required
              className="border-2 border-violet-900 rounded-lg w-full px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-violet-900 text-white py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
            >
              Register
            </button>

            {/* Popup */}
            {popup && (
              <div
                className={`mt-4 text-center p-2 rounded-md text-sm font-semibold border animate-fadeIn
                ${
                  popupType === "success"
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-red-100 text-red-700 border-red-300"
                }`}
              >
                {popupmessage}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col bg-violet-900 items-center justify-center p-3">
        <div>
          <h1 className="text-white text-2xl font-bold p-2">SKART</h1>
        </div>
        <div>
          <p className="text-white text-xl font-bold">
            QKart is your one stop solution to buy the latest trending items with
          </p>
        </div>
        <p className="text-white text-xl font-bold">
          India's Fastest Delivery to your doorstep
        </p>
      </div>
    </div>
  );
}

export default Register;
