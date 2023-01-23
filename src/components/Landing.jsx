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
        </div>
    )
}