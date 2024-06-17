import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Stuyvesant High School</h1>
        <h2>District 2</h2>
      </div>
      <div className="overview">
        <h3>Overview (vs District Avg)</h3>
        <div className="overview-stats">
          <div className="stat">
            <div className="stat-title">Enrollment</div>
            <div className="stat-value">5.67%</div>
          </div>
          <div className="stat">
            <div className="stat-title">Attendance</div>
            <div className="stat-value">21.86%</div>
          </div>
          <div className="stat">
            <div className="stat-title">Graduation</div>
            <div className="stat-value">7.86%</div>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h3>Additional Information</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
