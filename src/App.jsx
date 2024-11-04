import { useState } from "react";
import "./App.css";
import Homepage from "./components/homepage";

function MyButton() {
  const [count, setCount] = useState(0);

  function Tambah() {
    setCount(count + 1);
  }

  function Kurang() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <button className="button" onClick={Tambah}>
        Tambah
      </button>
      <button className="button" onClick={Kurang}>
        Kurangi
      </button>
      <button className="button reset" onClick={Reset}>
        Reset
      </button>
      <h1>{count}</h1>
    </div>
  );
}

const user = {
  name: "Sareh Azis Panegar",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Foto " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

const products = [
  { title: "Kubis", isFruit: false, id: 1 },
  { title: "Bawang Putih", isFruit: false, id: 2 },
  { title: "Apel", isFruit: true, id: 3 },
];

function ShoppingList() {
  return (
    <ul className="shopping-list">
      {products.map((product) => (
        <li
          key={product.id}
          className="shopping-item"
          style={{
            color: product.isFruit ? "magenta" : "darkgreen",
          }}
        >
          {product.title}
        </li>
      ))}
    </ul>
  );
}

export default function MyApp() {
  return (
    <div className="app-container">
      <Homepage />
      <MyButton />
      <Profile />
      <ShoppingList />
    </div>
  );
}