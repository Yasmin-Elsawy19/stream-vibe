import "../styles/Movies.css";

export default function SkeletonCard({ viewMode = "grid" }) {
  return (
    <div className={`skeleton card-${viewMode}`}>
      <div className="skeleton-img"></div>
    </div>
  );
}
