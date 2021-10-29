import React from "react"
import Skills from "../skills";

const Info = ({ title, paragraph, id, project }) => {
  console.log(project.github);
  return (
      <div className="content" id = {id}>
        <h2 className="header"
        >{title}</h2>
        <p className="text">{paragraph}</p>
        {project.github.map((git, index) => (
          <>
          <a key={index} href = {git.link} target="_blank" rel="noreferrer">{git.name}</a>
          <br></br><br></br>
          </>
        ))}
        <h3 className="indent">Skills:</h3>
        <br></br>
        <Skills project={project}/>
      </div>
  )
}

export default Info