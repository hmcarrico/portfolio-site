import React from 'react';
import aboutData from './aboutData.json';
import './About.css';

function About(){
    const mappedAbout = aboutData.map((item, i) => {
        return <div className={i !== 6 ? 'about__container': 'about__container___blue'}>
            <div>
                <img src={item.icon} />
            </div>
            {
                i !== 6 ?
                <div>
                    {item.description}
                </div>
                :
                <div>
                    <a href="https://www.canva.com/design/DADXgWmDW4k/ngc1gJV9g6ZkBef1UtywOA/edit" target="_blank">{item.description}</a>
                </div>
            }
        </div>
    })
    return (
        <div className='mappedAbout__container'>
            {mappedAbout}
            <hr />
        </div>
    )
}

export default About;