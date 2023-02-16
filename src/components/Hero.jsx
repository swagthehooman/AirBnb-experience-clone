import React from "react";
import gridPic from '/images/photo-grid.png'

function Hero(){
    return <section className="hero-container">
        <div className="grid-pic">
            <img src={gridPic} alt=""/>
        </div>
        <div className="hero-text">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </section>
}

export default Hero