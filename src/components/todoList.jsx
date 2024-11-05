import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    navigate("/cart");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4"> Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
        className="flex-1 p-2 border rounded"
      />
      <button
        className="ml-2 p-2 pr-4 pl-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={addTodo}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li className="flex justify-between items-center mb-2" key={index}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              className="ml-4 p-2 pr-4 pl-4 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNext}
        className=" mt-8 p-2 pr-4 pl-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}

export default TodoList;

{
  /* <div>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div> */
}
