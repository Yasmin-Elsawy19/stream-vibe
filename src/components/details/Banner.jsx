const Banner = ({ movie }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "60vh",
        backgroundImage: `url(${movie.primaryImage?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>
          {movie.primaryTitle}
        </h1>

        <p style={{ maxWidth: "500px" }}>
          {movie.description}
        </p>

        {/* Buttons */}
        <div style={{ marginTop: "15px" }}>
          <button style={btnStyle}>▶ Play Now</button>
          <button style={btnStyle}>+ Watchlist</button>
          <button style={btnStyle}>👍 Like</button>
        </div>
      </div>
    </div>
  );
};

const btnStyle = {
  marginRight: "10px",
  padding: "10px 15px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  background: "#e50914",
  color: "#fff",
};

export default Banner;