import React from 'react';
import ProjectBox from './ProjectBox';
import projectData from './ProjectData';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projectData.map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.image}
            projectName={project.name}
            description={project.description}
            // github={project.github}
            // website={project.website}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects;
