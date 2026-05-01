import { useState } from "react";

export default function MoviePosterCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);
  const poster = item?.primaryImage?.url;
  const title = item?.primaryTitle || "Unknown";
  const runtimeSec = item?.runtimeSeconds;
  const runtime = runtimeSec ? `${Math.floor(runtimeSec / 60)} min` : "";
  const rating = item?.rating?.aggregateRating;

  return (
    <div className="movie-card card-mobile" onClick={() => onClick(item)}>
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
        <div className="card-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          {runtime && <span>{runtime}</span>}
        </div>
        <span className="type-tag">{item?.type}</span>
      </div>
    </div>
  );
}
