import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div><h1>My Projects:</h1></div>
      <div className="skill-box">
        <div className="sub-box pro project-tile">
          <p className="logo">Automan</p>
          <p className="text">This is My First year C++ Object Oriented Project that implements a Cashless Rickshaw Ride Management System on College/University Campus</p>
          <a href="https://github.com/SKS1401/Rickshaw_ride_project" target="_blank" rel="noopener noreferrer" className="p">GitHub</a>
          <a href="https://github.com/SKS1401/Rickshaw_ride_project" target="_blank" rel="noopener noreferrer" className="p">| Live Link</a>
        </div>
        <div className="sub-box pro">
          <p className="logo">Euphoria</p>
          <p className="text">This is My 2nd year Java Project that implements a Chatting App through which University Going Students can get help in Mental Health related problems</p>
          <a href="https://github.com/SKS1401/Java_Chatting_App" target="_blank" rel="noopener noreferrer" className="p">GitHub</a>
          <a href="https://github.com/SKS1401/Java_Chatting_App" target="_blank" rel="noopener noreferrer" className="p">| Live Link</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
