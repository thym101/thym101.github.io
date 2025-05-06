import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faJava, faHtml5, faCss3, faGithub, faNodeJs, faBootstrap, faPhp } from '@fortawesome/free-brands-svg-icons';
import cpp from "../assets/images/c-plusplus.svg"
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="skill">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>React</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Docker</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Python</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>HTML</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faPhp} size="3x"/>
                    <h3>PHP</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faCss3} size="3x"/>
                    <h3>CSS</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>GitHub</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>NodeJS</h3>
                </div>

                <div className="skill, skill-card">
                    <FontAwesomeIcon icon={faBootstrap} size="3x"/>
                    <h3>Bootstrap</h3>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Expertise;