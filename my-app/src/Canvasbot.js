import React from "react";
import "./Canvasbot.css";

function Canvasbot() {

    return (
        <div className="canvasbot" id="canvas">
                <p>canvas bot</p>
            <div className="canvasbot2">
            <p>this project using Canvas' API to fetch an <br />
                    assignment and pass it on to to the OpenAI API. <br />
                    Further on, the bot does the assignments for you.</p>
                <p>the user inputs the assignment URL, potential extra <br />
                    instructions and what the file should be named.</p>
                <p>currently, the restrictions lie within what kind of <br />
                    GPT model is being used, as the quality and length of the <br />
                    text is based on what model is being used and how many<br />
                    tokens it supports. </p>
                <p>I have decided not to make the repo public, as it may <br />
                    actually be used to commit academic fraud, because the <br />
                    only thing needed to run it is a Canvas API and an OpenAi API key.</p>
            </div>
        </div>  
    );
}

export default Canvasbot;