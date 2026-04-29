const ctaContainer = {
  position: "relative",
  marginTop: "40px",
  padding: "60px 20px",
  borderRadius: "15px",
  overflow: "hidden",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
};

const ctaContent = {
  position: "relative",
  textAlign: "center",
  color: "#fff",
};

const btn = {
  marginTop: "15px",
  padding: "12px 25px",
  borderRadius: "8px",
  border: "none",
  background: "#e50914",
  color: "#fff",
  cursor: "pointer",
};

 
const CTA = () => {
  return (
    <div style={ctaContainer}>
      <div style={overlay}></div>

      <div style={ctaContent}>
        <h2>Start your free trial today!</h2>
        <p>Enjoy unlimited movies and TV shows anytime.</p>
        <button style={btn}>Start Free Trial</button>
      </div>
    </div>
  );
};

export default CTA;