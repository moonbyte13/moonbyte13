import React, { useState } from 'react';
import './style.css';

function Resume() {
  const [resume] = useState({
    url: 'https://drive.google.com/uc?export=download&id=1D4qqBiPsqNAtt9G1X2v6pJzo_ZJnJTci', // https://docs.google.com/document/d/13ytjrMbiyUUt0GLGhCWP8S_ohaoI9VqP7B52yytoWnw/edit?usp=sharing
    skills: [
      'https://img.icons8.com/color/100/000000/html-5--v1.png',
      'https://img.icons8.com/color/100/000000/css3.png',
      'https://img.icons8.com/color/100/000000/javascript--v1.png',
      'https://img.icons8.com/color/100/000000/typescript.png',
      'https://i.imgur.com/gqgBWXk.png',
      'https://img.icons8.com/color/100/000000/nodejs.png',
      'https://img.icons8.com/color/100/000000/mongodb.png',
      'https://img.icons8.com/color/100/000000/react-native.png',
      'https://img.icons8.com/color/100/000000/bootstrap.png',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      'https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg',
      'https://handlebarsjs.com/images/handlebars_logo.png',
      'https://i.imgur.com/xCAr5Vd.png',
      'https://img.icons8.com/color/100/000000/heroku.png',
      'https://img.icons8.com/plasticine/100/null/github.png',
      'https://img.icons8.com/color/100/000000/git.png',
      'https://img.icons8.com/color/100/000000/npm.png',
      'https://img.icons8.com/color/100/000000/visual-studio-code-2019.png',
      'https://img.icons8.com/color/100/000000/mongodb.png',
      'https://img.icons8.com/color/100/000000/sql.png',
      'https://img.icons8.com/color/100/000000/mysql-logo.png',
      'https://img.icons8.com/color/100/000000/graphql.png',
      'https://img.icons8.com/color/100/000000/apollo.png',
      'https://img.icons8.com/color/100/000000/amazon-web-services.png',
      'https://img.icons8.com/color/100/000000/api-settings.png',
      'https://img.icons8.com/color/100/000000/c-sharp-logo.png',
      'https://img.icons8.com/color/100/000000/java-coffee-cup-logo.png',
      'https://img.icons8.com/color/100/000000/python.png',
      'https://i.imgur.com/wA77669.png',
      'https://i.imgur.com/kYxU62y.png'
    ],
  });


  function downloadResume() {
    window.open(resume.url);
  }

  return (
    <div id='resumeSect' className="row-start-4 row-span-3 grid grid-cols-12 grid-rows-12 justify-items-center">
      <h2 className="text-[2vw] text-[#b39ddb] font-semibold col-span-12 self-center">Resume</h2>
      <div id='resumeIcon' className='row-start-2 row-span-1 col-span-12'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="192" height="192" viewBox="0,0,256,256" onClick={downloadResume} className='hover: cursor-pointer h-fit hover:animate-ping'>
            <g fill="#d6c17a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,1c-1.304,0 -2.40341,0.837 -2.81641,2h-4.18359c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2h-4.18359c-0.413,-1.163 -1.51241,-2 -2.81641,-2zM12,3c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1h7v14h-14v-14h7c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,8c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM12,13c-2.185,0 -4,0.9088 -4,2.2168v0.7832h8v-0.7832c0,-1.308 -1.815,-2.2168 -4,-2.2168z"></path></g></g>
          </svg>
      </div>
      <label 
        className='row-start-3 col-span-12 text-[1vw] text-[#b39ddb] animate-bounce self-center'
      >^ Click Above to Download! ^</label>
      <div className="row-start-4 row-span-12 col-span-12 text-center text-[1vw] text-[#a4d4b4] flex w-full">
        <br/>
        <div className='w-full grid grid-cols-12 grid-rows-5 gap-2 p-10'>
          {resume.skills.map((skill, index) => {
            const rowStart = Math.floor(index / 6);
            const colStart = (index % 6) * 2 + 1 + (rowStart % 2);
            return (
              <div
                key={index}
                style={{
                  gridColumnStart: colStart,
                  gridRowStart: rowStart + 1,
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;