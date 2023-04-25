import React, { useEffect, useRef } from 'react';
import './style.css';

const DeviceMockup = ({ name, deployedLink, description, githubLink }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframeRef.current.src = deployedLink;
          observer.unobserve(iframeRef.current);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(iframeRef.current);

    return () => {
      if (observer && iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [deployedLink]);

  return (
    <div className="device-mockup">
      <div className="toolbar-button red"></div>
      <div className="toolbar-button yellow"></div>
      <div className="toolbar-button green"></div>
      <iframe ref={iframeRef} title={name} loading="lazy"></iframe>
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
      <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default DeviceMockup;
