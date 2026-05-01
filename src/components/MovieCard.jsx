import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MovieCard({ item, viewMode = "grid" }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const poster = item?.primaryImage?.url;
  const title = item?.primaryTitle || "Unknown";
  const rating = item?.rating?.aggregateRating;
  const year = item?.startYear;
  const type = item?.type;
  const id = item?.id;
  const plot = item?.plot;

  function handleClick() {
    if (!id) return;
    if (type && (type.includes("tv") || type.includes("series"))) {
      navigate(`/tv/${id}`);
    } else {
      navigate(`/movie/${id}`);
    }
  }

  if (viewMode === "laptop") {
    return (
      <div className="movie-card card-laptop" onClick={handleClick}>
        <div className="poster-wrap">
          {poster && !imgError ? (
            <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
          ) : (
            <div className="poster-placeholder"><span>No Image</span></div>
          )}
          {rating && (
            <div className="rating-badge">
              <span className="star">&#9733;</span> {rating}
            </div>
          )}
        </div>
        <div className="card-info">
          <h4 className="card-title">{title}</h4>
          <div className="card-meta">
            {year && <span>{year}</span>}
            {type && <span className="type-tag">{type}</span>}
          </div>
          {plot && <p className="card-plot">{plot.substring(0, 120)}...</p>}
        </div>
      </div>
    );
  }

  if (viewMode === "mobile") {
    return (
      <div className="movie-card card-mobile" onClick={handleClick}>
        <div className="poster-wrap">
          {poster && !imgError ? (
            <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
          ) : (
            <div className="poster-placeholder"><span>No Image</span></div>
          )}
          {rating && (
            <div className="rating-badge">
              <span className="star">&#9733;</span> {rating}
            </div>
          )}
        </div>
        <div className="card-info">
          <h4 className="card-title">{title}</h4>
          <div className="card-meta">
            {year && <span>{year}</span>}
            {type && <span className="type-tag">{type}</span>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-card card-grid" onClick={handleClick}>
      <div className="poster-wrap">
        {poster && !imgError ? (
          <img src={poster} alt={title} onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="poster-placeholder"><span>No Image</span></div>
        )}
        {rating && (
          <div className="rating-badge">
            <span className="star">&#9733;</span> {rating}
          </div>
        )}
      </div>
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
        <div className="card-meta">
          {year && <span>{year}</span>}
          {type && <span className="type-tag">{type}</span>}
        </div>
      </div>
    </div>
  );
}
