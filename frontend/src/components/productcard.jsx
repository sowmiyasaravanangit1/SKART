import "../App.css";
import product1img from "../assets/product1.jpg";
import product2img from "../assets/product2.jpg";
import product3img from "../assets/product3.jpg";
import product4img from "../assets/product4.jpg";
import product5img from "../assets/product5.jpg";
import product6img from "../assets/product6.jpg";
import product7img from "../assets/product7.jpg";
import product8img from "../assets/product8.jpg";
import product9img from "../assets/product9.jpg";
import product10img from "../assets/product10.jpg";
import product11img from "../assets/product11.jpg";
import product12img from "../assets/product12.jpg";
import product13img from "../assets/product13.jpg";
import product14img from "../assets/product14.jpg";
import product15img from "../assets/product15.jpg";
import product16img from "../assets/product16.jpg";

function ProductCard({ addToCart }) {
  const products = [
     { id: 1, image: product1img, price: 400, name: "Product 1" },
     { id: 2, image: product2img, price: 400, name: "Product 2" },
     { id: 3, image: product3img, price: 400, name: "Product 3" },
     { id: 4, image: product4img, price: 400, name: "Product 4" },
     { id: 5, image: product5img, price: 400, name: "Product 5" },
     { id: 6, image: product6img, price: 400, name: "Product 6" },
     { id: 7, image: product7img, price: 400, name: "Product 7" },
     { id: 8, image: product8img, price: 400, name: "Product 8" },
     { id: 9, image: product9img, price: 400, name: "Product 9" },
     { id: 10, image: product10img, price: 400, name: "Product 10" },
     { id: 11, image: product11img, price: 400, name: "Product 11" },
     { id: 12, image: product12img, price: 400, name: "Product 12" },
     { id: 13, image: product13img, price: 400, name: "Product 13" },
     { id: 14, image: product14img, price: 400, name: "Product 14" },
     { id: 15, image: product15img, price: 400, name: "Product 15" },
     { id: 16, image: product16img, price: 400, name: "Product 16" },


  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
      {products.map((p) => (
        <div key={p.id} className="border-violet-200 border-2 text-lg p-2">
          <img src={p.image} alt={p.name} className="w-[200px] h-[200px]" />
          <p>{p.name}</p>
          <p>${p.price}</p>
          <button
            className="bg-violet-900 text-white w-full"
           onClick={() => addToCart(p)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
