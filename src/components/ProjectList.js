import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects[0].technologies);
  let eachProject = projects.map((project)=>{
    return (
    <div key={project.id}>
      <h4>{project.name}</h4>
      <p>{project.about}</p>
    </div>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */
      eachProject}</div>
    </div>
  );
}

export default ProjectList;
