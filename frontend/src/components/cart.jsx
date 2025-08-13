import { useCart } from "./cartcontext";
import cartimg from "../assets/cart.png";

function Cart() {
  const { cart, removeFromCart, changeQuantity, subtotal } = useCart();
  
  return (
    <div className="p-8">
      <div className="p-8 border-2 border-violet-200">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={cartimg} alt="cart img" className="p-12" />
            <p className="text-violet-900">Cart is empty. Add more items</p>
            <p className="text-violet-900">to the cart to checkout.</p>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-4 justify-between items-center border-b py-4"
              >
                <div className=" flex flex-col gap-1 "> 
                  <div> <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"/>  </div>
                  <div> 
                      <p>{item.name}</p>
                  </div>
                  <div> <p>${item.price}</p>  </div> 
                </div> 
      
                <div className="flex gap-2  items-center">
                  <button
                    onClick={() => changeQuantity(item.id, -1)}
                    className="px-2 bg-violet-200 text-violet"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(item.id, 1)}
                    className="px-2 bg-violet-200 text-violet"
                  >
                    +
                  </button>
                </div>
                <p>${item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                X
                </button>
              </div>
            ))}
            <div className="text-right mt-4 text-lg font-bold">
              Subtotal: ${subtotal}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
