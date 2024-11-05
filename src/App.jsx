// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm";
import TodoList from "./components/todoList";
import ShoppingCart from "./components/shoppingCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
// import { useState } from "react";
// import "./App.css";
// import Homepage from "./components/homepage";
// import ReactDOM from "react-dom/client";
