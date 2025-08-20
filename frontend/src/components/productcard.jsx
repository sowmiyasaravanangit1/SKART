import "../App.css";
import { useNavigate } from "react-router-dom";
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

function ProductCard() {
  const navigate = useNavigate();

  const products = [
    { id: 1, image: product4img, price: 5000, name: "Shirt 1" },
    { id: 2, image: product2img, price: 700, name: "Shirt 2" },
    { id: 3, image: product3img, price: 890, name: "Shirt 3" },
    { id: 4, image: product1img, price: 420, name: "Shirt 4" },
    { id: 5, image: product5img, price: 540, name: "Kurthi 1" },
    { id: 6, image: product6img, price: 630, name: "Kurthi 2" },
    { id: 7, image: product7img, price: 270, name: "Kurthi 3" },
    { id: 8, image: product8img, price: 150, name: "Kurthi 4" },
    { id: 9, image: product9img, price: 480, name: "Household 1" },
    { id: 10, image: product10img, price: 400, name: "Household 2" },
    { id: 11, image: product11img, price: 1200, name: "Household 3" },
    { id: 12, image: product12img, price: 599, name: "Household 4" },
    { id: 13, image: product13img, price: 410, name: "Kidswear 1" },
    { id: 14, image: product14img, price: 740, name: "Kidswear 2" },
    { id: 15, image: product15img, price: 210, name: "Kidswear 3" },
    { id: 16, image: product16img, price: 510, name: "Kidswear 4" },
    { id: 17, image: product17img, price: 510, name: "Kidswear 5" },
    { id: 18, image: product18img, price: 510, name: "Kidswear 6" },
    { id: 19, image: product19img, price: 510, name: "Kidswear 7" },
    { id: 20, image: product20img, price: 510, name: "Kidswear 8" }
  ];

  const handleCart = (product) => {
    navigate(`/productdetails/${product.id}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-8 ">
      {products.map((p) => (
        <div
          key={p.id}
          className="border-violet-200 border-2 text-lg p-2 cursor-pointer hover:scale-105 hover:bg-violet-200 transition"
          onClick={() => handleCart(p)} >
          <img src={p.image} alt={p.name} className="w-[200px] h-[200px]" />
          <p>{p.name}</p>
          <p>₹{p.price}</p>
          <button
            className="bg-violet-900 text-white w-full mt-2"
            onClick={(e) => {
              handleCart(p);
            }}
          >
            VIEW
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
