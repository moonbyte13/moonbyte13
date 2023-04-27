import React, { useState } from 'react';
import DeviceMockup from '../DeviceMockup/';
import './style.css';

function Projects () {

  const [projects] = useState([
    {
      id: 1,
      name: 'My Tech Blog',
      description: 'My CMS-style blog site',
      deployedLink: 'https://my-tech-blog-c14.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/myTechBlog',
      image: 'https://i.imgur.com/s4DSOHj.png',
    },
    {
      id: 2,
      name: 'My Own Text Editor',
      description: 'A full PWA text editor',
      deployedLink: 'https://my-own-text-editor.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/myTextEditor',
      image: 'https://i.imgur.com/itfeCmN.png',
    },
    {
      id: 3,
      name: 'Tune In',
      description: 'An easy efficient radio browser',
      deployedLink: 'https://moonphase13.github.io/Project-Tune-in-Team-5/',
      githubLink: 'https://github.com/moonphase13/Project-Tune-in-Team-5',
      image: 'https://i.imgur.com/3nqP4KQ.png',
    },
    {
      id: 4,
      name: 'CSS Snippet Cheatsheet',
      description: 'This is a cheatsheet for CSS snippets',
      deployedLink: 'https://moonphase13.github.io/CSS-Snippet-Cheatsheet/',
      githubLink: 'https://github.com/moonphase13/CSS-Snippet-Cheatsheet',
      image: 'https://i.imgur.com/uUwl32Q.png',
    },
    {
      id: 5,
      name: 'Portfolio Demo',
      description: 'This is the first version of my portfolio from the bootcamp',
      deployedLink: 'https://moonphase13.github.io/portfolio-demo-C2/',
      githubLink: 'https://github.com/moonphase13/portfolio-demo-C2',
      image: 'https://i.imgur.com/6jKcYye.png',
    },
    {
      id: 6,
      name: 'Memes Against Humanity',
      description: 'A meme generator app that lets you discover and collect the latest and greatest memes from Giphy',
      deployedLink: 'https://memes-against-humanity.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/memes-against-humanity',
      image: 'https://i.imgur.com/zKhA50S.png',
    },
  ]);

  return (
    <div className={`flex flex-col justify-center text-center mb-[10rem]`}>
{/*       <p 
        className={`text-[0.6rem] md:text-[1.5rem] lg:text-[1.5rem] text-[#a4d4b4]`}
      >
        Curious What i've been working on?
      </p> */}
      <p
        className={`text-[1rem] md:text-[2rem] lg:text-[2rem] text-[#b39ddb] font-semibold`}
      >
        Projects
      </p>

      <div className='projectContainer'>
      {projects.map((project) => (
        <div key={project.id} className="App flex odd:justify-start even:justify-end">
          <DeviceMockup
            name={project.name}
            deployedLink={project.deployedLink}
            description={project.description}
            githubLink={project.githubLink}
          />
        </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;