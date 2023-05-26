import React, { useEffect } from 'react';
import './App.css';
import './Scrollbar.css';
import Portfolio from './components/Portfolio/';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    };    

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="Portfolio">
      <Portfolio />
    </div>
  );
}

export default App;
