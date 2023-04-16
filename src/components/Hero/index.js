import React from 'react';
import { ReactComponent as DD } from './dd.svg';
import './style.css'

function Hero() {
  const scrollToABTSection = () => {
    const element = document.getElementById('abtMeSect');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="lg:row-span-2 hero h-[100vh] grid grid-rows-12">
      <div
        className='translate-y-[20vh] flex flex-col justify-center row-span-7'
      >
        <h2 className='title h-[1em] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[5vw] text-[#89c4a7]'>Michael Frayne is...</h2>
          <div
            className='flex justify-center'
          >
            <img 
              src="https://readme-typing-svg.herokuapp.com?font=Nunito&weight=800&size=96&duration=3000&pause=1000&color=B39DDB&center=true&vCenter=true&repeat=false&width=500&height=150&lines=MoonByte" 
              alt="Typing SVG" 
              className='h-[4em] sm:h-[6em] md:h-[10em] lg:h-[13em]'
            />
          </div>
          <div
            className='flex justify-center'
          >
            <img 
              src="https://readme-typing-svg.demolab.com?font=Nunito&weight=690&size=48&duration=1000&pause=2000&color=89C4A7&center=true&vCenter=true&width=300&lines=Developer,;Debugger,;+Designer," 
              alt="Typing SVG" 
              className='h-[1em] sm:h-[2rem] md:h-[3rem] lg:h-[4rem]'
            />
          </div>
      </div>
      <div
        className='flex justify-center row-start-12 pb-12 md:pb-2 animate-[bounce_1s_infinite]'
      >
        <DD 
          className='w-[1em] sm:w-[2em] lg:w-[3em] hover:cursor-pointer'
          onClick={scrollToABTSection}
        />
      </div>
    </section>
  );
}

export default Hero;