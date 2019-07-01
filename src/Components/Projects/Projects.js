import React from 'react';
import projectData from './projects.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Projects.css';

function Projects(){
    let displayProjects = projectData.map(project => {
        return <div className="project__container">
            <h3>
                {project.title}
            </h3>
                <Carousel infiniteLoop={true} swipeable={true}>
                    {project.photos.map(photo => {
                        return <div className="project__image">
                            <img src={photo} />
                        </div>
                    })}
                </Carousel>
            <p>
                {project.description}
            </p>
            <a href={project.liveLink} target="_blank">See Live Project</a>
            <hr />
        </div>
    })
    return <div className="project__main__container">
        <h1>
            Projects
        </h1>
        <div>
            {displayProjects}
        </div>
    </div>
}

export default Projects;