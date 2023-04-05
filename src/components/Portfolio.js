import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Resume from './Resume';
import Secret from './Secret';

function Portfolio() {
  const [header] = useState({
    name: 'Michael Frayne',
  });

  const [activeSection, setActiveSection] = useState('aboutMe');

  const handleNavItemClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
  };

  return (
    <div>
      <Header
        header={header}
        activeSection={activeSection}
        handleNavItemClick={handleNavItemClick}
      />
      <main className="main my-20">
        {activeSection === 'aboutMe' && <AboutMe />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contactMe' && <ContactMe />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'secret' && <Secret />}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Portfolio;
