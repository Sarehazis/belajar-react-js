// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// // Komponen MyButton
// function MyButton() {
//   const [count, setCount] = useState(0);

//   function Tambah() {
//     setCount(count + 1);
//   }

//   function Kurang() {
//     setCount(count - 1);
//   }

//   function Reset() {
//     setCount(0);
//   }

//   return (
//     <div className="counter-container">
//       <button className="button" onClick={Tambah}>
//         Tambah
//       </button>
//       <button className="button" onClick={Kurang}>
//         Kurangi
//       </button>
//       <button className="button reset" onClick={Reset}>
//         Reset
//       </button>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// // Data pengguna
// const user = {
//   name: "Sareh Azis Panegar",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// // Komponen Profile
// function Profile() {
//   return (
//     <div className="profile">
//       <h2>{user.name}</h2>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={"Foto " + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//     </div>
//   );
// }

// // Data produk
// const products = [
//   { title: "Kubis", isFruit: false, id: 1 },
//   { title: "Bawang Putih", isFruit: false, id: 2 },
//   { title: "Apel", isFruit: true, id: 3 },
// ];

// // Komponen ShoppingList
// function ShoppingList() {
//   return (
//     <ul className="shopping-list">
//       {products.map((product) => (
//         <li
//           key={product.id}
//           className="shopping-item"
//           style={{
//             color: product.isFruit ? "magenta" : "darkgreen",
//           }}
//         >
//           {product.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// // Komponen MyNama
// function MyNama() {
//   const [nama, setNama] = useState("Sareh");

//   return (
//     <>
//       <h1>Nama Saya : {nama}</h1>
//       <button type="button" onClick={() => setNama("Azis")}>
//         Ganti Nama
//       </button>
//     </>
//   );
// }

// // Komponen utama untuk merender semua komponen
// function App() {
//   return (
//     <div>
//       <h1>Homepage</h1> {/* Tambahkan komponen Homepage jika ada */}
//       <MyNama />
//       <MyButton />
//       <Profile />
//       <ShoppingList />
//     </div>
//   );
// }

// // Merender aplikasi
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
