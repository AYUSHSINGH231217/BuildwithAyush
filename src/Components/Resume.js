import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-title">Resume</h2>
      <div className="download-container">
        <a href="/AYUSH SINGH_7860844576.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="download-btn">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
