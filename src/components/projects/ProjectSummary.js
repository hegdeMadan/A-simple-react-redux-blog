import React from 'react'

const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary grey lighten-5">
      <span className="card-title"> <p> {project.title}</p> </span>
      <p className="grey-text"> Posted by {project.authorFirstName} {project.authorSecondName} </p>
      <p className="grey-text"> {project.createdAt.toDate().toLocaleDateString('indian', {year: "2-digit", month: "short", day: "numeric"})} </p>
    </div>
  )
}

export default ProjectSummary
