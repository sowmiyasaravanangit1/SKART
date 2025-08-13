import "../App.css";
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
import { useCart } from "./cartcontext";
import { useNavigate } from "react-router-dom";

function ProductCard()  {
   const { addToCart } = useCart();
   const Navigate = useNavigate();
   
   const products = [
     { id: 1,  image: product4img,   price: 5000, name: "shirt1" },
     { id: 2,  image: product2img,   price: 700, name: "shirt2" },
     { id: 3,  image: product3img,   price: 890, name: "shirt3" },
     { id: 4,  image: product1img,   price: 420, name: "shirt4" },
     { id: 5,  image: product5img,   price: 540, name: "kurthi1" },
     { id: 6,  image: product6img,   price: 630, name: "kurthi2" },
     { id: 7,  image: product7img,   price: 270, name: "kurthi3" },
     { id: 8,  image: product8img,   price: 150, name: "kurthi4" },
     { id: 9,  image: product9img,   price: 480, name: "household1" },
     { id: 10, image: product10img,  price: 400, name: "household2" },
     { id: 11, image: product11img,  price: 1200, name: "household3" },
     { id: 12, image: product12img,  price: 599, name: "household4" },
     { id: 13, image: product13img,  price: 410, name: "kidswear1" },
     { id: 14, image: product14img,  price: 740, name: "kidswear2" },
     { id: 15, image: product15img,  price: 210, name: "kidswear3" },
     { id: 16, image: product16img,  price: 510, name: "kidswear4" },
  ];


  function HandleCart(product) {
        let UserLogedin = localStorage.getItem( "userlogedin");
          if (!UserLogedin){
              alert("user didnt logged in so redirecting to login page");
              Navigate("/Login");
          }

          else { addToCart(product);}
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
      {products.map((p) => (
        <div key={p.id} className="border-violet-200 border-2 text-lg p-2">
          <img src={p.image} alt={p.name} className="w-[200px] h-[200px]" />
          <p>{p.name}</p>
          <p>${p.price}</p>
          <button
            className="bg-violet-900 text-white w-full"
           onClick={() => HandleCart(p) } >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
