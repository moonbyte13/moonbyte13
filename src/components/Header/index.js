import React, { useState } from 'react';
import './style.css'

function Header({ header, activeSection, handleNavItemClick}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(event) {
    event.preventDefault();
    if(event.target.nodeName!=='BUTTON'){
      setIsMenuOpen(!isMenuOpen);
    }
  }

  return (
    <header 
      className=""
    >
      <h1 
        className=""
      >{header.name}</h1>
      <button
        type="button"
        className={
          `block lg:hidden border border-[#808080] rounded mt-5 p-1 w-fit self-center ${
          window.matchMedia('(hover: none)').matches ? 'bg-gray-200' : 'bg-transparent hover:bg-gray-200'
        }`}
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path fill="none" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path fill="none" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block self-center min-w-max`}>
        <ul className="flex flex-col md:flex-col lg:flex-row tracking-tight">
          <li className="navLiItm mt-2 lg:mt-0">
            <a
              href="/"
              className={activeSection === 'aboutMe' ? 'active' : ''}
              onClick={(event) => handleNavItemClick('aboutMe', event)}
            >
              About Me
            </a>
          </li>
          <li className="navLiItm">
            <a
              href="/"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(event) => handleNavItemClick('projects', event)}
            >
              Projects
            </a>
          </li>
          <li className="navLiItm">
            <a
              href="/"
              className={activeSection === 'contactMe' ? 'active' : ''}
              onClick={(event) => handleNavItemClick('contactMe', event)}
            >
              Contact Me
            </a>
          </li>
          <li className="navLiItm">
            <a
              href="/"
              className={activeSection === 'resume' ? 'active' : ''}
              onClick={(event) => handleNavItemClick('resume', event)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
