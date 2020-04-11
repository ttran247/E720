import React from "react"
import styled from 'styled-components';
import entertainment720 from '../img/E720Logo.png';

function NavigationBar() {
    return (
        <>
            <header>
                <section>
                <div className='navContainterMobile'>
                    <ul className="navMobile">
                        <li><a href="default.asp">Our Mission</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                        <li><a href="news.asp">Service</a></li>
                        <li><a href="about.asp">Career</a></li>
                    </ul>
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
