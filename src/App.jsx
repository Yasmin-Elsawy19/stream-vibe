// import logo from "./logo.svg";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Support from "./pages/Support";
import Freetarial from "./components/Freetrail";
import Subscription from "./pages/Subscription";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Support" element={<Support />} />
        
      </Routes>
      <Freetarial />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
