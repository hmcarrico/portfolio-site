import React from 'react';
import aboutData from './aboutData.json';
import './About.css';

function About(){
    console.log(aboutData)
    const mappedAbout = aboutData.map(item => {
        return <div>
            {item.description}
        </div>
    })
    return (
        <div>
            {mappedAbout}
        </div>
    )
}

export default About;