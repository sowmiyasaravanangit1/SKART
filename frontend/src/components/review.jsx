import { useState } from "react";
import "../App.css";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {


    if (editIndex !== null) {
      const updated = [...reviews];
      updated[editIndex] = input;
      setReviews(updated);
      setEditIndex(null);
    } else {

      setReviews([...reviews, input]);
      
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setInput(reviews[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Reviews</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Write your review..."/>
        <button
          onClick={handleSubmit}
          className="bg-violet-600 text-white px-4 py-2 rounded" >
          {editIndex !== null ? "Update" : "Add"}  </button>
      </div>
      
      <ul className="mt-4 space-y-2">
        {reviews.map((rev, i) => (
          <li key={i} className="flex justify-between items-center border p-2 rounded">
            <span>{rev}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(i)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
