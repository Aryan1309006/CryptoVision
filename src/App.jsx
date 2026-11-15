import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoinDetails } from "./pages/CoinDetails";
import Footer from "./components/Footer";
import { Pricing } from "./pages/Pricing";
import Features from "./pages/Features";
import { Heropage } from "./pages/Heropage";
import Seveditem from "./pages/Seveditem";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#181B20] dark:text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Heropage />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/watchlist" element={<Seveditem />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
