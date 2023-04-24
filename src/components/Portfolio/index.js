import React from 'react';
import Header from '../Header/';
import Hero from '../Hero/';
import Footer from '../Footer/';
import AboutMe from '../AboutMe/';
import Projects from '../Projects/';
import ContactMe from '../ContactMe/';
import Resume from '../Resume/';

function Portfolio() {

  return (
    <div>
      <Header/>
      <main className="main flex flex-col">
        <Hero />
        <AboutMe />
        <Resume />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
