import React from 'react';
import { ReactComponent as DD } from './dd.svg';
import './style.css'

function Hero() {
  const scrollToABTSection = () => {
    const element = document.getElementById('abtMeSect');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero h-[100vh] flex-col justify-center mb-24">
      <div
        className='translate-y-[20vh]'
      >
        <h2 className='title text-[4vw] leading-[5vw] text-[#89c4a7]'>Michael Frayne is...</h2>
          <div
            className='flex justify-center'
          >
            <img 
              src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=96&duration=3000&pause=1000&color=B39DDB&center=true&vCenter=true&repeat=false&width=500&height=150&lines=MoonByte" 
              alt="Typing SVG" 
              className='h-[11vw] scale-x-125'
            />
          </div>
          <div
            className='flex justify-center mb-12'
          >
            <img 
              src="https://readme-typing-svg.demolab.com?font=Nunito&weight=690&size=48&duration=1000&pause=2000&color=89C4A7&center=true&vCenter=true&width=300&lines=Developer,;Debugger,;+Designer," 
              alt="Typing SVG" 
              className='h-[3vw]'
            />
          </div>
        <div
          className='flex justify-center animate-[bounce_1s_infinite]'
        >
          <DD 
            className='w-[3vw] hover:cursor-pointer'
            onClick={scrollToABTSection}
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;