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
                My name is Thy Mai, and I am currently a Junior at Southern Illinois University Edwardsville, majoring in Computer Science. I am a quick and enthusiastic learner with a strong passion for self-improvement and continuous growth. I enjoy exploring new technologies and thrive on solving challenging problems. My interests span across various areas of web application development, and I am committed to contributing to a more open and accessible web.
                I am actively expanding my knowledge in programming languages such as Python, C++, HTML/CSS, SQL, and JavaScript. I am open to any job opportunities that align with my skills and passion for technology.
                In the future, I aspire to become a full-stack developer and eventually a tech lead, where I can drive innovative projects, mentor others, and build impactful digital solutions that make a difference in people's lives.
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
  