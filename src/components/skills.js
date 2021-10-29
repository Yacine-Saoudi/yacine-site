import React from "react"

const Skills = ({project}) => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <div className="skills-grid">
            {project.langs.map((lang, index) => (
              <div className="skill" key={index}>
                <img src={lang.img} alt="css"></img>
                <p>{lang.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
