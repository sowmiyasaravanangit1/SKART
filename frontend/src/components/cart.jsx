import "../App.css";
import cartimg from "../assets/cart.png";
function Cart(){
        return (
      <div> 
         <div className = " p-8 border-2 border-violet-200 ">
           <img src= {cartimg} alt = "cart img" className = "p-12" />
           < p className =" text-violet-900">  Cart is empty. Add more items<br/> to the cart to checkout. </p>
          </div>
      </div>
        );
}

export default Cart;