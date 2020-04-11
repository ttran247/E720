import React from "react"
import entertainment720 from '../img/E720Logo.png';

function openMobileMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function NavigationBar() {
    return (
        <>
            <header>
                <section class="mobileContainer">

                    <a href="javascript:void(0);" class="icon" onclick="openMobileMenu()">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div className="navContainterMobile">
                        <div id="myLinks">

                    <ul className="navMobile">
                            <li className="mobLink"><a href="default.asp">Our Mission</a></li>
                            <li className="mobLink"><a href="contact.asp">Contact</a></li>
                            <li className="mobLink"><a href="news.asp">Service</a></li>
                            <li className="mobLink"><a href="about.asp">Career</a></li>
                    </ul>
                        </div>
                        </div>
                    </section>
            </header>
            


            <section>
                <header class="webContainer">
                    <img class="navImage" src={entertainment720} style={imgLogo}/>
                    <div className='navContainterWeb'>
                        <ul className='navWeb'>
                            <li><a href="default.asp" className="webLink">Our Mission</a></li>
                            <li><a href="contact.asp" className="webLink">Contact</a></li>
                            <li><a href="news.asp" className="webLink">Service</a></li>
                            <li><a href="about.asp" className="webLink">Career</a></li>
                        </ul>
                    </div>
                </header>
            </section>
             </>
    )
}

export default NavigationBar;

const imgLogo = {
    maxWidth: "12%",
   
   
}
