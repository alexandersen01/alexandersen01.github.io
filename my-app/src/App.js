import React, { useEffect } from 'react';
import './App.css';
import Topnav from './Topnav';
// import PythonScraper from './Pythonscraper';
import Tetris from './Tetris';
import Sudoku from './Sudoku';
import Canvasbot from './Canvasbot';
import Balls from './Balls';
import Numbers from './Numbers';

function App() {

  
  useEffect(() => {
    // Constants for opacity and scroll behavior
    const minOpacity = 0.2;
    const maxOpacity = 0.8;
    const fadeOutSpeed = 500; // Adjust this value to change the fade-out speed
  
    // Function to handle opacity change based on scroll position
    const handleScroll = () => {
      const body = document.body;
      const scrollPosition = window.pageYOffset;
      const opacity = Math.min(scrollPosition / fadeOutSpeed, maxOpacity);
      body.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    };
  
    // Function to handle smooth scrolling to specified sections
    const addScrollButtonListener = (buttonId, targetClass, scrollPercentage) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener("click", () => {
          const header = document.querySelector(targetClass);
          const headerRect = header.getBoundingClientRect();
          const headerTop = headerRect.top + window.scrollY;
          const scrollTop = headerTop - (headerTop * scrollPercentage);
          window.scrollTo({ top: scrollTop, behavior: "smooth" });
        });
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Attach click event listeners for scrolling buttons
    addScrollButtonListener("scrollBtn2", ".tetris", 0.01);
    addScrollButtonListener("scrollBtn3", ".sudoku", 0.01);
    addScrollButtonListener("scrollBtn4", ".canvasbot", 0.01);
    addScrollButtonListener("scrollBtn5", ".balls", 0.01);
    addScrollButtonListener("scrollBtn6", ".numbers", 0.01);
  
    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Remove event listeners for buttons if needed
      // (You might want to remove any event listeners added dynamically here)
    };
  }, []);
  

  return (
    <div className="App">
      <div id="background"></div>

      <Topnav />

      <div className="header">
        <h1>explore my projects</h1>
      </div>

      <div className="header2">
        <p>ranked from least to most recent</p>
      </div>

      <div className="scroll-btns">

        {/* <button id="scrollBtn">Real Estate Webscraper</button> */}
        <button id="scrollBtn2">Tetris</button>
        <button id="scrollBtn3">Sudoku</button>
        <button id="scrollBtn4">AI Canvas Bot</button>
        <button id="scrollBtn5">Balls simulation</button>
        <button id="scrollBtn6">AI number guesser</button>

      </div>

      {/* <PythonScraper /> */}
      <Tetris />
      <Sudoku />
      <Canvasbot />
      <Balls />
      <Numbers />

    </div>
  );
}

export default App;
