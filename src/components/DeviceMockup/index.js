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
          entry.target.style.opacity = ""; // Reset opacity to default when not visible
        }
      });

      const visibleMockups = document.querySelectorAll('.device-mockup.visible');

      visibleMockups.forEach(mockup => {
        const mockupRect = mockup.getBoundingClientRect();
        const mockupPosition = mockupRect.top + mockupRect.height / 2;
        const containerCenter = window.innerHeight / 2;
        const verticalOffset = Math.abs(mockupPosition - containerCenter) / (window.innerHeight / 2);

        if (verticalOffset < 0.425) {
          mockup.style.opacity = "1"; // Set full opacity for 75% of the viewport height
        } else {
          mockup.style.opacity = `${Math.max(0.25, 1 - (verticalOffset - 0.425) * 2)}`; // Set minimum opacity to 0.25
        }        
      });

    };

    const observerOptions = {
      threshold: [0, 0.5, 1] // Add additional thresholds for different opacity values
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(deviceMockupRef.current);

    window.addEventListener('scroll', () => handleIntersection(observer.takeRecords(), observer));

    return () => {
      if (observer && deviceMockupRef.current) {
        observer.unobserve(deviceMockupRef.current);
        window.removeEventListener('scroll', () => handleIntersection(observer.takeRecords(), observer));
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
      <a className="deployed-link" href={deployedLink} target="_blank" rel="noopener noreferrer">
        View Live
      </a>
    </div>
  );
};

export default DeviceMockup;
