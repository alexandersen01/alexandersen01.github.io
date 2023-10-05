import React from "react";
import "./Balls.css";
import balls from './balls.gif'

function Balls() {

    return (
        <div className="balls" id="balls">
        
            <p>Balls simulation in java</p>

            <div className="balls2">
            
            <p>I made a realistic physics engine in java that simulates <br />
                balls being dropped, with collision physics, gravity acceleration <br />
                and of course, bounciness.</p>
                <p><a href="https://github.com/alexandersen01/ballzzz">Github link</a></p>
                <p>Screenshot:</p>

            <div className="ballsgif">
                <img src={balls} alt="ballz" width="100%" height="100%" />
            </div>
            
            </div>
        
        </div>
    );
}

export default Balls;