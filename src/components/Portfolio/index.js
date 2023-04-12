import React from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import AboutMe from '../AboutMe/';
import Projects from '../Projects/';
import ContactMe from '../ContactMe/';
import Resume from '../Resume/';

function Portfolio() {
  const [header]  = React.useState({
    name: 'Michael Frayne'
  });

  return (
    <div>
      <Header header={header}/>
      <main className="main my-20">
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
