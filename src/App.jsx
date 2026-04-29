import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import TVShowDetails from "./pages/TVShowDetails";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVShowDetails />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;