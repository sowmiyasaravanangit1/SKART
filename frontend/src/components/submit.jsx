import '../App.css';
import { useNavigate } from 'react-router-dom';
function Submit(){
    const navigate = useNavigate();
    const PlaceOrder = () => {
        navigate("/");
    }
    return(
        <div className=' p-32'> 
        <div className=' flex flex-col items-center justify-center'>
        <div> 
            <p className=' text-center text-violet-900 p-4 text-xl'>Yay! It's ordered 
        <br/>  You will receive an invoice for your order shortly.
         <br/> Your order will arrive in 7 business days.</p>
        </div>
        <div> 
          <button onClick ={PlaceOrder} className=' bg-violet-900 text-white  rounded font-bold text-x px-12 py-2'> CONTINUE SHOPPING</button>
        </div>

        </div>
            
         
        </div>
    )
}


export default Submit;