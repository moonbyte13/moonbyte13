import React from 'react';
import { ReactComponent as DD } from './dd.svg';
import { ReactComponent as Scroll } from './scroll.svg';
import './style.css'

function Hero() {
  return (
    <section className="hero h-[100vh] flex-col justify-center">
      <div
        className='translate-y-[25vh]'
      >
        <h2 className='title text-[4vw] leading-[5vw] text-[#89c4a7]'>Michael Frayne is...</h2>
          <div
            className='flex justify-center'
          >
            <img 
              src="https://readme-typing-svg.demolab.com?font=Nunito&weight=690&size=96&duration=3000&repeat=false&color=B39DDB&center=true&vCenter=true&width=500&height=100&lines=MoonByte" 
              alt="Typing SVG" 
              className='h-[13vw]'
            />
          </div>
          <div
            className='flex justify-center mb-6'
          >
            <img 
              src="https://readme-typing-svg.demolab.com?font=Nunito&weight=690&size=48&duration=1000&pause=2000&color=89C4A7&center=true&vCenter=true&width=300&lines=Developer,;Debugger,;+Designer," 
              alt="Typing SVG" 
              className='h-[6vw]'
            />
          </div>
        <div
          className='container flex justify-center animate-bounce'
        >
          <Scroll />
        </div>
        <div
          className='container flex justify-center animate-bounce'
        >
          <DD 
            className='w-[3vw]'
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;