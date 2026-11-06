import "./PackageCard.css";

function PackageCard(props) {
    return (
        <div className="package-card">
            <img src={props.image} alt={props.destination} />
            <div className="package-info">
                <h3>{props.destination}</h3>
                <p><strong>Category:</strong> {props.category}</p>
                <p><strong>Duration:</strong> {props.duration}</p>
                <p className="package-price">RM {props.price}</p>
            </div>
        </div>

    );

}
export default PackageCard;