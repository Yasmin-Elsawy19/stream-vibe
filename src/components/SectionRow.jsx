import { useState, useRef } from "react";
import SkeletonCard from "../components/SkeletonCard";

export default function SectionRow({ title, items, loading, renderItem }) {
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
            Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} variant="poster" />)
          ) : (
            items.map((item) => renderItem(item))
          )}
        </div>
      </div>
    </div>
  );
}
