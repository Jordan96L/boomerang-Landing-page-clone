import "./landing.css"
import Button from "./button/Button"

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

                <div className="landing-text">
                    <h1 className="text-heading">
                    The <span className="word-underline">Cheapest</span> Taxi<br />
                        You've <span className="word-underline">Ever</span> Bought.
                    </h1>
                    <h5 className="text-description">
                    With Boomerang, rent a clean-air-compliant hybrid taxi from
                        us, then keep it for just £1!
                    </h5>
                    <div className="text-button-container">
                       <Button>Start Now</Button> 
                    </div>
                </div>

                <div className="tele-quote-container">
                    <p className="quote-text">
                    “To all taxi drivers out there…This is the 'best route' for renting your vehicle”
                    </p>
                    <img 
                    src={require("../assets/tele.png")}
                    alt="telgraph-logo"
                    className="tele-image"/>
                </div>
            </section>
        </div>
    )
}