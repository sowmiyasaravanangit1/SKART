import { useCart } from "./cartcontext";
import { useNavigate } from "react-router-dom";
import cartimg from "../assets/cart.png";
import { useParams } from "react-router-dom";
import product1img  from "../assets/product1.jpg";
import product2img  from "../assets/product2.jpg";
import product3img  from "../assets/product3.jpg";
import product4img  from "../assets/product4.jpg";
import product5img  from "../assets/product5.jpg";
import product6img  from "../assets/product6.jpg";
import product7img  from "../assets/product7.jpg";
import product8img  from "../assets/product8.jpg";
import product9img  from "../assets/product9.jpg";
import product10img from "../assets/product10.jpg";
import product11img from "../assets/product11.jpg";
import product12img from "../assets/product12.jpg";
import product13img from "../assets/product13.jpg";
import product14img from "../assets/product14.jpg";
import product15img from "../assets/product15.jpg";
import product16img from "../assets/product16.jpg";
import product17img from "../assets/product17.jpg";
import product18img from "../assets/product18.jpg";
import product19img from "../assets/product19.jpg";
import product20img from "../assets/product20.jpg";


function Cart() {
  const products = [
    { id: 1, image: product4img, price: 5000, name: "Shirt 1", description: "Premium cotton formal shirt with a slim fit design. Breathable fabric, wrinkle-resistant.", rating: 4.5, reviewsCount: 215, highlights: ["Slim Fit", "Cotton Fabric", "Machine Wash", "Wrinkle Resistant"], specifications: { Brand: "Raymond", Material: "100% Cotton", Fit: "Slim", Color: "White", Warranty: "30 days return" }, seller: "K Official Store" },
    { id: 2, image: product2img, price: 5340, name: "Shirt 2", description: "Premium cotton formal shirt with a slim fit design. Breathable fabric, wrinkle-resistant.", rating: 4.5, reviewsCount: 215, highlights: ["Slim Fit", "Cotton Fabric", "Machine Wash", "Wrinkle Resistant"], specifications: { Brand: "Raymond", Material: "100% Cotton", Fit: "Slim", Color: "White", Warranty: "30 days return" }, seller: "K Official Store" },
    { id: 3, image: product3img, price: 980, name: "Shirt 3", description: "Premium cotton formal shirt with a slim fit design. Breathable fabric, wrinkle-resistant.", rating: 4.5, reviewsCount: 215, highlights: ["Slim Fit", "Cotton Fabric", "Machine Wash", "Wrinkle Resistant"], specifications: { Brand: "Raymond", Material: "100% Cotton", Fit: "Slim", Color: "White", Warranty: "30 days return" }, seller: "K Official Store" },
    { id: 4, image: product1img, price: 920, name: "Shirt 4", description: "Premium cotton formal shirt with a slim fit design. Breathable fabric, wrinkle-resistant.", rating: 4.5, reviewsCount: 215, highlights: ["Slim Fit", "Cotton Fabric", "Machine Wash", "Wrinkle Resistant"], specifications: { Brand: "Raymond", Material: "100% Cotton", Fit: "Slim", Color: "White", Warranty: "30 days return" }, seller: "K Official Store" },
    { id: 5, image: product5img, price: 740, name: "Kurthi 1", description: "Elegant printed kurthi made from rayon fabric.", rating: 4.4, reviewsCount: 90, specifications: { Brand: "W for Women", Material: "Rayon", Fit: "Straight", Color: "Maroon", Warranty: "15 days return" }, seller: "W Official Store" },
    { id: 6, image: product6img, price: 510, name: "Kurthi 2", description: "Elegant printed kurthi made from rayon fabric.", rating: 4.4, reviewsCount: 90, specifications: { Brand: "W for Women", Material: "Rayon", Fit: "Straight", Color: "Maroon", Warranty: "15 days return" }, seller: "W Official Store" },
    { id: 7, image: product7img, price: 540, name: "Kurthi 3", description: "Elegant printed kurthi made from rayon fabric.", rating: 4.4, reviewsCount: 90, specifications: { Brand: "W for Women", Material: "Rayon", Fit: "Straight", Color: "Maroon", Warranty: "15 days return" }, seller: "W Official Store" },
    { id: 8, image: product8img, price: 210, name: "Kurthi 4", description: "Elegant printed kurthi made from rayon fabric.", rating: 4.4, reviewsCount: 90, specifications: { Brand: "W for Women", Material: "Rayon", Fit: "Straight", Color: "Maroon", Warranty: "15 days return" }, seller: "W Official Store" },
    { id: 9, image: product9img, price: 250, name: "Household 1", description: "Multi-purpose storage container made from durable plastic.", rating: 4.3, reviewsCount: 65, specifications: { Brand: "Milton", Material: "Plastic", Capacity: "5 Litres", Color: "Transparent", Warranty: "6 months" }, seller: "S Official Store" },
    { id: 10, image: product10img, price: 710, name: "Household 2", description: "Multi-purpose storage container made from durable plastic.", rating: 4.3, reviewsCount: 65, specifications: { Brand: "Milton", Material: "Plastic", Capacity: "5 Litres", Color: "Transparent", Warranty: "6 months" }, seller: "S Official Store" },
    { id: 11, image: product11img, price: 150, name: "Household 3", description: "Multi-purpose storage container made from durable plastic.", rating: 4.3, reviewsCount: 65, specifications: { Brand: "Milton", Material: "Plastic", Capacity: "5 Litres", Color: "Transparent", Warranty: "6 months" }, seller: "S Official Store" },
    { id: 12, image: product12img, price: 480, name: "Household 4", description: "Multi-purpose storage container made from durable plastic.", rating: 4.3, reviewsCount: 65, specifications: { Brand: "Milton", Material: "Plastic", Capacity: "5 Litres", Color: "Transparent", Warranty: "6 months" }, seller: "S Official Store" },
    { id: 13, image: product13img, price: 770, name: "Kidswear 1", description: "Cotton t-shirt for kids with vibrant cartoon print.", rating: 4.4, reviewsCount: 80, highlights: ["Cartoon Print", "Soft Cotton", "Easy Wash"], specifications: { Brand: "UCB Kids", Material: "Cotton", Size: "6-8 Years", Color: "Red", Warranty: "10 days return" }, seller: "ds Kidswear" },
    { id: 14, image: product14img, price: 490, name: "Kidswear 2", description: "Cotton t-shirt for kids with vibrant cartoon print.", rating: 4.4, reviewsCount: 80, specifications: { Brand: "UCB Kids", Material: "Cotton", Size: "6-8 Years", Color: "Red", Warranty: "10 days return" }, seller: "ds Kidswear" },
    { id: 15, image: product15img, price: 437, name: "Kidswear 3", description: "Cotton t-shirt for kids with vibrant cartoon print.", rating: 4.4, reviewsCount: 80, specifications: { Brand: "UCB Kids", Material: "Cotton", Size: "6-8 Years", Color: "Red", Warranty: "10 days return" }, seller: "ds Kidswear" },
    { id: 16, image: product16img, price: 630, name: "Kidswear 4", description: "Cotton t-shirt for kids with vibrant cartoon print.", rating: 4.4, reviewsCount: 80, specifications: { Brand: "UCB Kids", Material: "Cotton", Size: "6-8 Years", Color: "Red", Warranty: "10 days return" }, seller: "ds Kidswear" },
    { id: 17, image: product17img, price: 6000, name: "Shirt 5", description: "Premium cotton formal shirt with a slim fit design. Breathable fabric, wrinkle-resistant.", rating: 4.5, reviewsCount: 215, highlights: ["Slim Fit", "Cotton Fabric", "Machine Wash", "Wrinkle Resistant"], specifications: { Brand: "Raymond", Material: "100% Cotton", Fit: "Slim", Color: "White", Warranty: "30 days return" }, seller: "Raymond Official Store" },
    { id: 18, image: product18img, price: 210, name: "Kurthi 5", description: "Elegant printed kurthi made from rayon fabric.", rating: 4.4, reviewsCount: 90, specifications: { Brand: "W for Women", Material: "Rayon", Fit: "Straight", Color: "Maroon", Warranty: "15 days return" }, seller: "W Official Store" },
    { id: 19, image: product19img, price: 480, name: "Household 5", description: "Multi-purpose storage container made from durable plastic.", rating: 4.3, reviewsCount: 65, specifications: { Brand: "Milton", Material: "Plastic", Capacity: "5 Litres", Color: "Transparent", Warranty: "6 months" }, seller: "S Official Store" },
    { id: 20, image: product20img, price: 410, name: "Kidswear 5", description: "Cotton t-shirt for kids with vibrant cartoon print.", rating: 4.4, reviewsCount: 80, specifications: { Brand: "UCB Kids", Material: "Cotton", Size: "6-8 Years", Color: "Red", Warranty: "10 days return" }, seller: "UCB Kidswear" },
  ];
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, addToCart, removeFromCart, changeQuantity, subtotal } = useCart();
  const Navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

    const HandleCheckout  =  () => {
    let checklogin = localStorage.getItem("userlogedin");

    if (!checklogin) {    
        alert(" user didnt logged in ");
        Navigate("/login");
    }

    else {
      if (product) {   
        addToCart(product);
     }
       Navigate("/checkout");
    }
  }

  return (
    <div className="p-8">
      <div className="p-8 border-2 border-violet-200">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={cartimg} alt="cart img" className="p-12" />
            <p className="text-violet-900">Cart is empty. Add more items</p>
            <p className="text-violet-900">to the cart to checkout.</p>

            <div>  <button
          onClick={() => navigate("/")}
          className="bg-violet-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-700 transition"
        >
          Back to Home
        </button> </div>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-4 justify-between items-center border-b py-4"
              >
                <div className=" flex flex-col gap-1">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
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
              TOTAL : ${subtotal}
            </div>
            <button
              onClick={HandleCheckout}
              className="bg-violet-900 px-4 py-2 rounded text-white float-right"
            >
              CHECK OUT
            </button>
            <br/>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
