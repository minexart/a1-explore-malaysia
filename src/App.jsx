import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Packages from "./Packages";
import Contact from "./Contact";
import About from "./About";
import PackageDetails from "./PackageDetails";
import "./App.css";

/**
 * App: root component and client-side router.
 * The header and footer render on every page; <Routes> swaps only the page inside <main>.
 * Navigation uses <Link>, so moving between pages never reloads the browser.
 */
function App () {
  return(
    <BrowserRouter>
    <header>
      <h1>Explore Malaysia</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
    <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/packages" element={<Packages/>}/>
            {/* :id is a route parameter; PackageDetails reads it with useParams() */}
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
    </main>

    <footer>
      <p>&copy; 2026 Explore Malaysia. All rights reserved.</p>
    </footer>

    </BrowserRouter>
  );

}
export default App;