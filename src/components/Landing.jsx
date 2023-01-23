import "./landing.css"

export default function Landing () {
    return (
        <div className="landing-container">
            <img 
            src={require("../assets/boomerang.svg").default}
            alt=""
            className="boomerang"
            />
        </div>
    )
}