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
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
          <br></br><br></br>
          <Info 
              key={0}
              id = {data.projects[0].id}
              title = {data.projects[0].title}
              paragraph = {data.projects[0].para}
            ></Info>
            <br></br>
            <br></br>
            <Info 
              key={1}
              id = {data.projects[1].id}
              title = {data.projects[1].title}
              paragraph = {data.projects[1].para}
            ></Info>
            <br></br><br></br>
            <Info 
              key={2}
              id = {data.projects[2].id}
              title = {data.projects[2].title}
              paragraph = {data.projects[2].para}
            ></Info>
        </div>
      </div>
    </div>
  )
}

export default Work
