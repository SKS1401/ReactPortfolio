import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section id="welcome-section">
      <div className="text-box">
        <h1 className='contacth2 fade-in'>Hallo!</h1>
        <h2 className='contacth2 fade-in'>I'm Srabosti Shoibo!</h2>
        <h3 className='welcomeh3 fade-in'>About Me</h3>
        <p className='welcometextp fade-in'>
          I am a 3rd-year Computer Science Engineering student with a keen interest in Full Stack Development, Artificial Intelligence, and Data Science. I enjoy building innovative projects, solving problems, and exploring the intersection of software development and intelligent systems.
        </p>
      </div>
      <div className="dp-box bounce-in">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FbR7M1M2n1gsOnanOQAtiT4zoNVzAb4gJQ&s"
          alt="Profile"
          className="dp"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
