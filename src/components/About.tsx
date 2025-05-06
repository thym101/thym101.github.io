import React from 'react';
import '../assets/styles/About.scss';
import avatar from '../assets/images/avatar.jpg';

const About = () => {
    return (
      <div id="about">
        <div className="about-content">
            <div className="about-text">
            <h2 className="title">WHO I AM?</h2>
            <p>
                My name is <strong>Thy Mai</strong>, and I am currently a Junior at <a href="https://www.siue.edu/" target='blank'><strong>Southern Illinois University Edwardsville</strong></a>
            </p>

            <p>
                <strong>Major</strong>: Computer Science. 
            </p>

            <p><strong>GPA</strong>: 4.0/4.0</p>
            <p><strong>Expected Graduation Year</strong>: December 2026</p>
            <p>    
                <strong>Fun fact</strong>: I enjoy exploring new technologies and thrive on solving challenging problems. My interests span across various areas of web application development, and I am committed to contributing to a more open and accessible web.
            </p>
            <p>
                <strong>Skills</strong>: I am actively expanding my knowledge in programming languages such as Python, C++, HTML/CSS, SQL, and JavaScript. 
            </p>
            <p>
                <strong>Future plan</strong>: I aspire to become a full-stack developer and eventually a tech lead, where I can drive innovative projects, mentor others, and build impactful digital solutions that make a difference in people's lives.
            </p>
            </div>

            <div className="about-image">
            <img src={avatar} alt="Thy Mai" />
            <div className="vertical-label">ABOUT ME</div>
            </div>
        </div>
        </div>
    );
  };
  
  export default About;
  