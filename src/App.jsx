import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coin/:coinId" element={<Coin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
