import React from 'react';
import './style.css'
import { ReactComponent as Logo } from './logo.svg';

function Header() {

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent p-2"
    >
      <Logo/>

    </header>
  );
}

export default Header;
