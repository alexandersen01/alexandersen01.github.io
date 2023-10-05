import React from "react";
import "./Numbers.css";
import numbers from './numbershaha.png'

function Numbers() {

    return (

        <div className="numbers" id="nums">       

            <p>Simple AI number guesser</p>

            <div className="numbers2">
            
            <p>Using torch and the MNIST dataset, I trained a model to <br />
                guess which number the user draws. The model is composed of 3 <br />
                convoluted layers to accurately guess what the user inputs. <br />
                Unfortunately, hosting a simple python GUI on a webpage turned out to <br />
                be slightly harder than anticipated, so a screenshot should suffice for now.</p>
                <p><a href="https://github.com/alexandersen01/number-guesser">Github link</a></p>
                <p>Screenshot:</p>

            <div className="numberspic">
                <img src={numbers} alt="numbers" width="100%" height="100%" />
            </div>
            </div>

        </div>

    );
}

export default Numbers;