import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technName =technologies.map((technology)=><span key={technology.toString(technology)}>{technology}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technName}
      </div>
    </div>
  );
}

export default ProjectItem;
