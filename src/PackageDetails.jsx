import { useState, useEffect } from "react";
import {useParams, Link } from "react-router-dom";

/**
 * PackageDetails: detail page for one package, reached through the route /packages/:id.
 * Reads the id from the URL, fetches the mock API and picks the matching package with .find().
 * Shows a loading, error or "not found" message before the full details are available.
 */
function PackageDetails() {

    // The :id part of the URL, e.g. "3" for /packages/3 (always a string).
    const { id } = useParams();

    const [pkg, setPkg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch again whenever the id changes. parseInt turns the URL string into a number
    // so it can match the numeric ids in packages.json; .find() returns undefined if none match.
    useEffect(() => {
        fetch("/packages.json")
            .then((response) => response.json())
            .then((data) => {

                const found = data.find((item) => item.id === parseInt(id));
                setPkg(found);
                setLoading(false);
            })
            .catch(() => {
                setError("Sorry, we could not load this package. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    // Early returns for the request states; all hooks are declared above them.
        if (loading) {
        return (
            <div className="container">
                <p className="message">Loading package...</p>
            </div>
        );
    }

    if (error !== "") {
        return (
            <div className="container">
                <p className="message error">{error}</p>
            </div>
        );
    }

    // No package with this id (e.g. /packages/99), so offer a way back instead of crashing.
        if (!pkg) {
        return (
            <div className="container">
                <p className="message">Package not found.</p>
                <Link to="/packages" className="button-link">Back to Packages</Link>
            </div>
        );
    }

     return (
        <div className="container">
            <div className="details-card">
                <img src={pkg.image} alt={pkg.destination} />
                <div className="details-info">
                    <h2>{pkg.destination}</h2>
                    <p><strong>Category:</strong> {pkg.category}</p>
                    <p><strong>Duration:</strong> {pkg.duration}</p>
                    <p><strong>Price:</strong> RM {pkg.price} per person</p>
                    <p>{pkg.description}</p>

                    <h3>What's included</h3>
                    {/* Each highlight is a unique string, so it can serve as its own key */}
                    <ul>
                        {pkg.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <Link to="/packages" className="button-link">Back to Packages</Link>
                    <Link to="/contact" className="button-link">Enquire Now</Link>
                </div>
            </div>
        </div>
    );


}

export default PackageDetails;