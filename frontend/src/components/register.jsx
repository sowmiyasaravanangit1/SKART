import "../App.css";
import homeimg from "../assets/karthomepic.jpg";
import {useNavigate } from "react-router-dom";
import { useState } from "react";

function Register(){

    const Navigate = useNavigate();
    const [username,setusername] =  useState();
    const [password,setpassword] = useState();
    const [confirmpassword,setconfirmpassword] = useState();
   
     function HandleRegister(e) {
        e.preventDefault();
      if(password!=confirmpassword){
        alert("Password and Confirm Password are not same so pls Enter it crtly!");
        return;
      }

      localStorage.setItem("UserName", username);
      localStorage.setItem("password",password);
      Navigate("/Login");

     }

    return(
     <div> 
      <div className="flex flex-row justify-between items-center p-2">
      <div>
        <h1 className="text-3xl text-violet-900 font-bold">SKART</h1>
      </div>
      <div> 
        <button onClick = { ()=> Navigate( "/Home")} className = " text-violet-900 p-4 text-xl " > Back to Explore </button>
      </div>
      </div>
      <div className = " relative" >
           <img src={homeimg } alt = "home pic"  className = " w-full h-[450px] " />
           <div className = "absolute inset-0 flex items-center justify-center text-violet-900 text-lg p-8">
            
            <form className=" bg-white px-12 py-6" onSubmit={HandleRegister} >
                <h1 className = "bg-white text-violet-900 py-2 font-bold text-xl"> Register </h1> 
               
                <label  className> User Name </label> <br/>
                <input type= "text" name = "username " placeholder="Enter your Name" 
                value= {username}  onChange={ (e)=> setusername(e.target.value)}  required
                className = "border-2 p-1 border-violet-900 rounded w-[300px]" /> <br/>
                
                <label  className> Password </label> <br/>
                <input type= "text" name = "Password " placeholder="Enter your 
                 Password" 
                 value = {password} onChange={(e) => setpassword(e.target.value)}  required
                 className = "border-2 p-1 border-violet-900 rounded w-[300px]"/> <br/>
                
                <label  className> Confirm Password </label> <br/>
                <input type= "text" name = "Confirm Password " placeholder="Enter your Confirm Password"
                value= {confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} required
                className = "border-2 p-1 border-violet-900 rounded w-[300px]"/> <br/> <br/>
                
                <button type = "submit" className = "p-2 bg-violet-900 text-white text-lg w-[300px]" >
                    Login to SKART
                </button>
                <br/> <br/>

            </form> </div>
            </div>
       <div className=" flex flex-col  bg-violet-900 items-center justify-center p-3">
        <div> <h1 className=" text-white text-2xl font-bold p-2 "> SKART</h1></div>
        <div> <p className=" text-white text-xl font-bold " > QKart is your one stop solution to the buy the latest trending items with </p>
       
       </div>
       <p className=" text-white text-xl font-bold "> India's Fastest Delivery to your doorstep</p>
      </div>  

      </div>
    );
}

export default Register;