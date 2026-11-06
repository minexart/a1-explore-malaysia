function About() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="about-text">
        <p>
          Explore Malaysia is a local travel agency that helps visitors discover
          the beautiful destinations, culture and food of Malaysia. From island
          beaches to cool highlands and historic cities, we plan trips that suit
          every traveller and every budget.
        </p>

        <p>Our goal is to make every journey memorable, safe and enjoyable.</p>
      </div>
      <h2>Why Travel With Us</h2>
      <div className="highlight-list">
            <Highlight
                    icon="💰"
                    title="Affordable Packages"
                    text="Great value trips for students, families and groups."
                />
                <Highlight
                    icon="🧭"
                    title="Experienced Tour Guides"
                    text="Friendly local guides who know every destination well."
                />
                <Highlight
                    icon="🏝️"
                    title="Local Destinations"
                    text="Beaches, highlands, cities and heritage towns across Malaysia."
                />
                <Highlight
                    icon="🚌"
                    title="Comfortable Travel"
                    text="Air-conditioned transport and carefully chosen hotels."
                />
        

      </div>
    </div>
  );
}
export default About;
