import React from 'react';
import aboutData from './aboutData.json';
import './About.css';

function About(){
    const mappedAbout = aboutData.map((item, i) => {
        return <div className={i !== 6 ? 'about__container': 'about__container___blue'}>
            <div>
                <img src={item.icon} />
            </div>
            <div>
                {item.description}
            </div>
        </div>
    })
    return (
        <div className='mappedAbout__container'>
            {mappedAbout}
        </div>
    )
}

export default About;