import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ContactMe from '../ContactMe';
import Resume from '../Resume';

function Portfolio() {

  return (
    <div>
      <Header/>
      <main className="bg-[#0f0f0f] grid grid-rows-12 gap-y-48">
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
