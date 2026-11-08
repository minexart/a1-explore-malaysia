import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import beach from "./images/beach.jpg";
import kl from "./images/kl.jpg";
import langkawi from "./images/langkawi.jpg";

/**
 * Home: landing page with tagline, auto-advancing image slider and a call to action.
 * State: current - index of the slide being shown.
 */
function Home() {

    // Slide images are imported so Vite bundles them; each caption doubles as the image alt text.
    const slides = [
        { image: beach, caption: "Relax on beautiful island beaches" },
        { image: kl, caption: "Explore the city lights of Kuala Lumpur" },
        { image: langkawi, caption: "Go island hopping in Langkawi" },
    ];

    const [current, setCurrent] = useState(0);

    // Auto-advance every 5 s. The [current] dependency restarts the timer after every
    // slide change, manual or automatic; the cleanup clears the previous interval and
    // stops the timer when Home unmounts.
    useEffect(() =>{
        const timer = setInterval(() => {
                nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [current]);

    function nextSlide() {
        if(current < slides.length - 1 ) {
            setCurrent(current + 1);

        }else {
            setCurrent(0);
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
                
                {/* Image and caption link to Packages; the slider controls sit outside the link. */}
                <Link to="/packages" className="slider-link" 
                    title="View Packages">
                    <img src={slides[current].image} alt={slides[current].caption}
                    className="slider-image"/>
                    <p className="slider-caption">{slides[current].caption}</p>
                    
                </Link>

                <div className="slider-buttons">

                    <button onClick={prevSlide} disabled={current === 0}>Previous</button>
                    <span>{current + 1 } / {slides.length} </span>
                    <button onClick={nextSlide}>Next</button>
                    
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

