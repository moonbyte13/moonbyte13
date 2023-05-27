import React, { useState } from 'react';
import './style.css'

function AboutMe() {
  const [aboutMe] = useState({
    txt:"I discovered my passion for web development in high school and pursued it further during a coding bootcamp. By creating high-end gaming rigs and revamping outdated websites, I actively drive innovation and deliver visually appealing and user-friendly experiences. Through comprehensive planning and breaking down complex problems, I have honed my skills in Test Driven Development and gained proficiency in various programming languages.\n\nIn addition to technical expertise, I thrive on collaboration and fostering a positive work environment. Embracing the unique perspectives and experiences that each team member brings to a project, I believe in the power of diversity to fuel inclusive and innovative solutions. Simultaneously, my personal journey exploring my gender identity has deepened my understanding and respect for individual expression. Just as no single line of code is identical, I appreciate the richness of diverse viewpoints. By encouraging open communication and embracing diversity, I strive to create an environment where every voice is heard and valued.\n\nFeel free to explore my portfolio and resume below to learn more about my achievements and contributions. Let's connect and collaborate on creating impactful web solutions together.",
    imgUrl: 'https://i.imgur.com/G3ppIiG.png'
  });
  return (
    <div id='abtMeSect' className="flex flex-col my-[10rem] bg-[#0F0F0F]/90">
      <div
        className='grid grid-rows-1 grid-cols-12'
      >
        <div id='profilePic' className='justify-self-center col-start-1 col-span-12 lg:justify-self-end lg:col-start-2 lg:col-span-3'>
          <img src={aboutMe.imgUrl} alt="about me img" className='border-bk rounded-full m-10 w-[10em] sm:w-[13em] md:w-[15em] lg:w-[50em]'/>
        </div>
        <div className='text-center lg:text-start row-start-2 col-start-1 col-span-12 lg:row-start-1 lg:col-start-6 lg:col-span-6 p-2'>
          <p className="text-[1rem] md:text-[2rem] lg:text-[2.5rem] text-[#b39ddb] font-semibold">About Me</p>
          <p className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#d6c17a] font-medium'>Welcome, I'm Michael!</p>
          <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] text-[#a4d4b4]" style={{ whiteSpace: 'pre-line' }}>{aboutMe.txt}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
