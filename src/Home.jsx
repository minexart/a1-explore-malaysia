import beach from "./images/beach.jpg";

function Home() {

    return( 
        <div className="container">
            <h2>Welcome to Malaysia</h2>
            {/* tagline */}
            <p className="tagline"> Discover Malaysia, Create Memories</p>

            <img className="banner" src={beach} alt="Evening sight of beautiful beach in Malaysia"/>

            <p>From island beaches to cool highlands and historic cities,
                we plan trips that let you experience the best of Malaysia.
            </p>

        </div>
    );




}
export default Home;

