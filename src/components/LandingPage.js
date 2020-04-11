import React from "react"
import heroImage from "../img/E720hero.png"
import entertainment720 from '../img/E720Logo.png';

function Landing() {
    return (
        <div className="landingPageContainer">
            <hero className="heroImage">
            <h1>MultiMedia Platform</h1>
            <h2>"Because we are willing to go around the world twice for you"</h2>
            <div className="heroContainerImage">
                <img className="navImage" src={entertainment720} style={heroLogo} />
                </div>
                <button>Click Me</button>
            </hero>
        </div>

    )
}

export default Landing

const imageLanding = {
    maxHeight: "100vh",
    maxwidth: "520px"
}

const heroLogo = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end"
}