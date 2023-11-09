import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/CartPage";
import { CartContextProvider } from "./Pages/Context/CartContext";


function App() {
  return (
    <div className="App bg-light">
      <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/Cart" element={<CartPage />}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
