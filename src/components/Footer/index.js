import React, { useState } from 'react';

function Footer() {
  
  const [footer] = useState({
    link1: 'https://github.com/moonphase13',
    link2: 'https://www.linkedin.com/in/michael-frayne-00b491247/',
    link3: 'https://twitter.com/Moonlight__1357',
  });

  return (
    <footer className="footer">
      <ul className="flex flex-row justify-center py-[10rem]">
        <li className="footerLiItm hover:opacity-25 transition-opacity duration-500 ease-in-out">
          <a href={footer.link1} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
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
        </li>
        <li className="footerLiItm hover:opacity-25 transition-opacity duration-500 ease-in-out">
          <a href={footer.link2} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
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
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.496,8.403c0.842,0 1.403,0.561 1.403,1.309c0,0.748 -0.561,1.309 -1.496,1.309c-0.842,0.001 -1.403,-0.561 -1.403,-1.309c0,-0.748 0.561,-1.309 1.496,-1.309zM12,20h-3v-8h3zM22,20h-2.824v-4.372c0,-1.209 -0.753,-1.488 -1.035,-1.488c-0.282,0 -1.224,0.186 -1.224,1.488c0,0.186 0,4.372 0,4.372h-2.917v-8h2.918v1.116c0.376,-0.651 1.129,-1.116 2.541,-1.116c1.412,0 2.541,1.116 2.541,3.628z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
{/*         <li className="footerLiItm hover:opacity-25 transition-opacity duration-500 ease-in-out">
          <a href={footer.link3} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
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
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.464,12.535c0.006,0.133 0.009,0.265 0.009,0.397c0,4.068 -3.095,8.756 -8.756,8.756c-1.739,0 -3.356,-0.509 -4.717,-1.383c0.241,0.029 0.486,0.042 0.735,0.042c1.443,0 2.769,-0.491 3.821,-1.318c-1.347,-0.025 -2.484,-0.915 -2.875,-2.137c0.188,0.036 0.381,0.055 0.579,0.055c0.281,0 0.554,-0.038 0.811,-0.108c-1.408,-0.282 -2.469,-1.526 -2.469,-3.017c0,-0.013 0,-0.026 0,-0.039c0.415,0.231 0.889,0.369 1.394,0.385c-0.825,-0.551 -1.369,-1.494 -1.369,-2.561c0,-0.565 0.151,-1.094 0.416,-1.547c1.518,1.862 3.786,3.088 6.343,3.216c-0.052,-0.225 -0.079,-0.46 -0.079,-0.701c0,-1.699 1.378,-3.078 3.077,-3.078c0.885,0 1.685,0.374 2.246,0.972c0.701,-0.139 1.36,-0.394 1.955,-0.747c-0.23,0.719 -0.718,1.321 -1.354,1.703c0.622,-0.074 1.215,-0.239 1.768,-0.484c-0.411,0.618 -0.932,1.159 -1.535,1.594z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li> */}
      </ul>
    </footer>
  );
}

export default Footer;
