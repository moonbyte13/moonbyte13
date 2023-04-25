import React, { useState, useEffect } from 'react';
import ReactCurvedText from "react-curved-text";
import './style.css'
import { ReactComponent as Logo } from './logo.svg';

function Header() {

  const [radius] = useState(0.5);
  const [scale] = useState(1);
  const [fontSize] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex) => (colorIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const colors = ["#b39ddb", "#89c4a7", "#d6c17a"];
  const currentColor = colors[colorIndex];

  const scrollToCNTSection = () => {
    const element = document.getElementById('contactMeSection');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage = ((scrollHeight - scrollTop - clientHeight) / (scrollHeight - clientHeight)) * 100;
    const fadeElement = document.querySelector('.fade');

    if (fadeElement) { // <-- add null check
      const minOpacity = 0.25;
      const opacity = scrollPercentage / 100;

      if (opacity < minOpacity) {
        fadeElement.style.opacity = minOpacity;
      } else {
        fadeElement.style.opacity = opacity;
      }
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
  
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);
  
  

  window.addEventListener('scroll', handleScroll);


  return (
    <header 
      className="fixed top-0 left-0 w-[100%] z-10 bg-transparent p-2 flex justify-between"
    >
      <Logo />
      <div
        id='svgCont'
        className='flex justify-end'
        style={{ 
          transform: `scale(${scale})`, 
          height: `${100 * scale}px`, 
          width: `${100 * scale}px`, 
          right: 0,
        }}
      >
        <div
          key={fontSize}
          className={`absolute animate-spin animate-spin-slow z-50`}
          onClick={scrollToCNTSection}
        >
          <ReactCurvedText
            width={100 * scale}
            height={100 * scale}
            cx={50 * scale}
            cy={50 * scale}
            rx={33 * radius}
            ry={33 * radius}
            startOffset={0}
            reversed={true}
            text="Contact Me!"
            textProps={{ style: { fill: currentColor, position: 'absolute', transition: 'fill 2s ease-in-out' } }}
            tspanProps={{ style:{ fontSize: `${scale * fontSize}rem`, fontWeight: '700' } }}
          />
        </div>
        <div
          className={`absolute animate-spin animate-spin-slow`}
        >
          <ReactCurvedText
            width={100 * scale}
            height={100 * scale}
            cx={50 * scale}
            cy={50 * scale}
            rx={33 * radius}
            ry={33 * radius}
            startOffset={'50%'}
            reversed={true}
            text="Contact Me!"
            textProps={{ style: { fill: currentColor, position: 'absolute', transition: 'fill 2s ease-in-out' }}}
            tspanProps={{ style:{ fontSize: `${scale * fontSize}rem`, fontWeight: '700' } }}
          />
        </div>
      </div>
    </header>
  );  
}

export default Header;
