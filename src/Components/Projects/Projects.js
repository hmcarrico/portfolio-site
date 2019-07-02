import React from 'react';
import projectData from './projects.json';
import { Carousel } from 'react-responsive-carousel';
import windowSize from 'react-window-size';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Projects.css';

function Projects(props){
    console.log(props.windowWidth)
    let displayProjects = projectData.map(project => {
        return <div className="project__container">
            <h3>
                {project.title}
            </h3>
                <Carousel 
                    infiniteLoop={true}
                    swipeable={true}
                    width={props.windowWidth > 444 ? '400px' : '100%'}>
                    {project.photos.map(photo => {
                        return <div className="project__image">
                            <img src={photo} />
                        </div>
                    })}
                </Carousel>
            <p>
                {project.description}
            </p>
            <span>
                <a href={project.liveLink} target="_blank">See Live Project</a>
            </span>
            <hr />
        </div>
    })
    return <div className="project__main__container">
        <h1>
            Project Feed
        </h1>
        <div>
            {displayProjects}
        </div>
    </div>
}

export default windowSize(Projects);