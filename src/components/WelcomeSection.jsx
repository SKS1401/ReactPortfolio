import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section id="welcome-section">
      <div className="text-box">
        <h1>Hallo!</h1>
        <h2>I'm Srabosti Shoibo!</h2>
        <p>Currently I am pursuing my Bachelor Degree in CSE at Jahangirnagar University. I always love to learn new technologies and explore new things.</p>
      </div>
      <div className="dp-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FbR7M1M2n1gsOnanOQAtiT4zoNVzAb4gJQ&s" alt="Profile" className="dp" />
      </div>
    </section>
  );
};

export default WelcomeSection;
