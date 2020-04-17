import React from "react"
import entertainment720 from '../img/E720Logo.png';


function NavigationBar() {
  
    return (
        <>
            <header>
                <section class="mobileContainer">
                    <a href="#" class="icon" onclick="openMobileMenu()">
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
            


            <section className="webPos">
                <header id="webContainer">
                    <img className="navImage" src={entertainment720} />
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


