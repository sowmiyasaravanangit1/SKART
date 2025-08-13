import { createContext, useContext,useState } from "react";

const CartContext = createContext();

export const UseCart = () => {  useContext(CartContext); }

export const CartProvider= ({children})=> {
         const [cart , setCart] = useState();
         const [quatity , setQuantity] = useState();

         const addToCart = (products) => {
            setCart((previtem) => {
            const prevele =  previtem.find((items)=> items.id ===products.id);
               if(prevele){
                return(
                   {cart}
                );
               }
            })

         }

         const subtotal = cart.reduce((total,item) => {
                  total + item.price * item.quantity
         },0)

} 