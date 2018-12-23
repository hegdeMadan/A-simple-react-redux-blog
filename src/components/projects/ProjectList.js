import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  return(
    <div className="project-list section">
      {projects && projects.map((project) => {
        return(
          <div>
            <Link to={'/projectdetails/' + project.id} className="black-text">
              <ProjectSummary project={project} key={project.id} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList
