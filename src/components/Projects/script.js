import React, { useState, useEffect } from 'react';
import './style.css';

function Projects () {

  function TouchDetector() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
  
    useEffect(() => {
      const onTouchStart = () => setIsTouchDevice(true);
      window.addEventListener('touchstart', onTouchStart);
      return () => window.removeEventListener('touchstart', onTouchStart);
    }, []);
  
    return <div>{isTouchDevice ? true : false}</div>;
  }

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
      description: 'A meme generator app that lets you discover and collect the latest and greatest memes from Giphy.',
      deployedLink: 'https://memes-against-humanity.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/memes-against-humanity',
      image: 'https://i.imgur.com/zKhA50S.png',
    },
  ]);

  const style = {
    fill: '#fff'
  };

  return (
    <div 
      className="flex flex-col justify-center items-center z-0"
    >
      <h2 
        className="text-4xl lg:text-5xl font-bold mb-5 self-center lg:self-start lg:ml-10"
      >
        Projects
      </h2>

      <div 
        className="grid lg:grid-cols-2 justify-items-center place-items-center"
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="projCard relative m-4 group flex flex-col w-fit"
          >
            <div 
              className={
                ('(hover: none)' in window.matchMedia ? 'opacity-25' : 'opacity-100 group-hover:opacity-25 transition duration-500 ease-in-out w-fit')
              }
            >
              <img 
                src={project.image} alt={project.name} 
                className='imgCard border-transparent rounded-lg w-fit'
              />
            </div>

            <div 
              className={
                (('(hover: none)' in window.matchMedia ? 'projectText absolute px-16' : 'projectText absolute px-6')) + 'z-10 w-fit h-full flex flex-col justify-center self-start self-center'
              }
            >
              <div 
                className="cardLinks flex flex-col w-[100%] md:flex-row justify-center items-center self-start"
              >
                <a 
                  href={project.deployedLink} 
                  className={
                    (('(hover: none)' in window.matchMedia && 'opacity-full') || 'self-center opacity-100 group-hover:opacity-25 hover:!opacity-full transition duration-500 ease-in-out')
                  } 
                  target='_blank' 
                  rel='noopener noreferrer'>

                  <h3 
                    className={
                      ((('(hover: none)' in window.matchMedia && 'opacity-full name:opacity-full text-3xl') || 'group-hover/name:opacity-full text-2xl') + ' text-center font-bold transition duration-500 ease-in-out w-fit')
                    }>
                      {project.name}
                    </h3>
                </a>

                <a 
                  href={project.githubLink}
                  className={
                    (('(hover: none)' in window.matchMedia && 'pl-5 opacity-fill') || 'py-2 opacity-100 group-hover:opacity-25 hover:!opacity-full transition duration-500 ease-in-out')
                  } 
                  target='_blank' 
                  rel='noopener noreferrer'>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="24px"
                    width="48px"
                    height="48px"
                    viewBox="0,0,256,256"
                    style={style}
                  >
                    <g
                      fill="#fff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <p className={
                (
                  (
                    (
                      '(hover: none)' in window.matchMedia && 'opacity-fill'
                    ) || 'text-sm text-center self-center opacity-fill group-hover:opacity-100') + ' w-fit flex justify-start transition-opacity duration-500 ease-in-out'
                )
              }
              >
                {
                  project.description
                }
              </p>
            </div>
          </div>        
        ))}
      </div>
    </div>
  );  
}

export default Projects;