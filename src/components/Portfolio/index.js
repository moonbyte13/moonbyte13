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
      <main className="main my-20">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
