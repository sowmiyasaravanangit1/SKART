import "../App.css";
import { useParams, Link } from "react-router-dom";
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

export default function ProductDetails() {
  const { id } = useParams();

  const products = [
    { id: 1, image: product4img, price: 5000, name: "Shirt 1", description: "Premium cotton formal shirt with a slim fit design. Breathable fabric, wrinkle-resistant.", rating: 4.5, reviewsCount: 215, highlights: ["Slim Fit", "Cotton Fabric", "Machine Wash", "Wrinkle Resistant"], specifications: { Brand: "Raymond", Material: "100% Cotton", Fit: "Slim", Color: "White", Warranty: "30 days return" }, seller: "Raymond Official Store" },
    { id: 2, image: product2img, price: 700, name: "Shirt 2", description: "Casual wear cotton shirt with soft touch finish.", rating: 4.2, reviewsCount: 150, highlights: ["Regular Fit", "Breathable Fabric", "Durable Stitching"], specifications: { Brand: "Allen Solly", Material: "Cotton", Fit: "Regular", Color: "Blue", Warranty: "15 days return" }, seller: "Allen Solly Retail" },
    { id: 3, image: product3img, price: 890, name: "Shirt 3", description: "Trendy half-sleeve summer shirt.", rating: 4.0, reviewsCount: 98, highlights: ["Half Sleeve", "Trendy Design", "Lightweight"], specifications: { Brand: "Peter England", Material: "Cotton Blend", Fit: "Slim", Color: "Green", Warranty: "10 days return" }, seller: "Peter England Store" },
    { id: 4, image: product1img, price: 420, name: "Shirt 4", description: "Classic checked cotton shirt with a regular fit.", rating: 4.3, reviewsCount: 180, highlights: ["Checked Pattern", "Regular Fit", "Soft Fabric"], specifications: { Brand: "Van Heusen", Material: "100% Cotton", Fit: "Regular", Color: "Checked Blue", Warranty: "15 days return" }, seller: "Van Heusen Retail" },
    { id: 5, image: product5img, price: 540, name: "Kurthi 1", description: "Elegant printed kurthi made from rayon fabric.", rating: 4.4, reviewsCount: 90, highlights: ["Printed Design", "Rayon Fabric", "Ankle Length"], specifications: { Brand: "W for Women", Material: "Rayon", Fit: "Straight", Color: "Maroon", Warranty: "15 days return" }, seller: "W Official Store" },
    { id: 6, image: product6img, price: 630, name: "Kurthi 2", description: "Designer kurthi with embroidered neckline.", rating: 4.6, reviewsCount: 120, highlights: ["Embroidered Neck", "Soft Rayon", "Hand Wash Only"], specifications: { Brand: "Biba", Material: "Rayon", Fit: "Regular", Color: "Peach", Warranty: "20 days return" }, seller: "Biba Fashion" },
    { id: 7, image: product7img, price: 270, name: "Kurthi 3", description: "Budget-friendly kurthi with minimal prints.", rating: 3.9, reviewsCount: 45, highlights: ["Minimal Print", "Affordable", "Casual Wear"], specifications: { Brand: "Max", Material: "Cotton Blend", Fit: "Straight", Color: "Grey", Warranty: "7 days return" }, seller: "Max Retail" },
    { id: 8, image: product8img, price: 150, name: "Kurthi 4", description: "Lightweight summer kurthi made from breathable cotton fabric.", rating: 4.1, reviewsCount: 70, highlights: ["Summer Wear", "Lightweight", "Breathable"], specifications: { Brand: "Aurelia", Material: "Cotton", Fit: "Straight", Color: "Yellow", Warranty: "10 days return" }, seller: "Aurelia Official" },
    { id: 9, image: product9img, price: 480, name: "Household 1", description: "Multi-purpose storage container made from durable plastic.", rating: 4.3, reviewsCount: 65, highlights: ["Durable", "Multi-purpose", "Lightweight"], specifications: { Brand: "Milton", Material: "Plastic", Capacity: "5 Litres", Color: "Transparent", Warranty: "6 months" }, seller: "Milton India" },
    { id: 10, image: product10img, price: 400, name: "Household 2", description: "Non-stick frying pan with ergonomic handle.", rating: 4.5, reviewsCount: 310, highlights: ["Non-stick", "Ergonomic Handle", "Scratch Resistant"], specifications: { Brand: "Prestige", Material: "Aluminium", Size: "28cm", Color: "Black", Warranty: "1 year" }, seller: "Prestige Kitchen" },
    { id: 11, image: product11img, price: 1200, name: "Household 3", description: "Premium electric kettle with automatic shut-off.", rating: 4.6, reviewsCount: 500, highlights: ["Auto Shut-off", "Quick Boil", "Stainless Steel Body"], specifications: { Brand: "Philips", Material: "Stainless Steel", Capacity: "1.5 L", Color: "Silver", Warranty: "2 years" }, seller: "Philips Official" },
    { id: 12, image: product12img, price: 599, name: "Household 4", description: "Set of 6 glass tumblers with elegant design.", rating: 4.2, reviewsCount: 130, highlights: ["Elegant Design", "Durable Glass", "Dishwasher Safe"], specifications: { Brand: "Cello", Material: "Glass", Quantity: "6 pieces", Color: "Transparent", Warranty: "6 months" }, seller: "Cello Store" },
    { id: 13, image: product13img, price: 410, name: "Kidswear 1", description: "Cotton t-shirt for kids with vibrant cartoon print.", rating: 4.4, reviewsCount: 80, highlights: ["Cartoon Print", "Soft Cotton", "Easy Wash"], specifications: { Brand: "UCB Kids", Material: "Cotton", Size: "6-8 Years", Color: "Red", Warranty: "10 days return" }, seller: "UCB Kidswear" },
    { id: 14, image: product14img, price: 740, name: "Kidswear 2", description: "Stylish kids denim jacket, perfect for winter outings.", rating: 4.7, reviewsCount: 160, highlights: ["Denim", "Warm Inner", "Trendy Design"], specifications: { Brand: "Levi’s Kids", Material: "Denim", Size: "8-10 Years", Color: "Blue", Warranty: "30 days return" }, seller: "Levi’s Official" },
    { id: 15, image: product15img, price: 210, name: "Kidswear 3", description: "Soft cotton shorts for kids, ideal for playtime.", rating: 4.1, reviewsCount: 55, highlights: ["Breathable", "Elastic Waistband", "Lightweight"], specifications: { Brand: "Mothercare", Material: "Cotton", Size: "4-6 Years", Color: "Navy Blue", Warranty: "15 days return" }, seller: "Mothercare" },
    { id: 16, image: product16img, price: 510, name: "Kidswear 4", description: "Kids frock with floral prints.", rating: 4.3, reviewsCount: 100, highlights: ["Floral Design", "Cotton Blend", "Casual Wear"], specifications: { Brand: "Pantaloons Kids", Material: "Cotton Blend", Size: "6-8 Years", Color: "Pink", Warranty: "15 days return" }, seller: "Pantaloons Kids" },
    { id: 17, image: product17img, price: 510, name: "Kidswear 5", description: "Adorable cotton frock for kids with colorful prints.", rating: 4.2, reviewsCount: 85, highlights: ["Colorful Print", "Soft Fabric", "All Season"], specifications: { Brand: "Hopscotch", Material: "Cotton", Size: "5-7 Years", Color: "Multi-color", Warranty: "10 days return" }, seller: "Hopscotch Store" },
    { id: 18, image: product18img, price: 510, name: "Kidswear 6", description: "Playful kids t-shirt and shorts set.", rating: 4.5, reviewsCount: 140, highlights: ["2-piece Set", "Breathable", "Casual Wear"], specifications: { Brand: "Babyhug", Material: "Cotton", Size: "3-5 Years", Color: "Green", Warranty: "20 days return" }, seller: "Babyhug Official" },
    { id: 19, image: product19img, price: 510, name: "Kidswear 7", description: "Kids hoodie with cute prints, made from warm fleece fabric.", rating: 4.6, reviewsCount: 190, highlights: ["Warm Fleece", "Cute Print", "Winter Wear"], specifications: { Brand: "H&M Kids", Material: "Fleece", Size: "7-9 Years", Color: "Grey", Warranty: "30 days return" }, seller: "H&M Store" },
    { id: 20, image: product20img, price: 510, name: "Kidswear 8", description: "Comfortable kids pajama set made from organic cotton.", rating: 4.7, reviewsCount: 220, highlights: ["Organic Cotton", "Soft Touch", "All Night Comfort"], specifications: { Brand: "Zara Kids", Material: "Organic Cotton", Size: "5-7 Years", Color: "White", Warranty: "20 days return" }, seller: "Zara Official" }
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-8">
        <p className="text-red-600">Product not found.</p>
        <Link to="/" className="text-violet-700 underline">Go back</Link>
      </div>
    );
  }

  // Related products (same category word in name)
  const relatedProducts = products.filter(
    (p) => p.id !== product.id && p.name.split(" ")[0] === product.name.split(" ")[0]
  ).slice(0, 4);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-violet-700 underline">← Back to Products</Link>

      {/* Product details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <img src={product.image} alt={product.name} className="w-full h-[350px] object-cover border rounded-lg" />

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">⭐ {product.rating}</span>
            <span className="text-gray-600">({product.reviewsCount} reviews)</span>
          </div>

          <p className="text-lg mt-2 text-gray-700">{product.description}</p>

          <p className="text-3xl font-semibold mt-4">₹{product.price}</p>

          <button className="mt-6 bg-violet-900 text-white px-6 py-3 rounded-md hover:bg-violet-700 transition">
            Buy Now
          </button>

          <p className="mt-4 text-gray-600">
            <span className="font-semibold">Seller:</span> {product.seller}
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Highlights:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Specifications */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Specifications:</h2>
        <table className="w-full mt-2 border border-gray-300">
          <tbody>
            {Object.entries(product.specifications).map(([key, value], index) => (
              <tr key={index} className="border-b">
                <td className="p-2 font-medium bg-gray-100">{key}</td>
                <td className="p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      Related products
      {relatedProducts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                to={`/product/${rp.id}`}
                className="border rounded-lg p-2 hover:shadow-lg transition"
              >
                <img src={rp.image} alt={rp.name} className="w-full h-40 object-cover rounded" />
                <h3 className="mt-2 font-medium">{rp.name}</h3>
                <p className="text-gray-600 text-sm">₹{rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
