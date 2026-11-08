import { useState, useEffect } from "react";
import PackageCard from "./components/PackageCard";

/**
 * Packages: loads travel packages from the mock API (public/packages.json) and renders
 * them with the reusable PackageCard, plus search, category filter and price sort controls.
 * State: packages, loading, error (request status); search, category, sortOrder (controls).
 */
function Packages() {
  const [packages, setPackages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sortOrder, setSortOrder] = useState("none");

  // Fetch once on mount. Both outcomes end loading, so exactly one of the
  // loading / error / empty / list views below is rendered.
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

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSortOrder("none");
  }

  // Early returns for the request states; all hooks are declared above them.
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

  // Derived list, recomputed on every render instead of being stored in state:
  // case-insensitive destination search, then category filter, then price sort.
  // .filter() returns a new array, so sorting it in place leaves `packages` untouched.
  let shownPackages = packages.filter(
    (explorePackage) =>
      explorePackage.destination.toLowerCase().
      includes(search.toLowerCase())
  );

  if (category !== "All") {
      shownPackages = shownPackages.filter((explorePackage) => explorePackage.
      category === category);
  }

  if(sortOrder === "low") {
    shownPackages.sort((a, b) => a.price - b.price );
  }else if (sortOrder === "high") {
    shownPackages.sort((a,b) => b.price - a.price)
  }


  return (
    <div className="container">
      <h2>Our Travel Packages</h2>
      
      <div className="filters">
        <div className="filter-item">
        <label htmlFor="search">Search destination</label>
        <input type="text" id="search" 
        placeholder="e.g. Langkawi" value={search}
        onChange={(e) => setSearch(e.target.value)} />
       </div>

        <div className="filter-item">

          <label htmlFor="category">Category</label>
          <select id="category" value={category}
             onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Beach">Beach</option>
            <option value="City">City</option>
            <option value="Nature">Nature</option>
            <option value="Culture">Culture</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="sort">Sort by price</label>
          <select id="sort" value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}>
            <option value="none">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <button onClick={resetFilters}>Clear</button>
      </div>

      <p className="result-count">Showing {shownPackages.
        length} of {packages.length} packages 
      </p>

      {/* Data loaded, but nothing matches the current search/filter. */}
      {shownPackages.length === 0 && ( 
        <p className="message">No packages match your search.
        Try another destination or category.</p>
        )}

      
      {/* key uses the package id, which is unique in packages.json. */}
      <div className="package-list">
        {shownPackages.map((travelPackage) => (
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
