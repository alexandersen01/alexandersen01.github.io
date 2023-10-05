import React from "react";
import "./Tetris.css";
import tetris from './tetris.png'

function Tetris() {

    return (
        <div className="tetris" id="tetris">
            <p>tetris(school project)</p>
            <div className="tetris2">
            <p>this project involved recreating tetris in Java</p>
            <p><a href="https://github.com/alexandersen01/Jakob.Alexandersen_sem1-tetris">Github link</a></p>
            <p>Screenshot of the game:</p>
            </div>
            <div className="tetrisPic">
                <img src={tetris} alt="tetris" width="100%" height="100%" />
            </div>
        </div>
    );
}

export default Tetris;