import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Card = ({ heading, paragraph, imgUrl, id }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
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
