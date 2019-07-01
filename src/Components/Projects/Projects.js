import React from 'react';
import projectData from './projects.json';
import './Projects.css';

function Projects(){
    let displayProjects = projectData.map(project => {
        return <div className="project__container">
            <h3>
                {project.title}
            </h3>
            {project.photos.map(photo => {
                return <div className="project__image">
                    <img src={photo} />
                </div>
            })}
            <p>
                {project.description}
            </p>
            <h4><a href={project.liveLink} target="_blank">See Live Project</a></h4>
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