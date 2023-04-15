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
  
    return (isTouchDevice ? true : false);
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
      className={`row-start-8 row-span-3 grid grid-cols-12 grid-rows-12 justify-items-center`}
    >
      <p 
        className={`text-[2vw] text-[#b39ddb] font-semibold col-start-6`}
      >
        Projects
      </p>
      <p
        className={`text-[3vw] text-[#a4d4b4] row-start-2 col-span-11`}
      >
        Curious What i've been working on?
      </p>

      <div 
        className={`row-start-3 row-span-10 col-span-12 grid grid-cols-1 justify-items-center p-2 lg:grid-cols-2 gap-4 md:p-4`}
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`group relative grid`}
          >
            <div 
              className={`${
                TouchDetector() ? `opacity-25` : `group-hover:opacity-25`
                } border-4 border-transparent rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out`
              }
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className={`h-full border-transparent rounded-lg`}
              />
            </div>

            <div 
              className={`absolute top-0 p-4 h-full w-full ${TouchDetector() ? `opacity-100` : `opacity-0 group-hover:opacity-25`} transition-opacity duration-300 ease-in-out`}
            >
              <div
                className={`flex justify-end`}
              >
                <a 
                href={project.githubLink}
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
              <div
                className={`flex flex-col h-3/4 justify-center`}
              >
                <div
                  className={`flex justify-center lg:justify-start`}
                >
                  <a 
                    href={project.deployedLink} 
                    className={``} 
                    target='_blank' 
                    rel='noopener noreferrer'>

                    <p 
                      className={`text-2xl md:text-3xl lg:text-4xl`}>
                        {project.name}
                      </p>
                  </a>
                </div>
                <p className={`pt-1 w-full text-center lg:text-start`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>        
        ))}
      </div>
    </div>
  );  
}

export default Projects;