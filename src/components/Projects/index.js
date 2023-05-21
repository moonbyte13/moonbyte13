import React, { useState, useEffect } from 'react';
import './style.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      name: 'My Tech Blog',
      tools: ['Bcrypt', 'Handlebars', 'MySQL2', 'Sequelize'],
      description: 'My CMS-style blog site',
      deployedLink: 'https://my-tech-blog-c14.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/myTechBlog',
      image: 'https://i.imgur.com/s4DSOHj.png',
    },
    {
      id: 2,
      name: 'My Own Text Editor',
      tools: ['React', 'Webpack', 'MongoDB', 'Mongoose', 'PWA'],
      description: 'A full PWA text editor',
      deployedLink: 'https://my-own-text-editor.herokuapp.com',
      githubLink: 'https://github.com/moonphase13/myTextEditor',
      image: 'https://i.imgur.com/itfeCmN.png',
    },
    {
      id: 3,
      name: 'Tune In',
      tools: ['Server Side APIs', 'CSS', 'HTML', 'JavaScript'],
      description: 'An easy efficient radio browser',
      deployedLink: 'https://moonphase13.github.io/Project-Tune-in-Team-5/',
      githubLink: 'https://github.com/moonphase13/Project-Tune-in-Team-5',
      image: 'https://i.imgur.com/3nqP4KQ.png',
    },
    {
      id: 4,
      name: 'CSS Snippet Cheatsheet',
      tools: ['CSS', 'HTML'],
      description: 'This is a cheatsheet for CSS snippets',
      deployedLink: 'https://moonphase13.github.io/CSS-Snippet-Cheatsheet/',
      githubLink: 'https://github.com/moonphase13/CSS-Snippet-Cheatsheet',
      image: 'https://i.imgur.com/uUwl32Q.png',
    },
    {
      id: 5,
      name: 'Portfolio Demo',
      tools: ['HTML', 'CSS'],
      description: 'This is the first version of my portfolio from the bootcamp',
      deployedLink: 'https://moonphase13.github.io/portfolio-demo-C2/',
      githubLink: 'https://github.com/moonphase13/portfolio-demo-C2',
      image: 'https://i.imgur.com/6jKcYye.png',
    },
    {
      id: 6,
      name: 'Memes Against Humanity',
      tools: ['React', 'MongoDB', 'Mongoose', 'Express', 'GraphQL', 'Apollo', 'JWT', 'Bcrypt'],
      description: 'A meme generator app that lets you discover and collect the latest and greatest memes from Giphy',
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
    <div className="flex flex-col justify-center text-center">
{/*       <p className="text-[0.6rem] md:text-[1.5rem] lg:text-[1.5rem] text-[#a4d4b4]">
        Curious what I've been working on?
      </p> */}
      <p className="text-[1rem] md:text-[2rem] lg:text-[2rem] text-[#b39ddb] font-semibold">
        Projects
      </p>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col-reverse self-center items-center rounded-lg sm:mx-5 my-5 p-4 w-fit lg:w-max ${
              index % 2 === 0 ? 'lg:flex-row-reverse lg:self-start' : 'lg:flex-row lg:self-end'
            }`}
          >
            <div
              className="bg-[#292929]/90 bg- p-4 z-5 w-[20rem] rounded-lg"
              style={{
                transform: isLGScreen ? `${index % 2 === 0 ? 'translateX(-30%)' : 'translateX(30%)'}` : 'translateY(-30%)',
                borderTop: `2rem solid ${getColor(index)}`,
              }}
            >
              <p className='text-gray-300'>
                {project.tools.map((tool, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="mx-1">-</span>}
                    {tool}
                  </React.Fragment>
                ))}
              </p>
              <h3 className="text-lg font-semibold" style={{ color: getColor(index) }}>
                {project.name}
              </h3>
              <p className="text-gray-400 flex-wrap">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  View Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="h-[50vw] md:h-[35vw] lg:h-[25vw] rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;