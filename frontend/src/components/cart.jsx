import "../App.css";
import cartimg from "../assets/cart.png";
function Cart(){
        return (
      <div className=" p-8"> 
         <div className = " p-8 border-2 border-violet-200 flex flex-col items-center justify-center">
          <div > 
             <img src= {cartimg} alt = "cart img" className = "p-12" />
          </div> 
          <div> 
            < p className =" text-violet-900">  Cart is empty. Add more items </p>
          </div>
           <div> 
              <p className =" text-violet-900 "> to the cart to checkout.</p>
              <br/>
            </div> 
          </div>
      </div>
        );
}

export default Cart;