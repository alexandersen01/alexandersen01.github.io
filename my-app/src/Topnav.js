import React, { useEffect, useState } from 'react';
import insta from './insta.png';
import github from './github.png';
import linkedin from './linkedin.png';
import './Topnav.css'; // Create a Topnav.css file for styling

function TopNav() {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsScrollingDown(currentScrollY > prevScrollY);
        setPrevScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);

  return (
    <div className={`topnav ${isScrollingDown ? 'fade-out' : 'fade-in'}`}>
      <a href="https://www.instagram.com/jakobalexandersen/">
        <img className="social" src={insta} alt="Instagram" />
      </a>

      <a href="https://github.com/alexandersen01/">
        <img className="social" src={github} alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/jakobsverre">
        <img className="social" src={linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}

export default TopNav;

