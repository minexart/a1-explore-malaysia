import { useState } from "react";
import { Link } from "react-router-dom";
import beach from "./images/beach.jpg";
import kl from "./images/kl.jpg";
import langkawi from "./images/langkawi.jpg";

function Home() {

    const slides = [
        { image: beach, caption: "Relax on beautiful island beaches" },
        { image: kl, caption: "Explore the city lights of Kuala Lumpur" },
        { image: langkawi, caption: "Go island hopping in Langkawi" },
    ];

    const [current, setCurrent] = useState(0);

    function nextSlide() {
        if(current < slides.length - 1 ) {
            setCurrent(current + 1);

        }
    }
    function prevSlide () {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    

    return( 
        <div className="container">
            <h2>Welcome to Malaysia</h2>
            {/* tagline */}
            <p className="tagline"> Discover Malaysia, Create Memories</p>

            <div className="slider">
                <img src={slides[current].image} alt={slides[current].caption}
                className="slider-image"/>
                <p className="slider-caption">{slides[current].caption}</p>

                <div className="slider-buttons">

                    <button onClick={prevSlide} disabled={current === 0}>Previous</button>
                    <span>{current + 1 } / {slides.length} </span>
                    <button onClick={nextSlide} disabled={current === slides.length - 1}>Next</button>
                    
                </div>
            </div>

            <p>From island beaches to cool highlands and historic cities,
                we plan trips that let you experience the best of Malaysia.
            </p>

            <Link to="/packages" className="button-link">View Our Packages </Link>

        </div>
    );




}
export default Home;

