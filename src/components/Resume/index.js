import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './style.css';

function Resume() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  // eslint-disable-next-line no-unused-vars
  const isExtraSmallScreen = useMediaQuery({ maxWidth: 639 });

  const [resume] = useState({
    url: 'https://drive.google.com/uc?export=download&id=1SVo74EMhByWiYke93r-ZTO-aJB3cm3YZ',
    skills: [
      'https://img.icons8.com/color/100/000000/html-5--v1.png',
      'https://img.icons8.com/color/100/000000/css3.png',
      'https://img.icons8.com/color/100/000000/javascript--v1.png',
      'https://img.icons8.com/color/100/000000/git.png',
      'https://img.icons8.com/color/100/000000/npm.png',
      'https://img.icons8.com/color/100/000000/nodejs.png',
      'https://img.icons8.com/color/100/000000/api-settings.png',
      'https://i.imgur.com/CcFplDc.png',
      'https://handlebarsjs.com/images/handlebars_logo.png',
      'https://img.icons8.com/color/100/000000/react-native.png',
      'https://img.icons8.com/color/100/000000/sql.png',
      'https://img.icons8.com/color/100/000000/mysql-logo.png',
      'https://i.imgur.com/xCAr5Vd.png',
      'https://img.icons8.com/color/100/000000/mongodb.png',
      'https://img.icons8.com/color/100/000000/graphql.png',
      'https://img.icons8.com/color/100/000000/apollo.png',
      'https://img.icons8.com/color/100/000000/bootstrap.png',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      'https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg',
      'https://img.icons8.com/color/100/000000/heroku.png',
    ],

    currentlyLearning: [
      'https://img.icons8.com/color/100/000000/amazon-web-services.png',
      'https://img.icons8.com/color/100/000000/python.png',
      'https://img.icons8.com/color/100/000000/c-sharp-logo.png',
      'https://img.icons8.com/color/100/000000/java-coffee-cup-logo.png',
      'https://img.icons8.com/color/100/000000/typescript.png',
    ]
  });


  function downloadResume() {
    window.open(resume.url);
  }

  return (
    <div id='resumeSect' className="flex flex-col items-center mb-[10rem] py-[2rem] bg-[#0F0F0F]/90">
      <h2 className="text-[1rem] md:text-[2rem] lg:text-[2.5rem] text-[#b39ddb] font-semibold w-fit">Resume</h2>
      <div id='resumeIcon' className='w-[5rem] sm:w-[7rem] md:w-[10rem] lg:w-[15rem] flex justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="192" height="192" viewBox="0,0,256,256" onClick={downloadResume} className='hover: cursor-pointer h-fit w-fit'>
        <g fill="#d6c17a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,1c-1.304,0 -2.40341,0.837 -2.81641,2h-4.18359c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2h-4.18359c-0.413,-1.163 -1.51241,-2 -2.81641,-2zM12,3c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1h7v14h-14v-14h7c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,8c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM12,13c-2.185,0 -4,0.9088 -4,2.2168v0.7832h8v-0.7832c0,-1.308 -1.815,-2.2168 -4,-2.2168z"></path></g></g>
        </svg>
      </div>
      <label 
        className='text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] text-[#b39ddb] animate-bounce self-center'
      >
        ^ Click Above to Download! ^
      </label>
      <label className='text-[0.6rem] md:text-[1.5rem] lg:text-[1.5rem] text-[#89c4a7] font-light w-fit pt-[1.5rem]'>Known Skills</label>
      <div className="text-center text-[1em] text-[#a4d4b4] flex w-full">
        <div className={`w-full grid gap-2 p-5 mb-[5rem] ${isLargeScreen ? 'grid-cols-10 grid-rows-4' : isMediumScreen ? 'grid-cols-8 grid-rows-auto' : isSmallScreen ? 'grid-cols-6 grid-rows-auto' : 'grid-cols-4 grid-rows-auto'}`}>
          {resume.skills.map((skill, index) => {
            let rowStart, colStart, iconHeight;

            if (isLargeScreen) {
              rowStart = Math.floor(index / 5);
              colStart = (index % 5) * 2 + 1 + (rowStart % 2);
              iconHeight = '100px';
            } else if (isMediumScreen) {
              rowStart = Math.floor(index / 4);
              colStart = (index % 4) * 2 + 1 + (rowStart % 2);
              iconHeight = '80px';
            } else if (isSmallScreen) {
              rowStart = Math.floor(index / 3);
              colStart = (index % 3) * 2 + 1 + (rowStart % 2);
              iconHeight = '60px';
            } else {
              // Extra small screen
              rowStart = Math.floor(index / 2);
              colStart = (index % 2) * 2 + 1 + (rowStart % 2);
              iconHeight = '40px';
            }

            return (
              <div
                key={index}
                style={{
                  gridColumnStart: colStart,
                  gridRowStart: rowStart + 1,
                  height: iconHeight,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src={skill} alt={`#${index}`} style={{ height: iconHeight }} />
              </div>
            );
          })}
        </div>
      </div>
      <label className='text-[0.6rem] md:text-[1.5rem] lg:text-[1.5rem] text-[#89c4a7] font-light w-fit'>Currently Learning</label>
      <div className={`w-full grid gap-2 p-5 ${isLargeScreen ? 'grid-cols-9 grid-rows-1' : isMediumScreen ? 'grid-cols-7 grid-rows-auto' : isSmallScreen ? 'grid-cols-5 grid-rows-auto' : 'grid-cols-3 grid-rows-auto'}`}>
          {resume.currentlyLearning.map((skill, index) => {
            let rowStart, colStart, iconHeight;

            if (isLargeScreen) {
              rowStart = Math.floor(index / 5);
              colStart = (index % 5) * 2 + 1 + (rowStart % 2);
              iconHeight = '100px';
            } else if (isMediumScreen) {
              rowStart = Math.floor(index / 4);
              colStart = (index % 4) * 2 + 1 + (rowStart % 2);
              iconHeight = '80px';
            } else if (isSmallScreen) {
              rowStart = Math.floor(index / 3);
              colStart = (index % 3) * 2 + 1 + (rowStart % 2);
              iconHeight = '60px';
            } else {
              // Extra small screen
              rowStart = Math.floor(index / 2);
              colStart = (index % 2) * 2 + 1 + (rowStart % 2);
              iconHeight = '40px';
            }

            return (
              <div
                key={index}
                style={{
                  gridColumnStart: colStart,
                  gridRowStart: rowStart + 1,
                  height: iconHeight,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src={skill} alt={`#${index}`} style={{ height: iconHeight }} />
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Resume;
