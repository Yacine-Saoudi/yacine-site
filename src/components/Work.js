import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import Info from "./atoms/Info"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  id = {project.id}
                  heading={project.title}
                  paragraph={project.para}
                ></Card>
              ))}
            </Fade>
          </div>
          <br></br><br></br>
          <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Info
                  key={index}
                  id = {project.id}
                  title={project.title}
                  paragraph={project.fullPara}
                  project = {project}
                ></Info>
              ))}
            </Fade>
        </div>
      </div>
    </div>
  )
}

export default Work
