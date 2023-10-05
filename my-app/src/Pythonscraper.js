// PythonScraper.js
import React from 'react';
import './Pythonscraper.css';


function PythonScraper() {
  return (
    <div className="header3" id="pythonscraper">
      <p>python webscraper (MSc project)</p>
      <div className="scraper">
        <p>this project involves scraping an online marketplace for real estate <br />
          and rental ads.</p>
        <p>the goal is to create an ML that can be used to predict the price of <br />
          a given property based on its features.</p>
        <p>Check out my <a href="https://github.com/alexandersen01/scraper">Github</a> for more information.</p>
        <p>Also, I used Nomatim and Folium, which in turn uses leaflet.js <br />
          to map both the rental and real estate ads with all the <br />
          information added. </p>
        <p>Here is an example of one of the interactive maps I've created: </p>
        <p>red = rental</p>
        <p>blue = for purchase</p>
      </div>
      <iframe src="my-app/public/scraper.html" style={{ border: '2px solid rgb(21, 20, 20)' }} width="100%" height="500px" title="map"></iframe>
    </div>
  );
}

export default PythonScraper;
