import React from 'react';
import './DeviceMockup.css';

const DeviceMockup = ({ name, deployedLink, description, githubLink }) => {
  
  return (
    <div className="device-mockup">
      <div className="toolbar-button red"></div>
      <div className="toolbar-button yellow"></div>
      <div className="toolbar-button green"></div>
      <iframe src={deployedLink} title={name} loading="lazy"></iframe>
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
      <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default DeviceMockup;
