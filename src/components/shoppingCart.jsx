import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const addItem = () => {
    if (input && price > 0) {
      setCart([...cart, { name: input, price }]);
      setInput("");
      setPrice(0);
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    navigate("/");
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mb-6">
        <div className="flex flex-col gap-4">
          <input
            className="border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Item Name"
          />
          <input
            type="number"
            className="border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Price"
          />
          <button
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-300"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>

      <ul className="w-full max-w-md bg-white shadow-md rounded-lg divide-y divide-gray-200">
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-4">
            <span className="text-gray-700 font-medium">{item.name}</span>
            <span className="text-gray-500">Rp.{item.price.toFixed(2)}</span>
            <button
              className="text-red-500 hover:text-red-600 transition duration-300"
              onClick={() => removeItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <div className="w-full max-w-md mt-4 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
          <span className="text-gray-700 font-bold">Total:</span>
          <span className="text-gray-700 font-bold">
            ${totalCost.toFixed(2)}
          </span>
        </div>
      )}

      <button
        className="mt-6 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-300"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default ShoppingCart;
