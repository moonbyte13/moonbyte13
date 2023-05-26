import React, { useEffect } from 'react';
import { ReactComponent as DD } from './dd.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import scroll from 'scroll';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToABTSection = () => {
    const element = document.getElementById('abtMeSect');
    scroll.top(document.documentElement, element.offsetTop, { duration: 1000 }); // Adjust duration as needed
  };

  return (
    <section className="hero h-[100vh] grid grid-rows-12 mb-[10rem] bg-[#0F0F0F]/90">
      <div className='translate-y-[20vh] flex flex-col justify-center row-span-7'>
        <h2 className='title h-[1em] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1rem] text-[#89c4a7]'>Michael Frayne is...</h2>
        <div className='flex justify-center'>
          <img 
            src="https://readme-typing-svg.herokuapp.com?font=Nunito&weight=800&size=113&duration=3000&pause=1000&color=B39DDB&center=true&vCenter=true&repeat=false&width=555&height=150&lines=MoonByte" 
            alt="Typing SVG" 
            className='h-[4em] sm:h-[6em] md:h-[10em] lg:h-[13em]'
          />
        </div>
        <div className='flex justify-center'>
          <img 
            src="https://readme-typing-svg.herokuapp.com?font=Nunito&weight=700&size=48&duration=2000&pause=2000&color=89C4A7&center=true&vCenter=true&width=750&height=50&lines=Developer%2C+Debugger%2C+Designer" 
            alt="Typing SVG" 
            className='h-[1.1em] sm:h-[1.5rem] md:h-[2.2em] lg:h-[3.3em]'
          />
        </div>
      </div>
      <div className='flex justify-center row-start-12 pb-12 md:pb-2 animate-[bounce_1s_infinite]'>
        <DD 
          className='w-[1em] sm:w-[2em] lg:w-[3em] hover:cursor-pointer'
          onClick={scrollToABTSection}
        />
      </div>
    </section>
  );
}

export default Hero;
