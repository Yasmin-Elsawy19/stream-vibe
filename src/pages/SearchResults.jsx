import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchTitles, getTopRatedMovies } from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import "../styles/SearchResults.css";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (!query) return;
    setItems([]);
    setSearched(false);
    setSuggestions([]);
    setInputValue(query);
    doSearch(query);
  }, [query]);

  async function doSearch(q) {
    setLoading(true);

    const data = await searchTitles(q, 50);
    console.log("Search result:", data);

    if (data && data.titles && data.titles.length > 0) {
      const queryLower = q.toLowerCase();
      const matched = data.titles.filter((t) => {
        const title = (t.primaryTitle || "").toLowerCase();
        const genres = (t.genres || []).join(" ").toLowerCase();
        const plot = (t.plot || "").toLowerCase();
        const actors = (t.principals || []).map((p) => p.name || "").join(" ").toLowerCase();
        return title.includes(queryLower) || genres.includes(queryLower) || plot.includes(queryLower) || actors.includes(queryLower);
      });
      setItems(matched.length > 0 ? matched : data.titles.slice(0, 20));
    } else {
      setItems([]);
      const top = await getTopRatedMovies();
      if (top && top.titles) {
        setSuggestions(top.titles.filter((t) => t.primaryImage?.url).slice(0, 8));
      }
    }

    setSearched(true);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
    }
  }

  function handleItemClick(item) {
    const type = item?.type;
    if (type && (type.includes("tv") || type.includes("series"))) {
      navigate(`/tv/${item.id}`);
    } else {
      navigate(`/movie/${item.id}`);
    }
  }

  function renderCard(item) {
    const poster = item?.primaryImage?.url;
    const title = item?.primaryTitle || "Unknown";
    const year = item?.startYear || "";

    return (
      <div key={item.id} className="movie-poster-card" onClick={() => handleItemClick(item)}>
        <div className="poster-wrap">
          {poster ? (
            <img src={poster} alt={title} loading="lazy" />
          ) : (
            <div className="poster-placeholder"><span>No Image</span></div>
          )}
        </div>
        <div className="poster-bottom">
          <div className="poster-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            {year && <span>{year}</span>}
          </div>
          <span className="poster-type">{item?.type?.toLowerCase()}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>{query ? `Search results for "${query}"` : "Search Movies & Shows"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="search-bar-wrap">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title, actor, director..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search-submit-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </form>

      {loading && (
        <div className="search-results-grid">
          {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} variant="poster" />)}
        </div>
      )}

      {!loading && searched && items.length > 0 && (
        <>
          <p className="results-count">{items.length} results</p>
          <div className="search-results-grid">
            {items.map(renderCard)}
          </div>
        </>
      )}

      {!loading && searched && items.length === 0 && (
        <div className="no-results-section">
          <div className="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <h3>No results found</h3>
            <p>We couldn't find anything matching "{query}"</p>
          </div>

          {suggestions.length > 0 && (
            <div className="suggestions-section">
              <h2 className="suggestions-heading">You Might Also Enjoy</h2>
              <div className="search-results-grid">
                {suggestions.map(renderCard)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
