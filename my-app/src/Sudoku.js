import React from "react";
import "./Sudoku.css";
import sudoku from './sudoku.png'

function Sudoku() {

    return (
        <div className="sudoku" id="sudoku">
            <p>sudoku (school project)</p>
        <div className="sudoku2">
        <p>this project involved recreating sudoku in Java</p>
            <p>The reason why I found this more challenging <br />
                is because there was no guide available this time.<br />
                Instead, I had to build the whole thing from scratch.<br />
                The most interesting part though, is how I generated the<br />
                boards. Instead of using an algorithm to build the boards,<br />
                I downloaded a dataset containing 49,000 unsolved boards<br />
                and used python to <a href="https://github.com/alexandersen01/man-2">make</a> them, using the sudoku
                module.</p>
                <p><a href="https://github.com/alexandersen01/sem-2-jakob-alexandersen.">Github link</a></p>
                <p>Here is a screenshot of the game:</p>
                <div className="sudokuPic">
                    <img src={sudoku} alt="sudoku" width="100%" height="100%" />
                </div>
        </div>
        </div>

    );
}

export default Sudoku;