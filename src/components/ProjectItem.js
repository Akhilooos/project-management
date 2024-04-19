import React from 'react'

const ProjectItem = ({item}) => {
  return (
    <div><h3>{item.name}</h3>
    <p>{item.details}</p>
    </div>

  )
}

export default ProjectItem