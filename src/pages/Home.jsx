import { useState, useEffect, useRef } from "react";
import Navbarbackground from "../Images/navbarbackground.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
    faMobile,
    faLaptop,
    faTv,
    faTabletScreenButton,
    faGamepad,
    faVrCardboard
} from "@fortawesome/free-solid-svg-icons";
import { getTitles } from "../services/api";
import PricesPlans from "../components/PricesPlans";
import Faqs from "../components/Faqs";

const GENRES = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Animation", "Crime", "Romance"];

export default function Home() {
    const [genrePosters, setGenrePosters] = useState({});
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef();

    useEffect(() => {
        async function fetchGenres() {
            setLoading(true);
            const data = await getTitles({ limit: 500 });
            const allTitles = data?.titles || [];

            const posterMap = {};
            for (const g of GENRES) {
                const filtered = allTitles.filter((t) => t.genres?.includes(g));
                posterMap[g] = filtered
                    .filter((t) => t.primaryImage?.url)
                    .slice(0, 4)
                    .map((t) => t.primaryImage.url);
            }

            setGenrePosters(posterMap);
            setLoading(false);
        }
        fetchGenres();
    }, []);

    function scroll(dir) {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === "left" ? -500 : 500, behavior: "smooth" });
        }
    }

    return (
        <div className="home">
            <img className="Navbarbackground" src={Navbarbackground} alt="navbarbackground" />

            {/* Experience */}
            <div className="Experience">
                <h1>The Best Streaming Experience</h1>
                <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                <button><FontAwesomeIcon icon={faPlay} /> Start Watching Now</button>
            </div>

            {/* Categories Section */}
            <section className="categories-section">
                <div className="categoriesHeader">
                    <h2>Explore our wide variety of categories</h2>
                    <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>

                <div className="category-heading-wrapper">
                    <div className="category-left-inner">
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
                    {loading
                        ? Array.from({ length: 5 }).map((_, i) => <div key={i} className="genre-skeleton" />)
                        : GENRES.map((genre) => (
                            <div className="genre-card" key={genre}>
                                {genrePosters[genre] && genrePosters[genre].length > 0 ? (
                                    <div className="genre-collage">
                                        <div className="collage-grid">
                                            {genrePosters[genre].slice(0, 4).map((url, i) => (
                                                <div key={i} className="collage-item">
                                                    <img src={url} alt="" loading="lazy" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="genre-overlay">
                                            <div className="genre-info">
                                                <h6>{genre}</h6>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="genre-bg">
                                        <div className="genre-overlay">
                                            <div className="genre-info">
                                                <h6>{genre}</h6>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </section>

            {/* showing devices for the application section */}
            <section className="devices">
                <div className="devicesHeader">
                    <h2>We Provide you streaming experience across various devices.</h2>
                    <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                </div>

                <div className="devicesTypes">
                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faMobile} />
                            </div>
                            <h3>Smartphones</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faTabletScreenButton} />
                            </div>
                            <h3>Tablet</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faTv} />
                            </div>
                            <h3>Smart TV</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faLaptop} />
                            </div>
                            <h3>Laptops</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faGamepad} />
                            </div>
                            <h3>Gaming Consoles</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faVrCardboard} />
                            </div>
                            <h3>VR Headsets</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
            </section>

            {/* Prices Plans */}
            <Faqs />
            <PricesPlans />
        </div>
    );
}
