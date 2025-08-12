import { useState } from "react";
import "../App.css";
import homeimg from "../assets/karthomepic.jpg";
import {useNavigate } from "react-router-dom"

function Login(){

    const Navigate = useNavigate();
    const [lusername,setlusername] = useState();
    const [lpassword,setlpassword] = useState();


    function HandleLogin(e) {
       e.preventDefault();
       const savedusername = localStorage.getItem("username");
       const savedpassword = localStorage.getItem("password");

       if (lusername == savedusername || lpassword ==savedpassword){
         alert ( " Login Successful....!");
         Navigate("/Home"); 
       }

       else{
         alert(" UserName or Password Not correct!");
       }
       

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
            
            <form className=" bg-white px-12 py-6" onSubmit={ HandleLogin} >
                <h1 className = "bg-white text-violet-900 py-2 font-bold text-xl"> Login </h1> 
                
                <label  className> User Name </label> <br/>
                <input type= "text" name = "username " placeholder="Enter your Name"
                value= {lusername} onChange={ (e)=> setlusername(e.target.value)} required
                className = "border-2 p-1 border-violet-900 rounded w-[300px]" /> <br/>
                

                <label  className> Password </label> <br/>
                <input type= "text" name = "Password " placeholder="Enter your Password"
                value = {lpassword}  onChange={ (e) => setlpassword(e.target.value)} required
                className = "border-2 p-1 border-violet-900 rounded w-[300px]"/> <br/> <br/>
                
                <button type = "submit" className = "p-2 bg-violet-900 text-white text-lg w-[300px]" >
                    Login to SKART
                </button>
                <br/> <br/>
                <p className = " text-md"> Don’t have an account? <button onClick = { ()=> Navigate("/Register")} className = "font-bold text-xl" > Register Now </button> </p>
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

export default Login;