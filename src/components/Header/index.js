import React, { useState, useEffect } from 'react';
import ReactCurvedText from "react-curved-text";
import './style.css'
import { ReactComponent as Logo } from './logo.svg';

function Header() {

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

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent p-2 flex justify-between"
    >
      <Logo/>
      <div
        id='svgCont'
        className='w-1/4 flex justify-end'
      >
        <div
          className={`absolute animate-spin animate-spin-slow z-50`}
          onClick={scrollToCNTSection}
        >
          <ReactCurvedText
            width={100}
            height={100}
            cx={50}
            cy={50}
            rx={33}
            ry={33}
            startOffset={0}
            reversed={true}
            text="Contact Me!"
            textProps={{ style: { fill: currentColor, position: 'absolute', transition: 'fill 2s ease-in-out' } }}
            tspanProps={{ style:{ fontSize: '1rem', fontWeight: '700' } }}
          />
        </div>
        <div
          className={`absolute animate-spin animate-spin-slow`}
        >
          <ReactCurvedText
            width={100}
            height={100}
            cx={50}
            cy={50}
            rx={33}
            ry={33}
            startOffset={'50%'}
            reversed={true}
            text="Contact Me!"
            textProps={{ style: { fill: currentColor, position: 'absolute', transition: 'fill 2s ease-in-out' }}}
            tspanProps={{ style:{ fontSize: '1rem', fontWeight: '700' } }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
