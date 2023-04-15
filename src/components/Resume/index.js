import React, { useState } from 'react';
import './style.css';

function Resume() {
  const [resume] = useState({
    url: 'https://drive.google.com/uc?export=download&id=1D4qqBiPsqNAtt9G1X2v6pJzo_ZJnJTci', // https://docs.google.com/document/d/13ytjrMbiyUUt0GLGhCWP8S_ohaoI9VqP7B52yytoWnw/edit?usp=sharing
    frontEndProficiencies: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'responsive design',
      'React',
      'Bootstrap',
      'TailwindCSS',
      'and more as I keep learning everyday'
    ],
    backEndProficiencies: [
      'APIs', 
      'Node', 
      'Express', 
      'MySQL, Sequelize', 
      'MongoDB, Mongoose',
      'Rest',
      'GraphQL'
    ]
  });

  function downloadResume() {
    window.open(resume.url);
  }

  return (
    <div className="grid grid-cols-3 grid-rows-12 justify-items-center">
      <h2 className="text-[2vw] text-[#b39ddb] font-semibold col-start-2">Resume</h2>
      <div id='resumeIcon' className='row-start-2 row-span-2 col-start-2'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="192" height="192" viewBox="0,0,256,256" onClick={downloadResume} className='hover: cursor-pointer h-fit hover:animate-ping'>
            <g fill="#d6c17a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,1c-1.304,0 -2.40341,0.837 -2.81641,2h-4.18359c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2h-4.18359c-0.413,-1.163 -1.51241,-2 -2.81641,-2zM12,3c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1h7v14h-14v-14h7c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,8c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM12,13c-2.185,0 -4,0.9088 -4,2.2168v0.7832h8v-0.7832c0,-1.308 -1.815,-2.2168 -4,-2.2168z"></path></g></g>
          </svg>
      </div>
      <label 
        className='row-start-4 col-start-2 text-[1vw] text-[#b39ddb] animate-bounce self-center'
      >^ Click Above to Download! ^</label>
      <div className="row-start-5 row-end-12 col-span-3 text-center text-[1vw] text-[#a4d4b4] text-center">
        <br/>
        <div>
          <h3 className='my-3 underline text-2xl'>Front End Proficiencies</h3>
          <ul>
            {resume.frontEndProficiencies.map((proficiency) => (
              <li className='mt-1' key={proficiency}>{proficiency}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='my-3 underline text-2xl'>Back End Proficiencies</h3>
          <ul>
            {resume.backEndProficiencies.map((proficiency) => (
              <li className='mt-1' key={proficiency}>{proficiency}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;