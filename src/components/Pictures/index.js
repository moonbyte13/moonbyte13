import React, { useState, useEffect } from 'react';
// import './style.css';
import linkIcon from './link.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function PicturesCards() {
  const [pictureCards] = useState([
    {
      id: 1,
      name: 'My Tech Blog',
      description: 'My CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
      deployedLink: 'https://my-tech-blog-c14.herokuapp.com',
      image: 'https://i.imgur.com/s4DSOHj.png',
    },
    {
      id: 2,
      name: 'My Own Text Editor',
      description: 'A full PWA text editor that allows you to save your work and access it from anywhere.',
      deployedLink: 'https://my-own-text-editor.herokuapp.com',
      image: 'https://i.imgur.com/itfeCmN.png',
    },
    {
      id: 3,
      name: 'Tune In',
      description: 'An app to create an opportunity for users to explore different radio stations. The main goal is to provide an easy, efficient radio browser for everyone to use that also includes the top 100 hits.',
      subDescription:'Note: Unfortunately, the API we used is depreciated and no longer works. I have left the deployed link for you to see the code.',
      deployedLink: 'https://moonbyte13.github.io/picture-Tune-in-Team-5/',
      image: 'https://i.imgur.com/3nqP4KQ.png',
    },
    {
      id: 4,
      name: 'CSS Snippet Cheatsheet',
      description: 'This is a cheatsheet for CSS snippets that I have found useful.',
      deployedLink: 'https://moonbyte13.github.io/CSS-Snippet-Cheatsheet/',
      image: 'https://i.imgur.com/uUwl32Q.png',
    },
    {
      id: 5,
      name: 'Portfolio Demo',
      description: 'This is the first version of my portfolio from the bootcamp, showing my progress.',
      deployedLink: 'https://moonbyte13.github.io/portfolio-demo-C2/',
      image: 'https://i.imgur.com/6jKcYye.png',
    },
    {
      id: 6,
      name: 'Memes Against Humanity',
      description: 'A meme generator app that is a fun and intuitive platform letting you discover and collect the latest and greatest memes from Giphy.',
      deployedLink: 'https://memes-against-humanity.herokuapp.com',
      image: 'https://i.imgur.com/zKhA50S.png',
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });
    AOS.refresh();
  }, []);  

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
      <p id='pictureHeader' className="text-[1rem] md:text-[2rem] lg:text-[2.5rem] text-[#b39ddb] font-semibold mt-15">
        Pictures
      </p>

      <div className="flex flex-col picture-container">
        {pictureCards.map((picture, index) => (
          <div
            key={picture.id}
            className={` flex flex-col-reverse self-center items-center rounded-md lg:my-24 p-4 w-fit lg:w-[100%] ${
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
              <h3 className="text-[0.7rem] sm:text-[1rem] md:text-[1.7rem] lg:text[2rem] font-bold py-5" style={{ color: getColor(index) }}>
                {picture.name}
              </h3>
              <p className="text-white flex-wrap text-[0.5rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text[1.5rem]">{picture.description}</p>
              <p className="text-white flex-wrap text-[0.5rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text[1.5rem] pt-2">{picture.subDescription}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={picture.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline w-[1.1rem] h-[1.1rem] md:w-[2.2rem] md:h-[2.2rem]"
                >
                  <img src={linkIcon} alt="Link" className="inline h-[100%] w-[100%]" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={picture.image}
                alt={picture.name}
                className="w-[55rem] rounded-md"
                /* data-aos="fade-up"
                data-aos-once="false"
                data-aos-duration="1000"
                data-aos-anchor='#pictureHeader'
                data-aos-anchor-placement="top-top" */
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PicturesCards;