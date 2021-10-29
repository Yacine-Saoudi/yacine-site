import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Card = ({ heading, paragraph, id }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#121212",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <button
          onClick={() => scrollTo("#"+id)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </button>
      </div>
    </div>
  )
}

export default Card
