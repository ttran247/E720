import React from "react"
import heroImage from "../img/E720hero.png"
import entertainment720 from '../img/E720Logo.png';


function Landing() {
    return (
        <div className="landingPageContainer">
            <h1 className="heroh1">MultiMedia Platform</h1>
            <h2 className="heroh2">"Because we are willing to go around the world twice for you"</h2>
            <div className="button-container">
                <button className="landingButton">Get Started</button>
            </div>
        </div>

    )
}

export default Landing

const imageLanding = {
    maxHeight: "100vh",
    maxwidth: "520px"
}



