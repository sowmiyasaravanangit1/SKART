import { useState } from "react";
import "../App.css";
import homeimg from "../assets/karthomepic.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [lusername, setlusername] = useState("");
  const [lpassword, setlpassword] = useState("");
  const [popupmessage, setpopupmessage] = useState("");
  const [popup, setpopup] = useState(false);

  function HandleLogin(e) {
    e.preventDefault();
    const savedusername = localStorage.getItem("username");
    const savedpassword = localStorage.getItem("password");

    if (lusername === savedusername && lpassword === savedpassword) {
      setpopupmessage("Login Successful!");
      setpopup(true);

      setTimeout(() => {
        setpopup(false);
        navigate("/Home");
      }, 1000);
    } else {
      setpopupmessage("Username or Password incorrect!");
      setpopup(true);

      setTimeout(() => {
        setpopup(false);
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
            onSubmit={HandleLogin}
          >
            <h1 className="text-2xl font-bold text-violet-900 mb-6 text-center">
              Login to SKART
            </h1>

            {/* Username */}
            <label className="block text-sm font-semibold text-violet-900 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={lusername}
              onChange={(e) => setlusername(e.target.value)}
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
              value={lpassword}
              onChange={(e) => setlpassword(e.target.value)}
              required
              className="border-2 border-violet-900 rounded-lg w-full px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-violet-900 text-white py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center mt-4 text-sm text-gray-600">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/Register")}
                className="text-violet-900 font-bold hover:underline"
              >
                Register Now
              </button>
            </p>

            {/* Popup */}
            {popup && (
              <div className="mt-4 text-center p-2 rounded-md text-sm font-semibold 
              bg-violet-100 text-violet-900 border border-violet-300 animate-fadeIn">
                {popupmessage}
              </div>
            )}
          </form>
        </div>
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

export default Login;
