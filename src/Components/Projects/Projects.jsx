import React from "react";
import data from "/src/Components/Data/data.js";
import './Projects.css'

const Projects = () => {
  return (
    <div className="ctns">
      <div className="projects">
        {data.map((project) => (
          <div className="project-card" key={project.name}>
            <img src={project.image} alt={project.name} />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.link}>Open Projects</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
