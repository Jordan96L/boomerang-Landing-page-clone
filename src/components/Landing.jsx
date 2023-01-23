import "./landing.css"

export default function Landing () {
    return (
        <div className="landing-container">
            <img 
            src={require("../assets/boomerang.svg").default}
            alt=""
            className="boomerang"
            />
            <div className="opening">
            <img 
            src={require("../assets/boomerangLogo.svg").default}
            alt=""
            className="boomerang-logo"
            />
            </div>
            <img 
            src={require("../assets/Vector.png")}
            alt="background"
            className="landing-background"
            />
             <img 
            src={require("../assets/hero-cars-mobile.png")}
            alt="cars"
            className="cars-image"
            />

            <section className="landing-content">
                <div className="nav-bar">
                    <div className="nav-tabs">
                    <a href="#" className="nav-tab-link">Home</a>
                        <a href="#" className="nav-tab-link">Our cars</a>
                        <a href="#" className="nav-tab-link">FAQs</a>
                        <a href="#" className="nav-tab-link">Contact us</a>
                    </div>
                </div>
            </section>
        </div>
    )
}