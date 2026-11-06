import { useState, useEffect } from "react";
import PackageCard from "./components/PackageCard";

function Packages() {
  const [packages, setPackages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/packages.json")
      .then((response) => response.json())
      .then((data) => {
        setPackages(data);

        setLoading(false);
      })
      .catch(() => {
        setError(
          "Sorry, we could not load the packages. Please try again later.",
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <p className="message">Loading packages...</p>
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

  if (packages.length === 0) {
    return (
      <div className="container">
        <p className="message">No packages are available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Our Travel Packages</h2>
      <div className="package-list">
        {packages.map((travelPackage) => (
          <PackageCard
            key={travelPackage.id}
            id={travelPackage.id}
            destination={travelPackage.destination}
            category={travelPackage.category}
            duration={travelPackage.duration}
            price={travelPackage.price}
            image={travelPackage.image}
          />
        ))}
      </div>
    </div>
  );
}
export default Packages;
