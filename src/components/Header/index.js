import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactCurvedText from "react-curved-text";
import './style.css'
import { ReactComponent as Logo } from './logo.svg';

function Header() {

  const fontSizes = [0.85, 0.9, 1];
  const [radius, setRadius] = useState(0.5);
  const [scale, setScale] = useState(1);
  const [fontSize, setFontSize] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true);
    }, 100); // You can adjust the delay value as needed
  }, []);
  

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex) => (colorIndex + 1) % 3);
    }, 2000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  useLayoutEffect(() => {
    const debouncedHandleResize  = debounce(() => {
      const screenWidth = window.innerWidth;
      let newScale;
      let fontSize;
      let newRadius;
      
      if (screenWidth < 768) {
        fontSize = fontSizes[0];
        newScale = fontSizes[0];
        newRadius = (0.8 * fontSizes[0]);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        fontSize = fontSizes[1];
        newScale = fontSizes[1];
        newRadius = (0.9 * fontSizes[1]);
      } else {
        fontSize = fontSizes[2];
        newScale = fontSizes[2];
        newRadius = fontSizes[2];
      }
      setRadius(newRadius)
      setScale(newScale);
      setFontSize(fontSize);
    }, 250);
  
    debouncedHandleResize();
    window.addEventListener('resize', debouncedHandleResize);
  
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);



  return (
    <header 
      className="fixed top-0 left-0 w-[100%] z-10 bg-transparent p-2 flex justify-between"
    >
      <Logo className="fade w-[40%] md:w-[30%] lg:w-[15rem]"/>
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
          className={`absolute z-50 ${animationStarted ? 'animate-spin animate-spin-slow' : ''}`}
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
          className={`absolute ${animationStarted ? 'animate-spin animate-spin-slow' : ''}`}
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
