import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Support from "./pages/Support";
import Freetarial from "./components/Freetrail";
import Subscription from "./pages/Subscription";
import MovieDetails from "./pages/MovieDetails";
import TVShowDetails from "./pages/TVShowDetails";
import SearchResults from "./pages/SearchResults";


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVShowDetails />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/subscriptions" element={<MobilePlanCard />} /> */}
      </Routes>
      <Freetarial />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
