import React, { useState } from 'react';

function Header({ header, activeSection, handleNavItemClick}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleHeaderClick = (event) => {
    if(event.target.nodeName !== "H1") {
      window.location.reload();
    }
  }

  return (
    <header 
      className="flex flex-col lg:flex-row lg:justify-between self-center p-6 z-10"
      onClick={handleHeaderClick}
    >
      <h1 
        className="flex w-max font-bold text-4xl md:text-6xl lg:text-7xl self-center"
        onClick={(event) => handleNavItemClick('secret', event)}
      >{header.name}</h1>
      <button
        type="button"
        className="block lg:hidden border border-gray-400 rounded mt-5 p-1 w-fit self-center"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block self-center text-lg`}>
        <ul className="flex flex-col md:flex-col lg:flex-row min-w-max">
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
