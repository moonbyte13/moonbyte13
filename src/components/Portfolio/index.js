import React from 'react';
import Header from '../Header/';
import Hero from '../Hero/';
import Footer from '../Footer/';
import AboutMe from '../AboutMe/';
import Pictures from '../Pictures/';
import ContactMe from '../ContactMe/';
import Resume from '../Resume/';

function Portfolio() {

  return (
    <div>
      <Header/>
      <main className="main z-10 flex flex-col">
        <Hero />
        <AboutMe />
        <Resume />
        <Pictures />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
