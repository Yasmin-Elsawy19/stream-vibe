import "../styles/Movies.css";

export default function SkeletonCard({ variant = "grid", viewMode }) {
  const mode = viewMode || variant;
  return (
    <div className={`skeleton card-${mode}`}>
      <div className="skeleton-img"></div>
    </div>
  );
}
