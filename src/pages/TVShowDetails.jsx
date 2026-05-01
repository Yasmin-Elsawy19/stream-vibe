import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

const TVShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [openSeason, setOpenSeason] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setShow);
  }, [id]);

  if (!show) return <h2 style={{ color: "#fff" }}>TV show not found</h2>;

  return (
    <div style={{ background: "#111", color: "#fff", padding: "20px" }}>

      {/* Banner */}
      <div
        style={{
          position: "relative",
          height: "75vh",
          backgroundImage: `url(${show.primaryImage?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div style={overlay}></div>

        {/* Center Content */}
        <div style={bannerContent}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            {show.primaryTitle}
          </h1>

          <p style={{ color: "#ddd", marginTop: "10px" }}>
            {show.plot || "No description available"}
          </p>

          <div style={actions}>
            <button style={playBtn}>▶ Play Now</button>
            <button style={iconBtn}>＋</button>
            <button style={iconBtn}>👍</button>
          </div>
        </div>
      </div>

      {/* 🎯 Layout */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>

        {/* LEFT */}
        <div style={{ flex: 3 }}>

          {/* Description */}
          <div style={card}>
            <h3>Description</h3>
            <p style={{ color: "#aaa" }}>{show.plot}</p>
          </div>

          {/* 🎬 Seasons Accordion */}
          <div style={card}>
            <h3>Seasons</h3>

            {[1, 2, 3].map((season) => (
              <div key={season} style={seasonBox}>

                {/* Header */}
                <div
                  style={seasonHeader}
                  onClick={() =>
                    setOpenSeason(openSeason === season ? null : season)
                  }
                >
                  <span>Season {season}</span>
                  <span>{openSeason === season ? "−" : "+"}</span>
                </div>

                {/* Episodes */}
                {openSeason === season && (
                  <div style={episodes}>
                    {[1, 2, 3, 4].map((ep) => (
                      <div key={ep} style={episode}>
                        Episode {ep}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1 }}>
          <div style={sidebar}>

            <div style={infoBlock}>
              <span>Year</span>
              <p>{show.startYear?.year || show.startYear}</p>
            </div>

            <div style={infoBlock}>
              <span>Rating</span>
              <p>⭐ {show.rating?.aggregateRating || "N/A"}</p>
            </div>

            <div style={infoBlock}>
              <span>Genres</span>
              <p>{show.genres?.join(", ")}</p>
            </div>

            <div style={infoBlock}>
              <span>Language</span>
              <p>{show.spokenLanguages?.map(l => l.name).join(", ")}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;


// Styles

const overlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))",
};

const bannerContent = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  maxWidth: "700px",
};

const actions = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const playBtn = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  background: "#e50914",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

const iconBtn = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  border: "1px solid #444",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
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

const seasonBox = {
  border: "1px solid #333",
  borderRadius: "10px",
  marginTop: "10px",
};

const seasonHeader = {
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
};

const episodes = {
  padding: "10px 15px",
  borderTop: "1px solid #333",
};

const episode = {
  padding: "8px 0",
  color: "#aaa",
};