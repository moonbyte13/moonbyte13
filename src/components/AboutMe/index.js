import React, { useState } from 'react';
import './style.css'

function AboutMe() {
  const [aboutMe] = useState({
    txt:"I'm a passionate web developer with a strong background in creating visually stunning and user-friendly websites. Through my experiences in high school and a coding bootcamp, I honed my skills in building high-end gaming rigs and tackling complex problems by breaking them down into manageable tasks. I excel at identifying test scenarios, planning projects, and prioritizing critical functionalities. My enthusiasm for web development extends to incorporating AI technologies into my work, and I eagerly anticipate the advancements in VR and AI. With a collaborative mindset, I thrive in team environments, fostering open communication and celebrating achievements. I invite you to explore my portfolio to see the range of projects I've worked on.\n\nIn addition to my technical expertise, I bring a friendly and collaborative spirit to every coding challenge and project. I excel in problem-solving and possess a knack for out-of-the-box thinking, allowing me to approach web development tasks from unique angles. My ADHD provides me with hyperfocus and multitasking abilities, making me adaptable to dynamic environments. With a strong intuition and a commitment to continuous learning, I consistently strive to deliver high-quality work. I invite you to delve into my portfolio to see the results of my passion and expertise in web development. Feel free to reach out for any collaborations or further inquiries.\n\nI invite you to explore the rest of my portfolio to see the full range of my web development projects and accomplishments. Let's connect and collaborate to bring your ideas to life.",
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
