import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import CTA from "../components/common/CTA";
import { addToWatchlist } from "../components/utils/watchlist";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    getMovieDetails(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [id]);

  //  Scroll Functions
  const scroll = (id, dir) => {
    document
      .getElementById(id)
      .scrollBy({ left: dir === "left" ? -250 : 250, behavior: "smooth" });
  };

  if (loading) return <h2 style={{ color: "#fff" }}>Loading...</h2>;
  if (!movie) return <h2 style={{ color: "#fff" }}>Movie not found</h2>;

  return (
    <div style={{ background: "#111", color: "#fff", padding: "20px" }}>
      
      {/* Banner */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          backgroundImage: `url(${movie.primaryImage?.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#000",
          borderRadius: "15px",
        }}
      >
        {/* Overlay */}
        <div style={overlay}></div>

        {/* Content Center */}
        <div style={bannerContent}>
          <h1 style={{ fontSize: "2.5rem" }}>{movie.primaryTitle}</h1>

          <p style={{ color: "#ccc", maxWidth: "600px" }}>
            {movie.plot}
          </p>

          <div style={{ marginTop: "15px" }}>
            <button style={primaryBtn} onClick={() => setShowTrailer(true)}>
              ▶ Play Now
            </button>

            <button
              style={iconBtn}
              onClick={() => {
                addToWatchlist({
                  id,
                  title: movie.primaryTitle,
                  image: movie.primaryImage?.url,
                });
                setAdded(true);
              }}
            >
              {added ? "✔" : "＋"}
            </button>
          </div>
        </div>
      </div>

      {/*  Layout */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        
        {/* LEFT */}
        <div style={{ flex: 3 }}>
          
          {/* Description */}
          <div style={card}>
            <h3>Description</h3>
            <p style={{ color: "#aaa" }}>{movie.plot}</p>
          </div>

          {/*  Cast */}
          <div style={card}>
            <h3>Cast</h3>

            <div style={{ position: "relative" }}>
              <button style={arrowLeft} onClick={() => scroll("castRow", "left")}>❮</button>
              <button style={arrowRight} onClick={() => scroll("castRow", "right")}>❯</button>

              <div id="castRow" style={scrollRow}>
                {movie.stars?.map((actor) => (
                  <div key={actor.id} style={castItem}>
                    <img src={actor.primaryImage?.url} style={castImg} />
                    <p>{actor.displayName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div style={card}>
            <h3>Reviews</h3>

            <div style={{ position: "relative" }}>
              <button style={arrowLeft} onClick={() => scroll("reviewsRow", "left")}>❮</button>
              <button style={arrowRight} onClick={() => scroll("reviewsRow", "right")}>❯</button>

              <div id="reviewsRow" style={scrollRow}>
                <div style={reviewCard}>
                  <h4>Ahmed Roy</h4>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>Amazing movie!</p>
                </div>

                <div style={reviewCard}>
                  <h4>Sara</h4>
                  <p>⭐⭐⭐⭐</p>
                  <p>Loved the visuals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT (Sidebar) */}
        <div style={{ flex: 1 }}>
          <div style={sidebar}>
            
            <div style={infoBlock}>
              <span>Released Year</span>
              <p>{movie.startYear}</p>
            </div>

            <div style={infoBlock}>
              <span>Languages</span>
              <p>{movie.spokenLanguages?.map(l => l.name).join(", ")}</p>
            </div>

            <div style={infoBlock}>
              <span>Genres</span>
              <p>{movie.genres?.join(", ")}</p>
            </div>

            <div style={infoBlock}>
              <span>Rating</span>
              <p>⭐ {movie.rating?.aggregateRating ?? "N/A"}</p>
            </div>

            <div style={infoBlock}>
              <span>Directors</span>
              <p>{movie.directors?.map(d => d.displayName).join(", ")}</p>
            </div>

            <div style={infoBlock}>
              <span>Writers</span>
              <p>{movie.writers?.map(w => w.displayName).join(", ")}</p>
            </div>

          </div>
        </div>
      </div>

      {/*  Trailer Modal */}
      {showTrailer && (
        <div style={modalOverlay} onClick={() => setShowTrailer(false)}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={closeBtn} onClick={() => setShowTrailer(false)}>✖</span>

            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/6hB3S9bIaco"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <CTA />
    </div>
  );
};

export default MovieDetails;


//  Styles


const overlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
};

const bannerContent = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const card = {
  background: "#1a1a1a",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const sidebar = {
  background: "#1a1a1a",
  padding: "20px",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const infoBlock = {
  borderBottom: "1px solid #333",
  paddingBottom: "10px",
};

const primaryBtn = {
  marginRight: "10px",
  padding: "10px 20px",
  background: "#e50914",
  border: "none",
  color: "#fff",
  borderRadius: "8px",
};

const iconBtn = {
  padding: "10px",
  background: "#222",
  border: "none",
  color: "#fff",
  borderRadius: "8px",
};

const scrollRow = {
  display: "flex",
  gap: "15px",
  overflowX: "auto",
};

const castItem = {
  minWidth: "90px",
  textAlign: "center",
};

const castImg = {
  width: "70px",
  height: "70px",
  borderRadius: "10px",
  objectFit: "cover",
};

const reviewCard = {
  minWidth: "250px",
  background: "#111",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
};

const arrowLeft = {
  position: "absolute",
  left: "-10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "#222",
  border: "none",
  color: "#fff",
  padding: "8px",
  borderRadius: "50%",
  cursor: "pointer",
};

const arrowRight = {
  ...arrowLeft,
  left: "auto",
  right: "-10px",
};

const modalOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContent = {
  background: "#000",
  padding: "10px",
  borderRadius: "10px",
  width: "70%",
};

const closeBtn = {
  position: "absolute",
  right: "20px",
  top: "10px",
  cursor: "pointer",
};