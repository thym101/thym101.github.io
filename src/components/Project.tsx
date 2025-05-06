import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import blaze_blizzard from '../assets/images/blaze_blizzard.jpg';
import sprout_game from '../assets/images/sprout_game.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://rhettlee.itch.io/synergiessprout" target="_blank" rel="noreferrer"><img src={sprout_game} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rhettlee.itch.io/synergiessprout" target="_blank" rel="noreferrer"><h2>Synergies</h2></a>
                <p>Designed, developed and launched a 2D game with Godot and Sketchbook. This project is public on Itch.io for everyone to enjoy</p>
            </div>
            <div className="project">
                <a href="https://devpost.com/software/blaze-blizzard" target="_blank" rel="noreferrer"><img src={blaze_blizzard} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://devpost.com/software/blaze-blizzard" target="_blank" rel="noreferrer"><h2>Blaze Blizzard</h2></a>
                <p>Designed, developed, and launched a game with Godot, winning 1st place at eHacks 2024.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;