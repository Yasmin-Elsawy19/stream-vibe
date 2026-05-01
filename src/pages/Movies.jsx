import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getTitles } from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import "../styles/Movies.css";

const GENRES = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Animation", "Crime", "Romance"];

function HeroCarousel({ movies, loading }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % movies.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [movies.length]);

  if (loading || movies.length === 0) {
    return (
      <div className="hero-carousel">
        <div className="hero-skeleton"></div>
      </div>
    );
  }

  const movie = movies[activeIndex];
  const title = movie?.primaryTitle || "Unknown";
  const plot = movie?.plot || "";

  function prevSlide() {
    setActiveIndex((prev) => (prev - 1 + movies.length) % movies.length);
  }

  function nextSlide() {
    setActiveIndex((prev) => (prev + 1) % movies.length);
  }

  return (
    <div className="hero-carousel">
      <div className="hero-slides">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`hero-slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={movie?.primaryImage?.url || ""} alt="" className="hero-bg" />
            <div className="hero-overlay" />
            <div className="hero-fade-left" />
            <div className="hero-fade-right" />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-overview">{plot || "Description not available"}</p>
          </div>

          <div className="hero-bottom">
            <div className="hero-actions">
              <button className="btn-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Now
              </button>
              <button className="action-btn" aria-label="Add to list">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <button className="action-btn" aria-label="Toggle sound">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </button>
            </div>

            <div className="hero-nav">
              <button className="hero-nav-btn hero-nav-prev" onClick={prevSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="hero-nav-btn hero-nav-next" onClick={nextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="hero-dots">
              {movies.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionRow({ title, items, loading, renderItem, cardVariant }) {
  const scrollRef = useRef();

  function scroll(dir) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -500 : 500, behavior: "smooth" });
    }
  }

  return (
    <div className="movies-section">
      <div className="section-inner">
        <div className="category-heading-wrapper">
          <div className="category-left-inner">
            <h2 className="section-heading">{title}</h2>
          </div>
          <div className="category-right-slider">
            <button className="slider-arrow" onClick={() => scroll("left")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="slider-arrow" onClick={() => scroll("right")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="section-scroll" ref={scrollRef}>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} variant={cardVariant || "poster"} />)
          ) : (
            items.map((item) => renderItem(item))
          )}
        </div>
      </div>
    </div>
  );
}

function GenreCard({ genre, posters, onClick, isTopGenre }) {
  return (
    <div className={`genre-card ${isTopGenre ? "genre-card-top" : ""}`} onClick={() => onClick(genre)}>
      {posters && posters.length > 0 ? (
        <div className="genre-collage">
          <div className="collage-grid">
            {posters.slice(0, 4).map((url, i) => (
              <div key={i} className="collage-item">
                <img src={url} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="genre-overlay">
            {isTopGenre && <span className="top-badge">Top 10 In</span>}
            <div className="genre-info">
              <h6>{genre}</h6>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="genre-bg">
          <div className="genre-overlay">
            {isTopGenre && <span className="top-badge">Top 10 In</span>}
            <div className="genre-info">
              <h6>{genre}</h6>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TrendingCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);
  const poster = item?.primaryImage?.url;
  const title = item?.primaryTitle || "Unknown";
  const runtimeSec = item?.runtimeSeconds;
  const runtime = runtimeSec ? `${Math.floor(runtimeSec / 60)} minutes` : "";

  return (
    <div className="trending-card" onClick={() => onClick(item)}>
      <div className="poster-wrap">
        {poster && !imgError ? (
          <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="poster-placeholder"><span>No Image</span></div>
        )}
        <div className="card-info-bottom">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          {runtime && <span>{runtime}</span>}
        </div>
      </div>
    </div>
  );
}

function NewReleaseCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);
  const poster = item?.primaryImage?.url;
  const title = item?.primaryTitle || "Unknown";
  const year = item?.startYear?.year || item?.startYear || "";

  return (
    <div className="new-release-card" onClick={() => onClick(item)}>
      <div className="poster-wrap">
        {poster && !imgError ? (
          <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="poster-placeholder"><span>No Image</span></div>
        )}
        <div className="card-info-bottom">
          <span className="released-label">Released at</span>
          {year && <span className="released-date">{year}</span>}
        </div>
      </div>
    </div>
  );
}

function MustWatchCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);
  const poster = item?.primaryImage?.url;
  const title = item?.primaryTitle || "Unknown";
  const runtimeSec = item?.runtimeSeconds;
  const runtime = runtimeSec ? `${Math.floor(runtimeSec / 60)} minutes` : "";
  const rating = item?.rating?.aggregateRating;

  return (
    <div className="must-watch-card" onClick={() => onClick(item)}>
      <div className="poster-wrap">
        {poster && !imgError ? (
          <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="poster-placeholder"><span>No Image</span></div>
        )}
        <div className="card-info-bottom">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          {runtime && <span className="runtime">{runtime}</span>}
          <div className="rating-stars">
            {rating && rating >= 8 ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#E50000"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#E50000"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#E50000"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#E50000"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E50000" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </>
            )}
          </div>
          <span className="likes">20K</span>
        </div>
      </div>
    </div>
  );
}

function ShowCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);
  const poster = item?.primaryImage?.url;
  const title = item?.primaryTitle || "Unknown";
  const rating = item?.rating?.aggregateRating;

  return (
    <div className="show-card" onClick={() => onClick(item)}>
      <div className="poster-wrap">
        {poster && !imgError ? (
          <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="poster-placeholder"><span>No Image</span></div>
        )}
        {rating && (
          <div className="show-rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>{rating}</span>
          </div>
        )}
        <div className="show-info-bottom">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <span>{item?.type || "TV Series"}</span>
        </div>
      </div>
    </div>
  );
}

export default function MoviesShows() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [genrePosters, setGenrePosters] = useState({});
  const [topGenres, setTopGenres] = useState([]);
  const [topGenrePosters, setTopGenrePosters] = useState({});
  const [heroMovies, setHeroMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [shows, setShows] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [newReleaseShows, setNewReleaseShows] = useState([]);
  const [mustWatchShows, setMustWatchShows] = useState([]);
  const [top10GenreShows, setTop10GenreShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  async function fetchAll() {
    setLoading(true);

    const moviesData = await getTitles({ type: "movie", limit: 100 });
    const tvData = await getTitles({ type: "tvSeries", limit: 50 });

    const allMovies = moviesData?.titles || [];
    const allShows = tvData?.titles || [];
    const allTitles = [...allMovies, ...allShows];

    setHeroMovies(allMovies.slice(0, 5));
    setTrending(allMovies.slice(0, 10));
    setNewReleases(allMovies.slice(10, 20));
    setMustWatch(allMovies.slice(20, 30));
    setShows(allShows.slice(0, 10));
    setTrendingShows(allShows.slice(10, 20));
    setNewReleaseShows(allShows.slice(20, 30));
    setMustWatchShows(allShows.slice(30, 40));
    setTop10GenreShows(allShows.slice(40, 50));

    const posterMap = {};
    const topPosterMap = {};
    const topGenresList = [];

    for (const g of GENRES) {
      const filtered = allTitles.filter((t) => t.genres?.includes(g));

      if (filtered.length > 0) {
        posterMap[g] = filtered
          .filter((t) => t.primaryImage?.url)
          .slice(0, 4)
          .map((t) => t.primaryImage.url);

        topPosterMap[g] = filtered
          .filter((t) => t.primaryImage?.url)
          .slice(0, 4)
          .map((t) => t.primaryImage.url);

        topGenresList.push(g);
      }
    }

    setGenres(GENRES);
    setGenrePosters(posterMap);
    setTopGenres(topGenresList);
    setTopGenrePosters(topPosterMap);
    setLoading(false);
  }

  function handleGenreClick(genre) {
    navigate(`/movies?genre=${genre}`);
  }

  function handleItemClick(item) {
    const type = item?.type;
    if (type && (type.includes("tv") || type.includes("series"))) {
      navigate(`/tv/${item.id}`);
    } else {
      navigate(`/movie/${item.id}`);
    }
  }

  return (
    <div className="movies-page">
      {/* Hero Carousel Section */}
      <HeroCarousel movies={heroMovies} loading={loading} />

      <div className="movies-content">
        <div className="grid-movies-inner">
          {/* ==================== MOVIES SECTIONS ==================== */}
          <div className="section-header">
            <h2 className="section-header-title">Movies</h2>
          </div>

          {/* Our Genres */}
          <SectionRow
            title="Our Genres"
            items={genres}
            loading={loading}
            cardVariant="genre"
            renderItem={(genre) => (
              <GenreCard
                key={genre}
                genre={genre}
                posters={genrePosters[genre]}
                onClick={handleGenreClick}
              />
            )}
          />

          {/* Popular Top 10 In Genres */}
          <SectionRow
            title="Popular Top 10 In Genres"
            items={topGenres}
            loading={loading}
            cardVariant="genre"
            renderItem={(genre) => (
              <GenreCard
                key={`top-${genre}`}
                genre={genre}
                posters={topGenrePosters[genre]}
                onClick={handleGenreClick}
                isTopGenre
              />
            )}
          />

          {/* Trending Now */}
          <SectionRow
            title="Trending Now"
            items={trending}
            loading={loading}
            renderItem={(item) => (
              <TrendingCard key={`trending-${item.id}`} item={item} onClick={handleItemClick} />
            )}
          />

          {/* New Releases */}
          <SectionRow
            title="New Releases"
            items={newReleases}
            loading={loading}
            renderItem={(item) => (
              <NewReleaseCard key={`new-${item.id}`} item={item} onClick={handleItemClick} />
            )}
          />

          {/* Must - Watch Movies */}
          <SectionRow
            title="Must - Watch Movies"
            items={mustWatch}
            loading={loading}
            renderItem={(item) => (
              <MustWatchCard key={`must-${item.id}`} item={item} onClick={handleItemClick} />
            )}
          />

          {/* ==================== SHOWS SECTIONS ==================== */}
          <div className="section-header shows-header">
            <h2 className="section-header-title">Shows</h2>
          </div>

          {/* Our Genres */}
          <SectionRow
            title="Our Genres"
            items={genres}
            loading={loading}
            cardVariant="genre"
            renderItem={(genre) => (
              <GenreCard
                key={`show-genre-${genre}`}
                genre={genre}
                posters={genrePosters[genre]}
                onClick={handleGenreClick}
              />
            )}
          />

          {/* Popular Top 10 In Genre */}
          <SectionRow
            title="Popular Top 10 In Genre"
            items={topGenres}
            loading={loading}
            cardVariant="genre"
            renderItem={(genre) => (
              <GenreCard
                key={`show-top-${genre}`}
                genre={genre}
                posters={topGenrePosters[genre]}
                onClick={handleGenreClick}
                isTopGenre
              />
            )}
          />

          {/* Trending Shows Now */}
          <SectionRow
            title="Trending Shows Now"
            items={trendingShows}
            loading={loading}
            renderItem={(item) => (
              <TrendingCard key={`trending-show-${item.id}`} item={item} onClick={handleItemClick} />
            )}
          />

          {/* New Released Shows */}
          <SectionRow
            title="New Released Shows"
            items={newReleaseShows}
            loading={loading}
            renderItem={(item) => (
              <NewReleaseCard key={`new-show-${item.id}`} item={item} onClick={handleItemClick} />
            )}
          />

          {/* Must-Watch Shows */}
          <SectionRow
            title="Must-Watch Shows"
            items={mustWatchShows}
            loading={loading}
            renderItem={(item) => (
              <MustWatchCard key={`must-show-${item.id}`} item={item} onClick={handleItemClick} />
            )}
          />

          {/* CTA - Start Your Free Trial */}
          <div className="cta-section">
            <div className="cta-inner">
              <h2 className="cta-title">Start your free trial today!</h2>
              <p className="cta-text">
                Join StreamVibe and enjoy unlimited access to thousands of movies, shows, and exclusive content.
                No commitments, cancel anytime.
              </p>
              <button className="cta-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Start a Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
