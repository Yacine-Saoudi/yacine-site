import React from "react"

const Info = ({ title, paragraph, id }) => {
  return (
      <div className="content" id = {id}>
        <h1 className="header"
        >{title}</h1>
        <p className="text">{paragraph}</p>
      </div>
  )
}

export default Info