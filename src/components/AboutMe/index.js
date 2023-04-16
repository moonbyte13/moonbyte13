import React, { useState } from 'react';
import './style.css'

function AboutMe() {
  const [aboutMe] = useState({
    txt:
      "I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Just go back and put one little more happy tree in there. Everybody's different. Trees are different. Let them all be individuals. We'll put some happy little leaves here and there. These things happen automatically. All you have to do is just let them happen. Everyone wants to enjoy the good parts - but you have to build the framework first. Let's do that again. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. If you do too much it's going to lose its effectiveness. If you don't think every day is a good day - try missing a few. You'll see. In life you need colors. Fluff it up a little and hypnotize it. We can fix anything. Automatically, all of these beautiful, beautiful things will happen. There we go. Look at them little rascals.",
    imgUrl: 'https://i.imgur.com/G3ppIiG.png'
  });
  return (
    <div id='abtMeSect' className="row-start-2 lg:row-start-3 flex flex-col z-0">
      <div
        className='grid grid-rows-2 grid-cols-12'
      >
        <div id='profilePic' className='justify-self-center col-start-4 col-span-6 lg:justify-self-end lg:col-start-2 lg:col-span-3'>
          <img src={aboutMe.imgUrl} alt="about me img" className='border-bk rounded-full m-10 w-[10em] sm:w-[13em] md:w-[15em] lg:w-[50em]'/>
        </div>
        <div className='text-center lg:text-start row-start-2 col-start-3 col-span-8 lg:row-start-1 lg:col-start-6 lg:col-span-6 p-2'>
          <p className="text-[1rem] md:text-[2rem] lg:text-[2rem] text-[#b39ddb] font-semibold">About Me</p>
          <p className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#d6c17a] font-medium'>Welcome, I'm Michael!</p>
          <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] text-[#a4d4b4]">{aboutMe.txt}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
