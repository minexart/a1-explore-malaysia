import "./PackageCard.css";
import { Link } from "react-router-dom";


/**
 * PackageCard: reusable card showing one package's destination, category, duration and price.
 * Props: id, image, destination, category, duration, price. The destination doubles as the alt text,
 * and the id builds the link to that package's detail page.
 */
function PackageCard(props) {
    return (
        <div className="package-card">
            <img src={props.image} alt={props.destination} />
            <div className="package-info">
                <h3>{props.destination}</h3>
                <p><strong>Category:</strong> {props.category}</p>
                <p><strong>Duration:</strong> {props.duration}</p>
                <p className="package-price">RM {props.price}</p>

                {/* Template literal builds the URL, e.g. /packages/3, matching the /packages/:id route */}
                <Link to={`/packages/${props.id}`}
                className="details-link">View Details</Link>

            </div>
        </div>

    );

}
export default PackageCard;