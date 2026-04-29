import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import TVShowDetails from "./pages/TVShowDetails";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVShowDetails />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;