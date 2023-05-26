import React, { useState, useEffect } from 'react';
import './style.css';
import githubIcon from './github.svg';
import linkIcon from './link.svg';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      name: 'My Tech Blog',
      tools: ['Bcrypt', 'Handlebars', 'MySQL2', 'Sequelize'],
      description: 'My CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
      deployedLink: 'https://my-tech-blog-c14.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/myTechBlog',
      image: 'https://i.imgur.com/s4DSOHj.png',
    },
    {
      id: 2,
      name: 'My Own Text Editor',
      tools: ['React', 'Webpack', 'MongoDB', 'Mongoose', 'PWA'],
      description: 'A full PWA text editor that allows you to save your work and access it from anywhere.',
      deployedLink: 'https://my-own-text-editor.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/myTextEditor',
      image: 'https://i.imgur.com/itfeCmN.png',
    },
    {
      id: 3,
      name: 'Tune In',
      tools: ['Server Side APIs', 'CSS', 'HTML', 'JavaScript'],
      description: 'An app to create an opportunity for users to explore different radio stations. The main goal is to provide an easy, efficient radio browser for everyone to use that also includes the top 100 hits.',
      deployedLink: 'https://moonphase13.github.io/Project-Tune-in-Team-5/',
      githubLink: 'https://github.com/moonphase13/Project-Tune-in-Team-5',
      image: 'https://i.imgur.com/3nqP4KQ.png',
    },
    {
      id: 4,
      name: 'CSS Snippet Cheatsheet',
      tools: ['CSS', 'HTML'],
      description: 'This is a cheatsheet for CSS snippets that I have found useful.',
      deployedLink: 'https://moonphase13.github.io/CSS-Snippet-Cheatsheet/',
      githubLink: 'https://github.com/moonphase13/CSS-Snippet-Cheatsheet',
      image: 'https://i.imgur.com/uUwl32Q.png',
    },
    {
      id: 5,
      name: 'Portfolio Demo',
      tools: ['HTML', 'CSS'],
      description: 'This is the first version of my portfolio from the bootcamp, showing my progress.',
      deployedLink: 'https://moonphase13.github.io/portfolio-demo-C2/',
      githubLink: 'https://github.com/moonphase13/portfolio-demo-C2',
      image: 'https://i.imgur.com/6jKcYye.png',
    },
    {
      id: 6,
      name: 'Memes Against Humanity',
      tools: ['React', 'MongoDB', 'Mongoose', 'Express', 'GraphQL', 'Apollo', 'JWT', 'Bcrypt'],
      description: 'A meme generator app that is a fun and intuitive platform letting you discover and collect the latest and greatest memes from Giphy.',
      deployedLink: 'https://memes-against-humanity.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/memes-against-humanity',
      image: 'https://i.imgur.com/zKhA50S.png',
    },
  ]);

  const colors = ['#d6c17a', '#b39ddb', '#89c4a7'];
  const getColor = (index) => colors[index % colors.length];

  const [isLGScreen, setIsLGScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLGScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center text-center bg-[#0F0F0F]/90">
{/*       <p className="text-[0.6rem] md:text-[1.5rem] lg:text-[1.5rem] text-[#a4d4b4]">
        Curious what I've been working on?
      </p> */}
      <p className="text-[1rem] md:text-[2rem] lg:text-[2.5rem] text-[#b39ddb] font-semibold mt-15">
        Projects
      </p>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col-reverse self-center items-center rounded-md lg:my-24 p-4 w-fit lg:w-[100%] ${
              index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : 'lg:flex-row lg:justify-end'
            }`}
          >
            <div
              className="bg-[#0F0F0F]/90 p-4 z-5 w-[100%] lg:w-[40rem] lg:rounded-md"
              style={{
                transform: isLGScreen ? `${index % 2 === 0 ? 'translateX(-30%)' : 'translateX(30%)'}` : 'translateY(-75%)',
                borderTop: `0.5rem solid ${getColor(index)}`,
              }}
            >
              <p className='capitalize text-white font-light text-[0.5rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text[1.5rem]'>
                {project.tools.map((tool, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="mx-1">-</span>}
                    {tool}
                  </React.Fragment>
                ))}
              </p>
              <h3 className="text-[0.7rem] sm:text-[1rem] md:text-[1.7rem] lg:text[2rem] font-bold py-5" style={{ color: getColor(index) }}>
                {project.name}
              </h3>
              <p className="text-white flex-wrap text-[0.5rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text[1.5rem]">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline w-[1.1rem] h-[1.1rem] md:w-[2.2rem] md:h-[2.2rem]"
                >
                  <img src={linkIcon} alt="Link" className="inline h-[100%] w-[100%]" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline w-[1.1rem] h-[1.1rem] md:w-[2.2rem] md:h-[2.2rem]"
                >
                  <img src={githubIcon} alt="GitHub" className="inline h-[100%] w-[100%]" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-[55rem] rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;