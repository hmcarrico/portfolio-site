import React from 'react';
import skills from './skills.json';
import './Skills.css';

function Skills(){
    const skillList = skills.map(skill => {
        return <img src={skill} className="skill"/>
    })
    return <div className="skills">
        <h1>
            Skills
        </h1>
        <div className="skills__container">
            {skillList}
        </div>
        <hr />
    </div>
}

export default Skills;