import React, { useEffect, useRef } from 'react';
import './style.css';

const DeviceMockup = ({ name, deployedLink, description, githubLink }) => {
  const deviceMockupRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelector('iframe').src = deployedLink;
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observerOptions = {
      threshold: [0.5] // Adjust the threshold value based on your requirements
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(deviceMockupRef.current);

    return () => {
      if (observer && deviceMockupRef.current) {
        observer.unobserve(deviceMockupRef.current);
      }
    };
  }, [deployedLink]);

  return (
    <div className="device-mockup" ref={deviceMockupRef}>
      <div className="toolbar-button red"></div>
      <div className="toolbar-button yellow"></div>
      <div className="toolbar-button green"></div>
      <iframe title={name} loading="lazy"></iframe>
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
      <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default DeviceMockup;
