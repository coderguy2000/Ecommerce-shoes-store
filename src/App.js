import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./components/Store/Page";
import TheJourney from "./components/TheJourney/Page";
import Home from "./components/Home/Page";
import Team from "./components/Team/Page";
import Contact from "./components/Contact/Page";
import Product from "./components/Product/Page";
import { createContext, useState } from "react";
import ScrollToTop from "./ScrollToTop";

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <ScrollToTop />
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <div className="App">
          <AppHeader />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/the-journey" element={<TheJourney />} />
            <Route path="/team" element={<Team />} />
            <Route path="/store/product/:slug" element={<Product />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
